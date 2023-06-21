/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import mobileHero from '@/images/image-hero-mobile.png';
import desktopHero from '@/images/image-hero-desktop.png';
import DesktopNavBar from '@/components/DesktopNavBar';
import { useState, useEffect } from 'react';
import SideBar from '@/components/SideBar';

export default function Home() {
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth > 767);
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    const updateDeskop = () => {
      setIsDesktop(window.innerWidth > 767);
    };
    window.addEventListener('resize', updateDeskop);
    return () => window.removeEventListener('resize', updateDeskop);
  });

  return (
    <main className="flex flex-col min-h-screen justify-center items-center relative">
      {openMobileMenu ? (
        <SideBar setOpenMobileMenu={setOpenMobileMenu} />
      ) : null}
      {isDesktop ? (
        <DesktopNavBar />
      ) : (
        <div className="flex w-screen items-center justify-between p-5 py-2 absolute top-0 z-[1]">
          <h1 className="font-bold text-4xl">snap</h1>
          <div onClick={() => setOpenMobileMenu(true)}>
            <svg width="32" height="18" xmlns="http://www.w3.org/2000/svg">
              <g fill="#151515" fill-rule="evenodd">
                <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
              </g>
            </svg>
          </div>
        </div>
      )}
      <div className="flex flex-col text-center items-center md:flex-row-reverse md:px-32 md:py-10 md:text-left relative md:pb-0">
        <div>
          {isDesktop ? (
            <Image alt="desktop-hero" src={desktopHero} className="min-w-min" />
          ) : (
            <Image
              alt="mobile-hero"
              src={mobileHero}
              className="pt-10 md:pt-0"
            />
          )}
        </div>
        <div className="p-5 space-y-4 pt-8 md:pr-16 md:space-y-12">
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
          <div className="flex justify-between pt-2 md:absolute md:bottom-0 md:space-x-6">
            <img
              className="w-1/6 h-1/6 md:w-1/5 md:h-1/5"
              alt="databiz"
              src="/client-databiz.svg"
            />
            <img
              className="w-1/6 h-1/6 md:w-1/5 md:h-1/5"
              alt="audiophile"
              src="/client-audiophile.svg"
            />
            <img
              className="w-1/6 h-1/6 md:w-1/5 md:h-1/5"
              alt="meet"
              src="/client-meet.svg"
            />
            <img
              className="w-1/6 h-1/6 md:w-1/5 md:h-1/5"
              alt="maker"
              src="/client-maker.svg"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
