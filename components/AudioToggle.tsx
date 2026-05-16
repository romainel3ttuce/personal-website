'use client';

import { useState, useEffect } from 'react';
import { Howl } from 'howler';

export default function AudioToggle() {
  const [isMuted, setIsMuted] = useState(true);
  const [sound, setSound] = useState<Howl | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Initialize sound (only on client side)
    const clickSound = new Howl({
      src: ['/sounds/click.mp3'],
      volume: 0.5,
    });
    setSound(clickSound);
  }, []);

  const toggleAudio = () => {
    setIsMuted(!isMuted);
    if (!isMuted && sound) {
      sound.play();
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <button
      onClick={toggleAudio}
      className="fixed bottom-6 right-6 p-3 bg-white/80 backdrop-blur rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200 z-50"
      aria-label={isMuted ? 'Unmute' : 'Mute'}
    >
      {isMuted ? '🔇' : '🔊'}
    </button>
  );
}