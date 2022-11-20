<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import TrackItem from "@/components/track-list/TrackItem.vue";
import type { TrackDto } from "@/models/track";
import TrackList from "@/components/track-list/TrackList.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const tracks = ref<TrackDto[]>([]);

function getTracks() {
  axios
    .get("http://127.0.0.1:5173/api/music")
    .then((res) => res.data)
    .then((data) => (tracks.value = data));
}

getTracks();
</script>
<template>
  <div class="flex flex-col w-screen h-screen p-8">
    <div class="flex justify-between mb-2">
      <h1 class="text-white text-3xl pb-4">Songs</h1>
      <button class="relative">
        <font-awesome-icon
          icon="fa-solid fa-upload"
          class="mr-2"
        ></font-awesome-icon>
        Hochladen
        <input class="absolute w-full h-full opacity-0" type="file" />
      </button>
    </div>
    <TrackList :tracks="tracks" />
  </div>
</template>

<style scoped></style>
