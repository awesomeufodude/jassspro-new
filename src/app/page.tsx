import { Instagram, Facebook } from 'lucide-react';
import {FaTiktok} from "react-icons/fa";
import {SiOnlyfans} from "react-icons/si";
import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Jassspro',
  description: 'Jassspro cosplayer',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Home() {
  return (
    <section className="relative">
      <img
        src="/jassspro-new.webp"
        alt="jassspro"
        className="absolute w-full h-screen object-cover"
      />
      <div className="absolute w-full z-10 pt-10 px-8">
        <Header />
      </div>
      <div className="absolute h-[650px] flex justify-center items-center w-full">
        <div className="lg:w-3/4 w-full lg:p-0 px-8">
          <span className="text-jassspro-pink text-xl font-light uppercase">
            Jasmine
          </span>
          <h1 className="text-black text-[50px] font-normal uppercase">
            Jassspro
          </h1>
          <div className="flex items-center gap-4 mt-16 flex-wrap">
            <a
              className="lg:px-4 lg:py-2 lg:border-l  border-blue-500 group"
              href="https://onlyfans.com/jassspro"
              target="_blank"
            >
              <SiOnlyfans className="text-blue-500 mb-2 group-hover:text-blue-700 text-2xl" />
              <span className="text-blue-500 group-hover:text-blue-700 lg:text-base text-sm">
                Onlyfans
              </span>
            </a>
            <a
              href="https://www.instagram.com/jassspro"
              target="_blank"
              className="lg:px-4 lg:py-2 lg:border-l  border-jassspro-pink group"
            >
              <Instagram className="text-jassspro-pink mb-2 group-hover:text-pink-400 text-2xl" />
              <span className="text-jassspro-pink group-hover:text-pink-400  lg:text-base text-sm">
                Instagram
              </span>
            </a>
            <a
              className="lg:px-4 lg:py-2 lg:border-l  border-blue-800 group"
              href="https://web.facebook.com/jassspro"
              target="_blank"
            >
              <Facebook className="text-blue-800 mb-2 group-hover:text-blue-600 text-2xl" />
              <span className="text-blue-800 group-hover:text-blue-600  lg:text-base text-sm">
                Facebook
              </span>
            </a>

            <a
              className="lg:px-4 lg:py-2 lg:border-l  border-black group"
              href="https://www.tiktok.com/@jassspro"
              target="_blank"
            >
              <FaTiktok className="text-black mb-2 group-hover:text-gray-700 text-2xl" />
              <span className="text-black group-hover:text-gray-700  lg:text-base text-sm">
                Tiktok
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
