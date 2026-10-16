import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { BASE_PATH } from "./lib/site";

export const getRouter = () => {
  const router = createRouter({
    routeTree,
    basepath: BASE_PATH,
    // www.antonyaddy.com strips trailing slashes; never add them back.
    trailingSlash: "never",
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
