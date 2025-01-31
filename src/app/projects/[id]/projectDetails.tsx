import { CustomArrow } from '@/app/(home)/testimonialSection';
import SkillTab from '@/components/skillsTab';
import { Project } from '@/definitions';
import { Url } from 'next/dist/shared/lib/router/router';
import Image from 'next/image';
import Link from 'next/link';

import { ReactNode, useEffect, useState } from 'react';
import Slider, { Settings } from 'react-slick';

function QuickLinkButton({
  href,
  children,
}: {
  href: Url;
  children: ReactNode;
}) {
  // sm: 640 md: 768 lg: 1024 xl: 1280 2xl: 1536
  const [isMdBreakpointMet, setIsMdBreakpointMet] = useState<
    boolean | undefined
  >(undefined);
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    function handleResize(e: Event) {
      if (e.target && typeof window !== 'undefined') {
        const target = e.target as Window;
        setWindowWidth(target.outerWidth);
      }
    }
    if (windowWidth === undefined && typeof window !== 'undefined') {
      setWindowWidth(window.screen.width);
    }
    if (typeof window !== 'undefined' && windowWidth !== undefined) {
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, [windowWidth]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMdBreakpointMet(window.matchMedia('(min-width: 768px)').matches);
    }
  }, [windowWidth]);

  if (typeof children === 'string') {
    if (children === 'github') {
      return (
        <Link
          href={href}
          className="px-2 py-2 hover:bg-black/20 rounded-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/home/github.png"
            alt="GitHub logo"
            width={isMdBreakpointMet ? 30 : 21}
            height={isMdBreakpointMet ? 30 : 21}
          />
        </Link>
      );
    }
    if (children === 'website') {
      return (
        <Link
          href={href}
          className="px-2 py-2 hover:bg-black/20 rounded-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/home/open in new.png"
            alt="Open in new tab"
            width={isMdBreakpointMet ? 30 : 21}
            height={isMdBreakpointMet ? 30 : 21}
          />
        </Link>
      );
    }
  }
  return (
    <Link
      href={href}
      className="px-2 text-sm md:text-base rounded-lg hover:bg-black/20 flex flex-row justify-center items-center gap-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <Image
        src="/home/open in new.png"
        alt="Open in new tab"
        width={isMdBreakpointMet ? 20 : 14}
        height={isMdBreakpointMet ? 20 : 14}
      />
    </Link>
  );
}

export default function ProjectDetails({ project }: { project: Project }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isMdBreakpointMet, setIsMdBreakpointMet] = useState<
    boolean | undefined
  >(undefined);
  // sm: 640 md: 768 lg: 1024 xl: 1280 2xl: 1536

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMdBreakpointMet(window.matchMedia('(min-width: 768px)').matches);
    }
  }, []);
  let settings: Settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots ',
    prevArrow: <CustomArrow leftOrRight="left" />,
    nextArrow: <CustomArrow leftOrRight="right" />,
    customPaging: (i: number) => (
      <div
        className="w-2.5 h-2.5 rounded-full bg-orange-500  transition-all hover:bg-white mt-5 opacity-20 hover:opacity-100"
        style={{ opacity: i === activeImageIndex ? '1' : undefined }}
      ></div>
    ),
    afterChange: (i: number) => setActiveImageIndex(i),
    // pauseOnHover: true,
  };

  settings = { ...settings, speed: isMdBreakpointMet ? 1000 : 600 };

  const quickLinks = project.quickLinks.map((quickLink, i) => (
    <QuickLinkButton key={i} href={quickLink.externalURL}>
      {quickLink.title}
    </QuickLinkButton>
  ));

  return (
    <div className="text-white w-full mb-12 md:mb-20">
      <div className="w-[full] h-[20dvh] md:h-[30dvh] lg:h-[35dvh] mb-4 relative">
        <Image
          src={project.bannerImgURL || project.previewImgURL}
          alt="banner"
          height={300}
          width={300}
          className="absolute top-0 left-0 w-full h-full object-cover blur-sm brightness-[0.5] z-[-10] mask-image-linear-gradient"
          style={{
            maskImage:
              'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%)',
          }}
        />
        <div className="w-[80%] h-full md:w-[60%] lg:w-[40%] mx-auto py-3 md:py-6 flex flex-col justify-end items-start ">
          <h1 className="font-bold text-2xl md:text-5xl drop-shadow-[5px_5px_7px_rgb(0,0,0)] selection:bg-blue-600">
            {project.title}
          </h1>
          <div
            className="w-24 h-2"
            style={{ backgroundColor: project.projectAccentColor }}
          ></div>
        </div>
      </div>
      <div className="w-[80%] md:w-[60%] lg:w-[40%] mx-auto place-items-start">
        <div className="w-full flex flex-row justify-between items-center mb-5">
          <p className="text-xs md:text-base text-gray-400">
            {project.projectDate.getDate().toString().padStart(2, '0')}/
            {(project.projectDate.getMonth() + 1).toString().padStart(2, '0')}/
            {project.projectDate.getFullYear()}
          </p>
          <div className="flex flex-row gap-2">{quickLinks}</div>
        </div>
        <div className="w-full mb-4">
          <h2 className="text-lg md:text-2xl font-bold mb-2">
            Project summary
          </h2>
          <p className="text-sm md:text-lg/6 font-light">{project.summary}</p>
        </div>
        <div className="mb-4 w-full">
          <h2 className="text-lg md:text-2xl font-bold mb-2">Tech stack</h2>
          <div className="bg-black/80 outline outline-2 outline-black rounded-md flex flex-row flex-wrap gap-x-2 gap-y-1 max-w-full w-max py-2 px-2 ">
            {project.skillsUsed.map((skill, i) => (
              <SkillTab skill={skill} key={i} />
            ))}
          </div>
        </div>
        {project.imageSliderURLs && project.imageSliderURLs.length > 0 && (
          <div className="w-full ">
            <h2 className="text-lg md:text-2xl font-bold mb-2 md:mb-5">
              Images
            </h2>
            <Slider {...settings}>
              {project.imageSliderURLs.map((sliderImage, i) => (
                <Image
                  src={sliderImage.imageURL}
                  alt={sliderImage.alt}
                  className="w-[full] md:max-h-[20rem] lg:max-h-[25rem] object-contain"
                  height={sliderImage.height}
                  width={sliderImage.width}
                  key={i}
                />
              ))}
            </Slider>
          </div>
        )}
        <div className="mt-8 md:mt-12 lg:mt-20 w-full">
          {project.description.map((section, i) => (
            <div className="w-full mb-4 md:mb-8" key={i}>
              <h2 className="text-lg md:text-2xl font-bold mb-1">
                {section.sectionName}
              </h2>
              <div className="w-full text-base/2 text-sm md:text-lg/6 font-light">
                {section.body}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-2">{quickLinks}</div>
      </div>
    </div>
  );
}
