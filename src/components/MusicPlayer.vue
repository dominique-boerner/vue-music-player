<script setup lang="ts">
  const img = "https://www.soundandrecording.de/app/uploads/2017/07/Linkin-Park-Mix-Praxis.jpg"
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <div class="p-1 rounded-full select-none animation-spin-slow">
      <img class="w-64 aspect-square rounded-full object-cover outline outline-offset-4 outline-white" v-bind:src=img alt="Linkin Park" />
    </div>
    <h1 class="text-3xl my-4 text-white">Linkin Park - Burn it down</h1>
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