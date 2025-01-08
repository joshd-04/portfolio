import { userProfile } from '@/data';
import Image from 'next/image';

export default function WhoAmI() {
  return (
    <div className="place-self-center  flex flex-row flex-grow-0 justify-center items-center gap-16 relative w-full bg-black/20 py-16">
      <Image
        src="/home/pfp.png"
        alt="An image of Josh Dyal"
        width={200}
        height={200}
        className="rounded-full ring-2 ring-white aspect-square shadow-xl"
      />
      <div className="w-[40vw]">
        <h1 className="text-4xl text-white font-bold mb-4">Who am I?</h1>
        <p className="text-gray-200 text-xl min-h-48">{userProfile.whoAmI}</p>
      </div>
    </div>
  );
}
