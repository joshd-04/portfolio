import { CSSProperties, ReactNode } from 'react';

export default function BlueGradientText({
  style = {},
  children,
}: {
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <span
      className="font-bold bg-gradient-to-r from-[#059DD9] via-[#45caff] to-[#0077ff] bg-clip-text text-transparent drop-shadow-[0_1px_10px_rgba(5,157,217,0.6)]"
      style={{ ...style }}
    >
      {children}
    </span>
  );
}
