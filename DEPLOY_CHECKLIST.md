# چک‌لیست دیپلوی GitHub Pages

## ✅ قبل از آپلود

- [ ] اطلاعات تماس واقعی در کامپوننت‌ها
- [ ] تصاویر واقعی در پوشه `public`
- [ ] نام repository در `vite.config.ts` درست است
- [ ] فایل `.nojekyll` موجود است
- [ ] GitHub Actions workflow موجود است

## ✅ مراحل آپلود

### روش 1: GitHub Desktop
- [ ] GitHub Desktop نصب شده
- [ ] "Add Existing Repository" کلیک شده
- [ ] پوشه پروژه انتخاب شده
- [ ] "Publish Repository" کلیک شده
- [ ] نام: `neon-tint-studio`
- [ ] Public repository انتخاب شده

### روش 2: وب GitHub
- [ ] به github.com رفته‌اید
- [ ] "New Repository" کلیک شده
- [ ] نام: `neon-tint-studio`
- [ ] "Upload files" کلیک شده
- [ ] تمام فایل‌ها آپلود شده
- [ ] "Commit changes" کلیک شده

## ✅ تنظیمات GitHub Pages

- [ ] به Settings رفته‌اید
- [ ] Pages کلیک شده
- [ ] Source: "GitHub Actions" انتخاب شده
- [ ] Save کلیک شده

## ✅ بررسی نهایی

- [ ] Actions > Deploy workflow سبز شده
- [ ] لینک سایت کار می‌کند
- [ ] صفحه اصلی لود می‌شود
- [ ] منوها کار می‌کنند
- [ ] فرم‌ها کار می‌کنند
- [ ] در موبایل تست شده

## 🔗 لینک نهایی

```
https://YOUR-USERNAME.github.io/neon-tint-studio/
```

## 🚨 مشکلات رایج

### صفحه سفید:
- نام repository در `vite.config.ts` را بررسی کنید
- فایل `.nojekyll` موجود باشد

### 404 Error:
- GitHub Pages فعال باشد
- Source = "GitHub Actions" باشد

### Build Error:
- Actions > لاگ خطا را ببینید
- Node.js version 18+ باشد

## 📞 کمک

مشکل دارید؟
1. Actions tab > مشاهده لاگ
2. فایل `GITHUB_PAGES_SETUP.md` را بخوانید
3. از ChatGPT کمک بگیرید