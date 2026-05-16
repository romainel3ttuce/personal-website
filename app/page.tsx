'use client';

import { useState } from 'react';
import AboutModal from '@/components/AboutModal';
import LinksModal from '@/components/LinksModal';
import ContactModal from '@/components/ContactModal';
import Image from 'next/image';

export default function Home() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isLinksOpen, setIsLinksOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex flex-col items-center justify-center px-4">
        
        {/* Profile Picture - Click to Open About Modal */}
        <button
          onClick={() => setIsAboutOpen(true)}
          className="group relative w-40 h-40 mb-6 focus:outline-none"
          aria-label="Learn more about me"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-pink-400 to-purple-400 p-1 shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
            <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center">
              {/* Replace with your actual image */}
              <div className="text-7xl">
                🧑‍🎨
              </div>
              {/* Uncomment when you add your photo:
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                width={160}
                height={160}
                className="object-cover"
              />
              */}
            </div>
          </div>
          {/* Subtle hover hint */}
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition">
            Click to learn about me ✨
          </span>
        </button>

        {/* Current Position */}
        <div className="text-center mb-12">
          <p className="text-sm text-pink-600 font-medium mb-1">✨ Currently</p>
          <p className="text-xl md:text-2xl text-gray-700 font-medium">
            Character Animator at <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-bold">Dream Studio</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">Available for freelance ✨</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {/* Links Button */}
          <button
            onClick={() => setIsLinksOpen(true)}
            className="flex flex-col items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <span className="text-3xl">🔗</span>
            <span className="text-sm font-medium text-gray-700">Links</span>
          </button>

          {/* Contact Button */}
          <button
            onClick={() => setIsContactOpen(true)}
            className="flex flex-col items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <span className="text-3xl">📬</span>
            <span className="text-sm font-medium text-gray-700">Contact</span>
          </button>

          {/* View Work Button - Navigates to /work page */}
          <a
            href="/work"
            className="flex flex-col items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <span className="text-3xl">✨</span>
            <span className="text-sm font-medium text-white">View Work</span>
          </a>
        </div>

        {/* Small footer note */}
        <p className="text-xs text-gray-400 text-center">
          Made with 🎨 and ☕
        </p>
      </main>

      {/* Modals */}
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <LinksModal isOpen={isLinksOpen} onClose={() => setIsLinksOpen(false)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}