import userProfile from '@/edit_this_data/userProfile';
import { useEffect, useState } from 'react';

function CopyEmail() {
  const [buttonText, setButtonText] = useState('Copy');
  const [isCooldownActive, setIsCooldownActive] = useState(false);

  function handleCopyEmail() {
    if (isCooldownActive) return;
    const email = [userProfile.emailUser, userProfile.emailDomain].join('@');
    navigator.clipboard.writeText(email);
    setButtonText('Copied!');
    setIsCooldownActive(true);
  }
  useEffect(() => {
    if (isCooldownActive) {
      const timer = setTimeout(() => {
        setButtonText('Copy');
        setIsCooldownActive(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isCooldownActive]);
  return (
    <div className="w-full">
      <div className="w-auto h-12 p-1 bg-black/20 rounded-md flex flex-row gap-2 text-white mt-4 md:mt-6 place-self-center">
        <div className="w-max h-full bg-black/60 outline outline-1 outline-black rounded-md px-4 lg:px-6 flex flex-col justify-center items-center selection:bg-blue-600">
          <p className="text-xs md:text-base">joshdyal04@gmail.com</p>
        </div>
        <button
          className="h-full w-auto bg-black px-4 lg:px-6 text-sm md:text-lg rounded-md hover:bg-gray-950 text-orange-500 hover:text-white transition-all selection:bg-blue-600 selection:text-white"
          onClick={handleCopyEmail}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default function ContactMe() {
  return (
    <div id="contact" className="w-full bg-black/20 py-16">
      <div className="w-full md:w-[70%] xl:w-[50%] place-self-center  flex flex-col flex-grow-0 justify-center items-center relative text-center gap-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-2 xl:mb-6">
          Get in touch
        </h1>
        <h2 className="text-gray-300 text-base md:text-lg font-light w-[80%] ">
          Got a project you&apos;d like me to work on? Or just want to say
          hello? Feel free to send me an email 😊 There&apos;s no form here —
          just use your favorite email app!
        </h2>
        <CopyEmail />
      </div>
    </div>
  );
}
