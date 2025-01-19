'use client';

import userProfile from '@/edit_this_data/userProfile';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [isWindowDefined, setIsWindowDefined] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') setIsWindowDefined(true);
  }, []);

  function handleOpenEmail() {
    if (!isWindowDefined) return;
    const email = [userProfile.emailUser, userProfile.emailDomain].join('@');
    window.open(`mailto:${email}`);
  }

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
    <div className="w-[100dvw] h-auto bg-black relative py-10 text-white text-sm selection:bg-blue-600 selection:text-white">
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
                  width={30}
                  height={30}
                  onClick={handleOpenEmail}
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
            <div className="flex flex-col mt-1 gap-2 flex-wrap underline w-auto place-items-start">
              <button onClick={scrollToTop}>Scroll to top</button>
              <Link href="/">Home</Link>
              <Link href="/#who-am-i">About me</Link>
              <Link href="/#featured-projects">Featured projects</Link>
              <Link href="/#testimonials">Testimonials</Link>
              <Link href="/#contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <hr />
          <p className="mt-3">Made using Next.js and TailwindCSS</p>
          <p className="mt-2">
            © {thisYear} {userProfile.firstName} {userProfile.lastName}
          </p>
        </div>
      </div>
    </div>
  );
}
