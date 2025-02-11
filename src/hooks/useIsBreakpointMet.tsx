import { useEffect, useState } from 'react';

export default function useIsBreakpointMet() {
  const [isXsBreakpointMet, setIsXsBreakpointMet] = useState<
    boolean | undefined
  >(undefined);
  const [isSmBreakpointMet, setIsSmBreakpointMet] = useState<
    boolean | undefined
  >(undefined);
  const [isMdBreakpointMet, setIsMdBreakpointMet] = useState<
    boolean | undefined
  >(undefined);
  const [isLgBreakpointMet, setIsLgBreakpointMet] = useState<
    boolean | undefined
  >(undefined);
  const [isXlBreakpointMet, setIsXlBreakpointMet] = useState<
    boolean | undefined
  >(undefined);
  const [is2XlBreakpointMet, setIs2XlBreakpointMet] = useState<
    boolean | undefined
  >(undefined);
  // sm: 640 md: 768 lg: 1024 xl: 1280 2xl: 1536

  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    function handleResize(e: Event) {
      if (e.target && typeof window !== 'undefined') {
        const target = e.target as Window;
        setWindowWidth(target.outerWidth);
      }
    }
    if (windowWidth === undefined && typeof window !== 'undefined') {
      setWindowWidth(window.screen.width);
    }
    if (typeof window !== 'undefined' && windowWidth !== undefined) {
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, [windowWidth]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsXsBreakpointMet(window.matchMedia('(min-width: 400px)').matches);
      setIsSmBreakpointMet(window.matchMedia('(min-width: 640px)').matches);
      setIsMdBreakpointMet(window.matchMedia('(min-width: 768px)').matches);
      setIsLgBreakpointMet(window.matchMedia('(min-width: 1024px)').matches);
      setIsXlBreakpointMet(window.matchMedia('(min-width: 1280px)').matches);
      setIs2XlBreakpointMet(window.matchMedia('(min-width: 1536px)').matches);
    }
  }, [windowWidth]);

  // sm: 640 md: 768 lg: 1024 xl: 1280 2xl: 1536
  return {
    /**@description True when window width is atleast 400px */
    xs: isXsBreakpointMet,
    /**@description True when window width is atleast 640px */
    small: isSmBreakpointMet,
    /**@description True when window width is atleast 768px */
    medium: isMdBreakpointMet,
    /**@description True when window width is atleast 1024px */
    large: isLgBreakpointMet,
    /**@description True when window width is atleast 1280px */
    xl: isXlBreakpointMet,
    /**@description True when window width is atleast 1536px */
    xl_2xl: is2XlBreakpointMet,
  };
}
