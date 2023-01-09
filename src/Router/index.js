import HomeView from "@/components/views/HomeView.vue";
import JobResultView from "@/components/views/JobResultView.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import JobView from "@/components/views/JobView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    component: JobResultView,
  },
  {
    path: "/jobs/results/:id",
    name: "JobListing",
    component: JobView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
