import 'react-native-url-polyfill/auto';
import {createClient} from '@supabase/supabase-js';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type {Database} from './database.types';

export const SupabaseClient = createClient<Database>(
  Config.SUPABASE_URL as string,
  Config.SUPABASE_KEY as string,
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  },
);
