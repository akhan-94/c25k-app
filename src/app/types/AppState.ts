import type {Session} from '@supabase/supabase-js';

export interface AppState {
  session: Session | null;
}
