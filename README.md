# UOB Student Hub

منصة عربية متجاوبة مبنية بـ HTML/CSS/JavaScript ومربوطة بـ Supabase.

## التشغيل
1. افتح `sql/schema.sql` وانسخه إلى Supabase SQL Editor ثم Run.
2. في Supabase Authentication > URL Configuration ضع Site URL: `https://uob-student-hub.pages.dev`.
3. أضف Redirect URL: `https://uob-student-hub.pages.dev/**`.
4. ارفع محتويات هذا المجلد إلى جذر مستودع GitHub.
5. Cloudflare Pages سينشر تلقائيًا.

## ملاحظات
- الموقع العام والـ GPA والمهام المحلية يعملون دون تسجيل.
- الحساب مطلوب للمزامنة وحفظ الملف والرفع.
- المفتاح الموجود Publishable Key وليس Service Role Key. لا تضع Service Role في الواجهة.
