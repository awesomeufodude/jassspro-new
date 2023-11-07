import Image from 'next/image'
import { Instagram, Facebook } from 'lucide-react';
import {FaTiktok} from "react-icons/fa";
import {SiOnlyfans} from "react-icons/si";
import Link from 'next/link'

import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Jassspro',
  description: 'Free & open-source text similarity API',
}

export default function Home() {
  return (
    <section className="relative">
      <img
        src="/jassspro.jpg"
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
          <h1 className="text-white text-[50px] font-normal uppercase">
            Jassspro
          </h1>
          <div className="flex items-center gap-4 mt-16 flex-wrap">
            <a
              href="https://www.instagram.com/jassspro"
              target="_blank"
              className="px-4 py-2 border-l border-gray-400 group"
            >
              <Instagram
                className="text-white mb-2 group-hover:text-jassspro-pink"
                size={24}
              />
              <span className="text-gray-400 group-hover:text-jassspro-pink">
                Instagram
              </span>
            </a>
            <a
              className="px-4 py-2 border-l border-gray-400 group"
              href="https://web.facebook.com/jassspro"
              target="_blank"
            >
              <Facebook
                className="text-white mb-2 group-hover:text-jassspro-pink"
                size={24}
              />
              <span className="text-gray-400 group-hover:text-jassspro-pink">
                Facebook
              </span>
            </a>
            <a
              className="px-4 py-2 border-l border-gray-400 group"
              href="https://onlyfans.com/jassspro"
              target="_blank"
            >
              <SiOnlyfans
                className="text-white mb-2 group-hover:text-jassspro-pink"
                size={24}
              />
              <span className="text-gray-400 group-hover:text-jassspro-pink">
                Onlyfans
              </span>
            </a>
            <a
              className="px-4 py-2 border-l border-gray-400 group"
              href="https://www.tiktok.com/@jassspro"
              target="_blank"
            >
              <FaTiktok
                className="text-white mb-2 group-hover:text-jassspro-pink"
                size={24}
              />
              <span className="text-gray-400 group-hover:text-jassspro-pink">
                Tiktok
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
