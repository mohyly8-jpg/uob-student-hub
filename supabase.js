const SUPABASE_URL = "https://zsapwppbrxqcourctqts.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_ILxNdjGXvy21klnQsHJ8JA_rCZtDxs7";
window.sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } });
