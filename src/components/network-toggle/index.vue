<template>
  <el-dropdown
    trigger="click"
    placement="bottom"
    popper-class="common-popover"
  >
    <div class="wallet-connect-button">
      <div class="network-icon">
        <component :is="networkIcon"></component>
      </div>
      <div class="button-text">{{ networkName }}</div>
      <div class="chevron-down-wrapper">
        <ChevronDown />
      </div>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item in networksList" :key="item.key" @click="clickHandle(item)">
          <div class="dropdown-list-item">
            <div class="network-icon">
              <component :is="item.icon"></component>
            </div>
            <div class="name-text">{{ item.name }}</div>
          </div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts">
import { computed } from "vue";
import ChevronDown from "../icons/ChevronDown.vue";
import { networksList } from "./config.ts";
import { useCommonStore } from "@/stores/common";
import { storeToRefs } from "pinia";

const commonStore = useCommonStore();
const { getNetwork } = storeToRefs(commonStore);

const networkName = computed(() => {
  let networkItem: any = networksList.find((item: any) => {
    return item.id === getNetwork.value;
  });
  let _name = networkItem && networkItem.name || '';
  return _name;
});

const networkIcon = computed(() => {
  let networkItem: any = networksList.find((item: any) => {
    return item.id === getNetwork.value;
  });
  let _icon = networkItem && networkItem.icon;
  return _icon;
});

const clickHandle = (item: any) => {
  let _id = item.id;
  commonStore.setNetwork(_id);
};
</script>
<style lang="scss" scoped>
.wallet-connect-button {
  height: 36px;
  min-width: 168px;
  padding-left: 14px;
  padding-right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: var(--dark-mode-button-bg);
  border-radius: 6px;
  .network-icon{
    margin-right: 14px;
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .chevron-down-wrapper {
    margin-left: 10px;
    svg {
      height: 20px;
      width: 20px;
    }
  }
  .button-text {
    font-size: 14px;
    font-weight: 600;
    color: var(--common-font-color);
  }
}
.dropdown-list-item{
  height: 100%;
  width: 136px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .network-icon{
    margin-right: 14px;
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .name-text{
    font-size: 14px;
    font-weight: 600;
  }
}
</style>
