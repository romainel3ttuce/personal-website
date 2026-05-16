'use client';

import { useState } from 'react';
import DesktopWindow from '@/components/DesktopWindow';

export default function Home() {
  const [showAboutWindow, setShowAboutWindow] = useState(false);
  const [showLinksWindow, setShowLinksWindow] = useState(false);
  const [showContactWindow, setShowContactWindow] = useState(false);

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex flex-col items-center justify-center px-4">
        
        {/* Profile Picture */}
        <button
          onClick={() => setShowAboutWindow(true)}
          className="group relative w-40 h-40 mb-6 focus:outline-none"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-pink-400 to-purple-400 p-1 shadow-xl transition-all duration-300 group-hover:scale-105">
            <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center">
              <div className="text-7xl">🧑‍🎨</div>
            </div>
          </div>
          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
            Click to learn about me ✨
          </span>
        </button>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-2">
          [Your Name]
        </h1>

        {/* Role */}
        <div className="text-center mb-8">
          <p className="text-lg text-pink-600 font-medium">
            Character Animator & Illustrator
          </p>
          <p className="text-sm text-gray-500 mt-1">Available for freelance ✨</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setShowLinksWindow(true)}
            className="flex flex-col items-center gap-2 px-6 py-3 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 min-w-[100px]"
          >
            <span className="text-3xl">🔗</span>
            <span className="text-sm font-medium text-gray-700">Links</span>
          </button>

          <button
            onClick={() => setShowContactWindow(true)}
            className="flex flex-col items-center gap-2 px-6 py-3 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 min-w-[100px]"
          >
            <span className="text-3xl">📬</span>
            <span className="text-sm font-medium text-gray-700">Contact</span>
          </button>

          <a
            href="/work"
            className="flex flex-col items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 min-w-[100px]"
          >
            <span className="text-3xl">✨</span>
            <span className="text-sm font-medium text-white">View Work</span>
          </a>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-400 text-center absolute bottom-4 left-0 right-0">
          Made with 🎨 and ☕
        </p>
      </main>

      {/* About Window */}
      <DesktopWindow
        title="✨ About Me"
        isOpen={showAboutWindow}
        onClose={() => setShowAboutWindow(false)}
        defaultPosition={{ x: 150, y: 100 }}
      >
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center text-4xl">
              🎨
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg text-gray-800">Hi, I'm [Your Name]!</h3>
            <p className="text-sm text-gray-500 mt-1">Character Animator & Illustrator</p>
          </div>
          <div className="border-t border-pink-100 pt-3">
            <h4 className="font-medium text-pink-600 mb-2">🎧 Hobbies</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Drawing cute characters</li>
              <li>• Playing cozy video games</li>
              <li>• Collecting stationery</li>
              <li>• Drinking matcha lattes</li>
            </ul>
          </div>
          <div className="border-t border-pink-100 pt-3">
            <h4 className="font-medium text-pink-600 mb-2">🌟 Fun Facts</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• I have 2 cats 🐱</li>
              <li>• Favorite color: pastel pink</li>
              <li>• Currently learning 3D animation</li>
            </ul>
          </div>
        </div>
      </DesktopWindow>

      {/* Links Window */}
      <DesktopWindow
        title="🔗 Find Me Online"
        isOpen={showLinksWindow}
        onClose={() => setShowLinksWindow(false)}
        defaultPosition={{ x: 400, y: 150 }}
      >
        <div className="space-y-3">
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 text-white hover:opacity-90 transition-all"
          >
            <span className="text-2xl">📸</span>
            <span className="font-medium">Instagram</span>
            <span className="ml-auto">→</span>
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-500 text-white hover:opacity-90 transition-all"
          >
            <span className="text-2xl">🐦</span>
            <span className="font-medium">Twitter</span>
            <span className="ml-auto">→</span>
          </a>
          <a
            href="https://youtube.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3 rounded-xl bg-gradient-to-r from-red-500 to-rose-500 text-white hover:opacity-90 transition-all"
          >
            <span className="text-2xl">🎥</span>
            <span className="font-medium">YouTube</span>
            <span className="ml-auto">→</span>
          </a>
          <a
            href="https://github.com/romainel3ttuce"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:opacity-90 transition-all"
          >
            <span className="text-2xl">💻</span>
            <span className="font-medium">GitHub</span>
            <span className="ml-auto">→</span>
          </a>
        </div>
      </DesktopWindow>

      {/* Contact Window */}
      <DesktopWindow
        title="📬 Contact Me"
        isOpen={showContactWindow}
        onClose={() => setShowContactWindow(false)}
        defaultPosition={{ x: 250, y: 200 }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const name = (form.elements.namedItem('name') as HTMLInputElement)?.value || '';
            const email = (form.elements.namedItem('email') as HTMLInputElement)?.value || '';
            const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '';
            window.location.href = `mailto:hello@example.com?subject=Message from ${name}&body=${message}%0A%0A- From: ${email}`;
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
          >
            Send Message ✨
          </button>
          <p className="text-xs text-gray-400 text-center">
            Or email me directly at hello@example.com
          </p>
        </form>
      </DesktopWindow>
    </>
  );
}