import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#050505]/90 backdrop-blur-xl border-b border-[#00f0ff]/20 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#0098ea] to-[#00f0ff] opacity-40 blur-sm"></div>
              <img
                src="/assets/images/durov_bull_avatar_1783250057115.jpg"
                alt="THE GRAM BULL DUROV Logo"
                className="relative h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border border-[#00f0ff]/30"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm md:text-base font-black tracking-[-0.05em] text-[#F1F1F1] leading-none">
                $DUROV
              </span>
              <span className="text-[9px] font-mono text-[#00f0ff] uppercase tracking-[0.2em] mt-1">
                THE GRAM BULL
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#proof"
              className="text-sm font-mono text-[#F1F1F1]/70 hover:text-[#00f0ff] transition-colors tracking-wider"
            >
              PROOF
            </a>
            <a
              href="#mission"
              className="text-sm font-mono text-[#F1F1F1]/70 hover:text-[#00f0ff] transition-colors tracking-wider"
            >
              MISSION
            </a>
            <a
              href="#story"
              className="text-sm font-mono text-[#F1F1F1]/70 hover:text-[#00f0ff] transition-colors tracking-wider"
            >
              STORY
            </a>
            <a
              href="#conviction"
              className="text-sm font-mono text-[#F1F1F1]/70 hover:text-[#00f0ff] transition-colors tracking-wider"
            >
              CONVICTION
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://pump.fun/coin/CuGJf6cfDfMh4UxVgNJ5KFQ6v8Wv3qrqop6cFKsGpump"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex px-6 py-2.5 bg-[#0098ea] text-[#050505] font-black text-xs md:text-sm tracking-widest hover:bg-[#00f0ff] hover:text-[#050505] active:scale-95 transition-all duration-300 h-10 md:h-11 items-center gap-1.5 shadow-[0_0_15px_rgba(0,240,255,0.2)] border border-[#00f0ff]/40 rounded-sm"
            >
              BUY $DUROV <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://t.me/thetopbull"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 border border-[#00f0ff]/30 text-[#00f0ff] font-bold text-xs md:text-sm tracking-wider hover:bg-[#00f0ff]/10 hover:border-[#00f0ff] transition-all duration-300 h-10 md:h-11 flex items-center rounded-sm"
            >
              TELEGRAM
            </a>
            <a
              href="https://x.com/TheTopBull_tate"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 border border-[#00f0ff]/30 text-[#00f0ff] font-bold text-xs md:text-sm tracking-wider hover:bg-[#00f0ff]/10 hover:border-[#00f0ff] transition-all duration-300 h-10 md:h-11 flex items-center rounded-sm hidden xs:flex"
            >
              X
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 border border-[#00f0ff]/30 text-[#00f0ff] rounded-sm hover:bg-[#00f0ff]/10 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-2xl md:hidden flex flex-col justify-center items-center gap-8">
          <a
            href="#proof"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-xl font-mono text-[#F1F1F1]/80 hover:text-[#00f0ff] transition-colors tracking-widest"
          >
            PROOF
          </a>
          <a
            href="#mission"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-xl font-mono text-[#F1F1F1]/80 hover:text-[#00f0ff] transition-colors tracking-widest"
          >
            MISSION
          </a>
          <a
            href="#story"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-xl font-mono text-[#F1F1F1]/80 hover:text-[#00f0ff] transition-colors tracking-widest"
          >
            STORY
          </a>
          <a
            href="#conviction"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-xl font-mono text-[#F1F1F1]/80 hover:text-[#00f0ff] transition-colors tracking-widest"
          >
            CONVICTION
          </a>
          <a
            href="https://pump.fun/coin/CuGJf6cfDfMh4UxVgNJ5KFQ6v8Wv3qrqop6cFKsGpump"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-10 py-4 bg-[#0098ea] text-[#050505] font-black text-sm tracking-widest hover:bg-[#00f0ff] active:scale-95 transition-all duration-300 rounded-sm"
          >
            BUY $DUROV
          </a>
        </div>
      )}
    </>
  );
}
