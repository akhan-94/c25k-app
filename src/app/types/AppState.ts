import type {Session} from '@supabase/supabase-js';

export interface AppState {
  session: Session | null;
  loading: boolean;
  guestMode: boolean;
  offline: boolean | null;
  appRating: {
    hasRated: boolean;
    dateRated: string | null;
  };
  snackbar: {
    isVisible: boolean;
    type: 'success' | 'error' | 'info' | 'warning' | undefined;
    message: string | null;
  };
}
