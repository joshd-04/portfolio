'use client';
import { useEffect, useState } from 'react';

export default function MouseLight() {
  const [mousePos, setMousePos] = useState<number[] | undefined>(undefined);
  const [hasMouse, setHasMouse] = useState(false);
  const lightRadius = 20;

  useEffect(() => {
    if (typeof window === undefined) return;
    // Check if the user has a mouse
    const mediaQuery = window.matchMedia('(pointer: fine)');

    const updateMousePresence = () => setHasMouse(mediaQuery.matches);

    // Set initial state
    updateMousePresence();

    // Listen for changes (e.g., docking/undocking a touchscreen device)
    mediaQuery.addEventListener('change', updateMousePresence);

    return () => {
      mediaQuery.removeEventListener('change', updateMousePresence);
    };
  }, []);

  useEffect(() => {
    function handleMouseMove(e: globalThis.MouseEvent) {
      setMousePos([e.clientX, e.clientY]);
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return hasMouse ? (
    <div
      className=" bg-white fixed z-[-1] blur-3xl rounded-full"
      style={{
        left: mousePos ? `${mousePos[0] - lightRadius}px` : undefined,
        top: mousePos ? `${mousePos[1] - lightRadius}px` : undefined,
        width: lightRadius * 2,
        height: lightRadius * 2,
      }}
    ></div>
  ) : (
    <></>
  );
}
