import { Skill } from '@/definitions';
import { decideTextColor } from '@/util/text_to_bg_contrast';
import { useState } from 'react';

export default function SkillTab({ skill }: { skill: Skill }) {
  const [isHovering, setIsHovering] = useState(false);

  // When a skill is hovered, the background color should change
  // However sometimes the text color doesnt contrast well with the new background
  // So we need to calculate the contrast and decide whether white text or black text is suitable
  // Lumincance, L = 0.2126 * R + 0.7152 * G + 0.0722 * B
  // Contrast = (L1 + 0.05) / (L2 + 0.05), l1 = light, l2 = darker

  const textColor = decideTextColor('#ffffff', '#000000', skill.color);

  return (
    <div
      className={`text-sm md:text-base align-middle  pl-1 pr-2 py-1 rounded flex flex-row items-center gap-2 w-max cursor-default outline outline-[1px] outline-gray-800`}
      style={{
        backgroundColor: isHovering ? skill.color : '#111827',
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="relative w-1.5 h-full my-2 rounded-sm "
        style={{
          backgroundColor: isHovering ? '#111827' : skill.color,
        }}
      ></div>
      <p style={{ color: isHovering ? textColor : 'white' }}>{skill.value}</p>
    </div>
  );
}
