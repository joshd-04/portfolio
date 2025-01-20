'use client';

import masteryData from '@/edit_this_data/mastery';
import { Competency, Mastery } from '@/definitions';
import convert from 'color-convert';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface IGraphHoverContext {
  isAnyHovering: boolean;
  setIsAnyHovering: Dispatch<SetStateAction<boolean>>;
}

const GraphHoverContext = createContext<IGraphHoverContext | null>(null);
export default function MasteryGraph() {
  const [isAnyHovering, setIsAnyHovering] = useState(false);

  return (
    <div
      className={`bg-black w-[44rem] pb-8 relative z-0 rounded-xl py-4 px-6 shadow-2xl selection:bg-blue-600 selection:text-black   my-[-4rem] md:my-0 scale-[0.5] sm:scale-[0.7] md:scale-[1]`}
      onMouseEnter={() => setIsAnyHovering(true)}
      onMouseLeave={() => setIsAnyHovering(false)}
    >
      <GraphDivider leftRem={10.5}>EXPERIENCE:</GraphDivider>
      <GraphDivider leftRem={20.5}>Familiar</GraphDivider>
      <GraphDivider leftRem={30.5}>Proficient</GraphDivider>
      <GraphDivider leftRem={40.5}>Advanced</GraphDivider>
      <GraphHoverContext.Provider value={{ isAnyHovering, setIsAnyHovering }}>
        {masteryData.map((mastery, i) => (
          <MasteryVisuals mastery={mastery} key={i} />
        ))}
      </GraphHoverContext.Provider>
    </div>
  );
}

function MasteryVisuals({ mastery }: { mastery: Mastery }) {
  const [isHovering, setIsHovering] = useState(false);
  const context = useContext(GraphHoverContext);
  if (context === null) return <div></div>;
  const { isAnyHovering } = context;
  return (
    <div
      className="z-20 relative "
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <h1
        className="text-white font-semibold text-xl bg-black w-max z-20 relative mb-1"
        style={{
          filter: isHovering
            ? 'brightness(1)'
            : isAnyHovering
            ? 'brightness(0.5)'
            : 'brightness(1)',
        }}
      >
        {mastery.sector}
      </h1>
      <div className="">
        {mastery.competencies.map((comp, i) => (
          <CompRow competency={comp} key={i} />
        ))}
      </div>
    </div>
  );
}

function CompRow({ competency }: { competency: Competency }) {
  const [isHovering, setIsHovering] = useState(false);

  const context = useContext(GraphHoverContext);
  if (context === null) return <div></div>;
  const { isAnyHovering } = context;

  let background = '#3b82f6';
  if (competency.level <= 1) background = '#ff6800';
  else if (competency.level <= 2) background = '#0ac41c';
  else if (competency.level <= 3) background = '#059af7';

  const x = convert.hex.rgb(background);
  const [r, g, b] = x;

  const activeStates = () => {
    setIsHovering(true);
    // setIsAnyHovering(true);
  };
  const deactiveStates = () => {
    setIsHovering(false);
    // setIsAnyHovering(false);
  };

  return (
    <div
      className="align-middle pb-2 z-20 text-xl sm:text-base md:text-base "
      onMouseEnter={activeStates}
      onMouseLeave={deactiveStates}
    >
      <p
        className="w-36 bg-white/5 text-white inline-block align-top z-20 rounded pl-2"
        style={{
          opacity: isAnyHovering && !isHovering ? '0.5' : undefined,
        }}
      >
        {competency.name}
      </p>
      <div
        className={`h-6 w-10 inline-block align-top rounded-r-xl z-20 relative transition-all`}
        style={{
          width: `${10 * competency.level}rem`,
          backgroundColor: background,
          filter: isHovering
            ? `drop-shadow(0px 0px 5px rgb(${r},${g},${b}))`
            : isAnyHovering && !isHovering
            ? 'brightness(0.5)'
            : undefined,
        }}
      ></div>
    </div>
  );
}

function GraphDivider({
  leftRem = 9,
  children,
}: {
  leftRem: number;
  children: string;
}) {
  return (
    <div
      className={`w-0.5 bg-gray-500/50 h-[95%] absolute  z-10`}
      style={{ left: `${leftRem}rem` }}
    >
      <p className="absolute bottom-0 text-end translate-x-[-50%]  bg-black w-max font-semibold text-white">
        {children}
      </p>
    </div>
  );
}
