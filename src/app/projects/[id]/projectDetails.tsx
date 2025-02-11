import { CustomArrow } from '@/app/(home)/testimonialSection';
import QuickLinkButton from '@/components/quickLinkButton';
import { Project } from '@/definitions';
import useIsBreakpointMet from '@/hooks/useIsBreakpointMet';
import Image from 'next/image';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

import { useState } from 'react';
import Slider, { Settings } from 'react-slick';

export default function ProjectDetails({ project }: { project: Project }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const isMdBreakpointMet = useIsBreakpointMet().medium;

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
        className="w-2.5 h-2.5 rounded-full bg-[#059DD9]  transition-all hover:bg-white mt-5 opacity-20 hover:opacity-100"
        style={{ opacity: i === activeImageIndex ? '1' : undefined }}
      ></div>
    ),
    afterChange: (i: number) => setActiveImageIndex(i),
    // pauseOnHover: true,
  };

  settings = { ...settings, speed: isMdBreakpointMet ? 1000 : 600 };

  const quickLinks = project.quickLinks.map((quickLink, i) => (
    <QuickLinkButton
      key={i}
      href={quickLink.externalURL}
      text={quickLink.text}
      customImageURL={quickLink.customImageUrl}
    />
  ));

  return (
    <div className="text-white w-full mb-12 md:mb-20">
      <div className="w-[full] h-[30dvh] md:h-[40dvh] lg:h-[50dvh] mb-4 relative">
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
            className="w-24 h-2  drop-shadow-[5px_5px_7px_rgb(0,0,0)]"
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
          <div className="bg-zinc-950 outline outline-1 outline-gray-500/50 rounded-md flex flex-row flex-wrap gap-x-4 gap-y-1 max-w-full w-max py-2 px-2 ">
            {project.skillsUsed.map((skill, i) => {
              return skill.smallImage ? (
                <Tippy
                  key={i}
                  content={skill.value}
                  theme="light"
                  placement="bottom"
                >
                  <Image
                    src={skill.smallImage.src}
                    width={isMdBreakpointMet ? 30 : 20}
                    height={isMdBreakpointMet ? 30 : 20}
                    alt={skill.value}
                    className="object-contain"
                  />
                </Tippy>
              ) : null;
            })}
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
                  className="w-auto md:max-h-[20rem] lg:max-h-[25rem] object-contain"
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
