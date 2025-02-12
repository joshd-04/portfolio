import DownwardBouncingArrow from '@/components/downwardBouncingArrow';
import SkillsMarquee from '@/components/skillsMarquee';
import Image from 'next/image';
import BlueGradientText from '@/components/blueGradientText';
import userProfile from '@/edit_this_data/userProfile';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

export default function MySkills() {
  return (
    <div
      id="my-skills"
      className="w-full h-[100dvh] md:my-36 relative bottom-[50px]"
    >
      <div className="w-full h-[100dvh] flex flex-col justify-center items-center mt-[12rem] xl:mt-0 xl:pt-12">
        <div className="w-[75%] md:w-[50%] h-[50%] text-white text-2xl md:text-4xl font-semibold text-center ">
          <div className="flex flex-col justify-center items-center gap-6 md:gap-12 w-full h-full ">
            <div id="my-skills-2" className="flex flex-col gap-2 ">
              <p className="font-black">
                What I{' '}
                <BlueGradientText style={{ fontWeight: 900 }}>
                  excel
                </BlueGradientText>{' '}
                at
              </p>
              <p className="text-sm md:text-base text-gray-400 font-normal mb-[-0.5rem]">
                Tools I&apos;m experienced with
              </p>
              <SkillsMarquee />
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-black">
                Exploring &{' '}
                <BlueGradientText style={{ fontWeight: 900 }}>
                  expanding
                </BlueGradientText>
              </p>
              <p className="text-sm md:text-base text-gray-400 font-normal mb-2">
                I <span className="font-semibold text-gray-300">want</span> to
                get better at these
              </p>
              <div className="grid grid-cols-3 gap-x-4 md:gap-x-8 w-auto mx-auto ">
                {userProfile.threeSkillsIWantToImprove
                  .filter(
                    (skill) =>
                      skill.bigImage !== null && skill.smallImage !== null
                  )
                  .map((skill, i) =>
                    skill.bigImage && skill.smallImage ? (
                      <Tippy
                        key={i}
                        content={skill.value}
                        theme="light"
                        placement="bottom"
                      >
                        <Image
                          src={skill.bigImage.src}
                          width={500}
                          height={500}
                          alt={skill.value}
                          className="object-contain w-auto h-8 md:h-16"
                        />
                      </Tippy>
                    ) : null
                  )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-black">
                My work,{' '}
                <BlueGradientText style={{ fontWeight: 900 }}>
                  quantified
                </BlueGradientText>
              </p>
              <p className="text-sm md:text-base text-gray-400 font-normal">
                Because numbers speak louder than words
              </p>
              <div className="grid grid-cols-none grid-rows-3 lg:grid-rows-none lg:grid-cols-3 gap-4 lg:gap-8 w-full mx-auto font-normal mt-4">
                {userProfile.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="h-full text-white bg-zinc-900 py-4 px-4 grid grid-cols-[1fr_2fr] lg:flex lg:flex-col justify-start items-center gap-2 rounded-lg
                    drop-shadow-xl outline outline-2 outline-gray-700 text-5xl"
                  >
                    <div className="flex flex-col justify-center items-center">
                      <BlueGradientText
                        style={{
                          fontSize: '2.25rem',
                          lineHeight: '2.5rem',
                        }}
                      >
                        {stat.value}
                      </BlueGradientText>
                    </div>
                    <div className="w-full lg:w-min min-w-36 max-w-full">
                      <p className="text-sm md:text-base text-gray-300 text-left lg:text-center align-middle">
                        {/* The slicing on the name ensures the name doesn't wrap too many lines.
                        if it gets too long, it will conflict with the scrolling features */}
                        {stat.name.slice(0, 34)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* downward pointing arrow bouncing */}
      <DownwardBouncingArrow elementId="featured-projects" />
    </div>
  );
}
