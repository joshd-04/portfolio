import { userProfile } from '@/data';
import { Testimonial } from '@/definitions';
import Image from 'next/image';
import { CSSProperties, Suspense, useState } from 'react';

import React from 'react';
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Stars({ numberOfStars }: { numberOfStars: number }) {
  return (
    <div className="flex flex-row gap-0">
      {Array.from({ length: numberOfStars }).map((_, i) => (
        <Image
          src="/home/star.png"
          alt="Golden star"
          width={30}
          height={30}
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

function CustomArrow({ style, onClick, leftOrRight }: CustomArrowProps) {
  // sm: 640 md: 768 lg: 1024 xl: 1280 2xl: 1536

  if (typeof window !== undefined) {
    const isMdBreakpointMet = window.matchMedia('(min-width: 768px)').matches;
    if (!isMdBreakpointMet)
      return (
        <button
          className="w-0 h-0 hidden"
          aria-hidden
          onClick={onClick}
        ></button>
      );
  }

  return (
    <button
      className="w-16 h-16 bg-black text-orange-500 z-20  rounded-full text-2xl font-extrabold hover:text-white hover:bg-gray-950 transition-all absolute top-[50%] translate-y-[-50%] right-0 scale-[0.5]  lg:scale-[1] shadow-2xl"
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

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      className="w-[90%] bg-gray-950 hover:bg-gray-950/90 transition-colors outline outline-2 outline-black m-2 place-self-center rounded-xl text-white flex flex-col justify-evenly items-center px-8 pt-12 pb-8 gap-8 aspect-[86/37] "
      // style={{
      //   // transform: `translateX(-${1 * testimonialIndex}50%)`,
      //   opacity: testimonialIndex === cardIndex ? '1' : '0.2',
      // }}
    >
      <div className="z-10 drop-shadow-[0_0_5px_rgb(255,215,0)]">
        <Stars numberOfStars={testimonial.numberOfStarsRating} />
      </div>
      <div className="place-items-center">
        <Suspense fallback={<div className="w-[2.5] h-[2.5] bg-red-500"></div>}>
          <Image
            src="/home/singlequote.png"
            width={40}
            height={40}
            alt="Orange quote marks"
            className="z-10 drop-shadow-[0_0_5px_rgb(249,115,22)]"
          />
        </Suspense>

        <blockquote className="lg:text-xl italic text-center pr-2 mt-3 ">
          {`${testimonial.review}"`}
        </blockquote>
      </div>
      <div className="flex flex-row gap-4 justify-center w-full">
        <Suspense fallback={<div className="w-[3.75] h-[3.75] "></div>}>
          <Image
            src={testimonial.personsImageURL}
            alt={`${testimonial.personsName}`}
            width={60}
            height={60}
            className="rounded-full aspect-square m-2 mr-0 md:m-0"
          />
        </Suspense>
        <div className="flex flex-col justify-center">
          <p className="text-xl">{testimonial.personsName}</p>
          <p className="text-sm text-gray-300">{testimonial.personsRole}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  let settings: Settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots ',
    prevArrow: <CustomArrow leftOrRight="left" />,
    nextArrow: <CustomArrow leftOrRight="right" />,
    customPaging: (i: number) => (
      <div
        className="w-2.5 h-2.5 rounded-full bg-orange-500  transition-all hover:bg-white mt-5 opacity-20 hover:opacity-100"
        style={{ opacity: i === testimonialIndex ? '1' : undefined }}
      ></div>
    ),
    afterChange: (i: number) => setTestimonialIndex(i),
    pauseOnHover: true,
  };

  // sm: 640 md: 768 lg: 1024 xl: 1280 2xl: 1536
  if (typeof window !== undefined) {
    const isMdBreakpointMet = window.matchMedia('(min-width: 768px)').matches;
    settings = { ...settings, speed: isMdBreakpointMet ? 1000 : 600 };
  }

  if (userProfile.testimonials.length === 0) return <></>;

  return (
    <div
      id="testimonials"
      className="place-items-center align-middle my-16 w-full relative"
    >
      <h1 className="text-4xl text-white font-bold mb-2">
        Still not convinced?
      </h1>
      <h2 className="text-2xl text-gray-300 font-medium px-8 lg:px-0 text-center">
        See why people{' '}
        <span className="bg-red-600 px-2 py-1 rounded-lg selection:bg-white selection:text-red-600 text-gray-200 font-bold">
          love
        </span>{' '}
        working with me:
      </h2>

      <div className="w-full mt-12 flex flex-row justify-center items-center gap-8">
        <div className="place-self-center relative w-[80%] lg:w-[50%] drop-shadow-2xl">
          <Slider {...settings}>
            {userProfile.testimonials.map((t, i) => {
              return <TestimonialCard testimonial={t} key={i} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
