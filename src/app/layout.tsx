import type { Metadata, Viewport } from 'next';
import './globals.css';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import { Inter } from 'next/font/google';
import MouseLight from '@/components/mouseLight';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Josh's portfolio",
  description: 'My space on the web to share my skills and projects! Enjoy',
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/edit_these_assets/me/me.png" sizes="any" />
      </head>
      <body
        className={`bg-black overflow-x-hidden  selection:bg-blue-500/80 selection:text-white ${inter.className}`}
      >
        <MouseLight />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
