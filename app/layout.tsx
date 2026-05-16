import type { Metadata } from 'next';
import { Inter, Quicksand } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import AudioToggle from '@/components/AudioToggle';

const quicksand = Quicksand({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Your Portfolio | Animator & Illustrator',
  description: 'Cute animations, cozy illustrations, and whimsical art',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Navigation />
        {children}
        <AudioToggle />
      </body>
    </html>
  );
}