'use client';
import { Project } from '@/definitions';
import skills from './skills';

const projects: Project[] = [
  {
    id: 1,
    title: 'Custom Developer Portfolio',
    projectAccentColor: '#FFA500',
    summary:
      'A sleek and responsive NextJS web-app designed to showcase a developers skills, projects and achievements. It features a clean UI/UX design and optimised performance that serves as an impactful tool for networking and personal branding in the tech industry.',
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
    previewImgURL: `/edit_these_assets/projects/custom portfolio/custom portfolio left side.png`,
    bannerImgURL: undefined,
    imageSliderURLs: [
      {
        imageURL:
          '/edit_these_assets/projects/custom portfolio/scroller/name-mastery.png',
        alt: "Developer's name and mastery graph",
        width: 500,
        height: 500,
      },
      {
        imageURL:
          '/edit_these_assets/projects/custom portfolio/scroller/about.png',
        alt: 'About the developer section',
        width: 500,
        height: 500,
      },
      {
        imageURL:
          '/edit_these_assets/projects/custom portfolio/scroller/projects.png',
        alt: 'Projects listing',
        width: 500,
        height: 500,
      },
      {
        imageURL:
          '/edit_these_assets/projects/custom portfolio/scroller/testimonial.png',
        alt: 'Testimonial section',
        width: 500,
        height: 500,
      },
      {
        imageURL:
          '/edit_these_assets/projects/custom portfolio/scroller/project-details.png',
        alt: 'Details of project',
        width: 500,
        height: 500,
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
    quickLinks: [],
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
        width: 500,
        height: 500,
      },
      {
        imageURL:
          '/edit_these_assets/projects/timed todo/scroller/task-in-progress.png',
        alt: 'Task in progress (dark theme)',
        width: 500,
        height: 500,
      },
      {
        imageURL:
          '/edit_these_assets/projects/timed todo/scroller/light-theme.png',
        alt: 'Website in light theme',
        width: 500,
        height: 500,
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
    quickLinks: [],
    projectDate: new Date('07-31-2024'),
  },
];
export default projects;
