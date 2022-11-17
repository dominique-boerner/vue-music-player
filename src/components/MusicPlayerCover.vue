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
    class="p-1 rounded-full animation-spin-slow"
    :class="{ 'animate-paused': !props.isMusicPlayed }"
  >
    <img
      class="w-64 aspect-square rounded-full object-cover outline outline-offset-8 outline-white/90"
      v-bind:src="imgSrc"
      alt="Cover"
    />
  </div>
</template>

<style scoped>
.animate-paused {
  animation-play-state: paused;
}

.animation-spin-slow {
  animation-name: spin;
  animation-duration: 30s;
  animation-direction: normal;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
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
