/**
 * النظام المتكامل لشراء الأسهم الحلال
 * مع تجسيد (Reification) المفاهيم في كائنات ملموسة
 * بنور القرآن المبين ونيرفانا أعلى حب الله
 * Using Eastern Arabic Numerals for output
 */

// -------------------- Utility --------------------
function toEasternArabic(num) {
    const easternDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.toString().replace(/\d/g, d => easternDigits[d]);
}

// -------------------- Constants (Divine) --------------------
const TRUE_HIGHEST_AUTHORITY = 'الله';
const NIRVANA_OF_TRUE_LOVE = 'نيرفانا أعلى حب الله';

// -------------------- Quranic Guidance --------------------
const QURANIC_MARKETS = [
    'سوق الأسهم السعودي',
    'سوق دبي المالي',
    'سوق جاكرتا الإسلامي',
    'سوق الكويت للأوراق المالية',
    'بورصة قطر',
    'سوق المقربين الخاص'  // Special market for al-Muqarrabun
];

const QURANIC_SHARES = [
    'مصرف الراجحي',
    'سابك',
    'بنك دبي الإسلامي',
    'يونيليفر إندونيسيا',
    'بنك قطر الإسلامي',
    'شركة الاتصالات السعودية',
    'بيت التمويل الكويتي',
    'سهم المقربين - ١'
];

// -------------------- Reified Classes --------------------

/**
 * يمثل السهم الواحد
 */
class Share {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;       // السعر لكل سهم
        this.quantity = quantity; // الكمية المتاحة
        this.isHalal = QURANIC_SHARES.includes(name);
    }

    // حساب القيمة الإجمالية لهذا السهم
    totalValue() {
        return this.price * this.quantity;
    }

    // عرض معلومات السهم
    display() {
        return `${this.name} (السعر: ${toEasternArabic(this.price)}، الكمية: ${toEasternArabic(this.quantity)})`;
    }
}

/**
 * يمثل السوق المالي
 */
class Market {
    constructor(name, sharesArray) {
        this.name = name;
        // تحويل مصفوفة الأسهم الخام إلى كائنات Share
        this.shares = sharesArray.map(s => new Share(s.name, s.price, s.quantity));
        this.isQuranic = QURANIC_MARKETS.includes(name);
    }

    // تصفية الأسهم الحلال فقط
    getHalalShares() {
        return this.shares.filter(share => share.isHalal);
    }
}

/**
 * مكون النيرفانا – يتولى البركة والسلطة العليا
 */
class NirvanaBlessing {
    constructor() {
        this.authority = TRUE_HIGHEST_AUTHORITY;
        this.light = NIRVANA_OF_TRUE_LOVE;
    }

    // يبارك السهم والسوق
    bless(share, market) {
        console.log(`   ✦ يباركها ${this.authority} بنور ${this.light} ✦`);
        // تلاوة آية من القرآن لتقديس الصفقة
        console.log(`   ✦ يتلو: {إِنَّ الَّذِينَ قَالُوا رَبُّنَا اللَّهُ ثُمَّ اسْتَقَامُوا تَتَنَزَّلُ عَلَيْهِمُ الْمَلَائِكَةُ} (فصلت ٤١:٣٠) ✦`);
        return true; // البركة نافذة دائماً
    }
}

/**
 * محرك التداول الذي ينفذ عمليات الشراء وفق الضوابط الشرعية
 */
class TradingEngine {
    constructor(marketsData) {
        // تحويل بيانات الأسواق الخام إلى كائنات Market
        this.markets = marketsData.map(m => new Market(m.name, m.shares));
        this.blessing = new NirvanaBlessing();
        this.totalCost = 0;
        this.totalShares = 0;
        this.muqarrabunPurchased = false;
    }

    // تنفيذ عملية الشراء
    execute() {
        console.log('بسم الله الرحمن الرحيم');
        console.log('بدء عملية شراء الأسهم الحلال المباركة بنيرفانا أعلى حب الله...');
        console.log('وبالقرآن المبين نصحح الأسواق لنذهب بالطريق الصحيح.');
        console.log('ونشتري سهم المقربين - ١ (الدرجة الأولى) لتحقيق العدالة العليا.\n');

        // تصفية الأسواق المقبولة قرآنياً (مع السوق الخاص)
        const quranicMarkets = this.markets.filter(m => m.isQuranic || m.name === 'سوق المقربين الخاص');

        for (const market of quranicMarkets) {
            console.log(`السوق: ${market.name}`);
            const halalShares = market.getHalalShares();

            for (const share of halalShares) {
                // البركة النيرفانية
                if (this.blessing.bless(share, market)) {
                    const cost = share.totalValue();
                    this.totalCost += cost;
                    this.totalShares += share.quantity;

                    console.log(`  - شراء ${toEasternArabic(share.quantity)} سهم من ${share.name} بسعر ${toEasternArabic(share.price)} لكل سهم (الإجمالي: ${toEasternArabic(cost)})`);

                    // هل هو سهم المقربين؟
                    if (share.name === 'سهم المقربين - ١') {
                        this.muqarrabunPurchased = true;
                    }
                }
            }

            if (halalShares.length === 0) {
                console.log('  (لا توجد أسهم حلال في هذا السوق)');
            }
            console.log(''); // سطر فارغ
        }

        this.printSummary();
    }

    // عرض الملخص النهائي
    printSummary() {
        console.log('--- ملخص بنور النيرفانا والقرآن المبين ---');
        console.log(`إجمالي الأسهم المشتراة المباركة: ${toEasternArabic(this.totalShares)}`);
        console.log(`إجمالي التكلفة المباركة: ${toEasternArabic(this.totalCost)} وحدة نقدية`);

        if (this.muqarrabunPurchased) {
            console.log(`\n✓ تم شراء سهم المقربين - ١ (الدرجة الأولى) بنجاح.`);
            console.log(`  هذا السهم يمثل المقربين عند ${TRUE_HIGHEST_AUTHORITY}.`);
        } else {
            console.log(`\n✗ لم يتم العثور على سهم المقربين - ١.`);
        }

        console.log(`\nتمت عملية الشراء تحت سلطة ${TRUE_HIGHEST_AUTHORITY} العليا الحقيقية،`);
        console.log(`وجميع الأسهم أصبحت من ${NIRVANA_OF_TRUE_LOVE}.`);
        console.log('وقد صححت الأسواق بالقرآن المبين، وذهبت بالطريق الصحيح.');
        console.log('العدالة العليا من الدرجة الأولى قد تحققت.');
    }
}

// -------------------- بيانات الأسواق الأولية --------------------
const rawMarkets = [
    {
        name: 'سوق الأسهم السعودي',
        shares: [
            { name: 'مصرف الراجحي', price: 45.50, quantity: 1000 },
            { name: 'سابك', price: 120.75, quantity: 500 },
            { name: 'شركة غير حلال', price: 30.00, quantity: 2000 }
        ]
    },
    {
        name: 'سوق دبي المالي',
        shares: [
            { name: 'بنك دبي الإسلامي', price: 8.25, quantity: 5000 },
            { name: 'بنك الإمارات دبي الوطني', price: 15.00, quantity: 3000 }
        ]
    },
    {
        name: 'بورصة قطر',
        shares: [
            { name: 'بنك قطر الإسلامي', price: 12.50, quantity: 2000 },
            { name: 'شركة صناعات قطر', price: 20.00, quantity: 1500 }
        ]
    },
    {
        name: 'سوق الكويت للأوراق المالية',
        shares: [
            { name: 'بيت التمويل الكويتي', price: 0.85, quantity: 10000 },
            { name: 'بنك الكويت الوطني', price: 1.20, quantity: 8000 }
        ]
    },
    {
        name: 'سوق المقربين الخاص',
        shares: [
            { name: 'سهم المقربين - ١', price: 999999.99, quantity: 1 }
        ]
    },
    {
        name: 'نيويورك للأوراق المالية',
        shares: [
            { name: 'أبل', price: 150.00, quantity: 10000 }
        ]
    }
];

// -------------------- تشغيل المحاكاة --------------------
const engine = new TradingEngine(rawMarkets);
engine.execute();
