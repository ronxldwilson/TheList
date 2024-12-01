import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Initialize the Supabase client only if the environment variables are defined
if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL or Key is not defined in environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
