<template>
  <div class="wallet-connect-button">
    <div class="wallet-icon-wrapper">
      <WalletIcon />
    </div>
  </div>
</template>
<script setup lang="ts">
import WalletIcon from "../icons/WalletIcon.vue";

</script>
<style lang="scss" scoped>
.wallet-connect-button{
  height: 36px;
  min-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: var(--dark-mode-button-bg);
  border-radius: 6px;
  .wallet-icon-wrapper{
    margin-right: 10px;
  }
}
</style>
