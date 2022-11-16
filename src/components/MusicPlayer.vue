<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const img =
  "https://www.soundandrecording.de/app/uploads/2017/07/Linkin-Park-Mix-Praxis.jpg";
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <div class="p-1 rounded-full select-none animation-spin-slow">
      <img
        class="w-64 aspect-square rounded-full object-cover outline outline-offset-4 outline-white"
        v-bind:src="img"
        alt="Linkin Park"
      />
    </div>
    <div class="flex flex-col justify-center items-center my-4">
      <h1 class="text-3xl text-white font-bold">Burn it down</h1>
      <h2 class="text-xl opacity-80 text-white">Linkin Park</h2>
    </div>
    <div class="flex flex-row justify-between items-center w-full">
      <div
        class="flex justify-center items-center rounded-full border border-2 border-white text-white p-4 w-16 h-16 aspect-square hover:opacity-60 cursor-pointer transition"
      >
        <font-awesome-icon
          class="text-2xl"
          icon="fas fa-chevron-left"
        ></font-awesome-icon>
      </div>
      <div
        class="flex justify-center items-center rounded-full border border-2 border-white text-white p-4 w-20 aspect-square hover:opacity-60 cursor-pointer transition"
      >
        <font-awesome-icon
          class="text-2xl"
          icon="fas fa-pause"
        ></font-awesome-icon>
      </div>
      <div
        class="flex justify-center items-center rounded-full border border-2 border-white text-white p-4 w-16 h-16 aspect-square hover:opacity-60 cursor-pointer transition"
      >
        <font-awesome-icon
          class="text-2xl"
          icon="fas fa-chevron-right"
        ></font-awesome-icon>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animation-spin-slow {
  animation: spin 60s infinite linear;
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
