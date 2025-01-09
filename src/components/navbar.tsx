'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function NavBarLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname == href;

  const fontWeight = isActive ? 'font-semibold' : 'font-normal';
  const opacity = isActive ? 'opacity-100' : 'opacity-50';

  return (
    <Link
      href={href}
      className={`text-orange-500 hover:text-orange-400 hover:opacity-100 transition-all text-xl py-6 first-of-type:pl-4 last-of-type:pr-24 ${fontWeight} ${opacity} selection:text-orange-500 `}
    >
      {children}
    </Link>
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
      className={`w-screen ${navbarBg} drop-shadow-2xl flex flex-row gap-4 sm:gap-12 justify-end sticky top-0 transition-all z-[90]`}
    >
      <NavBarLink href="/">Home</NavBarLink>
      <NavBarLink href="/about">About</NavBarLink>
      <NavBarLink href="/projects">Projects</NavBarLink>
      <NavBarLink href="#contact">Contact</NavBarLink>
    </div>
  );
}
