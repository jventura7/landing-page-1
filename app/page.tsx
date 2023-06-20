/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import mobileHero from '@/images/image-hero-mobile.png';
import desktopHero from '@/images/image-hero-desktop.png';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth > 767);

  useEffect(() => {
    const updateDeskop = () => {
      setIsDesktop(window.innerWidth > 767);
    };
    window.addEventListener('resize', updateDeskop);
    return () => window.removeEventListener('resize', updateDeskop);
  });

  return (
    <main className="flex flex-col min-h-screen justify-center items-center relative">
      <nav className="flex justify-between p-5 absolute top-0 w-full">
        <h1 className="font-bold text-3xl">snap</h1>
        <div>Menu</div>
      </nav>
      <div className="flex flex-col text-center items-center md:flex-row-reverse md:px-32 md:py-10 md:text-left">
        {isDesktop ? (
          <Image alt="desktop-hero" src={desktopHero} className="" />
        ) : (
          <Image alt="mobile-hero" src={mobileHero} />
        )}
        <div className="p-5 space-y-4 pt-8 relative">
          <h1 className="font-bold text-3xl md:text-7xl">Make remote work</h1>
          <p className="text-slate-600 leading-7">
            Get your team in sync, no matter your location. Steamline processes,
            create team rituals, and watch productivity soar.
          </p>
          <div className="relative p-10 w-full flex justify-center md:justify-start md:pl-0 md:pb-32">
            <button className="bg-black text-white font-bold p-8 py-4 rounded-2xl hover:bg-white hover:border hover:border-black hover:text-black absolute top-0">
              Learn more
            </button>
          </div>
          <div className="flex justify-between pt-2 md:absolute md:bottom-0">
            <img
              className="w-1/6 h-1/6"
              alt="databiz"
              src="/client-databiz.svg"
            />
            <img
              className="w-1/6 h-1/6"
              alt="audiophile"
              src="/client-audiophile.svg"
            />
            <img className="w-1/6 h-1/6" alt="meet" src="/client-meet.svg" />
            <img className="w-1/6 h-1/6" alt="maker" src="/client-maker.svg" />
          </div>
        </div>
      </div>
    </main>
  );
}
