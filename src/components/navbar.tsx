'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

// function NavBarLink({
//   href,
//   children,
// }: {
//   href: string;
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();
//   const isActive = pathname == href;

//   const fontWeight = isActive ? 'font-semibold' : 'font-normal';
//   const opacity = isActive ? 'opacity-100' : 'opacity-50';

//   return (
//     <Link
//       href={href}
//       className={`text-orange-500 hover:text-orange-400 hover:opacity-100 transition-all py-6 last-of-type:pr-0 first-of-type:pl-4 md:last-of-type:pr-24 ${fontWeight} ${opacity} selection:text-orange-500 text-sm md:text-lg`}
//     >
//       {children}
//     </Link>
//   );
// }

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
      return distanceFromTop;
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
      className={`text-orange-500 hover:text-orange-400 hover:opacity-100 transition-all py-6 last-of-type:pr-0 first-of-type:pl-4 md:last-of-type:pr-24 selection:text-orange-500 text-sm md:text-lg`}
      onClick={handleScroll}
    >
      {children}
    </button>
  );
}

export default function NavBar() {
  const [navbarBg, setNavbarBg] = useState('bg-slate-800/20');

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setNavbarBg('bg-slate-800');
      } else if (window.scrollY == 0) {
        setNavbarBg('bg-slate-800/20');
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-screen ${navbarBg} drop-shadow-2xl flex flex-row gap-4 sm:gap-12 justify-center md:justify-end items-center sticky top-0 right-0 transition-all z-[90] `}
    >
      {/* <NavBarScrollButton id="/">Home</NavBarScrollButton> */}
      <NavBarScrollButton id="who-am-i">About</NavBarScrollButton>
      <NavBarScrollButton id="featured-projects">Projects</NavBarScrollButton>
      <NavBarScrollButton id="testimonials">Testimonials</NavBarScrollButton>
      <NavBarScrollButton id="contact">Contact</NavBarScrollButton>
    </div>
  );
}
