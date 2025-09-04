# راهنمای کامل دیپلوی روی GitHub Pages

## 🚀 مراحل دیپلوی

### مرحله 1: آپلود پروژه به GitHub

#### الف) اگر GitHub Desktop دارید:
1. GitHub Desktop را باز کنید
2. "Add an Existing Repository from your Hard Drive" کلیک کنید
3. پوشه پروژه را انتخاب کنید
4. "Publish repository" کلیک کنید
5. نام repository: `neon-tint-studio`
6. توضیحات: `مرکز تخصصی نصب شیشه دودی`
7. "Publish Repository" کلیک کنید

#### ب) اگر Git Command Line دارید:
```bash
# در پوشه پروژه
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/neon-tint-studio.git
git push -u origin main
```

#### ج) آپلود دستی:
1. به https://github.com بروید
2. "New repository" کلیک کنید
3. نام: `neon-tint-studio`
4. "Create repository" کلیک کنید
5. "uploading an existing file" کلیک کنید
6. تمام فایل‌های پروژه را drag & drop کنید
7. "Commit changes" کلیک کنید

### مرحله 2: فعال‌سازی GitHub Pages

1. به repository خود در GitHub بروید
2. تب "Settings" کلیک کنید
3. در منوی چپ "Pages" کلیک کنید
4. در قسمت "Source":
   - "GitHub Actions" را انتخاب کنید
5. "Save" کلیک کنید

### مرحله 3: تنظیم نام Repository (مهم!)

اگر نام repository شما متفاوت است:

1. فایل `vite.config.ts` را باز کنید
2. خط زیر را پیدا کنید:
   ```typescript
   base: process.env.NODE_ENV === 'production' ? '/neon-tint-studio/' : '/',
   ```
3. `neon-tint-studio` را با نام repository خود جایگزین کنید
4. فایل را save کنید
5. تغییرات را commit و push کنید

### مرحله 4: اجرای خودکار

پس از push کردن:
1. به تب "Actions" در GitHub بروید
2. workflow "Deploy to GitHub Pages" را مشاهده کنید
3. منتظر بمانید تا سبز شود (حدود 2-5 دقیقه)
4. به تب "Settings" > "Pages" بروید
5. لینک سایت شما آماده است!

## 🔗 لینک نهایی

سایت شما در آدرس زیر در دسترس خواهد بود:
```
https://USERNAME.github.io/neon-tint-studio/
```

## 🛠️ عیب‌یابی

### مشکل 1: صفحه سفید
**علت:** Base URL اشتباه
**راه‌حل:** نام repository در `vite.config.ts` را درست کنید

### مشکل 2: 404 Error
**علت:** GitHub Pages فعال نیست
**راه‌حل:** Settings > Pages > Source = "GitHub Actions"

### مشکل 3: Build Failed
**علت:** خطا در کد
**راه‌حل:** Actions > مشاهده لاگ خطا

### مشکل 4: تصاویر نمایش داده نمی‌شوند
**علت:** مسیر تصاویر
**راه‌حل:** تصاویر را در پوشه `public` قرار دهید

## 📱 تست نهایی

پس از دیپلوی موفق:
- [ ] سایت باز می‌شود
- [ ] منوها کار می‌کنند
- [ ] فرم‌ها کار می‌کنند
- [ ] در موبایل تست کنید
- [ ] سرعت لود را بررسی کنید

## 🔄 به‌روزرسانی

برای به‌روزرسانی سایت:
1. تغییرات را در کد اعمال کنید
2. فایل‌ها را commit و push کنید
3. GitHub Actions خودکار سایت را به‌روزرسانی می‌کند

## 📞 کمک

اگر مشکل داشتید:
1. Actions > مشاهده لاگ
2. Issues > New issue در GitHub
3. یا از ChatGPT کمک بگیرید