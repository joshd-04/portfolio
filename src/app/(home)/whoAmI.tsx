import userProfile from '@/edit_this_data/userProfile';
import Image from 'next/image';

export default function WhoAmI() {
  return (
    <div className="place-self-center flex flex-col md:flex-row flex-grow-0 justify-center items-center gap-0 md:gap-16 relative w-full  bg-black/20 py-8 pb-12 md:py-16">
      <Image
        src="/home/pfp.png"
        alt="An image of Josh Dyal"
        width={200}
        height={200}
        className="rounded-full ring-2 ring-white aspect-square shadow-xl scale-[0.5] md:scale-[1]"
      />
      <div className="md:w-[40vw] px-8 md:px-0 text-center md:text-left">
        <h1 className="text-4xl text-white font-bold mb-4 ">Who am I?</h1>
        <p className="text-gray-200 text-sm md:text-xl min-h-48">
          {userProfile.whoAmI}
        </p>
      </div>
    </div>
  );
}
