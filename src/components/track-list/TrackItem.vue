<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export interface TrackItem {
  name?: string;
  url?: string;
}

defineProps<TrackItem>();
</script>

<template>
  <div
    class="flex rounded-sm bg-gray-800 p-2 px-4 rounded-sm h-20 mb-2 items-center"
  >
    <div class="flex w-8/12 items-center">
      <div class="w-16 h-16 overflow-hidden rounded-lg mr-2">
        <img
          class="h-full w-full object-cover"
          src="../../assets/img/techno-1.jpg"
        />
      </div>
      <div class="flex flex-col">
        <span class="text-white">{{ name }}</span>
        <span class="text-white opacity-40">{{ name }}</span>
      </div>
    </div>
    <div class="flex w-4/12 justify-end">
      <div
        class="flex justify-center items-center p-2 border border-orange-600 rounded-md text-orange-600 w-10 aspect-square"
      >
        <font-awesome-icon icon="fa-solid fa-play"></font-awesome-icon>
      </div>
    </div>
  </div>
</template>
