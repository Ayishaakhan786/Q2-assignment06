"use client"
import MarketRates from "./coin-market/page";
export default function Home () {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-0">Crypto Currency Rates</h1>
      <MarketRates/>
    </div>
  );
}