"use client";

import { useState } from "react";
import Image from "next/image";
import NavigationBar from "./components/BurgerNavigation";
import Phone from "./components/phone";
import MenuNavigationCard, { CardProps } from "./components/MenuNavigationCard";
import Link from "next/link";

export default function Home() {
  const menuData: CardProps[] = [
    {
      id: 1,
      title: 'COURSES',
      subtitle: 'PEMBELAJARAN',
      caption: 'Take on Special Courses',
      bgColor: '#AA8FFE',
      hoverDivColor: '#C3B0FF',
      iconPath: 'courses_white_icon.png',
      href: '/courses'
    },
    {
      id: 2,
      title: 'CHALLENGES',
      subtitle: 'TANTANGAN',
      caption: 'Take on Special Challenges',
      bgColor: '#DC7596',
      hoverDivColor: '#FC7986',
      iconPath: 'challenges_white_icon.png',
      href: '/challenges'
    },
    {
      id: 3,
      title: 'SCOREBOARD',
      subtitle: 'PAPAN PERINGKAT',
      caption: 'Take on Special Score',
      bgColor: '#D3DC75',
      hoverDivColor: '#FCF779',
      iconPath: 'scoreboard_white_icon.png',
      href: '/scoreboard'
    }
    
  ]

  return (
    <div className="w-screen h-screen overflow-hidden flex flex-wrap pt-4 px-1 lg:px-5 justify-between">
      <NavigationBar/>
      <div className="w-full lg:w-[45%] mb-4 flex justify-center items-center">
        <Image 
          src="/images/logo.png"
          alt="logo"
          width={600}
          height={300}
        />
      </div>
      <div className="w-full h-screen lg:rotate-3 lg:w-[53%] lg:mt-4">
        <Phone>
          <h1 className="absolute right-0 mr-8 top-15 text-6xl lg:text-[8rem] font-extrabold tracking-tighter text-transparent [-webkit-text-stroke:1.5px_rgba(0,0,0,0.15)]">MIRAI</h1>
          <div className="mt-15 lg:mb-15 flex flex-col gap-4">
            <div className="flex gap-2">
              <Image
                src="/icons/signal_animation.gif"
                alt="signal animation"
                width={30}
                height={30}
              />
              <h3 className="font-bold text-xl">HOMEPAGE</h3>
            </div>
             {menuData.map((item) => (
                <MenuNavigationCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  subtitle={item.subtitle}
                  caption={item.caption}
                  bgColor={item.bgColor}
                  hoverDivColor={item.hoverDivColor}
                  iconPath={item.iconPath}
                  href={item.href}
                />
             ))}
             <div className="flex flex-row w-full gap-2 h-[13vh]">
              <Link href="/info"
                className="flex items-center gap-3 px-4 w-full h-full bg-[#D6D6E4] border-2 border-[#47476A] rounded-xl transition-transform ease-in-out duration-300 hover:scale-[1.02]"
              >
              <Image
                src="/icons/rules-icon.svg"
                alt="user icon"
                width={50}
                height={30}
              />

              <div>
                <h2 className="text-[#47476A] font-bold text-xl">RULES & INFO</h2>
                <p className="text-[#7E7E9A] font-semibold text-sm">ATURAN & INFO</p>
              </div>
              </Link>
              <Link href="/Auth/login"
                className="flex gap-2 items-center px-4 w-full h-full bg-[#D6D6E4] border-2 border-[#47476A] rounded-xl transition-transform ease-in-out duration-300 hover:scale-[1.02]"
              >
              <Image
                src="/icons/setting-icon.svg"
                alt="user icon"
                width={50}
                height={30}
              />
              <div>
                <h2 className="text-[#47476A] font-bold text-xl">USER SETTING</h2>
                <p className="text-[#7E7E9A] font-semibold text-sm">PENGATURAN PENGGUNA</p>
              </div>
              </Link>
             </div>
          </div>
        </Phone>
      </div>
    </div>
  );
}
