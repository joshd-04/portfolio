import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="h-[80dvh] flex flex-col justify-center items-center gap-4 text-center">
      <h1 className="text-white font-bold text-3xl md:text-4xl">
        404 - Page Not Found
      </h1>
      <h2 className="text-white font-bold text-lg md:text-2xl">
        Click{' '}
        <Link href="/" className="underline text-orange-600">
          here
        </Link>{' '}
        to go back home
      </h2>
    </div>
  );
}
