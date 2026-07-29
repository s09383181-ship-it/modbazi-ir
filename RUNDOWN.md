# راهنمای کامل سایت ModBazi.ir

## 🌐 لینک سایت
https://s09383181-ship-it.github.io/modbazi-ir/

## 📂 ساختار فایل‌ها

```
modbazi-ir/
├── index.html              # صفحه اصلی
├── robots.txt              # دستورات موتورهای جستجو
├── sitemap.xml             # نقشه سایت (17 URL)
├── assets/
│   ├── style.css          # استایل کل سایت
│   ├── main.js            # اسکریپت اصلی (counter, menu)
│   └── data.js            # ⚠️ اطلاعات 9 بازی + 6 مقاله
├── games/
│   ├── clash-royale.html
│   ├── free-fire.html
│   ├── pubg-mobile.html
│   ├── minecraft.html
│   ├── clash-of-clans.html
│   ├── roblox.html
│   ├── call-of-duty-mobile.html
│   ├── candy-crush.html
│   └── among-us.html
└── blog/
    ├── index.html
    ├── install-clash-royale-mod.html
    ├── best-free-fire-mods-2024.html
    ├── pubg-pro-tips.html
    ├── fix-game-ban.html
    ├── minecraft-versions-comparison.html
    └── minecraft-mod-guide.html
```

---

## 🛠️ چطور محتوا اضافه/تغییر بدم؟

### روش ۱: ویرایش از GitHub (ساده‌ترین)

1. برو به https://github.com/s09383181-ship-it/modbazi-ir
2. فایل مورد نظرت رو باز کن
3. کلید ✏️ (Edit) رو بزن
4. تغییرات رو بده
5. پایین صفحه روی **Commit changes** بزن
6. **۲-۳ دقیقه صبر کن** → سایت آپدیت میشه

### روش ۲: دانلود، ویرایش، آپلود

```bash
git clone https://github.com/s09383181-ship-it/modbazi-ir.git
cd modbazi-ir
# فایل‌ها رو با Notepad++ یا VSCode ویرایش کن
git add .
git commit -m "توضیح تغییرات"
git push
```

---

## 📝 چطور بازی جدید اضافه کنم؟

### قدم ۱: اضافه کردن به data.js
فایل `assets/data.js` رو باز کن. تو آرایه `GAMES` یه آبجکت جدید اضافه کن:

```js
{
    slug: 'bazi-jadid',           // نام انگلیسی برای URL
    title: 'بازی جدید',            // عنوان فارسی
    icon: '🎮',                    // ایموجی
    shortDesc: 'توضیح کوتاه',     // برای کارت
    desc: 'توضیح کامل بازی',      // برای صفحه جزئیات
    features: ['ویژگی ۱', 'ویژگی ۲', 'ویژگی ۳'],
    requirements: {
        android: '۵.۰ به بالا',
        ram: '۲ گیگابایت',
        storage: '۲۰۰ MB'
    },
    rating: '۴.۸',
    badge: 'جدید',                 // برچسب کارت
    size: '۱۸۰ MB',
    version: 'v1.0.0'
}
```

### قدم ۲: ساخت صفحه HTML
کپی کن از `games/clash-royale.html`، بعد متن‌ها رو عوض کن و به اسم `games/bazi-jadid.html` ذخیره کن.

### قدم ۳: اضافه به sitemap.xml
تو `sitemap.xml` یه خط جدید اضافه کن:

```xml
<url>
    <loc>https://s09383181-ship-it.github.io/modbazi-ir/games/bazi-jadid.html</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
</url>
```

---

## 📰 چطور مقاله بلاگ جدید اضافه کنم؟

### قدم ۱: اضافه به data.js
تو آرایه `BLOG_POSTS`:

```js
{
    slug: 'my-new-article',
    title: 'عنوان مقاله',
    icon: '📝',
    cat: 'دسته‌بندی',
    date: 'تاریخ',
    excerpt: 'خلاصه کوتاه'
}
```

### قدم ۲: ساخت صفحه HTML
کپی از `blog/install-clash-royale-mod.html` و ویرایش.

### قدم ۳: اضافه به sitemap.xml
مثل بازی‌ها.

---

## 🎨 چطور ظاهر سایت رو تغییر بدم؟

### تغییر رنگ‌ها
فایل `assets/style.css` رو باز کن. بالاش این متغیرها رو می‌بینی:

```css
:root {
    --neon-pink: #ec4899;     /* صورتی */
    --neon-purple: #a855f7;   /* بنفش */
    --neon-cyan: #06b6d4;     /* فیروزه‌ای */
    --gradient: linear-gradient(135deg, #ec4899, #a855f7, #06b6d4);
}
```

می‌تونی این رنگ‌ها رو به هر چیزی که دوست داری تغییر بدی.

### تغییر لینک کانال روبیکا
اگه عوض شد، با Ctrl+Shift+F همه `ZODIAC_MAFIANIGHTS` رو پیدا کن و عوض کن.

---

## 🔍 سئو (SEO)

### چک کردن سایت در گوگل
1. برو: https://search.google.com/search-console
2. سایت رو اضافه کن
3. sitemap رو ثبت کن: `https://s09383181-ship-it.github.io/modbazi-ir/sitemap.xml`

### چک کردن Schema.org
برو: https://validator.schema.org/

### تست سرعت
برو: https://pagespeed.web.dev/

---

## 🔗 لینک‌های مهم

- 🌐 سایت: https://s09383181-ship-it.github.io/modbazi-ir/
- 💻 Repo: https://github.com/s09383181-ship-it/modbazi-ir
- 📱 کانال روبیکا: https://rubika.ir/ZODIAC_MAFIANIGHTS

---

## ❓ سوالات رایج

### چطور سایت رو روی دامنه ModBazi.ir بذارم؟
1. دامنه `modbazi.ir` رو از یه سایت مثل nic.ir بخر
2. تو GitHub Pages تنظیمات Custom Domain رو روی `modbazi.ir` بذار
3. تو DNS Provider دامنه، A record رو به IP های GitHub Pages تنظیم کن

### چطور لینک دانلود واقعی بذارم؟
فایل `assets/data.js` باز کن، یه فیلد `downloadUrl` اضافه کن و تو هر صفحه بازی لینک بذار.

### چطور چت آنلاین / فرم تماس اضافه کنم؟
نیاز به backend داره. می‌تونی از سرویس‌هایی مثل Formspree یا Netlify Forms استفاده کنی.

---

## 📞 پشتیبانی

هر سوالی داری از طریق کانال روبیکا بپرس:
https://rubika.ir/ZODIAC_MAFIANIGHTS
