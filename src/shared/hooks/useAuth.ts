import {supabase} from 'src/lib/supabase';
import * as React from 'react';

export const useAuth = () => {
  /** Callbacks */
  const signOut = React.useCallback(async () => {
    await supabase.auth.signOut();
  }, []);

  return {signOut} as const;
};
