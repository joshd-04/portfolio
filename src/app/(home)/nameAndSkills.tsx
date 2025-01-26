import MasteryGraph from '@/components/masteryGraph';
import userProfile from '@/edit_this_data/userProfile';
import Image from 'next/image';
import BlinkingCursor from '@/components/blinkingCursor';
import { Typewriter } from 'react-simple-typewriter';
import { RefObject } from 'react';

export default function NameAndSkills({
  whoAmIRef,
}: {
  whoAmIRef: RefObject<HTMLDivElement | null>;
}) {
  function scrollToWhoAmI() {
    if (whoAmIRef.current) {
      whoAmIRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    // <div className="pt-16 md:pt-24 min-h-max md:h-[100dvh] flex flex-col gap-16">
    <div className="pt-16 md:pt-24 min-h-max md:h-[100dvh] flex flex-col justify-between">
      <div className="flex flex-col items-center xl:flex-row xl:justify-center gap-20 xl:gap-30 lg:px-16 xl:px-24 2xl:px-36 bg-blue-500">
        <div className="text-white w-[100dvw] flex flex-col justify-center items-center">
          <p className="text-gray-300 text-lg">Hi, my name is</p>
          <h1 className="text-7xl md:text-9xl uppercase font-bold">
            {userProfile.firstName}
            <br />
            {userProfile.lastName}
            <BlinkingCursor />
          </h1>
          <h2 className="text-orange-500 text-xl md:text-3xl font-semibold pt-6 selection:text-orange-500 relative max-w-full mx-auto">
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
        <div className="h-auto flex flex-col justify-start align-middle items-center gap-4 lg:gap-0">
          <p className="text-gray-300 text-lg md:text-2xl lg:text-lg mb-[-5rem] md:mb-4 text-center inline-block">
            These are my favourite tools
          </p>
          <div className="w-full h-[50%] place-items-center">
            <MasteryGraph />
          </div>
        </div>
      </div>
      {/* downward pointing arrow bouncing */}
      <div className="hidden xl:block bg-red-500 mx-auto">
        <div className=" md:left-[50%] md:top-[95%] animate-bounce md:absolute z-40">
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
  );
}
