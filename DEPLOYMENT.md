# راهنمای دیپلوی

## پیش‌نیازها

قبل از دیپلوی، مطمئن شوید که موارد زیر نصب شده‌اند:

```bash
# نصب Node.js (نسخه 18 یا بالاتر)
# از https://nodejs.org دانلود کنید

# بررسی نصب
node --version
npm --version
```

## آماده‌سازی پروژه

```bash
# کلون کردن پروژه
git clone <repository-url>
cd neon-tint-studio

# نصب وابستگی‌ها
npm install

# تست محلی
npm run dev

# ساخت نسخه نهایی
npm run build
```

## روش‌های دیپلوی

### 1. GitHub Pages (رایگان)

1. پروژه را در GitHub آپلود کنید
2. به Settings > Pages بروید
3. Source را "GitHub Actions" انتخاب کنید
4. فایل `.github/workflows/deploy.yml` خودکار دیپلوی را انجام می‌دهد

### 2. Netlify (رایگان)

1. به [netlify.com](https://netlify.com) بروید
2. "New site from Git" را کلیک کنید
3. Repository خود را انتخاب کنید
4. تنظیمات:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy را کلیک کنید

### 3. Vercel (رایگان)

1. به [vercel.com](https://vercel.com) بروید
2. "New Project" را کلیک کنید
3. Repository خود را import کنید
4. تنظیمات خودکار تشخیص داده می‌شود
5. Deploy را کلیک کنید

### 4. دیپلوی دستی

```bash
# ساخت فایل‌های نهایی
npm run build

# فایل‌های موجود در پوشه dist را در سرور قرار دهید
# مطمئن شوید که سرور از SPA routing پشتیبانی می‌کند
```

## تنظیمات سرور

### Apache (.htaccess)
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### Nginx
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## متغیرهای محیطی

فایل `.env` ایجاد کنید:

```bash
# کپی کردن فایل نمونه
cp .env.example .env

# ویرایش متغیرها
nano .env
```

## بررسی نهایی

قبل از دیپلوی، موارد زیر را بررسی کنید:

- [ ] تمام تصاویر و فایل‌ها موجود هستند
- [ ] اطلاعات تماس درست است
- [ ] لینک‌های شبکه‌های اجتماعی صحیح هستند
- [ ] فرم‌ها به درستی کار می‌کنند
- [ ] سایت در موبایل و دسکتاپ تست شده
- [ ] SEO تگ‌ها کامل هستند

## مشکلات رایج

### خطای 404 در refresh
- مطمئن شوید که سرور از SPA routing پشتیبانی می‌کند
- فایل‌های `.htaccess` یا `netlify.toml` را بررسی کنید

### تصاویر نمایش داده نمی‌شوند
- مسیر تصاویر را بررسی کنید
- تصاویر باید در پوشه `public` باشند

### فونت‌ها درست نمایش داده نمی‌شوند
- مطمئن شوید که فونت‌های فارسی نصب شده‌اند
- `font-display: swap` را در CSS اضافه کنید

## پشتیبانی

برای کمک بیشتر:
- مستندات Vite: https://vitejs.dev/guide/
- مستندات React: https://react.dev/
- مستندات Tailwind: https://tailwindcss.com/docs