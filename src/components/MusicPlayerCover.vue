<script setup lang="ts">
import MusicPlayerCover from "@/components/MusicPlayerCover.vue";
import { reactive } from "vue";

export interface MusicPlayerCover {
  imgSrc?: string;
  isMusicPlayed?: boolean;
}

const props = defineProps<MusicPlayerCover>();
</script>

<template>
  <div
    class="p-1 rounded-full"
    :class="{ 'animation-spin-slow': props.isMusicPlayed }"
  >
    <img
      class="w-64 aspect-square rounded-full object-cover outline outline-offset-8 outline-white/90"
      v-bind:src="imgSrc"
      alt="Cover"
    />
  </div>
</template>

<style scoped>
.animation-spin-slow {
  animation: spin 30s infinite linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
