<script setup lang="ts">
import { computed, reactive } from "vue";

export type ButtonSize = "sm" | "md" | "lg";

export interface Button {
  icon?: string;
  size?: ButtonSize;
  active?: boolean;
}

const props = defineProps<Button>();

const active = computed(() => props.active);

const buttonClass = computed(() => ({
  "w-12 h-12": props.size === "sm",
  "w-16 h-16": props.size === "md",
  "w-20 h-20": props.size === "lg",
  "bg-white text-gray-800": active.value === true,
}));

const iconClass = reactive({
  text: props.size === "sm",
  "text-2xl": props.size === "md" || props.size === "lg",
});
</script>

<template>
  <div
    class="flex justify-center items-center rounded-full border border-2 border-white text-white aspect-square cursor-pointer transition active:scale-95"
    :class="buttonClass"
  >
    <font-awesome-icon
      v-if="props.icon"
      :class="iconClass"
      v-bind:icon="props.icon"
    ></font-awesome-icon>
  </div>
</template>
