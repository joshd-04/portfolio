import BlueGradientText from '@/components/blueGradientText';
import DownwardBouncingArrow from '@/components/downwardBouncingArrow';
import userProfile from '@/edit_this_data/userProfile';
import Image from 'next/image';
import React from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: ['300'] });

export default function WhoAmI() {
  return (
    <div className="w-full  mt-48" id="who-am-i">
      <div className="mt-0 md:mt-32 lg:mt-24 xl:mt-16 flex flex-col justify-center items-center min-h-[80dvh] h-auto relative bottom-[50px] ">
        <div
          id="who-am-i-container"
          className="w-[90%] md:w-[60%] place-self-center flex flex-col lg:flex-row flex-grow-0 justify-center items-stretch gap-0 lg:gap-16 relative py-8 pb-12 lg:py-16 bg-zinc-900 rounded-xl px-12 outline outline-2 outline-gray-700 mx-auto"
        >
          {/* <div className="w-[90%] md:w-[60%] place-self-center flex flex-col lg:flex-row flex-grow-0 justify-center items-stretch gap-0 lg:gap-16 relative py-8 pb-12 lg:py-16 bg-zinc-900 rounded-xl px-12 outline outline-2 outline-gray-700 mx-auto after:absolute after:w-full after:h-full after:bg-[#059DD9] after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:blur-lg after:animate-pulse after:z-[-1]"> */}
          <div className=" flex flex-col justify-center items-center rounded-s-xl ">
            <Image
              src={userProfile.profilePictureURL}
              alt={`An image of ${userProfile.firstName} ${userProfile.lastName}`}
              width={200}
              height={200}
              className="rounded-full ring-2 ring-[white] aspect-square shadow-xl scale-[0.5] lg:scale-[1]"
            />
          </div>
          <div className="lg:w-[40vw] px-1 lg:px-0 text-left ">
            <div className="mb-4">
              <h1 className="text-4xl text-white   text-center lg:text-left font-black">
                <BlueGradientText style={{ fontWeight: 900 }}>
                  Who
                </BlueGradientText>{' '}
                am I?
              </h1>
              <p className="text-base text-gray-400 font-normal mb-2 text-center lg:text-left">
                A little more about me...
              </p>
            </div>
            <div
              className={`text-gray-200 text-sm  md:text-lg/6 min-h-48 ${roboto.className}`}
            >
              {userProfile.whoAmIJSX}
            </div>
          </div>
        </div>
      </div>

      {/* downward pointing arrow bouncing */}
      <DownwardBouncingArrow elementId="featured-projects" />
    </div>
  );
}
