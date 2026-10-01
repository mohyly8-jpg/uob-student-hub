const SUPABASE_URL =
  "https://zsapwppbrxqcourctqts.supabase.co";

const SUPABASE_KEY =
  "ضع هنا المفتاح الجديد بعد عمل Rotate";

const supabaseClient =
  supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  );
