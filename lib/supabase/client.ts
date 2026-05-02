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

const hasUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL;
const hasKey = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const isNotPlaceholder = process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder');

const realClient = (hasUrl && hasKey && isNotPlaceholder)
  ? createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
  : null;

// Smart wrapper that falls back to mock if cloud fails
export const supabase = {
  from: (table: string) => ({
    insert: async (data: any[]) => {
      console.log(`Inserting into ${table}...`);
      
      // 1. Try Cloud if configured
      if (realClient) {
        try {
          console.log("Attempting cloud insertion...");
          const result = await realClient.from(table).insert(data);
          if (!result.error) {
            console.log("Cloud insertion successful");
            return result;
          }
          console.warn("Cloud insertion failed with error:", result.error);
        } catch (err) {
          console.error("Cloud connection error:", err);
        }
      }

      // 2. Fallback to Local API
      console.log("Falling back to local storage...");
      return await mockSupabase.from(table).insert(data);
    },
    select: (columns: string = '*') => {
      if (realClient) return realClient.from(table).select(columns);
      return mockSupabase.from(table).select(columns) as any;
    }
  }),
  channel: () => ({ on: () => ({ subscribe: () => ({}) }) }),
  removeChannel: () => {},
} as any;
