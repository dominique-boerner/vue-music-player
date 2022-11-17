<script setup lang="ts">
import MusicPlayerButton from "@/components/music-player/MusicPlayerButton.vue";
import MusicPlayerCover from "@/components/music-player/MusicPlayerCover.vue";
import MusicPlayerSongTitle from "@/components/music-player/MusicPlayerSongTitle.vue";
import MusicPlayerBandName from "@/components/music-player/MusicPlayerBandName.vue";
import { computed, ref } from "vue";
import MusicPlayerTimeline from "@/components/music-player/MusicPlayerTimeline.vue";
import { technoTracks } from "@/assets/music/techno/techno";

const musicIndex = ref(0);
const isMusicPlayed = ref(false);
const track = computed(() => {
  const audio = new Audio(technoTracks[musicIndex.value].audioSrc);
  return audio;
});
const timePlayed = ref(0);
const songDuration = ref(0);
const isRepeat = ref(false);

track.value.ontimeupdate = () => {
  updateSongDuration();
  updateTimePlayed();
};

function toggleIsMusicPlayed() {
  isMusicPlayed.value = !isMusicPlayed.value;

  if (isMusicPlayed.value) {
    track.value.play();
  } else {
    track.value.pause();
  }
}

function toggleRepeat() {
  isRepeat.value = !isRepeat.value;
  track.value.loop = isRepeat.value;
}

function updateSongDuration() {
  songDuration.value = track.value.duration;
}

function updateTimePlayed() {
  timePlayed.value = track.value.currentTime;
}

function setTimePlayed($event: any) {
  const input = $event.target as HTMLInputElement;
  const value = +input.value;
  track.value.currentTime = value;
  timePlayed.value = value;
}

function prevSong() {
  let newIndex = musicIndex.value - 1;

  track.value.pause();
  if (newIndex < 0) {
    newIndex = technoTracks.length - 1;
  }
  musicIndex.value = newIndex;
  track.value.play();
}

function nextSong() {
  let newIndex = musicIndex.value + 1;

  track.value.pause();
  if (newIndex > technoTracks.length - 1) {
    newIndex = 0;
  }
  musicIndex.value = newIndex;
  track.value.play();
}

function getCurrentSongName() {
  return technoTracks[musicIndex.value].name;
}

function getCurrentSongArtist() {
  return technoTracks[musicIndex.value].artist;
}
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <MusicPlayerCover
      :img-src="technoTracks[musicIndex].imgSrc"
      :is-music-played="isMusicPlayed"
    ></MusicPlayerCover>
    <div class="flex flex-col justify-center items-center my-4">
      <MusicPlayerSongTitle :title="getCurrentSongName()" />
      <MusicPlayerBandName :title="getCurrentSongArtist()" />
    </div>
    <div class="flex flex-row justify-between items-center w-full mt-10 mb-4">
      <MusicPlayerButton
        icon="fas fa-chevron-left"
        size="md"
        @click="prevSong()"
      />
      <MusicPlayerButton
        @click="toggleIsMusicPlayed()"
        :icon="isMusicPlayed ? 'fas fa-pause' : 'fas fa-play'"
        size="lg"
      />
      <MusicPlayerButton
        icon="fas fa-chevron-right"
        size="md"
        @click="nextSong()"
      />
    </div>
    <div class="flex justify-center items-center">
      <MusicPlayerTimeline
        :song-duration="songDuration"
        :time-played="timePlayed"
        @onDrag="setTimePlayed($event)"
      />
    </div>
    <div class="flex">
      <MusicPlayerButton
        icon="fas fa-repeat"
        size="sm"
        :active="isRepeat"
        @click="toggleRepeat()"
      />
    </div>
  </div>
</template>
