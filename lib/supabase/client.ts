import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Local API Mock for when Supabase is not configured
const mockSupabase = {
  from: (table: string) => ({
    insert: async (data: any[]) => {
      const endpoint = table === 'contacts' ? '/api/contacts' : '/api/demo-requests';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return await res.json();
    },
    select: async (columns: string = '*') => ({
      order: (column: string, { ascending = true } = {}) => ({
        data: [], // Select is handled by the dashboard
        error: null
      }),
      data: [],
      error: null
    }),
  }),
  channel: () => ({ on: () => ({ subscribe: () => ({}) }) }), // Mock real-time
  removeChannel: () => {},
};

export const supabase = (supabaseUrl && supabaseAnonKey && !supabaseUrl.includes('placeholder'))
  ? createClient(supabaseUrl, supabaseAnonKey)
  : mockSupabase as any;
