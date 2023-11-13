import Sound from 'react-native-sound';
import {AUDIO_SOURCES} from './constants/audio-sources.constant';
import type {AudioSourceName} from './types/SoundManager.types';

class SoundManager {
  private readonly _soundMap = new Map<AudioSourceName, Sound>();

  constructor() {}

  public initialize() {
    Sound.setCategory('Playback');
    this.loadSoundLibrary();
  }

  public loadSoundLibrary() {
    Object.keys(AUDIO_SOURCES).forEach(soundName => {
      const fileName = AUDIO_SOURCES[soundName as AudioSourceName];
      const sound = new Sound(fileName, Sound.MAIN_BUNDLE, (error: any) => {
        if (error) return;
      });
      this._soundMap.set(soundName as AudioSourceName, sound);
    });
  }

  public play(soundName: AudioSourceName) {
    const sound = this._soundMap.get(soundName);
    if (!sound) return;
    sound.stop(() => {
      sound.play();
    });
  }
}

const soundManager = new SoundManager();

export default soundManager;
