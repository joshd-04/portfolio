export default function BlinkingCusor({
  width = 'w-1',
  height = '1em',
  color = 'bg-white',
}) {
  return (
    <span
      className={`relative ${width} mx-2 ${color} inline-block translate-y-[12%] animate-blink`}
      style={{ height: height }}
    ></span>
  );
}
