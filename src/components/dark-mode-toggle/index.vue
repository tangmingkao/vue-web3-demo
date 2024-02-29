<template>
  <div class="dark-mode-button" @click="toggleDark()">
    <MoonIcon v-if="isDark" />
    <SunIcon v-else />
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { isDark, toggleDark } from "@/hooks/use-toggle";
import MoonIcon from '../icons/MoonIcon.vue';
import SunIcon from "../icons/SunIcon.vue";

console.log("dark mode:>>>", isDark.value);
</script>
<style lang="scss" scoped>
.dark-mode-button{
  height: 36px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: var(--dark-mode-button-bg);
  border-radius: 6px;
}
</style>
