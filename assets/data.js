// داده‌های بازی‌ها
const GAMES = [
    {
        slug: 'clash-royale',
        title: 'کلش رویال',
        icon: '👑',
        shortDesc: 'بازی استراتژیک کارتی محبوب با مود بی‌نهایت جم و الماس',
        desc: 'بازی کلش رویال یکی از محبوب‌ترین بازی‌های استراتژیک جهان است. در نسخه مود شده می‌توانید از جم و سکه بی‌نهایت، کارت‌های باز شده و آپگرید رایگان بهره‌مند شوید.',
        features: ['جم و سکه بی‌نهایت', 'تمام کارت‌ها باز شده', 'بدون تبلیغات', 'آنتی بن قوی'],
        requirements: { android: '۵.۰ به بالا', ram: '۲ گیگابایت', storage: '۲۰۰ MB' },
        rating: '۴.۸',
        badge: 'محبوب',
        size: '۱۸۰ MB',
        version: 'v3.5.0'
    },
    {
        slug: 'free-fire',
        title: 'فری فایر',
        icon: '🔥',
        shortDesc: 'بازی بتل رویال با گرافیک بالا و مود Aim Bot و Wall Hack',
        desc: 'فری فایر یکی از پرطرفدارترین بازی‌های بتل رویال در ایران است. نسخه مود شده شامل Aim Bot، Wall Hack، Auto Headshot و منوی مود حرفه‌ای است.',
        features: ['Aim Bot هوشمند', 'Wall Hack', 'Auto Headshot', 'بدون ریسپاون', 'اسکین‌های رایگان'],
        requirements: { android: '۵.۱ به بالا', ram: '۳ گیگابایت', storage: '۶۰۰ MB' },
        rating: '۴.۹',
        badge: 'پرطرفدار',
        size: '۵۵۰ MB',
        version: 'v1.103.1'
    },
    {
        slug: 'pubg-mobile',
        title: 'پابجی موبایل',
        icon: '🎯',
        shortDesc: 'بازی بتل رویال شماره ۱ جهان با مود کامل و بدون بن',
        desc: 'پابجی موبایل محبوب‌ترین بازی بتل رویال جهان است. نسخه مود شده شامل ESP، Aim Lock، Magic Bullet، Remove Fog و قابلیت‌های متعدد دیگر است.',
        features: ['ESP Box', 'Aim Lock', 'Magic Bullet', 'Remove Fog', 'Speed Hack', 'بدون بن ۹۰ روز'],
        requirements: { android: '۶.۰ به بالا', ram: '۴ گیگابایت', storage: '۲.۵ GB' },
        rating: '۴.۷',
        badge: 'بروز',
        size: '۲.۳ GB',
        version: 'v2.9.0'
    },
    {
        slug: 'minecraft',
        title: 'ماینکرفت',
        icon: '⛏️',
        shortDesc: 'بازی جهان باز محبوب با مود Menu Mod و Modpack',
        desc: 'ماینکرفت نسخه مود شده شامل Mod Menu، PvP Client، Texture Pack، Shaders و بیش از ۲۰۰ مود مختلف برای تجربه‌ای متفاوت.',
        features: ['Mod Menu', 'PvP Client', 'Texture Pack HD', 'Shaders', 'God Mode', 'Fly Hack'],
        requirements: { android: '۵.۰ به بالا', ram: '۳ گیگابایت', storage: '۴۰۰ MB' },
        rating: '۴.۹',
        badge: 'پرفروش',
        size: '۳۸۰ MB',
        version: 'v1.20.50'
    },
    {
        slug: 'clash-of-clans',
        title: 'کلش آو کلنز',
        icon: '🏰',
        shortDesc: 'بازی استراتژیک ساخت دهکده با جم و الماس بی‌نهایت',
        desc: 'کلش آو کلنز یکی از محبوب‌ترین بازی‌های استراتژیک است. نسخه مود شده شامل جم بی‌نهایت، ساخت سریع، منابع نامحدود و Builder Base باز شده است.',
        features: ['جم بی‌نهایت', 'ساخت فوری', 'منابع نامحدود', 'Builder Base فعال', 'Troops Max Level'],
        requirements: { android: '۵.۰ به بالا', ram: '۲ گیگابایت', storage: '۲۵۰ MB' },
        rating: '۴.۸',
        badge: 'محبوب',
        size: '۲۲۰ MB',
        version: 'v16.0.0'
    },
    {
        slug: 'roblox',
        title: 'روبلوکس',
        icon: '🎲',
        shortDesc: 'بازی جهان باز با Robux بی‌نهایت و Menu Mod',
        desc: 'روبلوکس دنیایی از بازی‌های متنوع است. نسخه مود شده شامل Robux بی‌نهایت، Premium فعال، تمام آیتم‌ها باز شده و Game Pass رایگان است.',
        features: ['Robux بی‌نهایت', 'Premium فعال', 'تمام آیتم‌ها', 'Game Pass رایگان', 'Anti Kick'],
        requirements: { android: '۶.۰ به بالا', ram: '۳ گیگابایت', storage: '۳۰۰ MB' },
        rating: '۴.۶',
        badge: 'جدید',
        size: '۲۸۰ MB',
        version: 'v2.6۴۰.۱۶۴'
    },
    {
        slug: 'call-of-duty-mobile',
        title: 'کال آو دیوتی موبایل',
        icon: '🔫',
        shortDesc: 'بازی اکشن اول شخص با مود کامل و Aimbot حرفه‌ای',
        desc: 'کال آو دیوتی موبایل یکی از بهترین بازی‌های اکشن است. نسخه مود شامل Aimbot، Wallhack، No Recoil، UAV همیشه فعال و God Mode است.',
        features: ['Aimbot حرفه‌ای', 'Wallhack', 'No Recoil', 'UAV همیشه فعال', 'God Mode'],
        requirements: { android: '۶.۰ به بالا', ram: '۴ گیگابایت', storage: '۱.۸ GB' },
        rating: '۴.۷',
        badge: 'محبوب',
        size: '۱.۶ GB',
        version: 'v1.0.38'
    },
    {
        slug: 'candy-crush',
        title: 'کندی کراش',
        icon: '🍬',
        shortDesc: 'بازی پازل محبوب با Booster بی‌نهایت و Lives نامحدود',
        desc: 'کندی کراش یکی از محبوب‌ترین بازی‌های پازل است. نسخه مود شامل Lives نامحدود، Boosterهای بی‌نهایت، عبور از مراحل سخت و Gold Bar بی‌نهایت است.',
        features: ['Lives نامحدود', 'Booster بی‌نهایت', 'Gold Bar بی‌نهایت', 'تمام مراحل باز', 'بدون تبلیغات'],
        requirements: { android: '۴.۴ به بالا', ram: '۲ گیگابایت', storage: '۱۵۰ MB' },
        rating: '۴.۵',
        badge: 'سبک',
        size: '۱۳۰ MB',
        version: 'v1.270.0'
    },
    {
        slug: 'among-us',
        title: 'آمونگ آس',
        icon: '🚀',
        shortDesc: 'بازی چند نفره معمایی با مود Imposter Always و نقش‌های باز',
        desc: 'آمونگ آس بازی محبوب چند نفره است. نسخه مود شامل همیشه Imposter بودن، دیدن نقش دیگران، Speed Hack و Pet Hack است.',
        features: ['Imposter Always', 'نقش‌ها باز', 'Speed Hack', 'Pet Hack', 'No Kill Cooldown'],
        requirements: { android: '۵.۰ به بالا', ram: '۲ گیگابایت', storage: '۲۵۰ MB' },
        rating: '۴.۶',
        badge: 'محبوب',
        size: '۲۳۰ MB',
        version: 'v2023.7.12'
    }
];

// بلاگ
const BLOG_POSTS = [
    {
        slug: 'install-clash-royale-mod',
        title: 'چگونه مود کلش رویال را نصب کنیم؟',
        icon: '👑',
        cat: 'آموزشی',
        date: '۲ روز پیش',
        excerpt: 'آموزش کامل و گام به گام نصب مود کلش رویال روی گوشی‌های اندرویدی به همراه نکات امنیتی مهم'
    },
    {
        slug: 'best-free-fire-mods-2024',
        title: 'بهترین مودهای فری فایر ۲۰۲۴',
        icon: '🔥',
        cat: 'معرفی',
        date: '۵ روز پیش',
        excerpt: 'معرفی ۱۰ مود برتر فری فایر که در سال ۲۰۲۴ منتشر شده‌اند. از Aim Bot تا Auto Headshot'
    },
    {
        slug: 'pubg-pro-tips',
        title: 'ترفندهای حرفه‌ای پابجی موبایل',
        icon: '🎯',
        cat: 'ترفند',
        date: '۱ هفته پیش',
        excerpt: '۲۰ ترفند حرفه‌ای که حتی پرو بازها هم نمی‌دانند. از تنظیمات حساسیت تا استراتژی‌های پیشرفته'
    },
    {
        slug: 'fix-game-ban',
        title: 'رفع مشکل بن شدن در بازی‌ها',
        icon: '🔓',
        cat: 'راهنما',
        date: '۲ هفته پیش',
        excerpt: 'اگر در بازی‌ها بن شدید، این راهنمای کامل به شما کمک می‌کند تا مشکل را حل کنید. از روش‌های قانونی'
    },
    {
        slug: 'minecraft-versions-comparison',
        title: 'مقایسه بهترین نسخه‌های ماینکرفت',
        icon: '⛏️',
        cat: 'مقایسه',
        date: '۳ هفته پیش',
        excerpt: 'کدام نسخه ماینکرفت برای شما مناسب‌تر است؟ مقایسه کامل نسخه‌های Bedrock، Java، Education و Realms'
    },
    {
        slug: 'minecraft-mod-guide',
        title: 'راهنمای جامع ماینکرفت مود شده',
        icon: '📖',
        cat: 'راهنما',
        date: '۱ ماه پیش',
        excerpt: 'از نصب اولین مود تا ساخت Modpack شخصی. راهنمای کامل مود کردن ماینکرفت برای مبتدی‌ها'
    }
];

// آخرین مودها
const LATEST_MODS = [
    { game: 'پابجی موبایل', version: 'v2.9.0', date: '۲ ساعت پیش', icon: '🎯', isNew: true },
    { game: 'فری فایر', version: 'v1.103.1', date: '۱ روز پیش', icon: '🔥', isNew: true },
    { game: 'کلش رویال', version: 'v3.5.0', date: '۲ روز پیش', icon: '👑', isNew: true },
    { game: 'ماینکرفت', version: 'v1.20.50', date: '۳ روز پیش', icon: '⛏️', isNew: false },
    { game: 'روبلوکس', version: 'v2.640.164', date: '۴ روز پیش', icon: '🎲', isNew: false },
    { game: 'کال آو دیوتی', version: 'v1.0.38', date: '۵ روز پیش', icon: '🔫', isNew: false }
];
