export interface Milestone {
  phase: string;
  title: string;
  desc: string;
  status: string;
  active?: boolean;
}

export interface MissionCard {
  title: string;
  icon: string;
  description: string;
}

export interface ReasonItem {
  id: string;
  text: string;
  highlighted?: boolean;
}

export const CONTRACT_ADDRESS = "EQC_DurovGramBull_TON_Ch41n_Sp3c1al_M3m3c01n_PUMP_FUN";

export const MISSION_CARDS: MissionCard[] = [
  {
    title: "Bring Back The Bull Market",
    icon: "▲",
    description: "Re-ignite the raw, chaotic, and hyper-profitable energy that defined the golden age of crypto."
  },
  {
    title: "Reward Deep Conviction",
    icon: "◆",
    description: "Designed for those who understand that true wealth is built by holding with diamond conviction."
  },
  {
    title: "Make TON Chain Supreme",
    icon: "◉",
    description: "Establishing TON as the absolute powerhouse of narrative momentum and meme-driven liquidity."
  },
  {
    title: "The Gram Bull Leads",
    icon: "⬡",
    description: "A decentralized, unstoppable force guided by the spirit of Pavel Durov's absolute freedom."
  }
];

export const WHY_DUROV_EXISTS: ReasonItem[] = [
  {
    id: "01",
    text: "Because the crypto landscape became repetitive, boring, and clinical."
  },
  {
    id: "02",
    text: "Because genuine, unapologetic community conviction completely disappeared."
  },
  {
    id: "03",
    text: "Because the TON Chain ecosystem deserves a legendary, high-octane narrative."
  },
  {
    id: "04",
    text: "Because only the visionary spirit of Durov can lead the digital resistance and bring back the true bull.",
    highlighted: true
  }
];

export const TIMELINE_STORY: Milestone[] = [
  {
    phase: "PHASE 01",
    status: "PAST",
    title: "The Silent Accumulation",
    desc: "The ecosystem was quiet. Durov was building. The world waited. The foundation for the most explosive bull run was laid in absolute secrecy."
  },
  {
    phase: "PHASE 02",
    status: "NOW",
    title: "The Gram Bull Arrives",
    desc: "65% of the total $DUROV supply is sent directly to Pavel Durov's official TON username wallet. The absolute ultimate on-chain tribute is locked.",
    active: true
  },
  {
    phase: "PHASE 03",
    status: "NEXT",
    title: "Telegram Army Mobilizes",
    desc: "The movement spreads across Telegram mini-apps. Absolute decentralization takes hold as communities unite under the banner of the Gram Bull."
  },
  {
    phase: "PHASE 04",
    status: "SOON",
    title: "On-Chain Supremacy",
    desc: "The bull market returns in full force. The Gram Bull charges ahead, paving the way for a multi-billion dollar TON-native epoch."
  }
];

export const COPIED_TOAST_CONTENT = {
  title: "Address Copied!",
  description: "Contract address successfully copied to clipboard. Time to charge!"
};
