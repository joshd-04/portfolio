export default function QuickButtons() {
  return (
    <div className="flex flex-col justify-start items-baseline w-full gap-2 mt-8">
      <Button>Download CV/Resumé</Button>
      <Button>GitHub</Button>
      <Button>Get in touch</Button>
    </div>
  );
}

function Button({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <button className=" h-12 text-white ring-2 ring-orange-400 rounded-sm shadow-lg px-8">
      {children}
    </button>
  );
}
