'use client';
import Image, { StaticImageData } from 'next/image';
import { Skill } from '@/definitions';
import userProfile from '@/edit_this_data/userProfile';

export default function SkillsMarquee() {
  const skillsToBeIncluded: Skill[] = userProfile.toolsIAmExperiencedWith;
  const icons = skillsToBeIncluded
    .map((skill: Skill) => skill.bigImage)
    .filter((image: StaticImageData | null) => image !== null);

  const elements = [...icons, ...icons];

  return (
    <div className="relative max-w-[300px] sm:max-w-[400px] lg:max-w-[800px] z-[-2] overflow-hidden whitespace-nowrap pt-4 before:absolute before:w-[20%] before:inset-y-0 before:bg-gradient-to-r before:from-black before:to-transparent before:z-10 before:left-[-10px] after:absolute after:w-[20%] after:inset-y-0 after:bg-gradient-to-l after:from-black after:to-transparent after:z-0 after:right-[-10px] ">
      <div
        className={`relative flex w-max animate-[marquee_linear_infinite]`}
        style={{
          animationDuration: `${skillsToBeIncluded.length}s`,
        }}
      >
        {elements.map((img, i) => (
          <Image
            key={i}
            src={img.src}
            width={500}
            height={500}
            alt="Image of skill"
            className="object-contain mr-8 xl:mr-16 h-8 md:h-12 lg:h-16 w-auto"
          />
        ))}
      </div>
    </div>
  );
}
