import { defineStore } from "pinia";
import { piniaStore } from "./index";

interface CommonState {
  network: string;
  language: string;
}

export const useCommonStore = defineStore({
  id: "web3-common",
  persist: {
    storage: window.localStorage || window.sessionStorage,
    paths: ['language','network'],
    debug: true,
  },
  state: (): CommonState => ({
    // 计价单位 默认USD
    network: "ethereum",
    // 语言设置 默认en-US
    language: "en-US",
  }),
  getters: {
    getNetwork: (state): string => {
      return state.network;
    },
    getLanguage: (state): string => {
      return state.language;
    },
  },
  actions: {
    setNetwork(network: string) {
      this.network = network;
    },
    setLanguage(language: string) {
      this.language = language;
    },
  },
});

// Need to be used outside the setup
export function useCommonStoreGlobal() {
  return useCommonStore(piniaStore);
}
