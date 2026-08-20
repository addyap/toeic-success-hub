/** Coordinates the practice audio players so only one clip is ever audible.
 *
 *  Each player owns its own `<audio>` element or `speechSynthesis` utterance
 *  with no knowledge of the others, so without this two clips could play at
 *  once — e.g. a learner starts the next question's audio while the previous
 *  one is still going, and both talk over each other (reported from real use).
 *
 *  A player calls `claimAudioPlayback` when it starts (which stops whoever was
 *  playing) and `releaseAudioPlayback` when it stops on its own — ended,
 *  paused, reset, or unmounted. The `stop` callback each player registers is
 *  its identity token, so it must be stable across renders (a `useCallback`). */

let activeStop: (() => void) | null = null;

/** Register this player as the one now playing, stopping the previous one. */
export function claimAudioPlayback(stop: () => void) {
  if (activeStop && activeStop !== stop) {
    const previous = activeStop;
    // Point at the new owner *before* stopping the previous, so the previous
    // player's release() (which may fire synchronously from inside its stop)
    // sees it is no longer active and doesn't clear the new owner.
    activeStop = stop;
    previous();
  } else {
    activeStop = stop;
  }
}

/** Give up ownership if this player still holds it. Safe to call spuriously. */
export function releaseAudioPlayback(stop: () => void) {
  if (activeStop === stop) activeStop = null;
}
