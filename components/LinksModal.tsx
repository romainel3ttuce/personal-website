'use client';

import Modal from './Modal';

interface LinksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LinksModal({ isOpen, onClose }: LinksModalProps) {
  const links = [
    { name: 'Instagram', url: 'https://instagram.com/yourusername', icon: '📸', color: 'from-pink-500 to-orange-500' },
    { name: 'Twitter / X', url: 'https://twitter.com/yourusername', icon: '🐦', color: 'from-sky-500 to-blue-500' },
    { name: 'YouTube', url: 'https://youtube.com/@yourusername', icon: '🎥', color: 'from-red-500 to-rose-500' },
    { name: 'GitHub', url: 'https://github.com/romainel3ttuce', icon: '💻', color: 'from-gray-700 to-gray-900' },
    { name: 'Bluesky', url: 'https://bsky.app/profile/yourusername', icon: '🦋', color: 'from-sky-400 to-blue-600' },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="🔗 Find Me Online">
      <div className="space-y-3">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-4 p-3 rounded-xl bg-gradient-to-r ${link.color} text-white hover:opacity-90 transition-all hover:scale-105`}
          >
            <span className="text-2xl">{link.icon}</span>
            <span className="font-medium">{link.name}</span>
            <span className="ml-auto">→</span>
          </a>
        ))}
      </div>
    </Modal>
  );
}