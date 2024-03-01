<script setup lang="ts">
import DarkModeToggle from "../dark-mode-toggle/index.vue";
import Logo from "../icons/Logo.vue";
import WalletConnect from "../wallet-connect/index.vue";
import NetworkToggle from "../network-toggle/index.vue";

</script>
<template>
  <div class="app-header-wrapper">
    <div class="header-left-wrapper">
      <Logo />
    </div>
    <div class="header-right-wrapper">
      <DarkModeToggle />
      <WalletConnect />
      <NetworkToggle />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.app-header-wrapper {
  height: 64px;
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  box-sizing: border-box;
  background-color: var(--common-theme-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-left-wrapper{
    height: 64px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .header-right-wrapper{
    display: grid;
    grid-auto-flow: column;
    gap: 16px;
  }
}
</style>
