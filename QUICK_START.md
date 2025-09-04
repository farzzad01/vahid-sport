# راه‌اندازی سریع پروژه

## مشکل Live Server
این پروژه React/Vite است و نمی‌تواند مستقیماً با Live Server اجرا شود.

## راه‌حل سریع

### گام 1: نصب Node.js
1. به https://nodejs.org بروید
2. نسخه LTS را دانلود و نصب کنید
3. کامپیوتر را restart کنید

### گام 2: اجرای پروژه
```bash
# باز کردن terminal در پوشه پروژه
# (کلیک راست در پوشه و "Open in Terminal")

# نصب وابستگی‌ها (فقط بار اول)
npm install

# اجرای پروژه
npm run dev
```

### گام 3: مشاهده نتیجه
- مرورگر خودکار باز می‌شود
- یا به http://localhost:5173 بروید

## اگر Node.js نمی‌خواهید نصب کنید

### استفاده از GitHub Codespaces (رایگان)
1. پروژه را در GitHub آپلود کنید
2. روی دکمه "Code" کلیک کنید
3. "Codespaces" را انتخاب کنید
4. "Create codespace" کلیک کنید
5. در terminal بنویسید: `npm install && npm run dev`

### استفاده از StackBlitz (آنلاین)
1. به https://stackblitz.com بروید
2. "Import from GitHub" کلیک کنید
3. لینک repository را وارد کنید

## نکات مهم
- Live Server فقط برای HTML/CSS/JS ساده است
- React پروژه‌ها نیاز به build process دارند
- Vite بهترین ابزار برای React development است