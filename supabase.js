// Supabase client — replace the anon key (Project Settings → API). Never put the service_role key here.
const SUPABASE_URL = 'https://zsapwppbrxqcourctqts.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY';
window.sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
});
