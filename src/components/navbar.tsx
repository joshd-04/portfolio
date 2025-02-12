'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import userProfile from '@/edit_this_data/userProfile';

function NavBarLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`text-white/80 hover:text-[#2da6d6] hover:opacity-100 transition-all py-6 last-of-type:mr-0 first-of-type:ml-4 xl:last-of-type:mr-24 selection:text-[#059DD9] text-sm md:text-lg drop-shadow-[0_0px_30px_rgba(255,255,255,1)] hover:drop-shadow-[0_0px_20px_rgba(255,255,255,1)]`}
    >
      {children}
    </Link>
  );
}

function NavBarScrollButton({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const [isWindowDefined, setIsWindowDefined] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') setIsWindowDefined(true);
  }, []);

  const calculateDistance = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      const distanceFromTop = rect.top + window.scrollY;
      return distanceFromTop - 100;
    }
    return undefined;
  };

  function handleScroll() {
    const distance = calculateDistance(id);
    if (isWindowDefined && distance !== undefined) {
      window.scrollTo({ top: distance, behavior: 'smooth' });
    }
  }

  return (
    <button
      className={`text-white/80 hover:text-[#2da6d6] hover:opacity-100 transition-all py-6 last-of-type:mr-0 first-of-type:ml-4 xl:last-of-type:mr-24 selection:text-[#059DD9] text-sm md:text-lg drop-shadow-[0_0px_30px_rgba(255,255,255,1)] hover:drop-shadow-[0_0px_20px_rgba(255,255,255,1)] `}
      onClick={handleScroll}
    >
      {children}
    </button>
  );
}

export default function NavBar() {
  // If the user is on the home page, we want to display buttons to smoothly scroll
  // Otherwise display a Link to the home page
  // const [navbarBg, setNavbarBg] = useState('bg-slate-800/20');
  const pathname = usePathname();

  const displayHomeLink = pathname !== '/';

  // useEffect(() => {
  //   function handleScroll() {
  //     if (window.scrollY > 0) {
  //       setNavbarBg('bg-slate-800');
  //     } else if (window.scrollY == 0) {
  //       setNavbarBg('bg-slate-800/20');
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div
      // className={`w-screen ${navbarBg} drop-shadow-2xl flex flex-row gap-4 sm:gap-12 justify-center md:justify-end items-center sticky top-0 right-0 transition-all z-[90] `}
      className={`w-screen bg-transparent backdrop-blur-md flex flex-row gap-4 sm:gap-12 justify-center xl:justify-end items-center fixed top-0 right-0 transition-all z-[90] shadow-2xl `}
    >
      {/* <NavBarScrollButton id="/">Home</NavBarScrollButton> */}
      {displayHomeLink ? (
        <NavBarLink href="/">Home</NavBarLink>
      ) : (
        <>
          <NavBarScrollButton id="my-skills-2">My journey</NavBarScrollButton>
          <NavBarScrollButton id="featured-projects">
            Projects
          </NavBarScrollButton>
          <NavBarScrollButton id="who-am-i">About me</NavBarScrollButton>
          {userProfile.testimonials.length > 0 && (
            <NavBarScrollButton id="testimonials">
              Testimonials
            </NavBarScrollButton>
          )}
          <NavBarScrollButton id="contact">Contact</NavBarScrollButton>
        </>
      )}
    </div>
  );
}
