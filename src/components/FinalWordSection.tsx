import { useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import Particles from "./Particles";
import { Zap } from "lucide-react";

export default function FinalWordSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Visual background */}
      <div className="absolute inset-0 z-0 bg-[#050505]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[500px] rounded-full bg-[#0098ea]/5 blur-[150px]"></div>
        </div>
      </div>

      {/* Floating Canvas Particles */}
      <Particles />

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-[#00f0ff]/50 text-xs tracking-[0.5em] uppercase mb-7 md:mb-10 font-semibold">
            THE FINAL DECLARATION
          </p>
          <h2
            className="font-black tracking-[-0.05em] leading-[0.85] text-[#F1F1F1] mb-4 font-display"
            style={{ fontSize: "clamp(2rem, 9vw, 8.5rem)" }}
          >
            THE BULL DOESN'T
          </h2>
          <h2
            className="font-black tracking-[-0.05em] leading-[0.85] text-[#F1F1F1] mb-5 font-display"
            style={{ fontSize: "clamp(2rem, 9vw, 8.5rem)" }}
          >
            ASK FOR PERMISSION.
          </h2>
          <h2
            className="font-black tracking-[-0.05em] leading-[0.85] gold-shimmer mb-12 md:mb-20 font-display"
            style={{ fontSize: "clamp(2rem, 9vw, 8.5rem)" }}
          >
            IT CHARGES.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-2 mb-16"
        >
          <p className="font-mono text-[#00f0ff]/80 text-base md:text-lg tracking-wide uppercase font-semibold">
            65% IN DUROV'S WALLET.
          </p>
          <p className="font-mono text-[#F1F1F1]/30 text-base md:text-lg tracking-wide uppercase">
            ONE LEGENDARY NARRATIVE.
          </p>
          <p className="font-mono text-[#F1F1F1]/30 text-base md:text-lg tracking-wide uppercase">
            ONE UNSTOPPABLE MISSION ON TON.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
          className="space-y-8"
        >
          <p
            className="font-black text-[#00f0ff] tracking-[-0.03em] uppercase"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)" }}
          >
            BRING THE BULL MARKET BACK ON-CHAIN.
          </p>
          <div className="flex justify-center">
            <a
              href="https://pump.fun/coin/CuGJf6cfDfMh4UxVgNJ5KFQ6v8Wv3qrqop6cFKsGpump"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-12 py-5 bg-gradient-to-r from-[#0098ea] to-[#00f0ff] text-[#050505] font-black text-sm tracking-[0.25em] uppercase hover:brightness-110 active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(0,240,255,0.45)] border border-[#00f0ff]/50 rounded-sm"
            >
              <Zap className="w-4 h-4 fill-current shrink-0" /> BUY $DUROV NOW
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
