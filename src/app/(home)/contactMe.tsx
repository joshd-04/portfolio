import BlueGradientText from '@/components/blueGradientText';
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
      <div className="w-min h-12 p-1 bg-gray-950/60 rounded-md flex flex-row gap-2 text-white mt-4 md:mt-6 mx-auto">
        <div className="w-max h-full bg-gray-950/60 outline outline-1 outline-gray-900 rounded-md px-4 lg:px-6 flex flex-col justify-center items-center selection:bg-blue-600">
          <p className="text-xs md:text-base">joshdyal04@gmail.com</p>
        </div>
        <button
          className="h-full w-auto bg-gray-950 px-4 lg:px-6 text-sm md:text-lg  outline outline-1 outline-black rounded-md hover:bg-slate-900 text-[#059DD9] hover:text-white transition-all selection:bg-blue-600 selection:text-white"
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
    <div id="contact" className="w-full bg-black/20 py-16 mt-24">
      <div className="w-full md:w-[70%] xl:w-[50%] mx-auto  flex flex-col flex-grow-0 justify-center items-center relative text-center gap-4">
        <div className="text-white  font-black mb-2 xl:mb-6 flex flex-col gap-4">
          <h1 className="text-4xl md:text-6xl">
            Let&apos;s{' '}
            <BlueGradientText style={{ fontWeight: 900 }}>
              talk
            </BlueGradientText>
            !
          </h1>
          <h2 className="text-2xl md:text-4xl">Get in touch</h2>
        </div>
        <p className="text-gray-300 text-base md:text-lg font-light w-[80%] ">
          Got a project you&apos;d like me to work on? Or just want to say
          hello? Feel free to send me an email 😊 There&apos;s no form here —
          just use your favorite email app!
        </p>
        <CopyEmail />
      </div>
    </div>
  );
}
