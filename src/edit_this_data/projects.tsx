'use client';
import { Project } from '@/definitions';
import skills from './skills';

const projects: Project[] = [
  {
    id: 1,
    title: 'Custom Developer Portfolio',
    projectAccentColor: '#FFA500',
    summary:
      'A sleek and responsive NextJS web-app designed to showcase a developers skills, projects and achievements. It features a clean UI/UX design and optimised performance. This site is an impactful tool for networking and personal branding in the tech industry.',
    skillsUsed: [
      skills.TypeScript,
      skills.React,
      skills.NextJS,
      skills.TailwindCSS,
      skills.Vercel,
      skills.Git,
      skills.GitHub,
    ],
    // left side for odd id, right side for even id
    previewImgURL: `/edit_these_assets/projects/custom portfolio/custom portfolio left side v2.png`,
    bannerImgURL: undefined,
    imageSliderURLs: [
      {
        imageURL:
          '/edit_these_assets/projects/custom portfolio/scroller/name-mastery.png',
        alt: "Developer's name and mastery graph",
        width: 1920,
        height: 1080,
      },
      {
        imageURL:
          '/edit_these_assets/projects/custom portfolio/scroller/about.png',
        alt: 'About the developer section',
        width: 1920,
        height: 1080,
      },
      {
        imageURL:
          '/edit_these_assets/projects/custom portfolio/scroller/projects.png',
        alt: 'Projects listing',
        width: 1920,
        height: 1080,
      },
      {
        imageURL:
          '/edit_these_assets/projects/custom portfolio/scroller/testimonial.png',
        alt: 'Testimonial section',
        width: 1920,
        height: 1080,
      },
      {
        imageURL:
          '/edit_these_assets/projects/custom portfolio/scroller/project-details.png',
        alt: 'Details of project',
        width: 1920,
        height: 1080,
      },
    ],
    description: [
      {
        sectionName: 'The Purpose',
        body: (
          <div className="flex flex-col justify-center items-start gap-4">
            <p>
              The primary goal of this website is to act as a showcase of my
              development skills and the best projects that I undertake. It
              offers a dynamic and interactive space where visitors can get an
              insight into my technical expertise.
            </p>
            <p>
              This site serves as a living portfolio, where I continuously
              update and refine my work to reflect new skills, projects and
              experiences as I grow in my career. It&apos;s an essential tool
              for establishing and expanding my online presence.
            </p>
            <p>
              In today&apos;s digital world, it&apos;s crucial to have a
              centralised space where potential clients, employers and
              collaborators can easily find information about me, review my work
              and reach out for opportunities.
            </p>
          </div>
        ),
      },
      {
        sectionName: 'Features',
        body: (
          <div className="flex flex-col gap-4 ">
            <p>
              This responsive portfolio offers interactivity enticing visitors
              to explore more.
            </p>
            <p>
              The fully-responsive project preview design allows for a unique
              layout for desktop users, whilst smaller screens will see a more
              space-efficient layout.
            </p>
            <p>
              The testimonial slider is a great feature to express my abilities
              from the perspective of others I have worked with
            </p>
            <p></p>
          </div>
        ),
      },
    ],
    quickLinks: [
      {
        customImageUrl: '/home/github.png',
        externalURL: 'https://github.com/joshd-04/portfolio',
      },
    ],
    projectDate: new Date('01-16-2025'),
  },
  {
    id: 2,
    title: 'Timed Todo List',
    projectAccentColor: '#15FC15',
    summary:
      'A utility website aimed at assisting users complete chores and tasks within time limits. Time control functionality allows flexibility within your workflow, with a live countdown and status tab to keep you upto date across all your duties.',
    skillsUsed: [skills.TypeScript, skills.React, skills.CSS, skills.Netlify],
    // left side for odd id, right side for even id
    previewImgURL: `/edit_these_assets/projects/timed todo/timed todo right side.png`,
    bannerImgURL: undefined,
    imageSliderURLs: [
      {
        imageURL:
          '/edit_these_assets/projects/timed todo/scroller/task-creation.png',
        alt: 'Task creation (dark theme)',
        width: 1920,
        height: 1080,
      },
      {
        imageURL:
          '/edit_these_assets/projects/timed todo/scroller/task-in-progress.png',
        alt: 'Task in progress (dark theme)',
        width: 1920,
        height: 1080,
      },
      {
        imageURL:
          '/edit_these_assets/projects/timed todo/scroller/light-theme.png',
        alt: 'Website in light theme',
        width: 1920,
        height: 1080,
      },
    ],
    description: [
      {
        sectionName: 'The concept & motivation',
        body: (
          <div className="flex flex-col justify-center items-start gap-4">
            <p>
              Everyone knows that the traditional to-do list is the most
              effective way practice a framework, especially when you are just
              starting out. Having gained some experience through experimental
              projects, I decided to put my skills to the test by developing a
              todo application.
            </p>
            <p>
              Given that I was confident with how to implement the logic for a
              to-do list, I wanted to add a twist to this one. This is where the
              idea of timing came in.
            </p>
            <p>
              Many people struggle getting their jobs done on time, with the
              power of a todo list like mine, they should be able to complete
              their tasks with full focus.
            </p>
          </div>
        ),
      },
      {
        sectionName: 'Features',
        body: (
          <div className="flex flex-col gap-4 ">
            <p>
              The Timed Todo List has a detailed task creation system where the
              user can enter their task, a complimentary description of the task
              to remind themselves of the nitty gritty details, and finally, a
              time limit.
            </p>
            <p>
              As you would expect, the time limit that the user sets themselves
              for a particular task is the amount of time they have to get it
              done. To incorporate flexibility into the timing system, this
              web-app allows users to pause, resume and restart the timer incase
              their workflow was interrupted.
            </p>
            <p>
              To further re-iterate that the timing functionality is to help the
              user, not to restrict them, users can delete tasks regardless on
              whether they have finished the timer or not.
            </p>
            <p>
              This website also has a fully working light/dark mode toggle, and
              important control buttons are coloured to stand out regardless of
              what colour theme you prefer.
            </p>
          </div>
        ),
      },
    ],
    quickLinks: [
      {
        customImageUrl: '/home/github.png',
        externalURL: 'https://github.com/joshd-04/timed-todo-list',
      },
      { text: 'Website', externalURL: 'https://timed-todo.netlify.app' },
    ],
    projectDate: new Date('07-31-2024'),
  },
  {
    id: 3,
    title: 'ProActive',
    projectAccentColor: '#2DC0E9',
    summary:
      "A desktop app that enables people hosting sports sessions to share their passion with the world, letting users participate in the event, bringing life into their community sports events. It's unique recommendation algorithm makes use of content-filtering to give you events you didn't even know you liked!",
    skillsUsed: [
      skills.Python,
      skills.TKinter,
      skills.Flask,
      skills.PostMan,
      skills.PostgreSQL,
    ],
    // left side for odd id, right side for even id
    previewImgURL: `/edit_these_assets/projects/proactive/proactive left side.png`,
    bannerImgURL: undefined,
    imageSliderURLs: [
      {
        imageURL: '/edit_these_assets/projects/proactive/scroller/welcome.png',
        alt: 'Welcome screen',
        width: 1920,
        height: 1080,
      },
      {
        imageURL: '/edit_these_assets/projects/proactive/scroller/register.png',
        alt: 'Registration screen',
        width: 1920,
        height: 1080,
      },
      {
        imageURL: '/edit_these_assets/projects/proactive/scroller/home.png',
        alt: 'Home screen',
        width: 1920,
        height: 1080,
      },
      {
        imageURL: '/edit_these_assets/projects/proactive/scroller/search.png',
        alt: 'Search screen',
        width: 1920,
        height: 1080,
      },
      {
        imageURL:
          '/edit_these_assets/projects/proactive/scroller/my events past mine.png',
        alt: 'My events - previously created by me',
        width: 1920,
        height: 1080,
      },
      {
        imageURL:
          '/edit_these_assets/projects/proactive/scroller/my events past.png',
        alt: 'My events - previously participated',
        width: 1920,
        height: 1080,
      },
    ],
    description: [
      {
        sectionName: 'Important note',
        body: (
          <div className="flex flex-col justify-center items-start gap-4">
            <p>
              This project was made as part of school course work in a short
              time frame, some features of the app are unfinished. The main
              concept of the app was developed, and majority of the features.
            </p>
            <p>The GitHub readme expands on this more.</p>
          </div>
        ),
      },
      {
        sectionName: 'The problem',
        body: (
          <div className="flex flex-col justify-center items-start gap-4">
            <p>
              We live in a world where eating processed foods is easier than
              ever and is a major factor that contributes to being overweight or
              out of shape. People have two options to tackle this constant
              battle; going to a gym or playing sports. Playing sports is a
              fantastic way to stay fit and healthy, make friends, stay happy
              and some find it an enjoyable way to unleash their
              competitiveness.
            </p>
            <p>
              Anyone new to sports, or a particular sport, are likely to have
              trouble finding someone to play with. Ideally, anyone should be
              able to find a sports session, join it and have fun. Planning your
              own events can be tedious, and even more-so when you are looking
              for people to play with.
            </p>
          </div>
        ),
      },
      {
        sectionName: 'The (planned) solution',
        body: (
          <div className="flex flex-col gap-4 ">
            <p>
              To tackle this issue, I created a desktop app that allows anyone
              to create an account, and find sports events running in their area
            </p>
            <p>
              Using this app, people seeking to find sports events will be able
              to browse events and edit their preferences. When an event is
              found to the users liking, the user can choose to register their
              participation. In essence, this means the event manager will be
              able to see the users name on a list of total participants for the
              event.
            </p>
            <p>
              Based on previous event participation data and event browsing
              history, a recommendation algorithm shows events to users that
              they may be interested in. This algorithm is the fire of this
              application, it has been designed to let users know about events
              they are likely to like.
            </p>
            <p>
              This algorithm is powered by event reviews and ratings, which
              makes the app as user-friendly as possible, to encourage everyone
              to play sports. Any user is able to run their own event, the app
              captures the necessary information, and every other user can find
              their event and participate, it&apos;s a win-win for everyone;
              players get the sports, event hosts get the players
            </p>
          </div>
        ),
      },
    ],
    quickLinks: [
      {
        customImageUrl: '/home/github.png',
        externalURL: 'https://github.com/joshd-04/proactive',
      },
    ],
    projectDate: new Date('01-25-2025'),
  },
];
export default projects;
