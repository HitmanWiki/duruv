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
            ? "bg-[#030303]/90 backdrop-blur-xl border-b border-[#da83ff]/20 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#da83ff] opacity-40 blur-sm"></div>
              <img
                src="/assets/images/white_bull_logo_1783355332688.jfif"
                alt="THE WHITE BULL Logo"
                className="relative h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border border-[#da83ff]/30"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm md:text-base font-black tracking-[-0.05em] text-[#F1F1F1] leading-none">
                $VITALIK
              </span>
              <span className="text-[9px] font-mono text-[#da83ff] uppercase tracking-[0.2em] mt-1">
                THE WHITE BULL
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#proof"
              className="text-sm font-mono text-[#F1F1F1]/70 hover:text-[#da83ff] transition-colors tracking-wider"
            >
              CHART
            </a>
            <a
              href="#mission"
              className="text-sm font-mono text-[#F1F1F1]/70 hover:text-[#da83ff] transition-colors tracking-wider"
            >
              MISSION
            </a>
            <a
              href="#story"
              className="text-sm font-mono text-[#F1F1F1]/70 hover:text-[#da83ff] transition-colors tracking-wider"
            >
              STORY
            </a>
            <a
              href="#conviction"
              className="text-sm font-mono text-[#F1F1F1]/70 hover:text-[#da83ff] transition-colors tracking-wider"
            >
              CONVICTION
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://app.uniswap.org/explore/tokens/ethereum/0xf2da4643B573042ce685BAa36a855A8812e5CF31"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex px-6 py-2.5 bg-[#8b5cf6] text-[#050505] font-black text-xs md:text-sm tracking-widest hover:bg-[#da83ff] hover:text-[#050505] active:scale-95 transition-all duration-300 h-10 md:h-11 items-center gap-1.5 shadow-[0_0_15px_rgba(218,131,255,0.2)] border border-[#da83ff]/40 rounded-sm"
            >
              BUY $VITALIK <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="http://t.me/thewhitebull_vitalik"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 border border-[#da83ff]/30 text-[#da83ff] font-bold text-xs md:text-sm tracking-wider hover:bg-[#da83ff]/10 hover:border-[#da83ff] transition-all duration-300 h-10 md:h-11 flex items-center rounded-sm"
            >
              TELEGRAM
            </a>
            <a
              href="https://x.com/VITALIK_CTO"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 border border-[#da83ff]/30 text-[#da83ff] font-bold text-xs md:text-sm tracking-wider hover:bg-[#da83ff]/10 hover:border-[#da83ff] transition-all duration-300 h-10 md:h-11 flex items-center rounded-sm hidden xs:flex"
            >
              X
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 border border-[#da83ff]/30 text-[#da83ff] rounded-sm hover:bg-[#da83ff]/10 transition-colors"
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
            className="text-xl font-mono text-[#F1F1F1]/80 hover:text-[#da83ff] transition-colors tracking-widest"
          >
            CHART
          </a>
          <a
            href="#mission"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-xl font-mono text-[#F1F1F1]/80 hover:text-[#da83ff] transition-colors tracking-widest"
          >
            MISSION
          </a>
          <a
            href="#story"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-xl font-mono text-[#F1F1F1]/80 hover:text-[#da83ff] transition-colors tracking-widest"
          >
            STORY
          </a>
          <a
            href="#conviction"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-xl font-mono text-[#F1F1F1]/80 hover:text-[#da83ff] transition-colors tracking-widest"
          >
            CONVICTION
          </a>
          <a
            href="https://app.uniswap.org/explore/tokens/ethereum/0xf2da4643B573042ce685BAa36a855A8812e5CF31"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-10 py-4 bg-[#8b5cf6] text-[#050505] font-black text-sm tracking-widest hover:bg-[#da83ff] active:scale-95 transition-all duration-300 rounded-sm"
          >
            BUY $VITALIK
          </a>
        </div>
      )}
    </>
  );
}
