import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Copy, Check, ExternalLink } from "lucide-react";
import Header from "./components/Header";
import Ticker from "./components/Ticker";
import Particles from "./components/Particles";
import SovereignSection from "./components/SovereignSection";
import JoinSection from "./components/JoinSection";
import FinalWordSection from "./components/FinalWordSection";
import Footer from "./components/Footer";
import {
  CONTRACT_ADDRESS,
  MISSION_CARDS,
  WHY_VITALIK_EXISTS,
  TIMELINE_STORY,
  COPIED_TOAST_CONTENT
} from "./data";

export default function App() {
  const [copied, setCopied] = useState(false);
  const [conviction, setConviction] = useState(95);
  const [convictionLevel, setConvictionLevel] = useState("CYBER BULLISH");
  const [clickCount, setClickCount] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setShowToast(true);
    setTimeout(() => setCopied(false), 2000);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleChargeConviction = () => {
    setConviction((prev) => prev + 1);
    setClickCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (conviction >= 115) {
      setConvictionLevel("BUILDER LEVEL (GODLIKE)");
    } else if (conviction >= 105) {
      setConvictionLevel("VITALIK'S SOVEREIGN ACCELERATION");
    } else if (conviction >= 100) {
      setConvictionLevel("MAXIMUM OVERDRIVE");
    } else if (conviction >= 98) {
      setConvictionLevel("HYPER CONVICTION");
    } else {
      setConvictionLevel("CYBER BULLISH");
    }
  }, [conviction]);

  return (
    <div className="bg-[#030303] text-[#F1F1F1] min-h-screen font-sans selection:bg-[#da83ff]/30 selection:text-white overflow-x-hidden relative">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden">
        {/* Parallax Hero Image Backing */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/white_bull_hero_1783355348279.jfif"
            alt="The White Bull Crystalline Concept"
            className="w-full h-full object-cover object-center scale-105 filter brightness-[0.4] contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
          {/* Cyberpunk Violet and Fuchsia Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/40 via-transparent to-[#030303]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#030303]/60 via-transparent to-[#030303]/60"></div>
          <div className="absolute inset-0 bg-[#000000]/20 backdrop-brightness-[0.75]"></div>
        </div>

        {/* Canvas Particle Overlay */}
        <Particles />

        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto pt-28 md:pt-36 pb-20 md:pb-24">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, letterSpacing: "0.25em" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="font-mono text-[#da83ff] text-[10px] md:text-xs tracking-[0.25em] uppercase mb-6 md:mb-8 font-semibold drop-shadow-[0_0_10px_rgba(218,131,255,0.3)]"
          >
            THE SUPREME BUILDER NARRATIVE — ETHEREUM CHAIN
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-black tracking-[-0.04em] leading-[0.88] text-[#F1F1F1] mb-8 md:mb-10 font-display"
            style={{ fontSize: "clamp(2.8rem, 11vw, 9.5rem)" }}
          >
            CHARGE WITH THE <br />
            <span className="gold-shimmer font-black">WHITE BULL.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl mx-auto mb-8 md:mb-12 space-y-3"
          >
            <p className="text-[#F1F1F1]/85 text-base md:text-lg leading-relaxed font-light">
              Inspired by the code-first, unrelenting ethos of <span className="font-semibold text-white">Vitalik Buterin</span>.
            </p>
            <p className="text-[#da83ff]/60 font-mono text-xs tracking-wider uppercase">
              Builds forward. No matter what. Supported by absolute community takeover conviction.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 md:mb-14"
          >
            <a
              href="https://dexscreener.com/ethereum/0xb06833Dd843c7be2CD64F7831723AA787c89B596"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-12 py-4.5 bg-gradient-to-r from-[#8b5cf6] to-[#da83ff] text-[#050505] font-black text-sm tracking-[0.15em] uppercase hover:brightness-110 active:scale-95 transition-all duration-300 shadow-[0_0_25px_rgba(218,131,255,0.45)] border border-[#da83ff]/50 rounded-sm"
            >
              BUY $VITALIK
            </a>
            <a
              href="#proof"
              className="w-full sm:w-auto px-12 py-4.5 border-2 border-[#da83ff]/40 text-[#da83ff] font-bold text-sm tracking-[0.15em] uppercase hover:bg-[#da83ff]/10 hover:border-[#da83ff] active:scale-95 transition-all duration-300 rounded-sm"
            >
              VIEW LIVE CHART
            </a>
          </motion.div>

          {/* Contract Address Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex justify-center"
          >
            <button
              onClick={handleCopy}
              className="group flex items-center gap-3 border border-[#da83ff]/20 bg-[#08080c]/60 backdrop-blur-md px-5 py-3 hover:border-[#da83ff]/50 hover:bg-[#da83ff]/5 transition-all duration-300 max-w-full overflow-hidden rounded-sm"
            >
              <span className="font-mono text-[#da83ff]/50 text-[10px] tracking-[0.25em] uppercase shrink-0">
                CA
              </span>
              <span className="font-mono text-[#F1F1F1]/55 text-xs group-hover:text-[#F1F1F1]/90 transition-colors hidden md:block truncate">
                {CONTRACT_ADDRESS}
              </span>
              <span className="font-mono text-[#F1F1F1]/55 text-xs group-hover:text-[#F1F1F1]/90 transition-colors md:hidden shrink-0">
                {CONTRACT_ADDRESS.slice(0, 12)}...{CONTRACT_ADDRESS.slice(-8)}
              </span>
              <div className="shrink-0 text-[#da83ff]/50 group-hover:text-[#da83ff] transition-colors ml-1">
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </div>
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none opacity-40">
          <span className="font-mono text-[#da83ff]/30 text-[9px] tracking-[0.4em] uppercase">
            SCROLL DOWN
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-[#da83ff]/50 to-transparent"></div>
        </div>
      </section>

      {/* Infinite scrolling Ticker */}
      <Ticker />

      {/* On-Chain Proof Section */}
      <section id="proof" className="relative py-24 md:py-36 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <span className="font-mono text-[#da83ff]/50 text-xs tracking-[0.4em] uppercase mb-4 block">
              DECENTRALIZED LEDGER VERIFICATION
            </span>
            <h2 className="font-black tracking-[-0.04em] text-[#F1F1F1] font-display text-4xl md:text-6xl">
              100% COMMUNITY <span className="text-gold font-display font-black">TAKEOVER.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                  The definitive white bull standard on Ethereum Chain.
                </h3>
                <p className="text-base md:text-lg text-[#F1F1F1]/55 leading-relaxed font-light">
                  A real community-led takeover (CTO) designed to demonstrate the power of pure decentralized coordination. No hidden team pools, no developer dumps, completely launched and driven entirely by the holders who believe in the sovereign white bull momentum.
                </p>
                <p className="font-mono text-[#da83ff]/70 text-xs tracking-wider uppercase font-semibold">
                  Contract is fully verified on Etherscan. Absolute immutability.
                </p>
              </div>

              {/* Grid stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "100%", label: "Community Owned", highlight: true },
                  { value: "ETH", label: "Native Ecosystem" },
                  { value: "SAFE", label: "LP Burnt & Safe", success: true },
                  { value: "CTO", label: "Community Takeover" }
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="relative bg-[#08080c] border border-[#da83ff]/15 p-5 md:p-6 text-center group hover:border-[#da83ff]/40 hover:bg-[#da83ff]/[0.02] transition-all duration-300 rounded-sm"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-[#da83ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <p
                      className={`font-black tracking-tight mb-1 relative z-10 ${
                        stat.highlight
                          ? "gold-shimmer"
                          : stat.success
                          ? "text-[#00FF41] terminal-pulse font-mono"
                          : "text-[#F1F1F1]"
                      } text-2xl md:text-4xl`}
                    >
                      {stat.value}
                    </p>
                    <p className="font-mono text-[#F1F1F1]/35 text-[9px] tracking-[0.25em] uppercase relative z-10">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons inside Proof */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={`https://etherscan.io/token/${CONTRACT_ADDRESS}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-4.5 bg-[#08080c] hover:bg-[#da83ff]/5 border border-[#da83ff]/30 text-[#da83ff] hover:text-[#da83ff] hover:border-[#da83ff] font-mono text-xs tracking-[0.15em] uppercase transition-all duration-300 flex items-center justify-center gap-2 rounded-sm"
                >
                  VIEW ETHERSCAN <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`https://dexscreener.com/ethereum/${CONTRACT_ADDRESS}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-4.5 bg-[#08080c] hover:bg-[#da83ff]/5 border border-[#da83ff]/30 text-[#da83ff] hover:text-[#da83ff] hover:border-[#da83ff] font-mono text-xs tracking-[0.15em] uppercase transition-all duration-300 flex items-center justify-center gap-2 rounded-sm"
                >
                  VIEW DEXSCREENER <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Image/Illustration Column */}
            <div className="lg:col-span-5 w-full order-1 lg:order-2 flex flex-col items-center">
              <span className="font-mono text-[#da83ff]/50 text-[10px] tracking-[0.4em] uppercase mb-4 block self-start lg:self-center">
                MEME CONVICTION STORAGE
              </span>
              <div className="relative w-full max-w-sm md:max-w-md mx-auto overflow-hidden rounded-md border border-[#da83ff]/20 bg-[#08080c] p-1.5 shadow-[0_0_30px_rgba(218,131,255,0.15)]">
                <div className="absolute -inset-4 rounded-sm bg-[#da83ff]/10 blur-3xl pointer-events-none z-0"></div>
                <img
                  src="/src/assets/images/ethereum_chest_1783355363793.jfif"
                  alt="Sovereign Ethereum Chest of Crystalline Wealth"
                  className="w-full object-cover rounded-sm relative z-10 border border-[#da83ff]/10"
                  style={{ maxHeight: "380px" }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col items-center gap-1 mt-5 text-center">
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#F1F1F1]/30">
                  THE BAG OF ABSOLUTE FREEDOM
                </p>
                <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#da83ff]">
                  100% DECENTRALIZED & COMMUNITY POWERED
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Mission Section */}
      <section id="mission" className="relative py-24 md:py-36 bg-[#07070a] border-t border-[#da83ff]/10">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-[#da83ff]/3 blur-[120px]"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <p className="font-mono text-[#da83ff]/60 text-xs tracking-[0.5em] uppercase mb-6">
              THE MISSION
            </p>
            <h2 className="font-black tracking-[-0.04em] leading-[0.88] text-[#F1F1F1] font-display text-4xl md:text-6xl">
              BRING THE BULL MARKET <br />
              <span className="text-gold font-display font-black">BACK ON-CHAIN.</span>
            </h2>
          </div>

          {/* Intro Story */}
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16 md:mb-24">
            <p className="text-base md:text-xl leading-relaxed text-[#F1F1F1]/70 font-light">
              We became too clinical. Crypto lost its core wildness. Liquidity fragmented across chains, losing that unified, high-conviction momentum.
            </p>
            <p className="text-base md:text-xl leading-relaxed text-[#F1F1F1]/70 font-light">
              The White Bull exists to fix that. Harnessing the birthplace scale of smart contracts and the sovereign decentralized code of Ethereum, we are here to manifest pure bullish energy.
            </p>
            <p className="text-[#da83ff] font-bold text-lg md:text-2xl font-mono tracking-wide">
              Only a true tech visionary like Vitalik Buterin can inspire this digital resistance.
            </p>
          </div>

          {/* Pillars Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MISSION_CARDS.map((card, i) => (
              <div
                key={i}
                className="relative bg-[#08080c] border border-[#da83ff]/15 p-6 md:p-8 group hover:border-[#da83ff]/50 hover:bg-[#da83ff]/[0.02] transition-all duration-300 cursor-default rounded-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-start gap-5">
                  <span className="text-[#da83ff]/50 text-2xl group-hover:text-[#da83ff] transition-colors font-mono shrink-0">
                    {card.icon}
                  </span>
                  <div className="space-y-2 text-left">
                    <h3 className="font-black text-[#F1F1F1]/85 text-lg md:text-xl tracking-tight group-hover:text-white transition-colors uppercase leading-tight font-display">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[#F1F1F1]/50 leading-relaxed group-hover:text-[#F1F1F1]/70 transition-colors">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why $VITALIK Exists Section */}
      <section className="relative py-24 md:py-36 bg-[#030303] border-t border-[#da83ff]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:mb-24 text-center">
            <p className="font-mono text-[#da83ff]/50 text-xs tracking-[0.5em] uppercase mb-6">
              THE ABSOLUTE NECESSITY
            </p>
            <h2 className="font-black tracking-[-0.04em] leading-[0.9] text-[#F1F1F1] font-display text-4xl md:text-6xl">
              WHY $VITALIK <br />
              <span className="text-gold font-display font-black">EXISTS.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Cyber Vitalik Portrait Column */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm overflow-hidden rounded-md border border-[#da83ff]/30 bg-[#08080c] p-2.5 shadow-[0_0_40px_rgba(218,131,255,0.2)] group">
                <div className="absolute -inset-4 rounded-sm bg-[#da83ff]/10 blur-3xl pointer-events-none z-0 group-hover:bg-[#da83ff]/20 transition-all duration-500"></div>
                <img
                  src="/src/assets/images/vitalik_cyber_avatar_1783355798172.jfif"
                  alt="Vitalik Buterin Cyber Avatar"
                  className="w-full object-cover rounded-sm relative z-10 border border-[#da83ff]/20 filter brightness-[0.85] hover:brightness-[1] transition-all duration-500"
                  style={{ maxHeight: "390px" }}
                  referrerPolicy="no-referrer"
                />
                
                {/* HUD Overlay Stats inside the card for amazing cyberpunk look */}
                <div className="relative z-20 mt-4 pt-3 border-t border-[#da83ff]/20 font-mono text-left space-y-1.5 text-[10px] text-[#F1F1F1]/50">
                  <div className="flex justify-between">
                    <span>SPECIES / SUBJECT:</span>
                    <span className="text-[#da83ff] font-bold">SOVEREIGN BUILDER</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ALIGNED NETWORK:</span>
                    <span className="text-white">ETHEREUM L1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CONVICTION INDEX:</span>
                    <span className="text-[#00FF41] terminal-pulse font-bold">MAXIMALIST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-0">
              {WHY_VITALIK_EXISTS.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-6 py-6 md:py-8 border-b border-[#da83ff]/10 hover:border-[#da83ff]/30 transition-colors duration-500 text-left"
                >
                  <span className="font-mono text-[#da83ff]/30 text-xs tracking-[0.3em] shrink-0 mt-1.5 group-hover:text-[#da83ff]/70 transition-colors">
                    {item.id}
                  </span>
                  <p
                    className={`font-bold leading-relaxed transition-colors duration-500 ${
                      item.highlighted
                        ? "text-[#da83ff] text-base md:text-2xl font-semibold"
                        : "text-[#F1F1F1]/55 text-base md:text-xl group-hover:text-[#F1F1F1]/90"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story / Milestones Section */}
      <section id="story" className="relative py-24 md:py-36 bg-[#08080c] overflow-hidden">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#da83ff]/20 to-transparent pointer-events-none hidden md:block"></div>

        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-center mb-16 md:mb-24"
          >
            <p className="font-mono text-[#da83ff]/50 text-xs tracking-[0.5em] uppercase mb-6">
              NARRATIVE TRAJECTORY
            </p>
            <h2 className="font-black tracking-[-0.04em] text-[#F1F1F1] font-display text-4xl md:text-6xl">
              THE COGNITIVE <span className="text-gold font-display font-black">STORY.</span>
            </h2>
          </motion.div>

          <div className="space-y-8 md:space-y-0">
            {TIMELINE_STORY.map((item, i) => (
              <div
                key={i}
                className={`relative md:flex md:gap-16 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } md:mb-16`}
              >
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                >
                  <div
                    className={`relative border p-6 md:p-8 transition-all duration-500 ${
                      item.active
                        ? "border-[#da83ff]/60 bg-[#da83ff]/5 shadow-[0_0_20px_rgba(218,131,255,0.15)]"
                        : "border-[#da83ff]/15 bg-[#030303] hover:border-[#da83ff]/30"
                    } rounded-sm`}
                  >
                    {item.active && (
                      <div className="absolute top-4 right-4 md:top-6 md:right-6">
                        <span className="font-mono text-[#00FF41] text-[9px] tracking-[0.3em] terminal-pulse font-semibold">
                          ● ACTIVE NARRATIVE
                        </span>
                      </div>
                    )}
                    <p className="font-mono text-[#da83ff]/60 text-[10px] tracking-[0.4em] uppercase mb-3 font-semibold">
                      {item.phase} · {item.status}
                    </p>
                    <h3
                      className={`font-black text-xl md:text-2xl tracking-tight mb-3 font-display ${
                        item.active ? "text-[#da83ff]" : "text-[#F1F1F1]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[#F1F1F1]/55 leading-relaxed text-sm md:text-base font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>

                {/* Timeline knot */}
                <div className="hidden md:flex md:w-0 md:items-center md:justify-center relative">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.3 }}
                    className={`w-3.5 h-3.5 rounded-full border-2 relative z-10 ${
                      item.active
                        ? "border-[#da83ff] bg-[#da83ff] shadow-[0_0_12px_rgba(218,131,255,0.8)]"
                        : "border-[#da83ff]/30 bg-[#030303]"
                    }`}
                  ></motion.div>
                </div>

                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conviction Indicator Section */}
      <section id="conviction" className="relative py-24 md:py-36 bg-[#030303] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#da83ff]/5 blur-[100px]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <p className="font-mono text-[#da83ff]/50 text-xs tracking-[0.5em] uppercase mb-6">
              INTERACTIVE ECOSYSTEM STATE
            </p>
            <h2 className="font-black tracking-[-0.04em] text-[#F1F1F1] font-display text-4xl md:text-6xl">
              BULL MARKET <span className="text-gold font-display font-black">CONVICTION.</span>
            </h2>
          </div>

          <div className="space-y-8 bg-[#08080c] border border-[#da83ff]/20 p-8 md:p-12 rounded-lg relative overflow-hidden shadow-[0_0_30px_rgba(218,131,255,0.05)]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-mono text-[#F1F1F1]/30 text-xs tracking-[0.3em] uppercase">
                BEARISH CAPITULATION
              </span>
              <div className="text-center">
                <motion.span
                  key={conviction}
                  initial={{ scale: 0.9, opacity: 0.8 }}
                  animate={{ scale: 1.1, opacity: 1 }}
                  className="font-black text-5xl md:text-7xl gold-shimmer font-display block"
                >
                  {conviction}%
                </motion.span>
                <span className="font-mono text-[#da83ff] text-[9px] tracking-[0.25em] uppercase font-bold mt-1 block">
                  {convictionLevel}
                </span>
              </div>
              <span className="font-mono text-[#da83ff] text-xs tracking-[0.3em] uppercase font-bold">
                SUPREME BULL ACCELERATION
              </span>
            </div>

            {/* Neon Slider Bar */}
            <div className="relative h-6 bg-[#0F0F0F] border border-[#da83ff]/30 overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0"
                style={{
                  background: "linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #da83ff 100%)"
                }}
                animate={{ width: `${Math.min(conviction, 100)}%` }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse pointer-events-none" />
            </div>

            <div className="flex justify-between px-2">
              {[0, 25, 50, 75, 100].map((tick) => (
                <span key={tick} className="font-mono text-[#F1F1F1]/20 text-[10px]">
                  {tick}%
                </span>
              ))}
            </div>

            {/* Interactive button to increase conviction */}
            <div className="flex flex-col items-center gap-4 pt-4">
              <button
                onClick={handleChargeConviction}
                className="relative px-8 py-4 bg-transparent border-2 border-[#da83ff] text-[#da83ff] font-bold text-xs md:text-sm tracking-[0.25em] uppercase hover:bg-[#da83ff]/10 hover:shadow-[0_0_20px_rgba(218,131,255,0.3)] active:scale-95 transition-all duration-200 rounded-sm"
              >
                CHARGE CONVICTION
              </button>
              <p className="font-mono text-[#F1F1F1]/30 text-[10px] tracking-[0.2em] uppercase">
                {clickCount > 0 ? `Charged ${clickCount} times by you` : "Click button to boost Ethereum energy"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vitalik's Crystalline Charge Manifesto */}
      <section className="relative py-24 md:py-36 overflow-hidden bg-[#030303]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[600px] rounded-full bg-[#da83ff]/6 blur-[140px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="space-y-8 md:space-y-12">
            <p className="font-black tracking-[-0.03em] leading-[0.9] text-[#F1F1F1]" style={{ fontSize: "clamp(1.6rem, 6vw, 4.5rem)" }}>
              THE ECOSYSTEM FOLLOWS DETERMINATION.
            </p>
            <p className="font-black tracking-[-0.03em] leading-[0.9] text-[#F1F1F1]" style={{ fontSize: "clamp(1.6rem, 6vw, 4.5rem)" }}>
              THE COMMUNITY DEMANDS ABSOLUTE TRUTH.
            </p>
            <p className="font-black tracking-[-0.03em] leading-[0.9] gold-shimmer" style={{ fontSize: "clamp(1.6rem, 6vw, 4.5rem)" }}>
              THE ETHEREUM CHAIN FOLLOWS THE WHITE BULL.
            </p>
          </div>
          <div className="gold-rule max-w-xs mx-auto mt-16 mb-12"></div>
          <p className="font-mono text-[#da83ff]/60 text-sm tracking-[0.3em] uppercase">
            Builds forward. No matter what.
          </p>
        </div>
      </section>

      {/* Sovereign Founder Section */}
      <SovereignSection />

      {/* Join the Bull Army Section */}
      <JoinSection />

      {/* The Final Charging Word */}
      <FinalWordSection />

      {/* Infinite scrolling Ticker */}
      <Ticker />

      {/* Footer */}
      <Footer onCopyAddress={() => setShowToast(true)} />

      {/* Beautiful Toast Notification on Copy */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-[100] bg-[#08080c] border border-[#da83ff]/50 px-6 py-4 rounded-sm shadow-[0_0_30px_rgba(218,131,255,0.25)] flex items-start gap-4 max-w-sm pointer-events-auto backdrop-blur-xl"
          >
            <div className="bg-[#da83ff]/20 p-2 rounded-full text-[#da83ff] shrink-0">
              <Check className="w-4 h-4 text-[#da83ff]" />
            </div>
            <div className="text-left space-y-1">
              <h4 className="font-black text-sm text-white uppercase tracking-wider">
                {COPIED_TOAST_CONTENT.title}
              </h4>
              <p className="text-xs text-[#F1F1F1]/60 leading-relaxed font-light">
                {COPIED_TOAST_CONTENT.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
