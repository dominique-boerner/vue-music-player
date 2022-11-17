<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { computed } from "vue";

export interface NavigationBarItem {
  icon?: string;
  active?: boolean;
  route?: string;
}

const emit = defineEmits(["onNavigate"]);

const props = defineProps<NavigationBarItem>();

const buttonClass = computed(() => ({
  "border-orange-400 bg-white text-gray-800": props.active,
}));
</script>

<template>
  <div
    class="text-xl p-4 mx-1 flex w-full h-full justify-center items-center rounded-full text-white transition ease-in-out active:scale-95"
    :class="buttonClass"
    @click="emit('onNavigate')"
  >
    <font-awesome-icon v-if="icon" :icon="icon"></font-awesome-icon>
  </div>
</template>
