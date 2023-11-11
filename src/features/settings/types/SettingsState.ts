export interface SettingsState {
  darkMode: boolean;
  vibrate: boolean;
  sound: boolean;
  units: 'metric' | 'imperial';
}

export type ToggleSettings = keyof Pick<
  SettingsState,
  'darkMode' | 'vibrate' | 'sound'
>;
