'use client';

import { Project } from '@/definitions';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import useIsBreakpointMet from '@/hooks/useIsBreakpointMet';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

export default function ProjectPreview({
  project,
  i,
}: {
  project: Project;
  i: number;
}) {
  const odd = i % 2 != 0;

  const { medium: isMdBreakpointMet, xl: isXlBreakpointMet } =
    useIsBreakpointMet();
  const [isShowFullDescription, setIsShowFullDescription] = useState(false);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [opaqueProjectCard, setOpaqueProjectCard] = useState(false);

  useEffect(() => {
    if (isHoveringImage === true) {
      const timer = setTimeout(() => {
        setOpaqueProjectCard(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setOpaqueProjectCard(false);
    }
  }, [isHoveringImage]);

  return (
    <Link
      href={`/projects/${project.id}`}
      className="relative h-auto w-auto flex flex-col xl:flex-row xl:odd:flex-row-reverse xl:mb-24 shrink-0 grow-0 xl:justify-end  transition-all duration-500 selection:bg-blue-600 selection:text-white"
    >
      {/* <div className="hidden xl:flex relative before:absolute before:block  before:z-20 before:w-[calc(100%+20px)] before:h-[calc(100%+20px)] before:opacity-25 before:top-[-10px] before:left-[-10px] before:rounded-lg before:bg-conic before:from-red-500 before:to-transparent"> */}
      <Image
        src={project.previewImgURL}
        alt={`A preview image of ${project.title}`}
        width={527}
        height={400}
        className="rounded-lg hidden xl:flex brightness-[.75] hover:brightness-100 transition-[filter] duration-300 "
        onMouseEnter={() => setIsHoveringImage(true)}
        onMouseLeave={() => setIsHoveringImage(false)}
        style={{ objectFit: 'cover' }}
      />
      {/* </div> */}
      {/* className="w-[60%] h-max bg-gray-950 px-8 py-6 rounded-lg outline-black outline outline-2 mb-24 shadow-2xl absolute top:0 translate-y-[50%] selection:bg-white selection:text-gray-950 " */}

      <div
        className="w-full  mx-auto xl:mx-0 max-w-[500px] xl:max-w-none xl:w-[60%] h-max bg-gray-950 xl:px-8 xl:py-6 rounded-lg xl:mb-24 shadow-2xl xl:absolute xl:transform xl:top-[50%] xl:translate-y-[-50%] selection:bg-white selection:text-gray-950 md:hover:bg-[rgb(5,15,28)] md:transition-all md:duration-300 outline outline-2 outline-gray-700"
        style={{
          left: odd && isXlBreakpointMet ? 0 : undefined,
          right: odd && isXlBreakpointMet ? undefined : 0,
          opacity: opaqueProjectCard ? '0.2' : undefined,
          // opacity: isHoveringImage ? undefined : undefined,
        }}
      >
        <Image
          src={project.previewImgURL}
          alt={`A preview image of ${project.title}`}
          width={527}
          height={400}
          className="rounded-lg block h-auto w-full xl:hidden"
          style={{ objectFit: 'cover' }}
        />
        <div className="px-4 py-4 md:px-8 md:py-6 xl:px-0 xl:py-0">
          <div className="cursor-pointer">
            <h1 className="text-white text-xl md:text-2xl font-semibold mb-1">
              {project.title}
            </h1>
            <div
              className="w-24 h-1 mb-4"
              style={{ backgroundColor: project.projectAccentColor }}
            ></div>
            <p className="hidden xl:block text-gray-200 mb-2 text-sm md:text-base">
              {project.summary}
            </p>
            {isShowFullDescription ? (
              <p className="block xl:hidden text-gray-200 mb-2 text-sm md:text-base ">
                {project.summary}{' '}
                <button
                  className="font-semibold hover:underline text-[#059DD9]"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsShowFullDescription(false);
                  }}
                >
                  show less
                </button>
              </p>
            ) : (
              <p className="block xl:hidden text-gray-200 mb-2 text-sm md:text-base ">
                {project.summary.slice(0, 70)}...{' '}
                <button
                  className="font-semibold hover:underline text-[#059DD9]"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsShowFullDescription(true);
                  }}
                >
                  show more
                </button>
              </p>
            )}
          </div>
          <div className="flex flex-row flex-wrap gap-x-4 md:gap-x-4 gap-y-2 w-auto py-1">
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
                    onClick={(e) => e.preventDefault()}
                  />
                </Tippy>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </Link>
  );
}
