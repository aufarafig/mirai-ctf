import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
        <section>
        <button
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed right-5 top-5 z-30 flex size-16 flex-col items-center justify-center gap-1.5 rounded-full bg-white shadow-lg transition-transform hover:scale-105 sm:right-8 sm:top-7"
      >
        <span className="h-1 w-8 rounded-full bg-[#41405f]" />
        <span className="h-1 w-8 rounded-full bg-[#41405f]" />
        <span className="h-1 w-8 rounded-full bg-[#41405f]" />
        </button>

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
                <span className="absolute bottom-0 left-0 z-0 size-4 -translate-x-1/2 translate-y-1/2 scale-0 rounded-full bg-[#3C367A] transition-transform duration-1000 ease-out group-hover:scale-[70]" />
                <span className="relative z-10 w-max bg-[#41405f] px-2.5 py-1 text-lg font-bold text-white sm:text-xl">COURSES</span>
                <div className="relative z-10 flex items-end justify-end">
                  <span className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 whitespace-nowrap text-5xl font-extrabold tracking-tight text-transparent transition-colors [-webkit-text-stroke:1px_white]">COURSES</span>
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
                <span className="absolute bottom-0 left-0 z-0 size-4 -translate-x-1/2 translate-y-1/2 scale-0 rounded-full bg-[#3C367A] transition-transform duration-1000 ease-out group-hover:scale-[70]" />
                <span className="relative z-10 w-max bg-[#41405f] px-2.5 py-1 text-lg font-bold text-white sm:text-xl">CHALLENGES</span>
                <div className="relative z-10 flex items-end justify-end">
                  <span className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 whitespace-nowrap text-4xl font-extrabold tracking-tight text-transparent transition-colors [-webkit-text-stroke:1px_white]">CHALLENGES</span>
                  <Image 
                    src="/icons/challenges_purple_icon.png"
                    alt=""
                    width={72}
                    height={64}
                    className="relative z-10 shrink-0 transition-[filter] duration-900 group-hover:brightness-0 group-hover:invert"
                  />
                </div>
              </Link>

              {/* Menu 3: Scoreboard */}
              <Link href="/scoreboard" className="relative flex h-32 flex-col justify-between overflow-hidden rounded-2xl bg-[#EAEAF1] p-3 shadow-lg transition-transform hover:scale-[1.02] group sm:h-36 sm:p-4">
                <span className="absolute bottom-0 left-0 z-0 size-4 -translate-x-1/2 translate-y-1/2 scale-0 rounded-full bg-[#3C367A] transition-transform duration-1000 ease-out group-hover:scale-[70]" />
                <span className="relative z-10 w-max bg-[#41405f] px-2.5 py-1 text-lg font-bold text-white sm:text-xl">SCOREBOARD</span>
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
                <span className="absolute bottom-0 left-0 z-0 size-4 -translate-x-1/2 translate-y-1/2 scale-0 rounded-full bg-[#52527C] transition-transform duration-1000 ease-out group-hover:scale-[70]" />
                <span className="relative z-10 w-max bg-[#41405f] px-2.5 py-1 text-lg font-bold text-white sm:text-xl">HOME</span>
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
        </section>
      
    )
}

export default NavigationBar;