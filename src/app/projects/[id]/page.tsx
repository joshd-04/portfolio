import { Metadata } from 'next';
import ProjectRenderer from './projectRenderer';

export const metadata: Metadata = {
  title: "Josh Dyal's portfolio",
  description: 'Generated by create next app',
};

export default function Page() {
  return <ProjectRenderer metadata={metadata} />;
}
