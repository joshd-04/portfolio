import { SkillsTableContext } from '@/app/projects/page';
import { Skill } from '@/definitions';
import { decideTextColor } from '@/util/text_to_bg_contrast';
import { useContext, useState } from 'react';

export default function SkillTab({ skill }: { skill: Skill }) {
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // When a skill is hovered, the background color should change
  // However sometimes the text color doesnt contrast well with the new background
  // So we need to calculate the contrast and decide whether white text or black text is suitable
  // Lumincance, L = 0.2126 * R + 0.7152 * G + 0.0722 * B
  // Contrast = (L1 + 0.05) / (L2 + 0.05), l1 = light, l2 = darker

  const textColor = decideTextColor('#ffffff', '#000000', skill.color);
  const context = useContext(SkillsTableContext);
  let onSkillClick;
  if (context !== null) {
    onSkillClick = context.onSkillClick;
    if (context.enabledFilters.includes(skill) && isActive === false)
      setIsActive(true);
    else if (!context.enabledFilters.includes(skill) && isActive === true)
      setIsActive(false);
  } else {
    onSkillClick = () => null;
  }

  return (
    <button
      className={`text-sm md:text-base align-middle  pl-1 pr-2 py-1 rounded flex flex-row items-center gap-2 w-max`}
      style={{
        backgroundColor: isHovering || isActive ? skill.color : '#111827',
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => onSkillClick(skill)}
    >
      <div
        className="relative w-1.5 h-full my-2 rounded-sm"
        style={{
          backgroundColor: isHovering || isActive ? '#111827' : skill.color,
        }}
      ></div>
      <p style={{ color: isHovering || isActive ? textColor : 'white' }}>
        {skill.value}
      </p>
    </button>
  );
}
