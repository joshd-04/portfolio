'use client';

import userProfile from '@/edit_this_data/userProfile';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [isCooldownActive, setIsCooldownActive] = useState(false);
  const [isWindowDefined, setIsWindowDefined] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') setIsWindowDefined(true);
  }, []);

  function handleCopyEmail() {
    if (isCooldownActive) return;
    navigator.clipboard.writeText(userProfile.email);
    setIsCooldownActive(true);
  }
  useEffect(() => {
    if (isCooldownActive) {
      const timer = setTimeout(() => {
        setIsCooldownActive(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isCooldownActive]);
  const thisYear = new Date().getFullYear();
  // const thisYear = 2000;

  function openGithub() {
    if (isWindowDefined) {
      window.open(userProfile.githubURL);
    }
  }

  function scrollToTop() {
    if (isWindowDefined) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <div className="w-[100dvw] h-auto bg-black relative py-10 text-white text-sm ">
      <div className="w-[80%] md:w-[50%] h-full place-self-center">
        <h1 className="text-base mb-2">
          I hope you enjoyed viewing this portfolio :)
        </h1>
        <div className="max-h-full flex flex-col flex-wrap  ">
          <div>
            <h2 className="text-base text-gray-400">
              Please do reach out to me
            </h2>
            <div className="flex flex-row gap-4 my-2">
              <button>
                <Image
                  src="/home/mail.png"
                  alt="Email icon"
                  width={25}
                  height={25}
                  onClick={handleCopyEmail}
                />
              </button>
              <button>
                <Image
                  src="/home/github.png"
                  alt="GitHub logo"
                  width={25}
                  height={25}
                  onClick={openGithub}
                />
              </button>
            </div>
          </div>
          <div>
            <h2 className="text-base text-gray-400">Lost?</h2>
            <div className="flex flex-col mt-1 gap-2 flex-wrap underline w-min">
              <button onClick={scrollToTop}>Scroll to top</button>
              <Link href="/">Home</Link>
              <Link href="/who-am-i">About me</Link>
              <Link href="/projects">All projects</Link>
              <Link href="/#testimonials">Testimonials</Link>
              <Link href="/#contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <hr />
          <p className="mt-3">Made using Next.js and TailwindCSS</p>
          <p className="mt-2">© {thisYear} Joshua Dyal.</p>
        </div>
      </div>
    </div>
  );
}
