import type {Session} from '@supabase/supabase-js';

export interface AppState {
  session: Session | null;
  loading: boolean;
  snackbar: {
    isVisible: boolean;
    type: 'success' | 'error' | 'info' | 'warning' | undefined;
    message: string | null;
  };
}
