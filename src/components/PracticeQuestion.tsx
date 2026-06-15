import { useState } from "react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PracticeQuestionData {
  prompt: string;
  context?: string;
  options: { label: string; text: string }[];
  correct: string;
  explanation: string;
}

export function PracticeQuestion({ data, index }: { data: PracticeQuestionData; index?: number }) {
  const [picked, setPicked] = useState<string | null>(null);
  const revealed = picked !== null;

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          {typeof index === "number" && (
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">
              Question {index + 1}
            </div>
          )}
          <p className="mt-1 text-base font-medium text-foreground sm:text-lg">{data.prompt}</p>
          {data.context && (
            <p className="mt-3 whitespace-pre-line rounded-lg bg-muted px-4 py-3 text-sm leading-relaxed text-muted-foreground">
              {data.context}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {data.options.map((opt) => {
          const isCorrect = opt.label === data.correct;
          const isPicked = picked === opt.label;
          return (
            <button
              key={opt.label}
              onClick={() => !revealed && setPicked(opt.label)}
              disabled={revealed}
              className={cn(
                "flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm transition",
                !revealed && "border-border hover:border-primary/60 hover:bg-muted",
                revealed && isCorrect && "border-success/60 bg-success/10",
                revealed && isPicked && !isCorrect && "border-destructive/60 bg-destructive/10",
                revealed && !isPicked && !isCorrect && "opacity-60",
              )}
            >
              <span
                className={cn(
                  "grid h-7 w-7 shrink-0 place-items-center rounded-full border text-xs font-bold",
                  !revealed && "border-border text-muted-foreground",
                  revealed && isCorrect && "border-success bg-success text-primary-foreground",
                  revealed && isPicked && !isCorrect && "border-destructive bg-destructive text-destructive-foreground",
                )}
              >
                {revealed && isCorrect ? <Check className="h-4 w-4" /> : revealed && isPicked ? <X className="h-4 w-4" /> : opt.label}
              </span>
              <span className="pt-0.5">{opt.text}</span>
            </button>
          );
        })}
      </div>

      {revealed && (
        <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">Explanation</div>
          <p className="mt-1 text-sm leading-relaxed text-foreground">{data.explanation}</p>
          <button
            onClick={() => setPicked(null)}
            className="mt-3 text-xs font-semibold text-primary hover:underline"
          >
            Try again
          </button>
        </div>
      )}
    </div>
  );
}