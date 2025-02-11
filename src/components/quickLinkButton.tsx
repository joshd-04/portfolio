import useIsBreakpointMet from '@/hooks/useIsBreakpointMet';
import { Url } from 'next/dist/shared/lib/router/router';
import Image from 'next/image';
import Link from 'next/link';

export default function QuickLinkButton({
  href,
  customImageURL,
  text,
}: {
  href: Url;
  customImageURL?: string | undefined;
  text?: string | undefined;
}) {
  const isMdBreakpointMet = useIsBreakpointMet().medium;

  if (customImageURL && !text) {
    return (
      <Link
        href={href}
        className="px-2 py-2 active:outline-[#059DD9] hover:bg-gray-700/20 hover:outline hover:outline-gray-700 hover:outline-2 rounded-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={customImageURL}
          alt="GitHub logo"
          width={isMdBreakpointMet ? 30 : 21}
          height={isMdBreakpointMet ? 30 : 21}
        />
      </Link>
    );
  }
  if (customImageURL && text) {
    return (
      <Link
        href={href}
        className="px-2 text-sm md:text-base rounded-lg active:outline-[#059DD9] hover:bg-gray-700/20 hover:outline hover:outline-gray-700 hover:outline-2 flex flex-row justify-center items-center gap-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={customImageURL}
          alt="Open in new tab"
          width={isMdBreakpointMet ? 20 : 14}
          height={isMdBreakpointMet ? 20 : 14}
        />
        {text}
        <Image
          src="/home/open in new.png"
          alt="Open in new tab"
          width={isMdBreakpointMet ? 20 : 14}
          height={isMdBreakpointMet ? 20 : 14}
        />
      </Link>
    );
  }
  return (
    <Link
      href={href}
      className="px-2 text-sm md:text-base rounded-lg active:outline-[#059DD9] hover:bg-gray-700/20 hover:outline hover:outline-gray-700 hover:outline-2 flex flex-row justify-center items-center gap-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
      <Image
        src="/home/open in new.png"
        alt="Open in new tab"
        width={isMdBreakpointMet ? 20 : 14}
        height={isMdBreakpointMet ? 20 : 14}
      />
    </Link>
  );
}
