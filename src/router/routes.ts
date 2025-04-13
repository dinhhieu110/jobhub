import { HomePage } from "@/pages";
import JobsPage from "@/pages/JobsPage.vue";

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
];

export default routes;
