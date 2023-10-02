import type {Session} from '@supabase/supabase-js';

export interface AppState {
  session: Session | null;
  settings: {
    darkMode: boolean;
    vibrate: boolean;
    sound: boolean;
    units: 'metric' | 'imperial';
  };
}
