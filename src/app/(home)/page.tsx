'use client';
import WhoAmI from './whoAmI';
import BestProjects from './bestProjects';
import ContactMe from './contactMe';
import TestimonialSection from './testimonialSection';
import TopSection from './topSection';
import MySkills from './mySkills';

export default function Page() {
  return (
    <div className="h-max">
      {/* <NameAndSkills whoAmIRef={whoAmIRef} /> */}
      <TopSection />

      <div>
        <MySkills />
      </div>
      <div>
        <BestProjects />
      </div>
      <div>
        <WhoAmI />
      </div>
      <div>
        <TestimonialSection />
      </div>
      <div>
        <ContactMe />
      </div>
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
