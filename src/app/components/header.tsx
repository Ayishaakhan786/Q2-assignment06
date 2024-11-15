
import Image from "next/image";
import Logo from "./logo2.jpg";
export default function Header (){
    return (
       <div className="bg-slate-500 flex justify-between py-2 px-1">
        <div className="flex items-center px-3">
        <Image src={Logo} alt="Logo" width={60} height={60} className="px-1"/>
        </div>
        <h1 className="font-bold italic text-lg">Welcome</h1>
        <ul className="flex justify-end font-bold text-lg">
            <li className="px-3">Info</li>
            <li className="px-3">Contact</li>
        </ul>
       </div>
    );
}