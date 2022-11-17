import { createRouter, createWebHistory } from "vue-router";
import MusicPlayer from "@/views/MusicPlayer.vue";
import Home from "@/views/Home.vue";
import Settings from "@/views/Settings.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/music",
      name: "music-player",
      component: MusicPlayer,
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings,
    },
  ],
});

export default router;
