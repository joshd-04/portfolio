'use client';
import { useRef } from 'react';
import WhoAmI from './whoAmI';
import BestProjects from './bestProjects';
import ContactMe from './contactMe';
import TestimonialSection from './testimonialSection';
import NameAndSkills from './nameAndSkills';

export default function Page() {
  const whoAmIRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="h-max">
      <NameAndSkills whoAmIRef={whoAmIRef} />
      <div
        ref={whoAmIRef}
        id="who-am-i"
        className="pt-0 md:pt-32 lg:pt-24 xl:pt-16"
      >
        <WhoAmI />
      </div>
      <BestProjects />
      <TestimonialSection />
      <ContactMe />
      {/* <div>
        <div className="mt-16 ml-64">
          <p className="text-gray-300 text-xl mb-4 pl-6">
            A breif summary of my skills:
          </p>
          <SkillsTable />
        </div>
      </div> */}
    </div>
  );
}
