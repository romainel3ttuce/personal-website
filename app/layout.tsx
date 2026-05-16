import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';
import AudioToggle from '@/components/AudioToggle';

const quicksand = Quicksand({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

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
        {children}
        <AudioToggle />
      </body>
    </html>
  );
}