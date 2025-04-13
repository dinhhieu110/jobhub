import { HomePage, JobsPage, NotFoundPage } from "@/pages";
import path from "path";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/jobs",
    name: "jobs",
    component: JobsPage,
  },
  {
    path: "/:catchAll(.*)",
    name: "not-found",
    component: NotFoundPage,
  },
];

export default routes;
