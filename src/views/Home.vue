<script setup lang="ts">
import technoCover from "@/assets/img/techno-1.jpg";
</script>
<template>
  <div class="flex flex-col w-screen h-screen p-8">
    <h1 class="text-white text-3xl pb-4">Playlists</h1>
    <div class="flex">
      <div
        class="w-48 h-72 relative cover-shadow after:bg-orange-500/80 active:after:rotate-2 hover:after:rotate-2 cursor-pointer after:rounded-md mr-4"
      >
        <img
          class="h-full w-full relative object-cover z-50 rounded-md"
          :src="technoCover"
        />
      </div>
      <div
        class="w-48 h-72 relative cover-shadow after:bg-orange-500/80 active:after:rotate-2 hover:after:rotate-2 cursor-pointer after:rounded-md mr-4"
      >
        <img
          class="h-full w-full relative object-cover z-50 rounded-md"
          :src="technoCover"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.cover-shadow:after {
  display: flex;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 100ms ease-in-out;
  box-shadow: 0 0 70px 0 black;
}
</style>
