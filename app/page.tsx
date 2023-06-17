/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import mobileHero from '@/images/image-hero-mobile.png';

export default function Home() {
  return (
    <main className="flex flex-col">
      <nav className="flex justify-between p-5">
        <h1 className="font-bold text-3xl">snap</h1>
        <div>Menu</div>
      </nav>
      <Image alt="mobile-hero" src={mobileHero} />
      <div className="flex flex-col p-5 pt-8 text-center items-center space-y-4">
        <h1 className="font-bold text-3xl">Make remote work</h1>
        <p className="text-slate-600 leading-7">
          Get your team in sync, no matter your location. Steamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <div className="relative p-10 w-full flex justify-center">
          <button className="bg-black text-white font-bold p-8 py-4 rounded-2xl hover:bg-white hover:border hover:border-black hover:text-black absolute top-0">
            Learn more
          </button>
        </div>
        <div className="flex justify-between w-full pt-2">
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
    </main>
  );
}
