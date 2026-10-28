"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Phone from "./components/phone";
import MenuNavigationCard, { CardProps } from "./components/MenuNavigationCard";

export default function Home() {
// State untuk mengontrol buka/tutup menu burger
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuData: CardProps[] = [
    {
      id: 1,
      title: 'COURSES',
      subtitle: 'PEMBELAJARAN',
      caption: 'Take on Special Courses',
      bgColor: '#AA8FFE',
      hoverDivColor: '#C3B0FF',
      iconPath: 'courses_white_icon.png',
      href: 'courses'
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
{/* Tombol Burger Menu di Pojok Kanan Atas */}
      <div className="fixed top-6 right-6 z-30">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-12 h-12 bg-white rounded-full flex flex-col items-center justify-center space-y-1 shadow-lg hover:scale-105 transition-transform active:scale-95 cursor-pointer"
        >
          <span className="w-6 h-0.5 bg-slate-800 rounded-full"></span>
          <span className="w-6 h-0.5 bg-slate-800 rounded-full"></span>
          <span className="w-6 h-0.5 bg-slate-800 rounded-full"></span>
        </button>
      </div>
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
          </div>
        </Phone>
      </div>
      {/* --- OVERLAY MENU BURGER --- */}
        <div
          aria-hidden={!isMenuOpen}
          inert={!isMenuOpen}
          className={`fixed inset-0 z-40 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsMenuOpen(false)}
            className="absolute inset-0 h-full w-full bg-[#332b6e]/40"
          />
          <div className={`absolute top-0 right-0 w-[90%] sm:w-1/2 h-full bg-[#52527C]/80 z-50 p-6 flex flex-col transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}>
            {/* Tombol Close (X) di Pojok Kanan Atas Overlay */}
            <div className="flex justify-end mb-2">
              <button 
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setIsMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center text-5xl leading-none text-white transition-transform hover:scale-110"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            {/* Grid Menu Pilihan */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              
              {/* Menu 1: Courses */}
              <Link href="/courses" className="relative flex h-32 flex-col justify-between overflow-hidden rounded-2xl bg-[#EAEAF1] p-3 shadow-lg transition-transform hover:scale-[1.02] group sm:h-36 sm:p-4">
                <span className="absolute bottom-0 left-0 z-0 size-4 -translate-x-1/2 translate-y-1/2 scale-0 rounded-full bg-[#3C367A] transition-transform duration-500 ease-out group-hover:scale-[70]" />
                <span className="relative z-10 w-max rounded-sm bg-[#332b6e] px-2 py-1 text-xs font-bold text-white">COURSES</span>
                <div className="relative z-10 flex items-end justify-end">
                  <span className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 whitespace-nowrap text-4xl font-extrabold tracking-tight text-transparent transition-colors [-webkit-text-stroke:1px_white]">COURSES</span>
                  <Image 
                    src="/icons/courses_purple_icon.png"
                    alt=""
                    width={72}
                    height={64}
                    className="relative z-10 shrink-0 transition-[filter] duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </div>
              </Link>

              {/* Menu 2: Challenges */}
              <Link href="/challenges" className="relative flex h-32 flex-col justify-between overflow-hidden rounded-2xl bg-[#EAEAF1] p-3 shadow-lg transition-transform hover:scale-[1.02] group sm:h-36 sm:p-4">
                <span className="absolute bottom-0 left-0 z-0 size-4 -translate-x-1/2 translate-y-1/2 scale-0 rounded-full bg-[#3C367A] transition-transform duration-500 ease-out group-hover:scale-[70]" />
                <span className="relative z-10 w-max rounded-sm bg-[#332b6e] px-2 py-1 text-xs font-bold text-white">CHALLENGES</span>
                <div className="relative z-10 flex items-end justify-end">
                  <span className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 whitespace-nowrap text-4xl font-extrabold tracking-tight text-transparent transition-colors [-webkit-text-stroke:1px_white]">CHALLENGES</span>
                  <Image 
                    src="/icons/challenges_purple_icon.png"
                    alt=""
                    width={72}
                    height={64}
                    className="relative z-10 shrink-0 transition-[filter] duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </div>
              </Link>

              {/* Menu 3: Scoreboard */}
              <Link href="/scoreboard" className="relative flex h-32 flex-col justify-between overflow-hidden rounded-2xl bg-[#EAEAF1] p-3 shadow-lg transition-transform hover:scale-[1.02] group sm:h-36 sm:p-4">
                <span className="absolute bottom-0 left-0 z-0 size-4 -translate-x-1/2 translate-y-1/2 scale-0 rounded-full bg-[#3C367A] transition-transform duration-500 ease-out group-hover:scale-[70]" />
                <span className="relative z-10 w-max rounded-sm bg-[#332b6e] px-2 py-1 text-xs font-bold text-white">SCOREBOARD</span>
                <div className="relative z-10 flex items-end justify-end">
                  <span className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 whitespace-nowrap text-4xl font-extrabold tracking-tight text-transparent [-webkit-text-stroke:1px_white]">SCOREBOARD</span>
                  <Image 
                    src="/icons/scoreboard_purple_icon.png"
                    alt=""
                    width={72}
                    height={64}
                    className="relative z-10 shrink-0 transition-[filter] duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </div>
              </Link>

              {/* Menu 4: Home */}
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="relative flex h-32 flex-col justify-between overflow-hidden rounded-2xl bg-[#EAEAF1] p-3 shadow-lg transition-transform hover:scale-[1.02] group sm:h-36 sm:p-4">
                <span className="absolute bottom-0 left-0 z-0 size-4 -translate-x-1/2 translate-y-1/2 scale-0 rounded-full bg-[#52527C] transition-transform duration-500 ease-out group-hover:scale-[70]" />
                <span className="relative z-10 w-max rounded-sm bg-[#332b6e] px-2 py-1 text-xs font-bold text-white">HOME</span>
                <div className="relative z-10 flex items-end justify-end">
                  <span className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 whitespace-nowrap text-5xl font-extrabold tracking-tight text-transparent [-webkit-text-stroke:1px_white]">HOME</span>
                  <Image 
                    src="/icons/home-icon.svg"
                    alt=""
                    width={52}
                    height={52}
                    className="relative z-10 shrink-0 brightness-0 invert"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
}
