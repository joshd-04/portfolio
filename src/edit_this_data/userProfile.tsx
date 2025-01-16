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
        I&apos;m an eager software engineer with most my experience being in
        full-stack web development.
      </p>
      <p className="">
        My passion for programming started when I wrote my first HTML page aged
        12, since then I spent 5 years learning 3+ languages and countless
        frameworks to give me a range of tools to work from, whilst creating
        small projects along the way.
      </p>
      <p className="">
        Currently I am working on building up my portfolio with impressive
        projects using various technologies to practice different skills and
        give me more experience.
      </p>
      <p className="">
        I aspire to become a blockchain developer in the future, as I am
        passionate about creating transparent and secure digital solutions.
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
      personsName: 'Computer Science Teacher',
      personsImageURL: '/edit_these_assets/testimonials/pfp.png',
      personsRole: 'Former GCSE Computer Science Teacher',
      numberOfStarsRating: 5,
      review:
        'Joshua is a very bright student, he has an incredible knowledge of Python and is proficient in using it to create all sorts of programs. He is inquisitive which is great for his learning and helps him make quick progress.',
    },
    {
      personsName: 'Computer Science Teacher',
      personsImageURL: '/edit_these_assets/testimonials/pfp.png',
      personsRole: 'Former GCSE Computer Science Teacher',
      numberOfStarsRating: 5,
      review:
        'Joshua is a very bright student, he has an incredible knowledge of Python and is proficient in using it to create all sorts of programs. He is inquisitive which is great for his learning and helps him make quick progress.',
    },
  ],
};
export default userProfile;
