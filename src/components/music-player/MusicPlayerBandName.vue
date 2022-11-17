<script setup lang="ts">
export interface MusicPlayerBandName {
  title?: string;
}

const props = defineProps<MusicPlayerBandName>();
const title = props.title;
</script>

<template>
  <h2 class="text-xl opacity-80 text-white">{{ title }}</h2>
</template>
