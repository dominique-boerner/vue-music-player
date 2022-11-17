<script setup lang="ts">
import NavigationBarItem from "@/components/navigation/NavigationBarItem.vue";
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const routes = computed(() => {
  return useRouter().getRoutes();
});

const currentRoute = computed(() => {
  return useRouter().currentRoute.value.name;
});

function getIconForRoute(route: string) {
  return {
    "/": "fa-solid fa-home",
    "/music": "fa-solid fa-music",
    "/settings": "fa-solid fa-sliders",
  }[route];
}
</script>
<template>
  <div
    class="p-1 py-2 flex justify-evenly items-center bg-gray-800 fixed bottom-0 left-0 right-0 h-20 shadow-lg shadow-grey-900"
  >
    <NavigationBarItem
      v-for="route in routes"
      :icon="getIconForRoute(route.path)"
      :active="route.name === currentRoute"
      @onNavigate="router.push(route.path)"
    />
  </div>
</template>
