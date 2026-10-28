"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import NavigationBar from "../components/BurgerNavigation";

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
      <NavigationBar/>

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

      
    </main>
  );
}
