<script setup lang="ts">
import { formatSongTime } from "@/util/song-util";

export interface MusicPlayerTimeline {
  timePlayed?: number;
  songDuration?: number;
}

const emit = defineEmits(["onTimeChange"]);

const props = defineProps<MusicPlayerTimeline>();
</script>

<template>
  <span class="text-white text-sm opacity-80 p-2">
    {{ formatSongTime(props.timePlayed) }}
  </span>
  <input
    v-bind:max="props.songDuration"
    v-bind:value="props.timePlayed"
    :style="{
      'background-size': `${
        (props.timePlayed / props.songDuration) * 100
      }% 100%`,
    }"
    class="song-duration-slider"
    type="range"
    min="0"
    @click="emit('onTimeChange', $event)"
  />
  <span class="text-white text-sm opacity-80 p-2">
    {{ formatSongTime(props.songDuration) }}
  </span>
</template>

<style scoped>
.song-duration-slider {
  -webkit-appearance: none;
  margin-right: 15px;
  width: 200px;
  height: 7px;
  background: white;
  border-radius: 5px;
  background-image: linear-gradient(orange, orange);
  background-repeat: no-repeat;
}

.song-duration-slider::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}

.song-duration-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: orange;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background 0.3s ease-in-out;
}
</style>
