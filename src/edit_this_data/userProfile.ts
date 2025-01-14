import { UserProfile } from '@/definitions';

const userProfile: UserProfile = {
  firstName: 'Josh',
  lastName: 'Dyal',
  profilePictureURL: '/edit_these_assets/me/pfp.png',
  typewriterText: [
    'An aspiring software engineer',
    "Let's work together!",
    'Hire me :)',
  ],
  email: 'joshdyal04@gmail.com',
  githubURL: 'https://github.com/joshd-04',
  whoAmI:
    'I am HIM. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet exercitationem, quasi, assumenda illum sint voluptatem officiis repudiandae libero culpa consectetur quas quae, dolorum accusantium ea amet ab! Vitae, quasi est quam animi in quaerat accusamus. Quidem eligendi soluta odit provident cumque deserunt dignissimos! Dolore quaerat ipsam eos culpa ea laborum dolor temporibus expedita, ipsum fugit aut perspiciatis quam at esse excepturi praesentium dolores doloribus veniam velit placeat consequatur. Voluptatibus deserunt iste libero laboriosam officiis, voluptates rerum modi eligendi esse sunt provident ab officia non explicabo itaque illo similique. Doloremque tempore veritatis repellat culpa et, tempora repellendus praesentium nulla id porro?',
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
