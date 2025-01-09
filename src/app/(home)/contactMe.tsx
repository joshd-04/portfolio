import { userProfile } from '@/data';
import { useEffect, useState } from 'react';

export default function ContactMe() {
  const [buttonText, setButtonText] = useState('Copy email address');
  const [isCooldownActive, setIsCooldownActive] = useState(false);

  function handleCopyEmail() {
    if (isCooldownActive) return;
    navigator.clipboard.writeText(userProfile.email);
    setButtonText('Email copied!');
    setIsCooldownActive(true);
  }
  useEffect(() => {
    if (isCooldownActive) {
      const timer = setTimeout(() => {
        setButtonText('Copy email address');
        setIsCooldownActive(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isCooldownActive]);

  return (
    <div
      id="contact"
      className="place-self-center  flex flex-col flex-grow-0 justify-center items-center relative w-full bg-black/20 py-16"
    >
      <h1 className="text-white text-6xl font-bold mb-2">Hire me!</h1>
      <h2 className="text-gray-300 text-2xl font-semibold">
        or Get in touch :)
      </h2>
      <button
        className="w-max py-4 px-8 bg-black/50 text-white rounded-md font-semibold hover:bg-black/90  transition-all shadow-lg place-self-center outline outline-2 outline-white hover:outline-black mt-8"
        onClick={handleCopyEmail}
      >
        {buttonText}
      </button>
    </div>
  );
}
