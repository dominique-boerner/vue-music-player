import { createRouter, createWebHistory } from "vue-router";
import MusicPlayer from "@/views/MusicPlayer.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "music-player",
      component: MusicPlayer,
    },
  ],
});

export default router;
