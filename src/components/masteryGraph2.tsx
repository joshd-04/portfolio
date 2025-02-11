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

export default function MasteryGraph2({ width }: { width: number }) {
  const [isAnyHovering, setIsAnyHovering] = useState(false);
  const padding_x = 24;
  const availableSpace = width - 2 * padding_x;
  const sectionWidths = availableSpace / 4;

  return (
    <div
      className={`bg-gray-950 w-[${width}px] pb-8 relative z-0 rounded-xl py-4  shadow-2xl selection:bg-blue-600 selection:text-black my-[-4rem] md:my-0 text-sm md:text-base outline outline-2 outline-[#059DD9]`}
      onMouseEnter={() => setIsAnyHovering(true)}
      onMouseLeave={() => setIsAnyHovering(false)}
      style={{ paddingLeft: padding_x, paddingRight: padding_x * 2 }}
    >
      <GraphDivider2 leftPx={sectionWidths * 1} padding_x={padding_x}>
        EXPERIENCE:
      </GraphDivider2>
      <GraphDivider2 leftPx={sectionWidths * 2} padding_x={padding_x}>
        {sectionWidths > 75 ? 'Familiar' : ''}
      </GraphDivider2>
      <GraphDivider2 leftPx={sectionWidths * 3} padding_x={padding_x}>
        {sectionWidths > 75 ? 'Proficient' : ''}
      </GraphDivider2>
      <GraphDivider2 leftPx={sectionWidths * 4} padding_x={padding_x}>
        {sectionWidths > 75 ? 'Advanced' : ''}
      </GraphDivider2>
      <GraphHoverContext.Provider value={{ isAnyHovering, setIsAnyHovering }}>
        {masteryData.map((mastery, i) => (
          <MasteryVisuals2
            mastery={mastery}
            key={i}
            sectionWidths={sectionWidths}
          />
        ))}
      </GraphHoverContext.Provider>
    </div>
  );
}

function MasteryVisuals2({
  mastery,
  sectionWidths,
}: {
  mastery: Mastery;
  sectionWidths: number;
}) {
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
        className="text-white font-semibold text-base md:text-xl bg-gray-950 w-max z-20 relative mb-1"
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
      <div className="flex flex-col justify-center items-start">
        {mastery.competencies.map((comp, i) => (
          <CompRow2 competency={comp} key={i} sectionWidths={sectionWidths} />
        ))}
      </div>
    </div>
  );
}

function CompRow2({
  competency,
  sectionWidths,
}: {
  competency: Competency;
  sectionWidths: number;
}) {
  const [isHovering, setIsHovering] = useState(false);

  const context = useContext(GraphHoverContext);
  if (context === null) return <div></div>;
  const { isAnyHovering } = context;

  const blueText =
    'bg-gradient-to-r from-[#059DD9] via-[#45caff] to-[#0077ff] bg-clip-text text-transparent drop-shadow-[0_1px_10px_rgba(5,157,217,0.6)]';

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
      className="pb-2 z-20 text-xs sm:text-base  flex flex-row justify-center "
      onMouseEnter={activeStates}
      onMouseLeave={deactiveStates}
    >
      <p
        className="bg-white/5 text-white text-start align-top z-20 inline-block rounded pl-[0.25rem] md:pl-2 font-normal text-wrap min-h-6 "
        // className="w-36 bg-white/5 text-white text-start inline-block align-top z-20 rounded pl-2 font-normal"
        style={{
          opacity: isAnyHovering && !isHovering ? '0.5' : undefined,
          width: sectionWidths,
        }}
      >
        {competency.name}
      </p>
      <div
        className={`h-6 inline-block align-top rounded-r-xl z-20 relative transition-all `}
        style={{
          width: `${sectionWidths * competency.level}px`,
          background: background,
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

function GraphDivider2({
  // leftRem = 9,
  leftPx = 100,
  padding_x,
  children,
}: {
  // leftRem: number;
  leftPx: number;
  padding_x: number;
  children: string;
}) {
  return (
    <div
      className={`w-0.5 bg-gray-500/50 h-[95%] absolute z-10`}
      // style={{ left: `${leftRem}rem` }}
      style={{
        left: `${leftPx}px`,
        marginLeft: `${padding_x}px`,
      }}
    >
      <p className="absolute bottom-0 text-end translate-x-[-50%]  bg-gray-950 w-max font-semibold text-white rounded-lg py-1 px-2">
        {children}
      </p>
    </div>
  );
}
