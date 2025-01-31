import type { Metadata, Viewport } from 'next';
import './globals.css';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import { Inter } from 'next/font/google';

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
      <body
        className={`bg-gradient-to-r from-slate-900 to-slate-800 overflow-x-hidden ${inter.className} selection:bg-black/80 selection:text-white `}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
