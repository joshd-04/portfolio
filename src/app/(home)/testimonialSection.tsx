import { userProfile } from '@/data';
import { Testimonial } from '@/definitions';
import Image from 'next/image';
import { CSSProperties, JSX, useState } from 'react';

function Stars({ numberOfStars }: { numberOfStars: number }) {
  return (
    <div className="flex flex-row gap-0">
      {Array.from({ length: numberOfStars }).map((_, i) => (
        <p className="text-3xl" key={i}>
          ⭐
        </p>
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  ...stuff
}: {
  testimonial: Testimonial;
  style?: CSSProperties;
}) {
  return (
    <div
      className=" transition-all w-[40%] min-w-[40%]  bg-gray-950 outline outline-2 outline-black place-self-center rounded-xl text-white flex flex-col justify-evenly items-center px-8 pt-12 pb-8 gap-8 z-10"
      style={stuff.style || {}}
    >
      <div className="">
        <Stars numberOfStars={testimonial.numberOfStarsRating} />
      </div>
      <div className="place-items-center">
        <Image
          src="/home/singlequote.png"
          width={40}
          height={40}
          alt="Orange quote marks"
          className="z-10 drop-shadow-[0_0_5px_rgb(249,115,22)]"
        />

        <blockquote className="text-xl italic text-center  pr-2 mt-3 ">
          {`${testimonial.review}"`}
        </blockquote>
      </div>
      <div className="flex flex-row gap-4">
        <Image
          src={testimonial.personsImageURL}
          alt={`${testimonial.personsName}`}
          width={60}
          height={60}
          className="rounded-full"
        />
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
  const maxTestimonialIndex = userProfile.testimonials.length - 1;

  function moveSliderLeft() {
    if (testimonialIndex !== 0) setTestimonialIndex((prev) => prev - 1);
  }
  function moveSliderRight() {
    if (testimonialIndex !== maxTestimonialIndex)
      setTestimonialIndex((prev) => prev + 1);
  }

  if (userProfile.testimonials.length === 0) return <></>;

  return (
    <div className="place-items-center align-middle my-16 w-full  relative">
      <h1 className="text-4xl text-white font-bold mb-2">
        Still not convinced?
      </h1>
      <h2 className="text-2xl text-gray-300 font-medium">
        See why people{' '}
        <span className="bg-red-600 px-2 py-1 rounded-lg selection:bg-white selection:text-red-600 text-gray-200 font-bold">
          love
        </span>{' '}
        working with me:
      </h2>

      <div className="w-full mt-12 flex flex-row justify-center items-center gap-8">
        <div className="flex flex-row  place-self-center relative w-full ">
          {userProfile.testimonials.map((t, i) => (
            <TestimonialCard
              testimonial={t}
              key={i}
              style={{
                opacity: i == testimonialIndex ? '1' : '0.0',
                position: 'relative',
                transform: `translateX(50vw) translate(-${
                  1 * testimonialIndex
                }50%)`,
                willChange: 'transform',
              }}
            />
          ))}
        </div>
        {testimonialIndex !== 0 && (
          <button
            className="absolute w-16 h-16 bg-black text-orange-500  z-20 translate-x-[-25vw] rounded-full text-2xl font-extrabold hover:text-white hover:bg-gray-950 transition-all"
            onClick={moveSliderLeft}
          >
            &larr;
          </button>
        )}
        {testimonialIndex !== maxTestimonialIndex && (
          <button
            className="absolute w-16 h-16 bg-black text-orange-500  z-20 translate-x-[25vw] rounded-full text-2xl font-extrabold hover:text-white hover:bg-gray-950 transition-all"
            onClick={moveSliderRight}
          >
            &rarr;
          </button>
        )}
      </div>
    </div>
  );
}
