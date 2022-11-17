<script setup lang="ts">
import MusicPlayerButton from "@/components/music-player/MusicPlayerButton.vue";
import MusicPlayerCover from "@/components/music-player/MusicPlayerCover.vue";
import MusicPlayerSongTitle from "@/components/music-player/MusicPlayerSongTitle.vue";
import MusicPlayerBandName from "@/components/music-player/MusicPlayerBandName.vue";
import { reactive, ref } from "vue";
import linkingPark from "@/assets/music/Numb_Official_Music_Video_Linkin_Park.mp3";
import { calculateMinutes, calculateSeconds } from "@/util/time-util";
import { $ } from "vue/macros";

const img =
  "https://www.soundandrecording.de/app/uploads/2017/07/Linkin-Park-Mix-Praxis.jpg";

const isMusicPlayed = ref(false);
const track = ref(new Audio(linkingPark));
const timePlayed = ref(0);
const songDuration = ref(0);

setInterval(() => {
  calculateSongTimes();
}, 500);

function toggleIsMusicPlayed() {
  isMusicPlayed.value = !isMusicPlayed.value;

  if (isMusicPlayed.value) {
    track.value.play();
  } else {
    track.value.pause();
  }
}

function calculateSongTimes() {
  songDuration.value = track.value.duration;
  timePlayed.value = track.value.currentTime;
}

function formatSongTime(time: number) {
  const minutes = calculateMinutes(time);
  const seconds = calculateSeconds(time);

  let secondsString = "" + seconds;

  if (seconds < 10) {
    secondsString = `0${seconds}`;
  }

  return `${minutes}:${secondsString}`;
}

function setTimePlayed($event: any) {
  const input = $event.target as HTMLInputElement;
  const value = +input.value;
  track.value.currentTime = value;
  timePlayed.value = value;
}
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <MusicPlayerCover
      v-bind:img-src="img"
      v-bind:is-music-played="isMusicPlayed"
    ></MusicPlayerCover>
    <div class="flex flex-col justify-center items-center my-4">
      <MusicPlayerSongTitle title="Numb" />
      <MusicPlayerBandName title="Linkin Park" />
    </div>
    <div class="flex flex-row justify-between items-center w-full my-10">
      <MusicPlayerButton icon="fas fa-chevron-left" size="md" />
      <MusicPlayerButton
        @click="toggleIsMusicPlayed()"
        :icon="isMusicPlayed ? 'fas fa-pause' : 'fas fa-play'"
        size="lg"
      />
      <MusicPlayerButton icon="fas fa-chevron-right" size="md" />
    </div>
    <div class="flex justify-center items-center">
      <span class="text-white text-sm opacity-80 p-2">
        {{ formatSongTime(timePlayed) }}
      </span>
      <input
        v-bind:max="songDuration"
        v-bind:value="timePlayed"
        :style="{
          'background-size': `${(timePlayed / songDuration) * 100}% 100%`,
        }"
        class="song-duration-slider"
        type="range"
        min="0"
        @change="setTimePlayed($event)"
      />
      <span class="text-white text-sm opacity-80 p-2">
        {{ formatSongTime(songDuration) }}
      </span>
    </div>
  </div>
</template>

<style scoped>
input[type="range"] {
  -webkit-appearance: none;
  margin-right: 15px;
  width: 200px;
  height: 7px;
  background: white;
  border-radius: 5px;
  background-image: linear-gradient(orange, orange);
  background-repeat: no-repeat;
}

input[type="range"]::-webkit-slider-runnable-track {
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
