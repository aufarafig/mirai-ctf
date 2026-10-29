"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import BurgerNavigation from "../components/BurgerNavigation";
import Phone from "../components/phone";
import AiChat from "../components/AiChat";

const challenges = [
  {
    id: 1,
    title: "Judul Challenge",
    category: "Cryptography",
    tag: "CRYPTO",
    difficulty: "EASY",
    points: 50,
    description:
      "I rolled my own stego and made sure to make it wayyyyy too hard for someone to guess how it works...\n\ner, i mean claude did. i totally read the code tho.",
    attachment: "file_soal.tar.gz",
    size: "840 KB",
  },
  {
    id: 2,
    title: "Hidden in Plain Sight",
    category: "Forensics",
    tag: "FORENSICS",
    difficulty: "MEDIUM",
    points: 100,
    description:
      "Something is hiding in this file. Take a closer look and find the flag.",
    attachment: "mystery_file.zip",
    size: "1.2 MB",
  },
  {
    id: 3,
    title: "Pixel Perfect",
    category: "Steganography",
    tag: "STEGO",
    difficulty: "EASY",
    points: 50,
    description:
      "The image looks ordinary, but there is more to it than meets the eye.",
    attachment: "pixel-perfect.png",
    size: "560 KB",
  },
  {
    id: 4,
    title: "Unexpected Behavior",
    category: "Web",
    tag: "WEB",
    difficulty: "HARD",
    points: 250,
    description:
      "Explore the application carefully and uncover the unexpected behavior.",
    attachment: "challenge_files.zip",
    size: "2.4 MB",
  },
  {
    id: 5,
    title: "Bits and Pieces",
    category: "Reverse Engineering",
    tag: "REV",
    difficulty: "MEDIUM",
    points: 100,
    description:
      "Analyze the provided file and piece together what it is trying to tell you.",
    attachment: "bits-and-pieces",
    size: "320 KB",
  },
];

const categories = [
  { label: "All", icon: "▲" },
  { label: "Web", icon: "⌘" },
  { label: "Cryptography", icon: "☷" },
  { label: "Forensics", icon: "♛" },
  { label: "Steganography", icon: "✿" },
  { label: "Reverse Engineering", icon: "♫" },
];

export default function ChallengesPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedId, setSelectedId] = useState(challenges[0].id);
  const [answer, setAnswer] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");

  const visibleChallenges = useMemo(
    () =>
      challenges.filter((challenge) => {
        const matchesQuery = challenge.title
          .toLowerCase()
          .includes(query.trim().toLowerCase());
        const matchesCategory =
          activeCategory === "All" || challenge.category === activeCategory;
        return matchesQuery && matchesCategory;
      }),
    [activeCategory, query],
  );

  const selectedChallenge =
    challenges.find((challenge) => challenge.id === selectedId) ??
    challenges[0];

  return (
    <main className="relative flex h-screen min-h-155 w-full flex-col overflow-y-auto text-white lg:flex-row lg:overflow-hidden">
      <Link
        href="/"
        aria-label="Back to home"
        className="fixed left-4 top-4 z-30 flex size-14 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-105 sm:left-6 sm:top-5"
      >
        <Image
          src="/icons/backward-icon.svg"
          alt=""
          width={30}
          height={30}
        />
      </Link>


      <BurgerNavigation />

      <section className="relative flex min-h-[65vh] flex-none flex-col px-5 pb-4 pt-24 sm:px-8 lg:min-h-0 lg:flex-1 lg:px-10 lg:pb-8 lg:pt-5">
        <form
          role="search"
          onSubmit={(event) => event.preventDefault()}
          className="mx-auto flex h-11 w-full max-w-[500px] shrink-0 items-center rounded-xl bg-white px-3 text-[#41405f] shadow-md sm:h-12 lg:ml-[72px] lg:mt-0 lg:w-[calc(100%-72px)]"
        >
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by challenge title"
            aria-label="Search by challenge title"
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#85859a]"
          />
          <Image
            src="/icons/search-icon.svg"
            alt=""
            width={24}
            height={24}
          />
        </form>

        <div className="mt-5 flex min-h-0 flex-1 gap-3 lg:mt-8 lg:gap-8">
          <nav
            aria-label="Challenge categories"
            className="my-auto flex h-[min(58vh,440px)] w-12 shrink-0 flex-col items-center justify-between rounded-full bg-white/40 py-3 shadow backdrop-blur-md sm:w-14"
          >
            {categories.map((category, index) => (
              <button
                key={category.label}
                type="button"
                aria-label={category.label}
                aria-pressed={activeCategory === category.label}
                onClick={() => setActiveCategory(category.label)}
                className={`flex size-9 items-center justify-center rounded-full text-lg font-bold transition-colors sm:size-10 ${
                  activeCategory === category.label
                    ? "bg-white/35 text-white"
                    : "text-white/80 hover:bg-white/25"
                }`}
              >
                {index === 0 ? (
                  <span className="text-[10px]">{category.label}</span>
                ) : (
                  category.icon
                )}
              </button>
            ))}
          </nav>

          <div className="min-h-0 flex-1 overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {visibleChallenges.length ? (
              <ul>
                {visibleChallenges.map((challenge) => (
                  <li key={challenge.id}>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedId(challenge.id);
                        setAnswer("");
                        setSubmissionMessage("");
                      }}
                      aria-pressed={selectedChallenge.id === challenge.id}
                      className={`relative flex min-h-[118px] w-full items-center gap-3 border-t border-white/60 py-4 text-left transition-colors sm:min-h-[132px] ${
                        selectedChallenge.id === challenge.id
                          ? "bg-white/10"
                          : "hover:bg-white/10"
                      }`}
                    >
                      <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#14dc67] text-2xl font-extrabold text-[#41405f] sm:size-16 sm:text-3xl">
                        {challenge.points}
                      </span>
                      <span className="min-w-0 flex-1 self-center">
                        <span className="block truncate text-base font-bold sm:text-xl">
                          {challenge.title}
                        </span>
                        <span className="block text-sm sm:text-base">
                          {challenge.category}
                        </span>
                        <span
                          aria-hidden="true"
                          className="mt-2 block size-3 rotate-45 rounded-[3px] bg-[#41405f]"
                        />
                      </span>
                      <span className="absolute bottom-3 right-2 rounded border border-[#17df71] bg-[#41405f]/80 px-3 py-0.5 text-[10px] font-bold text-[#17df71]">
                        {challenge.tag}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="border-t border-white/60 py-8 text-center text-sm text-white/80">
                No challenges found.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="flex min-h-[90vh] flex-1 px-2 pb-0 pt-8 lg:min-h-0 lg:w-[55%] lg:flex-none lg:pt-8">
        <div className="h-full w-full rotate-[1deg]">
          <Phone>
            <article className="flex min-h-full flex-col px-2 pb-12 pt-5 text-white sm:px-5 sm:pt-8">
              <header className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h1 className="text-2xl font-extrabold leading-tight sm:text-3xl">
                    {selectedChallenge.title}
                  </h1>
                  <p className="mt-1 text-base font-semibold sm:text-xl">
                    {selectedChallenge.category}
                  </p>
                  <span className="mt-4 inline-flex rounded border border-[#16dc6b] px-4 py-0.5 text-[10px] font-bold text-[#16dc6b]">
                    {selectedChallenge.tag}
                  </span>
                </div>
                <div className="flex shrink-0 flex-col items-center pt-2">
                  <span className="flex size-[68px] items-center justify-center rounded-full border-[5px] border-[#78f6a8] bg-[#14dc67] text-2xl font-extrabold text-[#41405f] sm:size-[76px]">
                    {selectedChallenge.points}
                  </span>
                  <span className="mt-1 font-extrabold text-[#14dc67]">
                    {selectedChallenge.difficulty}
                  </span>
                </div>
              </header>

              <section className="mt-5 rounded-2xl border border-white/20 p-3 sm:p-4">
                <h2 className="mb-2 text-sm font-bold">Description</h2>
                <p className="whitespace-pre-line text-xs leading-relaxed text-white/90 sm:text-sm">
                  {selectedChallenge.description}
                </p>
              </section>

              <section className="mt-3 w-full max-w-[390px] rounded-2xl border border-white/20 p-3 sm:p-4">
                <h2 className="mb-3 text-sm font-bold">Attachments</h2>
                <div className="flex items-center gap-3 rounded-lg bg-white/15 p-3">
                  <Image
                    src="/icons/file-icon.png"
                    alt=""
                    width={28}
                    height={28}
                  />
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold">
                      {selectedChallenge.attachment}
                    </span>
                    <span className="block text-xs text-white/80">
                      {selectedChallenge.size}
                    </span>
                  </span>
                </div>
              </section>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmissionMessage(
                    "Challenge submissions are not connected yet.",
                  );
                }}
                className="mt-8 flex items-center gap-3"
              >
                <label className="flex min-w-0 flex-1 items-center rounded-lg bg-white px-4 py-3 text-[#41405f] shadow-sm">
                  <input
                    type="text"
                    required
                    value={answer}
                    onChange={(event) => setAnswer(event.target.value)}
                    placeholder="SUBMIT YOUR ANSWER HERE !"
                    aria-label="Submit your answer"
                    className="min-w-0 flex-1 bg-transparent text-xs font-bold outline-none placeholder:text-[#737373] sm:text-sm"
                  />
                  <span aria-hidden="true" className="ml-2 text-lg">
                    ✎
                  </span>
                </label>
                <button
                  type="submit"
                  aria-label="Submit answer"
                  className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-white text-3xl font-bold text-[#16dc6b] shadow-sm transition-transform hover:scale-105"
                >
                  ➤
                </button>
              </form>
              {submissionMessage && (
                <p aria-live="polite" className="mt-2 text-xs text-white/80">
                  {submissionMessage}
                </p>
              )}
            </article>
          </Phone>
        </div>

      </section>
      <AiChat/>
    </main>
  );
}
