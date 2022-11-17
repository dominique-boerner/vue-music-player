<script setup lang="ts">
export interface MusicPlayerSongTitle {
  title?: string;
}

defineProps<MusicPlayerSongTitle>();
</script>

<template>
  <h1 class="text-3xl text-white font-bold">{{ title }}</h1>
</template>
