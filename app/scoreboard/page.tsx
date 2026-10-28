"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const leaderboard = Array.from({ length: 20 }, (_, index) => ({
  rank: index + 1,
  username: "RazaCTF",
  solves: 36,
  points: 1000,
}));

const rankIcons: Record<number, string> = {
  1: "/icons/1st_rank_icon.png",
  2: "/icons/2nd_rank_icon.png",
  3: "/icons/3rd_rank_icon.png",
};

export default function ScoreboardPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden px-4 pb-8 pt-28 text-[#41405f] sm:px-8 sm:pt-32">
      <Link
        href="/"
        aria-label="Back to home"
        className="fixed left-5 top-5 z-30 flex size-16 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-105 sm:left-8 sm:top-7"
      >
        <Image
          src="/icons/backward-icon.svg"
          alt=""
          width={34}
          height={34}
        />
      </Link>

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

      <section className="mx-auto flex min-h-[78vh] w-full max-w-6xl items-center justify-center rounded-[28px] bg-white/65 px-3 py-8 shadow-sm backdrop-blur-md sm:px-8 sm:py-10">
        <ol className="flex max-h-[70vh] w-full max-w-[690px] flex-col gap-2 overflow-y-auto px-1 py-1 sm:gap-1.5">
          {leaderboard.map((player) => (
            <li
              key={player.rank}
              className="flex min-h-[86px] items-center gap-2 rounded-[20px] border-2 border-[#777795] bg-white shadow-[0_2px_3px_rgba(54,52,92,0.28)] sm:min-h-[94px] sm:gap-4"
            >
              <div className="flex w-[54px] shrink-0 justify-center sm:w-[94px]">
                {rankIcons[player.rank] ? (
                  <Image
                    src={rankIcons[player.rank]}
                    alt={`Rank ${player.rank}`}
                    width={76}
                    height={70}
                    className="h-auto w-12 sm:w-[68px]"
                  />
                ) : (
                  <span className="text-3xl font-extrabold sm:text-4xl">
                    {player.rank}
                  </span>
                )}
              </div>

              <div
                aria-hidden="true"
                className="size-14 shrink-0 overflow-hidden rounded-lg border-2 border-[#000000]vshadow-inner sm:size-16">
                <Image 
                          src="/images/mendut.png"
                          alt="logo"
                          width={600}
                          height={300}
                        />
              </div>

              <div className="min-w-0 flex-1 leading-tight">
                <p className="truncate text-base font-bold sm:text-lg">
                  {player.username}
                </p>
                <p className="text-xs text-[#55556d] sm:text-sm">
                  {player.solves} solves
                </p>
              </div>

              <div className="flex h-[78px] w-[112px] shrink-0 items-center justify-center rounded-r-[18px] bg-[#ffffed] text-[#a88af5] sm:h-[86px] sm:w-[170px]">
                <span className="text-2xl font-medium tracking-[0.08em] sm:text-4xl">
                  {player.points}
                </span>
                <span className="ml-0.5 text-lg font-medium text-[#41405f] sm:text-2xl">
                  P
                </span>
              </div>
            </li>
          ))}
        </ol>
      </section>

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
    </main>
  );
}
