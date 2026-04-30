import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Local API Mock for when Supabase is not configured
// Points to the main project's API
const mockSupabase = {
  from: (table: string) => ({
    select: (columns: string = '*') => ({
      order: (column: string, { ascending = true } = {}) => {
        // Return a promise directly to work with await/Promise.all
        return Promise.resolve().then(async () => {
          try {
            const endpoint = table === 'contacts' ? '/api/contacts' : '/api/demo-requests';
            const res = await fetch(endpoint); // Use relative path
            const data = await res.json();
            return { data, error: null };
          } catch (err) {
            console.error("Mock fetch error:", err);
            return { data: [], error: err };
          }
        });
      }
    }),
  }),
  channel: () => ({ on: () => ({ subscribe: () => ({}) }) }), // Mock real-time
  removeChannel: () => {},
};

export const supabase = (supabaseUrl && supabaseAnonKey && !supabaseUrl.includes('placeholder'))
  ? createClient(supabaseUrl, supabaseAnonKey)
  : mockSupabase as any;
