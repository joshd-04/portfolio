'use client';
import BlinkingCursor from '@/components/blinkingCursor';
import Image from 'next/image';
import MasteryGraph from '@/components/masteryGraph';
import { useRef } from 'react';
import WhoAmI from './whoAmI';
import userProfile from '@/edit_this_data/userProfile';
import BestProjects from './bestProjects';
import ContactMe from './contactMe';
import { Typewriter } from 'react-simple-typewriter';
import TestimonialSection from './testimonialSection';

export default function Page() {
  const whoAmIRef = useRef<HTMLDivElement | null>(null);
  function scrollToWhoAmI() {
    if (whoAmIRef.current) {
      whoAmIRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="h-max">
      <div className="pt-16 md:pt-24 min-h-max md:h-[100dvh] ">
        <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-20 lg:gap-30 ">
          <div className="text-white w-[100dvw] place-items-center">
            <p className="text-gray-300 text-lg">Hi, my name is</p>
            <h1 className="text-7xl md:text-9xl uppercase font-bold">
              {userProfile.firstName}
              <br />
              {userProfile.lastName}
              <BlinkingCursor />
            </h1>
            <h2 className="text-orange-500 text-xl md:text-3xl font-semibold pt-6 selection:text-orange-500 relative max-w-full place-self-center">
              <Typewriter
                words={userProfile.typewriterText}
                loop
                cursor
                typeSpeed={100}
                cursorStyle={'_'}
              />
            </h2>

            {/* <QuickButtons /> */}
          </div>
          {/* <div className="">
          <p className="text-gray-300 text-xl w-96">
            (not sure what to put here so here are some quick links{' '}
            <span className="line-through">:joy:</span>)
          </p>
          <QuickButtons />
        </div> */}
          <div className="w-[100dvw] h-[50dvh] flex flex-col justify-start align-middle items-center gap-4 lg:gap-0  ">
            <p className="text-gray-300 text-lg md:text-2xl lg:text-lg mb-[-5rem] md:mb-4 text-center inline-block">
              These are my favourite tools
            </p>
            <div className="w-full h-[50%] place-items-center ">
              <MasteryGraph />
            </div>
          </div>
        </div>
        {/* downward pointing arrow bouncing */}
        <div className="hidden lg:block">
          <div className="place-self-center md:left-[50%] md:top-[95%] animate-bounce md:absolute z-40">
            <Image
              src="/home/down_arrow_white.png"
              alt="Bouncing arrow pointing downwards"
              width={50}
              height={50}
              onClick={scrollToWhoAmI}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div ref={whoAmIRef} id="who-am-i" className="pt-0 lg:pt-12">
        <WhoAmI />
      </div>
      <BestProjects />
      <TestimonialSection />
      <ContactMe />
      {/* <div>
        <div className="mt-16 ml-64">
          <p className="text-gray-300 text-xl mb-4 pl-6">
            A breif summary of my skills:
          </p>
          <SkillsTable />
        </div>
      </div> */}
    </div>
  );
}
