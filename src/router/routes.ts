import {
  AddJobPage,
  HomePage,
  JobDetailsPage,
  JobsPage,
  NotFoundPage,
} from "@/pages";

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
    path: "/jobs/:id",
    name: "job",
    component: JobDetailsPage,
  },
  {
    path: "/jobs/add",
    name: "add-job",
    component: AddJobPage,
  },
  {
    path: "/:catchAll(.*)",
    name: "not-found",
    component: NotFoundPage,
  },
];

export default routes;
