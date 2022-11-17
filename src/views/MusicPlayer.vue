<script setup lang="ts">
import MusicPlayerButton from "@/components/music-player/MusicPlayerButton.vue";
import MusicPlayerCover from "@/components/music-player/MusicPlayerCover.vue";
import MusicPlayerSongTitle from "@/components/music-player/MusicPlayerSongTitle.vue";
import MusicPlayerBandName from "@/components/music-player/MusicPlayerBandName.vue";
import { ref } from "vue";
import linkingPark from "@/assets/music/Numb_Official_Music_Video_Linkin_Park.mp3";
import MusicPlayerTimeline from "@/components/music-player/MusicPlayerTimeline.vue";

const img =
  "https://www.soundandrecording.de/app/uploads/2017/07/Linkin-Park-Mix-Praxis.jpg";

const isMusicPlayed = ref(false);
const track = ref(new Audio(linkingPark));
const timePlayed = ref(0);
const songDuration = ref(0);

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
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <MusicPlayerCover
      :img-src="img"
      :is-music-played="isMusicPlayed"
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
      <MusicPlayerTimeline
        :song-duration="songDuration"
        :time-played="timePlayed"
        @onDrag="setTimePlayed($event)"
      />
    </div>
  </div>
</template>
