# UOB Student Hub
1. Run `supabase/schema.sql` in the Supabase SQL Editor (creates tables, RLS, profile trigger, private `resources` bucket).
2. Put your **anon** key in `supabase.js` (URL is already set to your project).
3. Auth → URL Configuration: add your site URL + `/login.html` to Redirect URLs. Keep "Confirm email" on.
4. Serve statically (`npx serve .`) and open index.html.
