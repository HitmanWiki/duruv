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

export const CONTRACT_ADDRESS = "0xb06833Dd843c7be2CD64F7831723AA787c89B596";

export const MISSION_CARDS: MissionCard[] = [
  {
    title: "Bring Back The Bull Market",
    icon: "▲",
    description: "Re-ignite the raw, chaotic, and hyper-profitable energy that defined the golden age of on-chain trading."
  },
  {
    title: "Reward Deep Conviction",
    icon: "◆",
    description: "Designed for those who understand that true wealth is built by holding with diamond conviction through every dip."
  },
  {
    title: "Make Ethereum Supreme",
    icon: "◉",
    description: "Establishing Ethereum as the absolute powerhouse of narrative momentum, pure decentralization, and meme liquidity."
  },
  {
    title: "The White Bull Leads",
    icon: "⬡",
    description: "An unstoppable community takeover (CTO) force inspired by the sovereign builder spirit of Vitalik Buterin."
  }
];

export const WHY_VITALIK_EXISTS: ReasonItem[] = [
  {
    id: "01",
    text: "Because the crypto landscape lost its soul to venture capital and clinical, over-engineered launches."
  },
  {
    id: "02",
    text: "Because genuine, raw, community-led takeover (CTO) conviction is the only true way forward."
  },
  {
    id: "03",
    text: "Because the Ethereum Chain is the birthplace of smart contracts and deserves a legendary, high-octane monument."
  },
  {
    id: "04",
    text: "Because only the unrelenting vision of Vitalik's builds can lead the digital resistance and bring back the true on-chain bull.",
    highlighted: true
  }
];

export const TIMELINE_STORY: Milestone[] = [
  {
    phase: "PHASE 01",
    status: "PAST",
    title: "The Vision of Vitalik",
    desc: "Ethereum was born to free code and human coordination. The builders kept building through the cold winter, laying the absolute foundation for the next supercycle."
  },
  {
    phase: "PHASE 02",
    status: "NOW",
    title: "The White Bull Arrives",
    desc: "The community takes over (CTO) to manifest the supreme Ethereum meme. Dedicated to Vitalik, the white bull charges to restore ultimate conviction.",
    active: true
  },
  {
    phase: "PHASE 03",
    status: "NEXT",
    title: "On-Chain Mobilization",
    desc: "Ethereum builders, traders, and true believers unite. The white bull narrative sweeps across social channels and decentralized exchanges.",
    active: false
  },
  {
    phase: "PHASE 04",
    status: "SOON",
    title: "Ecosystem Supremacy",
    desc: "The bull market returns in full glory on Ethereum. $VITALIK stands atop the peak of on-chain culture, demonstrating that builders build forward no matter what.",
    active: false
  }
];

export const COPIED_TOAST_CONTENT = {
  title: "Contract Copied!",
  description: "Ethereum contract address successfully copied to clipboard. Time to charge with the White Bull!"
};
