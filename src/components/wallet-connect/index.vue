<template>
  <div class="wallet-connect-button">
    <div class="wallet-icon-wrapper">
      <WalletIcon />
    </div>
    <div class="button-text">Connect wallet</div>
  </div>
</template>
<script setup lang="ts">
import WalletIcon from "../icons/WalletIcon.vue";
</script>
<style lang="scss" scoped>
.wallet-connect-button {
  height: 36px;
  min-width: 100px;
  padding-left: 14px;
  padding-right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: var(--dark-mode-button-bg);
  border-radius: 6px;
  .wallet-icon-wrapper {
    margin-right: 10px;
  }
  .button-text {
    color: var(--common-font-color);
    font-size: 14px;
    font-weight: 600;
  }
}
</style>
