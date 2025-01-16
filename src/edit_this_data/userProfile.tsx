'use client';
import { UserProfile } from '@/definitions';

const userProfile: UserProfile = {
  firstName: 'Josh',
  lastName: 'Dyal',
  // profilePictureURL: '/edit_these_assets/me/pfp.png',
  profilePictureURL: '/edit_these_assets/me/me.png',
  typewriterText: [
    'An aspiring software engineer',
    "Let's work together!",
    'Hire me :)',
  ],
  email: 'joshdyal04@gmail.com',
  githubURL: 'https://github.com/joshd-04',
  whoAmIJSX: (
    <div
      className="flex flex-col gap-2 md:gap-4"
      style={{
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      <p className="">
        I&apos;m an eager software engineer with vast experience in full-stack
        web development.
      </p>
      <p className="">
        My passion for programming started when I wrote my first HTML page aged
        12, since then I spent 5 years learning numerous languages and
        frameworks to give me a range of tools to work from, whilst creating
        small projects along the way.
      </p>
      <p className="">
        Currently I am working on building up my portfolio with impressive
        projects using various technologies to practice different skills and
        give me more experience.
      </p>
      <p className="">
        I aspire to become a blockchain developer in the future, delivering next
        generation security in the projects and software I write.
      </p>
      <p className="">
        When I&apos;m not coding, you&apos;ll find me watching football,
        watching car-related content, or keeping fit through weight-lifting or
        playing football
      </p>
      <p className="">
        I&apos;m always open to new opportunities and exciting projects, feel
        free to contact me 🙂
      </p>
    </div>
  ),
  // [
  //   "Hi, I'm an eager software engineer with heavy experience in front-end and back-end web development.",
  //   'I aspire to become a blockchain developer in the future, delivering next generation security in the projects and software I write.',
  // ],
  testimonials: [
    {
      personsName: 'Mark Taylor',
      personsImageURL: '/edit_these_assets/testimonials/pfp.png',
      personsRole: 'CEO, TechStartup',
      numberOfStarsRating: 5,
      review:
        'John Doe exceeded my expectations! Their attention to detail and coding expertise brought our project to life seamlessly. Highly recommended!',
    },
    {
      personsName: 'Jane Smith',
      personsImageURL: '/edit_these_assets/testimonials/pfp.png',
      personsRole: 'Software Engineer, TechNova Solutions',
      numberOfStarsRating: 5,
      review:
        'John Doe went above and beyond my expectations! Their precision and coding skills turned our project into a flawless success. I couldn’t recommend them more highly.',
    },
    {
      personsName: 'Michael Brown',
      personsImageURL: '/edit_these_assets/testimonials/pfp.png',
      personsRole: 'Project Manager, InnovateCorp',
      numberOfStarsRating: 5,
      review:
        'Working with John Doe was a fantastic experience. Their sharp eye for detail and exceptional coding abilities made our project come together effortlessly. Truly a professional I would recommend to anyone!',
    },
    {
      personsName: 'Emily Davis',
      personsImageURL: '/edit_these_assets/testimonials/pfp.png',
      personsRole: 'CTO, CodeCraft Systems',
      numberOfStarsRating: 5,
      review:
        'John Doe’s expertise and meticulous approach to coding were outstanding. They delivered a seamless result that exceeded all my expectations. Highly endorse their work!',
    },
  ],
};
export default userProfile;
