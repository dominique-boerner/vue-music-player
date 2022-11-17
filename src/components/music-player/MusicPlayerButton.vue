<script setup lang="ts">
import { reactive } from "vue";

export type ButtonSize = "md" | "lg";

export interface Button {
  icon?: string;
  size?: ButtonSize;
}

const props = defineProps<Button>();

const buttonClass = reactive({
  "w-16 h-16": props.size === "md",
  "w-20 h-20": props.size === "lg",
});
</script>

<template>
  <div
    class="flex justify-center items-center rounded-full border border-2 border-white text-white aspect-square cursor-pointer transition active:scale-95"
    :class="buttonClass"
  >
    <font-awesome-icon
      v-if="props.icon"
      class="text-2xl"
      v-bind:icon="props.icon"
    ></font-awesome-icon>
  </div>
</template>
