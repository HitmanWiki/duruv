import { useState } from "react";
import { Copy, Check, Send, Twitter } from "lucide-react";
import { CONTRACT_ADDRESS } from "../data";

interface FooterProps {
  onCopyAddress: () => void;
}

export default function Footer({ onCopyAddress }: FooterProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    onCopyAddress();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-[#050505] border-t border-[#da83ff]/10 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Copy Contract Box */}
        <div className="flex justify-center mb-10">
          <button
            onClick={handleCopy}
            className="group flex items-center gap-3 border border-[#da83ff]/20 bg-[#08080c]/60 backdrop-blur-md px-5 py-3 hover:border-[#da83ff]/50 hover:bg-[#da83ff]/5 transition-all duration-300 max-w-full overflow-hidden rounded-sm"
            title="Click to copy contract address"
          >
            <span className="font-mono text-[#da83ff]/50 text-[9px] tracking-[0.2em] uppercase shrink-0">
              CA
            </span>
            <span className="font-mono text-[#F1F1F1]/50 text-[10px] tracking-wide group-hover:text-[#F1F1F1]/80 transition-colors hidden sm:block truncate">
              {CONTRACT_ADDRESS}
            </span>
            <span className="font-mono text-[#F1F1F1]/50 text-[10px] tracking-wide group-hover:text-[#F1F1F1]/80 transition-colors sm:hidden shrink-0">
              {CONTRACT_ADDRESS.slice(0, 10)}…{CONTRACT_ADDRESS.slice(-5)}
            </span>
            <span className={`font-mono text-[9px] tracking-[0.1em] uppercase transition-colors shrink-0 ${copied ? "text-[#00FF41]" : "text-[#da83ff]/50 group-hover:text-[#da83ff]"}`}>
              {copied ? "✓ COPIED" : "COPY"}
            </span>
          </button>
        </div>

        {/* Brand Info and Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xl font-black tracking-[-0.05em] text-[#F1F1F1]">$VITALIK</span>
            <span className="text-[#F1F1F1]/20 text-sm">·</span>
            <span className="font-mono text-[#F1F1F1]/30 text-xs tracking-[0.2em]">THE WHITE BULL</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="http://t.me/thewhitebull_vitalik"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[#da83ff]/50 text-xs tracking-[0.2em] uppercase hover:text-[#da83ff] transition-colors flex items-center gap-1.5"
            >
              TELEGRAM
            </a>
            <a
              href="https://x.com/VITALIK_CTO"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[#da83ff]/50 text-xs tracking-[0.2em] uppercase hover:text-[#da83ff] transition-colors"
            >
              X
            </a>
          </div>
        </div>

        <div className="mt-8 text-center border-t border-[#da83ff]/5 pt-8">
          <p className="font-mono text-[#F1F1F1]/15 text-[10px] tracking-[0.3em] uppercase max-w-3xl mx-auto leading-relaxed">
            $VITALIK IS A COMMUNITY-DRIVEN MEMECOIN WITH NO INTRINSIC VALUE, CREATED PURELY FOR STORYTELLING, FUN, AND CELEBRATING THE FOUNDER OF THE ETHEREUM ECOSYSTEM. NO GUARANTEES OR FINANCIAL RETURNS.
          </p>
        </div>
      </div>
    </footer>
  );
}
