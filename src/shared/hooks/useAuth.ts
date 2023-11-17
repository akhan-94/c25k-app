import {SupabaseClient} from 'src/lib/supabase';
import * as React from 'react';

export const useAuth = () => {
  /** Callbacks */
  const signOut = React.useCallback(async () => {
    await SupabaseClient.auth.signOut();
  }, []);

  return {signOut} as const;
};
