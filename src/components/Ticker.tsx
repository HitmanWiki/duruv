export default function Ticker() {
  const tickerText = "BRING BACK THE BULL • THE WHITE BULL CHARGES • $VITALIK BUILDS FORWARD NO MATTER WHAT • COMMUNITY TAKEOVER CTO • THE BIGGEST ACCELERATION ON ETHEREUM • CONVICTION OVER COMPROMISE • ".repeat(6);

  return (
    <div className="overflow-hidden py-5 border-y border-[#da83ff]/20 bg-[#050505]">
      <div className="ticker-scroll whitespace-nowrap font-mono text-[#da83ff] text-xs md:text-sm tracking-[0.25em] md:tracking-[0.35em] uppercase font-bold">
        {tickerText}
      </div>
    </div>
  );
}
