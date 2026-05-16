import { Howl } from 'howler';

// Singleton sound manager
class SoundManager {
  private sounds: Map<string, Howl> = new Map();
  
  // Preload sounds (runs once on page load)
  preload() {
    this.sounds.set('click', new Howl({
      src: ['/sounds/click.mp3'],
      volume: 0.5
    }));
    
    this.sounds.set('hover', new Howl({
      src: ['/sounds/hover.mp3'],
      volume: 0.3
    }));
    
    this.sounds.set('background', new Howl({
      src: ['/sounds/ambient.mp3'],
      volume: 0.2,
      loop: true
    }));
  }
  
  play(soundName: string) {
    const sound = this.sounds.get(soundName);
    if (sound) sound.play();
  }
  
  // For background music with user interaction (browser policy)
  startBackgroundMusic() {
    const bg = this.sounds.get('background');
    if (bg) bg.play();
  }
}

export const soundManager = new SoundManager();