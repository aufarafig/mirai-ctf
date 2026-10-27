import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden flex items-end justify-end p-0">
      
      {/* Top Right Navigation Menu Button */}
      <div className="fixed top-6 right-6 z-50">
        <button className="w-12 h-12 bg-white rounded-full flex flex-col items-center justify-center space-y-1 shadow-lg hover:scale-105 transition-transform active:scale-95">
          <span className="w-6 h-0.5 bg-slate-800 rounded-full"></span>
          <span className="w-6 h-0.5 bg-slate-800 rounded-full"></span>
          <span className="w-6 h-0.5 bg-slate-800 rounded-full"></span>
        </button>
      </div>

      {/* Frame HP / Tablet diperbesar & dipojokkan ke kanan bawah */}
      <div className="relative w-full max-w-2xl bg-[#4D4594] rounded-tl-[50px] rounded-tr-[50px] sm:rounded-[50px] p-8 md:p-10 shadow-2xl border-4 border-[#3c3577] overflow-hidden rotate-3 translate-x-12 translate-y-16 sm:translate-x-16 sm:translate-y-12">
        
        {/* Notch / Camera Bar atas HP */}
        <div className="w-40 h-5 bg-[#3b3473] mx-auto rounded-b-2xl mb-8"></div>

        {/* Header Text (MIRAI Watermark / Background Text) */}
        <div className="relative mb-8">
          <h1 className="text-7xl md:text-9xl font-black text-[#5c53aa] tracking-widest text-right select-none opacity-40 uppercase pointer-events-none absolute right-0 -top-8">
            MIRAI
          </h1>
          <h2 className="text-xl md:text-2xl font-extrabold text-white uppercase tracking-wider relative z-10">
            HOMEPAGE
          </h2>
        </div>

        {/* Section Cards Container */}
        <div className="space-y-6 relative z-10 pb-12">
          
          {/* Card 1: COURSES */}
          <div className="relative group cursor-pointer overflow-hidden bg-[#8D82F8] rounded-3xl p-6 md:p-8 shadow-xl border-b-8 border-[#6e63dc]">
            {/* Glimmer / Kilatan Silau Overlay */}
            <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none z-20"></div>

            {/* Outline Text Watermark di dalam Card */}
            <span className="absolute right-[-10px] top-1/2 -translate-y-1/2 text-6xl md:text-7xl font-black tracking-widest text-white/15 select-none pointer-events-none uppercase">
              COURSES
            </span>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-black text-white tracking-wider uppercase">
                COURSES
              </h3>
              <p className="text-sm font-bold text-indigo-900 tracking-wide uppercase mt-1">
                PEMBELAJARAN
              </p>
              
              {/* Button Pill Kecil */}
              <div className="mt-6 bg-[#526185] text-white-100 text-sm md:text-base font-semibold py-3 px-6 rounded-2xl text-center shadow-inner max-w-md">
                Take on Special Challenge
              </div>
            </div>
          </div>

          {/* Card 2: CHALLENGES */}
          <div className="relative group cursor-pointer overflow-hidden bg-[#FF6584] rounded-3xl p-6 md:p-8 shadow-xl border-b-8 border-[#d84d6a]">
            {/* Glimmer / Kilatan Silau Overlay */}
            <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none z-20"></div>

            {/* Outline Text Watermark di dalam Card */}
            <span className="absolute right-[-10px] top-1/2 -translate-y-1/2 text-6xl md:text-7xl font-black tracking-widest text-white/15 select-none pointer-events-none uppercase">
              CHALLENGES
            </span>

            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-black text-white tracking-wider uppercase">
                CHALLENGES
              </h3>
              <p className="text-sm font-bold text-rose-950 tracking-wide uppercase mt-1">
                TANTANGAN
              </p>

              {/* Button Pill Kecil */}
              <div className="mt-6 bg-[#526185] text-white-100 text-sm md:text-base font-semibold py-3 px-6 rounded-2xl text-center shadow-inner max-w-md">
                Take on Special Challenge
              </div>
            </div>
          </div>

          {/* Card 3: SCOREBOARD */}
          <div className="relative group cursor-pointer overflow-hidden bg-[#D3DC75] rounded-3xl p-6 md:p-8 shadow-xl border-b-8 border-[#bece4b]">
            {/* Glimmer / Kilatan Silau Overlay */}
            <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none z-20"></div>

            {/* Outline Text Watermark di dalam Card */}
            <span className="absolute right-[-10px] top-1/2 -translate-y-1/2 text-5xl md:text-6xl font-black tracking-widest text-slate-800/10 select-none pointer-events-none uppercase">
              SCOREBOARD
            </span>

            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-black text-slate-800 tracking-wider uppercase">
                SCOREBOARD
              </h3>
              <p className="text-sm font-bold text-slate-700 tracking-wide uppercase mt-1">
                PAPAN PERINGKAT
              </p>

              {/* Button Pill Kecil */}
              <div className="mt-6 bg-[#526185] text-white text-sm md:text-base font-semibold py-3 px-6 rounded-2xl text-center shadow-inner max-w-md">
                Take on Special Challenge
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}