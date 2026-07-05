import { useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";

export default function SovereignSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const points = [
    "Because crypto needs conviction again.",
    "Because the market needs a leader again.",
    "Because the bull market starts with belief."
  ];

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#050505] border-t border-[#00f0ff]/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-[60vh] md:min-h-[80vh]">
        {/* Left Side Content */}
        <div className="relative z-10 flex flex-col justify-center px-6 md:px-16 py-16 md:py-32 md:w-1/2 text-left">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="font-mono text-[#00f0ff]/50 text-xs tracking-[0.5em] uppercase mb-8"
          >
            THE SOVEREIGN FOUNDER
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-black tracking-[-0.04em] leading-[0.88] text-[#F1F1F1] mb-8 md:mb-12 font-display text-3xl md:text-5xl"
          >
            ONLY A VISIONARY CAN <br />
            <span className="text-gold font-display font-black">BRING BACK THE BULL.</span>
          </motion.h2>

          <div className="space-y-4 mb-10 md:mb-14">
            {points.map((point, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -25 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#F1F1F1]/55 text-base md:text-xl leading-relaxed font-light"
              >
                {point}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <a
              href="https://pump.fun/coin/CuGJf6cfDfMh4UxVgNJ5KFQ6v8Wv3qrqop6cFKsGpump"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 md:px-12 py-4 bg-[#0098ea] hover:bg-[#00f0ff] text-[#050505] font-black text-sm tracking-[0.2em] uppercase active:scale-95 transition-all duration-200 w-full sm:w-auto justify-center rounded-sm border border-[#00f0ff]/40 shadow-[0_0_15px_rgba(0,240,255,0.15)]"
            >
              BUY $DUROV
            </a>
          </motion.div>
        </div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative md:w-1/2 min-h-[52vw] md:min-h-0 max-h-[65vw] md:max-h-none border-l border-[#00f0ff]/10"
        >
          <img
            src="/assets/images/durov_bull_avatar_1783250057115.jpg"
            alt="Pavel Durov - Sovereign Conviction"
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/20 to-transparent hidden md:block"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-transparent md:hidden"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}
