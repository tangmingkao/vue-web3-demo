import Ethereum from "../icons/Ethereum.vue";
// import Optimism from "../icons/Optimism.vue";
import Arbitrum from "../icons/Arbitrum.vue";
import Polygon from "../icons/Polygon.vue";

export const networksList: any = [
  {
    id: 'ethereum',
    name: 'Ethereum',
    networkSlug: 'ethereum',
    key: '1',
    icon: Ethereum,
  },
  {
    id: 'polygon',
    name: 'Polygon',
    networkSlug: 'polygon',
    key: '137',
    icon: Polygon,
  },
  {
    id: 'arbitrum',
    name: 'Arbitrum',
    networkSlug: 'arbitrum',
    key: '42161',
    icon: Arbitrum,
  },

];
