<script setup lang="ts">
import { RouterView } from "vue-router";
import NavigationBar from "@/components/navigation/NavigationBar.vue";
</script>

<template>
  <div
    class="bg-gray-900 h-screen w-screen flex flex-col justify-center items-center"
  >
    <RouterView />
    <NavigationBar />
  </div>
</template>
