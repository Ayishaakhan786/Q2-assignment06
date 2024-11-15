"use client"
import { useState , useEffect } from "react"
import { json } from "stream/consumers";
export default function MarketRates (){
    const API_KEY = "c541f3fbfc6be2b2c41c5f43cb67cae0";
    const [data , setData] = useState<any>(null);
    useEffect(()=>{
        fetch(`https://api.coinlayer.com/api/live?access_key=${API_KEY}`)
        .then((Response)=>Response.json())
        .then((jsonConverted)=>{
            console.log("JSON CONVERTED DATA :" , jsonConverted);
            setData(jsonConverted);
        });
    });
    return(
        <div className="overflow-x-auto">
    <table className="min-w-full bg-black">
        <thead>
            <tr>
                <th className="px-6 py-3 text-left text-black font-semibold">Currency</th>
                <th className="px-6 py-3 text-right text-gray-700 font-semibold">Rate</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="border px-6 py-3">BTC</td>
                <td className="border px-6 py-3 text-right">{data?.rates?.BTC}</td>
            </tr>
            <tr>
                <td className="border px-6 py-3">ENB</td>
                <td className="border px-6 py-3 text-right">{data?.rates?.ENB}</td>
            </tr>
            <tr>
                <td className="border px-6 py-3">ETH</td>
                <td className="border px-6 py-3 text-right">{data?.rates?.ETH}</td>
            </tr>
            <tr>
                <td className="border px-6 py-3">XRP</td>
                <td className="border px-6 py-3 text-right">{data?.rates?.XRP}</td>
            </tr>
            <tr>
                <td className="border px-6 py-3">LTC</td>
                <td className="border px-6 py-3 text-right">{data?.rates?.LTC}</td>
            </tr>
            <tr>
                <td className="border px-6 py-3">ADA</td>
                <td className="border px-6 py-3 text-right">{data?.rates?.ADA}</td>
            </tr>
            <tr>
                <td className="border px-6 py-3">DOT</td>
                <td className="border px-6 py-3 text-right">{data?.rates?.DOT}</td>
            </tr>
            <tr>
                <td className="border px-6 py-3">SOL</td>
                <td className="border px-6 py-3 text-right">{data?.rates?.SOL}</td>
            </tr>
            <tr>
                <td className="border px-6 py-3">DOGE</td>
                <td className="border px-6 py-3 text-right">{data?.rates?.DOGE}</td>
            </tr>
            <tr>
                <td className="border px-6 py-3">LINK</td>
                <td className="border px-6 py-3 text-right">{data?.rates?.LINK}</td>
            </tr>
        </tbody>
    </table>
</div>

    );
} 