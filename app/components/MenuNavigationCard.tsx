import Image from "next/image";
import React from "react";
import Link from "next/link";

export interface CardProps {
    id: number;
    title: string;
    subtitle: string;
    caption: string;
    bgColor: string;
    hoverDivColor: string;
    iconPath: string;
    href: string;
}

const MenuNavigationCard = ({ title, subtitle, caption, bgColor, hoverDivColor, iconPath,href }: CardProps) => {
    return(
        <Link
         href={href}
         style={{backgroundColor: bgColor}}
         className="group flex flex-col w-full h-[27vh] rounded-[15px] justify-evenly p-3 z-0 relative overflow-hidden">
            {/* animasi garis miring di pojok kiri atas ketika di hover*/}
            <div
            style={{backgroundColor: hoverDivColor}}
            className="absolute -z-1 translate w-[200%] h-18 -rotate-45 translate-x-[-58%] lg:translate-x-[-55%] transition-all duration-300 ease-in-out group-active:h-300 group-hover:h-300"/>
            {/* outline teks */}
            <h1 className="absolute right-0 mr-3 lg:mb-7 lg:text-[85px] font-extrabold tracking-tighter text-transparent [-webkit-text-stroke:1.5px_rgba(0,0,0,0.15)] -z-1">{title}</h1>
            <div className="lg:ml-5 w-full flex items-center">
                <Image
                 src={`/icons/${iconPath}`}
                 alt="icon"
                 width={120}
                 height={100}
                />
                <div>
                    <h1 className="text-2xl lg:text-4xl font-bold">{title}</h1>
                    <p className="font-semibold lg:text-[#526185]">{subtitle}</p>
                </div>
            </div>

            <div className="w-full h-[6vh] rounded-md bg-[#526185] flex items-center justify-center">
                <p className="text-[${bgColor}] font-semibold">{caption}</p>
            </div>
        </Link>
    )
}

export default MenuNavigationCard;