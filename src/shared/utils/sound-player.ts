import Sound from 'react-native-sound';

Sound.setCategory('Playback');

export const APP_AVAILABLE_SOUND_FILES = {
  bell: 'bell.wav',
  'male-start-warmup': 'male_begin_warmup.mp3',
  'male-start-cooldown': 'male_start_cooldown.mp3',
  'male-start-runnng': 'male_start_running.mp3',
  'male-start-walking': 'male_start_walking.mp3',
} as const;

export type AvailableSoundName = keyof typeof APP_AVAILABLE_SOUND_FILES;

class SoundPlayer {
  private readonly _soundMap = new Map<AvailableSoundName, Sound>();

  constructor() {}

  public loadSoundLibrary() {
    Object.keys(APP_AVAILABLE_SOUND_FILES).forEach(soundName => {
      const fileName =
        APP_AVAILABLE_SOUND_FILES[soundName as AvailableSoundName];
      const sound = new Sound(fileName, Sound.MAIN_BUNDLE, (error: any) => {
        if (error) return;
      });
      this._soundMap.set(soundName as AvailableSoundName, sound);
    });
  }

  public play(soundName: AvailableSoundName) {
    const sound = this._soundMap.get(soundName);
    if (!sound) return;
    sound.stop(() => {
      sound.play();
    });
  }
}

const soundPlayer = new SoundPlayer();

export default soundPlayer;
