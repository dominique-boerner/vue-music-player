<script setup lang="ts">
import MusicPlayerButton from "@/components/music-player/MusicPlayerButton.vue";
import MusicPlayerCover from "@/components/music-player/MusicPlayerCover.vue";
import MusicPlayerSongTitle from "@/components/music-player/MusicPlayerSongTitle.vue";
import MusicPlayerBandName from "@/components/music-player/MusicPlayerBandName.vue";
import { reactive } from "vue";
import linkingPark from "@/assets/music/Numb_Official_Music_Video_Linkin_Park.mp3";

const img =
  "https://www.soundandrecording.de/app/uploads/2017/07/Linkin-Park-Mix-Praxis.jpg";

const state = reactive({
  isMusicPlayed: false,
  audio: new Audio(linkingPark),
  timePlayed: 0,
  songDuration: 0,
});

setInterval(() => {
  calculateSongTimes();
}, 300);

function toggleIsMusicPlayed() {
  state.isMusicPlayed = !state.isMusicPlayed;

  if (state.isMusicPlayed) {
    state.audio.play();
  } else {
    state.audio.pause();
  }
}

function calculateSongTimes() {
  state.songDuration = state.audio.duration;
  state.timePlayed = state.audio.currentTime;
}
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <MusicPlayerCover
      v-bind:img-src="img"
      v-bind:is-music-played="state.isMusicPlayed"
    ></MusicPlayerCover>
    <div class="flex flex-col justify-center items-center my-4">
      <MusicPlayerSongTitle title="Burn it down" />
      <MusicPlayerBandName title="Linkin Park" />
    </div>
    <div class="flex flex-row justify-between items-center w-full my-10">
      <MusicPlayerButton icon="fas fa-chevron-left" size="md" />
      <MusicPlayerButton
        @click="toggleIsMusicPlayed()"
        :icon="state.isMusicPlayed ? 'fas fa-pause' : 'fas fa-play'"
        size="lg"
      />
      <MusicPlayerButton icon="fas fa-chevron-right" size="md" />
    </div>
    <div class="text-white text-xl">
      <span>
        {{ (((state.timePlayed / 60) * 100) / 100 / 2).toFixed(2) }}
      </span>
      <span>:</span>
      <span>
        {{ (state.songDuration / 60).toFixed(2) }}
      </span>
    </div>
  </div>
</template>
