import { useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { Send, Twitter, Flame } from "lucide-react";

export default function JoinSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-36 bg-[#07070a] overflow-hidden border-t border-[#da83ff]/10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#da83ff]/3 blur-[130px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="font-mono text-[#da83ff]/50 text-xs tracking-[0.5em] uppercase mb-6">
            COMMUNITY & ALIGNMENT
          </p>
          <h2
            className="font-black tracking-[-0.04em] text-[#F1F1F1] mb-12 font-display"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            JOIN THE <span className="text-gold font-display font-black">BULL ARMY.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-4 mb-16"
        >
          <p className="text-base md:text-xl text-[#F1F1F1]/45 leading-relaxed font-light">
            This is not just another token listing.
          </p>
          <p className="text-base md:text-xl text-[#F1F1F1]/75 leading-relaxed font-semibold">
            This is a sovereign movement to restore pure, absolute conviction to the Ethereum Chain.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
        >
          <a
            href="https://app.uniswap.org/explore/tokens/ethereum/0xf2da4643B573042ce685BAa36a855A8812e5CF31"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 px-8 py-4 bg-[#8b5cf6] text-[#050505] font-black text-sm tracking-[0.15em] uppercase hover:bg-[#da83ff] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 rounded-sm border border-[#da83ff]/40 shadow-[0_0_15px_rgba(218,131,255,0.15)]"
          >
            <Flame className="w-4 h-4 shrink-0" /> BUY $VITALIK
          </a>
          <a
            href="http://t.me/thewhitebull_vitalik"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 px-8 py-4 border-2 border-[#da83ff]/40 text-[#da83ff] font-bold text-sm tracking-[0.15em] uppercase hover:bg-[#da83ff]/10 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 rounded-sm"
          >
            <Send className="w-4 h-4 shrink-0" /> TELEGRAM
          </a>
          <a
            href="https://x.com/VITALIK_CTO"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 px-8 py-4 border-2 border-[#da83ff]/40 text-[#da83ff] font-bold text-sm tracking-[0.15em] uppercase hover:bg-[#da83ff]/10 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 rounded-sm"
          >
            <Twitter className="w-4 h-4 shrink-0" /> TWITTER (X)
          </a>
        </motion.div>
      </div>
    </section>
  );
}
