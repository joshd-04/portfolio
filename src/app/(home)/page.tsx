'use client';
import BlinkingCursor from '@/components/blinkingCursor';
import SkillsTable from '@/components/skillsTable';
import QuickButtons from './quickButtons';
import Image from 'next/image';
import MasteryGraph from '@/components/masteryGraph';
import { useEffect, useRef, useState } from 'react';
import WhoAmI from './whoAmI';
import { userProfile } from '@/data';
import Link from 'next/link';
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
      <div className="h-[100dvh] pt-32">
        <div className="flex flex-row justify-center gap-44">
          <div className="text-white ">
            <p className="text-gray-300 text-lg">Hi, my name is</p>
            <h1 className="text-9xl uppercase font-bold">
              {userProfile.firstName}
              <br />
              {userProfile.lastName}
              <BlinkingCursor />
            </h1>
            <h2 className="text-orange-500 text-3xl font-semibold pt-6 selection:text-orange-500 w-[30dvw] ">
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
          <div className="">
            <p className="text-gray-300 text-lg mb-4  text-center">
              These are my favourite tools
            </p>
            <MasteryGraph />
          </div>
        </div>
        {/* downward pointing arrow bouncing */}
        <div className="place-self-center left-[50%] top-[95%] animate-bounce absolute">
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
      <div ref={whoAmIRef} className="pt-16 ">
        <WhoAmI />
      </div>
      <BestProjects />
      <TestimonialSection />
      <ContactMe />
      <div>
        <div className="mt-16 ml-64">
          <p className="text-gray-300 text-xl mb-4 pl-6">
            A breif summary of my skills:
          </p>
          <SkillsTable />
        </div>
      </div>
    </div>
  );
}
