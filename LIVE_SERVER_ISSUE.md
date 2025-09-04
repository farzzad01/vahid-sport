# مشکل Live Server و راه‌حل‌ها

## ❌ چرا Live Server کار نمی‌کند؟

این پروژه یک **React/Vite** پروژه است که نیاز به موارد زیر دارد:

1. **TypeScript Compilation** - تبدیل `.tsx` به `.js`
2. **Module Bundling** - ترکیب فایل‌های مختلف
3. **Hot Module Replacement** - به‌روزرسانی زنده
4. **Development Server** - سرور توسعه

Live Server فقط فایل‌های HTML/CSS/JS ساده را سرو می‌کند.

## ✅ راه‌حل‌های موجود

### 1. نصب Node.js (بهترین راه‌حل)
```bash
# دانلود از https://nodejs.org
# سپس در terminal:
npm install
npm run dev
```

### 2. استفاده از دمو HTML ساده
فایل `demo/index.html` را با Live Server باز کنید:
- نسخه ساده‌شده از پروژه
- بدون React/TypeScript
- فقط HTML/CSS/JS
- قابل اجرا با Live Server

### 3. GitHub Codespaces (رایگان)
1. پروژه را در GitHub آپلود کنید
2. "Code" > "Codespaces" > "Create codespace"
3. در terminal: `npm install && npm run dev`

### 4. StackBlitz (آنلاین)
1. https://stackblitz.com
2. "Import from GitHub"
3. URL repository را وارد کنید

### 5. CodeSandbox (آنلاین)
1. https://codesandbox.io
2. "Import from GitHub"
3. URL repository را وارد کنید

## 🎯 توصیه

برای توسعه حرفه‌ای:
- Node.js نصب کنید
- `npm run dev` استفاده کنید

برای مشاهده سریع:
- فایل `demo/index.html` را باز کنید
- یا از سرویس‌های آنلاین استفاده کنید

## 📞 کمک بیشتر

اگر مشکل دارید:
1. Node.js را از سایت رسمی دانلود کنید
2. کامپیوتر را restart کنید
3. در terminal پروژه: `npm install`
4. سپس: `npm run dev`