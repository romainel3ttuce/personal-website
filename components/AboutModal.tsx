'use client';

import Modal from './Modal';
import Image from 'next/image';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="✨ About Me">
      <div className="space-y-4">
        <div className="flex justify-center">
          <div className="w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center text-5xl">
            🎨
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg">Hi, I'm [Your Name]!</h3>
          <p className="text-sm text-gray-500 mt-1">Character Animator & Illustrator</p>
        </div>
        
        <div className="border-t pt-3">
          <h4 className="font-medium text-pink-600 mb-2">🎧 Hobbies & Interests</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>• Drawing cute characters</li>
            <li>• Playing cozy video games</li>
            <li>• Collecting stationery</li>
            <li>• Drinking matcha lattes</li>
          </ul>
        </div>
        
        <div className="border-t pt-3">
          <h4 className="font-medium text-pink-600 mb-2">🌟 Fun Facts</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>• I have 2 cats 🐱</li>
            <li>• Favorite color: pastel pink</li>
            <li>• Currently learning 3D animation</li>
          </ul>
        </div>
      </div>
    </Modal>
  );
}