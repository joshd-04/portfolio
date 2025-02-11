'use client';

import userProfile from '@/edit_this_data/userProfile';
import { Testimonial } from '@/definitions';
import Image from 'next/image';
import { CSSProperties, Suspense, useState } from 'react';

import React from 'react';
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useIsBreakpointMet from '@/hooks/useIsBreakpointMet';

function Stars({
  numberOfStars,
  isMdBreakpointMet,
}: {
  numberOfStars: number;
  isMdBreakpointMet: boolean | undefined;
}) {
  return (
    <div className="flex flex-row gap-0">
      {Array.from({ length: numberOfStars }).map((_, i) => (
        <Image
          src="/home/star.png"
          alt="Golden star"
          width={isMdBreakpointMet ? 30 : 20}
          height={isMdBreakpointMet ? 30 : 20}
          key={i}
        />
      ))}
    </div>
  );
}

interface CustomArrowProps {
  style?: CSSProperties;
  onClick?: () => void;
  leftOrRight: 'left' | 'right';
}

export function CustomArrow({ style, onClick, leftOrRight }: CustomArrowProps) {
  const isMdBreakpointMet = useIsBreakpointMet().medium;

  if (!isMdBreakpointMet)
    return (
      <button className="w-0 h-0 hidden" aria-hidden onClick={onClick}></button>
    );

  return (
    <button
      className="w-16 h-16 bg-slate-950 text-[#059DD9] z-20  rounded-full text-2xl font-extrabold hover:text-white hover:bg-gray-950 transition-all absolute top-[50%] translate-y-[-50%] right-0 scale-[0.5]  lg:scale-[1] shadow-2xl outline outline-1 outline-gray-700"
      style={{
        ...style,
        left: leftOrRight == 'left' ? '-5rem' : undefined,
        right: leftOrRight == 'right' ? '-5rem' : undefined,
      }}
      onClick={onClick}
    >
      {leftOrRight === 'left' ? <span>&larr;</span> : <span>&rarr;</span>}
    </button>
  );
}

function TestimonialCard({
  testimonial,
  isMdBreakpointMet,
}: {
  testimonial: Testimonial;
  isMdBreakpointMet: boolean | undefined;
}) {
  return (
    // <div className="w-[90%] bg-gray-950 hover:bg-gray-950/90 transition-colors outline outline-2 outline-[#059DD9] my-2 mx-auto rounded-xl text-white flex flex-col justify-evenly items-center px-4 pt-6 pb-4 md:px-8 md:pt-12 md:pb-8 gap-2 md:gap-8 aspect-[86/37] ">
    <div className="w-[90%] bg-gray-950 hover:bg-gray-950/90 transition-colors outline outline-2 outline-[#059DD9] my-2 mx-auto rounded-xl text-white flex flex-col justify-evenly items-center px-4 pt-6 pb-4 md:px-8 md:pt-12 md:pb-8 gap-2 md:gap-8 aspect-[86/37] ">
      <div className="z-10 drop-shadow-[0_0_5px_rgb(255,215,0)]">
        <Stars
          numberOfStars={testimonial.numberOfStarsRating}
          isMdBreakpointMet={isMdBreakpointMet}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Suspense fallback={<div className="w-[2.5] h-[2.5] bg-red-500"></div>}>
          <Image
            src="/home/singlequote.png"
            width={isMdBreakpointMet ? 40 : 20}
            height={isMdBreakpointMet ? 40 : 20}
            alt="Orange quote marks"
            className="z-10 drop-shadow-[0_0_5px_rgb(249,115,22)] "
          />
        </Suspense>

        <blockquote className="text-xs md:text-xl italic text-center pr-2 mt-3 ">
          {`${testimonial.review}"`}
        </blockquote>
      </div>
      <div className="flex flex-row gap-4 justify-center items-center w-full grow-0 shrink-0 ">
        <Suspense fallback={<div className="w-[3.75] h-[3.75] "></div>}>
          <Image
            src={testimonial.personsImageURL}
            alt={`${testimonial.personsName}`}
            width={isMdBreakpointMet ? 60 : 30}
            height={isMdBreakpointMet ? 60 : 30}
            className="rounded-full aspect-square m-2 mr-0 md:m-0 self-auto h-auto w-auto"
          />
        </Suspense>
        <div className="flex flex-col justify-center">
          <p className="text-sm md:text-xl">{testimonial.personsName}</p>
          <p className="text-xs md:text-sm text-gray-300">
            {testimonial.personsRole}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const isMdBreakpointMet = useIsBreakpointMet().medium;

  let settings: Settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots',
    prevArrow: <CustomArrow leftOrRight="left" />,
    nextArrow: <CustomArrow leftOrRight="right" />,
    customPaging: (i: number) => (
      <div
        className="w-2.5 h-2.5 rounded-full bg-[#059DD9]  transition-all hover:bg-white mt-5 opacity-20 hover:opacity-100"
        style={{ opacity: i === testimonialIndex ? '1' : undefined }}
      ></div>
    ),
    afterChange: (i: number) => setTestimonialIndex(i),
    pauseOnHover: true,
  };

  settings = { ...settings, speed: isMdBreakpointMet ? 1000 : 600 };

  if (userProfile.testimonials.length === 0) return <></>;

  return (
    <div
      id="testimonials"
      className="flex flex-col justify-center items-center align-middle mt-24 w-full relative"
    >
      <h1 className="text-3xl md:text-4xl text-white font-bold mb-2">
        Still not convinced?
      </h1>
      <h2 className="text-xl md:text-2xl text-gray-300 font-medium px-8 lg:px-0 text-center">
        See why people{' '}
        <span className="bg-red-600 px-2 py-1 rounded-lg selection:bg-white selection:text-red-600 text-gray-200 font-bold">
          love
        </span>{' '}
        working with me:
      </h2>

      <div className="w-full mt-12 flex flex-row justify-center items-center gap-8">
        <div className="relative w-[80%] lg:w-[50%] drop-shadow-2xl text-white ">
          <Slider {...settings}>
            {userProfile.testimonials.map((t, i) => {
              return (
                <TestimonialCard
                  testimonial={t}
                  key={i}
                  isMdBreakpointMet={isMdBreakpointMet}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
