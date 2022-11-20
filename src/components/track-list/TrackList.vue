<script setup lang="ts">
import type { TrackDto } from "@/models/track";
import TrackList from "@/components/track-list/TrackList.vue";
import TrackItem from "@/components/track-list/TrackItem.vue";

interface TrackList {
  tracks: TrackDto[];
}

defineProps<TrackList>();
</script>
<template>
  <div v-if="tracks.length > 0">
    <TrackItem v-for="track of tracks" :name="track.name"></TrackItem>
  </div>
  <div v-else>
    <h2 class="text-white text-xl">Keine Songs vorhanden</h2>
  </div>
</template>
