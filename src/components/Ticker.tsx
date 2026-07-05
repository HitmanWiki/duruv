export default function Ticker() {
  const tickerText = "BRING BACK THE BULL • ONLY DUROV CAN BRING BACK THE BULL • 65% IN ONE WALLET • THE BIGGEST BAG ON TON • BRING THE BULL MARKET BACK ON-CHAIN • ONLY A VISIONARY CAN LEAD THE DIGITAL RESISTANCE • ".repeat(6);

  return (
    <div className="overflow-hidden py-5 border-y border-[#00f0ff]/30 bg-[#050505]">
      <div className="ticker-scroll whitespace-nowrap font-mono text-[#00f0ff] text-xs md:text-sm tracking-[0.25em] md:tracking-[0.35em] uppercase font-bold">
        {tickerText}
      </div>
    </div>
  );
}
