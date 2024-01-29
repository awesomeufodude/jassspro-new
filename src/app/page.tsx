import { Instagram, Facebook, Verified } from 'lucide-react';
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
    <section className=" bg-[url('/Si-1.jpg')] bg-no-repeat bg-cover bg-center min-h-screen">
      {/* <div className="absolute w-full z-10 pt-10 px-8">
        <Header />
      </div> */}
      <div className="w-full h-screen flex flex-col lg:justify-between justify-evenly p-4">
        <div className="flex items-center justify-center flex-col">
          <div className="flex items-center gap-1 bg-white border-2 border-blue-500  rounded-full py-1 px-3">
            <Verified className="text-blue-500 text-sm" />
            <h1 className="text-blue-500 font-semibold text-sm">
              Verified
            </h1>
          </div>
          <img
            src="/avengers.png"
            alt="avengers"
            className="w-20 h-20 rounded-full object-cover mt-3"
          />
          <h1 className="text-white text-5xl font-bold mt-3">
            JASSSPRO
          </h1>
          <h1 className="text-white text-2xl font-semibold mt-3">
            Cosplayer & Model
          </h1>
        </div>
        <div className="px-5">
          {/*<a
            href="https://onlyfans.com/jassspro"
            target="_blank"
            rel="noopener"
          >
            <div className="flex items-center justify-center gap-2 bg-white rounded-full py-2 px-4 mx-3 my-3 lg:max-w-md lg:mx-auto relative">
              <SiOnlyfans className="text-blue-500 text-2xl absolute left-5" />
              <span className="text-blue-500 text-lg font-semibold">
                Onlyfans
              </span>
            </div>
          </a>*/}
          <a
            href="https://www.instagram.com/jassspro"
            target="_blank"
            rel="noopener"
          >
            <div className="flex items-center justify-center gap-2 bg-white rounded-full py-2 px-4 mx-3 my-3 lg:max-w-md lg:mx-auto relative">
              <Instagram className="text-fuchsia-600 text-2xl absolute left-5" />
              <span className="text-fuchsia-600 text-lg font-semibold">
                Instagram
              </span>
            </div>
          </a>
          <a
            href="https://web.facebook.com/jassspro"
            target="_blank"
            rel="noopener"
          >
            <div className="flex items-center justify-center gap-2 bg-white rounded-full py-2 px-4 mx-3 my-3 lg:max-w-md lg:mx-auto relative">
              <Facebook className="text-blue-800  text-2xl absolute left-5" />
              <span className="text-blue-800 text-lg font-semibold">
                Facebook
              </span>
            </div>
          </a>
          <a
            href="https://www.tiktok.com/@jassspro"
            target="_blank"
            rel="noopener"
          >
            <div className="flex items-center justify-center gap-2 bg-white rounded-full py-2 px-4 mx-3 my-3 lg:max-w-md lg:mx-auto relative">
              <FaTiktok className=" text-jassspro-pink text-xl absolute left-5" />
              <span className="text-jassspro-pink text-lg font-semibold">
                Tiktok
              </span>
            </div>
          </a>
        </div>
      </div>
      {/* <div className="flex justify-center items-center w-full h-screen">
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
      </div> */}
    </section>
  );
}
