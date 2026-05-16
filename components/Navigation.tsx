'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-8">
          <Link 
            href="/" 
            className="text-gray-700 hover:text-pink-500 transition font-medium"
          >
            Home
          </Link>
          <Link 
            href="/work" 
            className="text-gray-700 hover:text-pink-500 transition font-medium"
          >
            Work
          </Link>
          <Link 
            href="/about" 
            className="text-gray-700 hover:text-pink-500 transition font-medium"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="text-gray-700 hover:text-pink-500 transition font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
