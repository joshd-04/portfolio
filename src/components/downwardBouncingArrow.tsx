import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function DownwardBouncingArrow({
  elementId,
  verticalScrollPadding = 100,
}: {
  elementId: string;
  verticalScrollPadding?: number;
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
      return distanceFromTop - verticalScrollPadding;
    }
    return undefined;
  };

  function handleScroll() {
    const distance = calculateDistance(elementId);
    if (isWindowDefined && distance !== undefined) {
      window.scrollTo({ top: distance, behavior: 'smooth' });
    }
  }

  return (
    <div className="flex flex-col justify-center items-center flex-nowrap absolute w-full h-min">
      <div className="animate-bounce z-40">
        <Image
          src="/home/down_arrow_white.png"
          alt="Bouncing arrow pointing downwards"
          width={50}
          height={50}
          onClick={handleScroll}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
