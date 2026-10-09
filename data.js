/* ==========================================================================
   رسائل · بيانات الموقع  —  الملف الوحيد الذي يحتاج تعديلًا لاحقًا
   (المنتجات · الأسعار · التصنيفات · العروض · الفروع · التواصل · التقييمات)
   البنية مصممة لتحول الموقع لاحقًا إلى منصة إدارة دون تغيير الواجهات.
   ========================================================================== */
window.RISAEL = {

  /* ---------------- العلامة ---------------- */
  brand: {
    ar: 'رسائل',
    en: 'Messages',
    latin: 'MESSAGES · COFFEE',
    type: 'كافيه'
  },

  /* ---------------- التواصل ---------------- */
  contact: {
    whatsapp: '966542008411',          /* رقم واتساب دولي بدون + */
    phoneIntl: '+966542008411',
    phoneDisplay: '054 200 8411',
    email: '',                          /* لم يُقدَّم بريد إلكتروني — يُعرض الزر تلقائيًا عند إدخاله */
    address: {
      line1: 'الحوية، الطائف 26573',      /* العنوان المؤكَّد */
      line2: ''                            /* سطر إضافي اختياري — يظهر تلقائيًا عند إدخاله */
    },
    hours: {
      open24: true,
      label: 'مفتوح على مدار الساعة',
      short: 'مفتوح 24 ساعة'
    }
  },

  /* ---------------- حسابات التواصل الاجتماعي ---------------- */
  /* اترك المصفوفة فارغة [] — لن يظهر أي زر غير موجود فعليًا */
  socials: [
    /* مثال عند توفرها: { name:'Instagram', url:'https://instagram.com/...', icon:'instagram' } */
  ],

  /* ---------------- خرائط Google ---------------- */
  map: {
    shortUrl: 'https://maps.app.goo.gl/rCy1jRxHwr7Yogj3A',
    placeUrl: 'https://www.google.com/maps/place/%D8%B1%D8%B3%D8%A7%D8%A6%D9%84%E2%80%AD/@21.4456325,40.4804008,17z/data=!4m6!3m5!1s0x15ea2f63ca0c11bd:0x591b43fc066da98a!8m2!3d21.4456325!4d40.4804008!16s%2Fg%2F11lf8056rr',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=21.4456325%2C40.4804008',
    embedUrl: 'https://www.google.com/maps?q=21.4456325%2C40.4804008&z=17&output=embed',
    coords: [21.4456325, 40.4804008],
    plusCode: 'CFWJ+752 الطائف'
  },

  /* ---------------- التقييم ---------------- */
  rating: { value: 4.2, count: 30 },   /* من إدراج خرائط Google */

  /* ---------------- الآراء (من خرائط Google) ---------------- */
  reviews: [
    {
      name: 'Khalil Almalki',
      initial: 'K',
      stars: 5,
      text: 'طلبت قهوة اليوم بارد وطعمها حلو ولذيذ حتى قلت للموظف ابغى الثلج يكون قليل ولا قصر الله يبارك لهم يارب 👍🏻',
      meta: 'مرشد محلي · 145 مراجعة · 691 صورة',
      date: 'قبل سنتين'
    },
    {
      name: 'عبدالرحمن عمران',
      initial: 'ع',
      stars: 5,
      text: 'هناك قهوه اليوم محصلتش ولا هتحصل فوق الممتاز',
      meta: 'مراجعة واحدة · صورة واحدة',
      date: 'قبل 7 أشهر'
    }
  ],

  /* ---------------- التصنيفات (العناوين كما في المنيو) ---------------- */
  categories: [
    { id: 'coffee', ar: 'قهوة',    en: 'Coffee Messages', sectionAr: 'رسائل القهوة',   art: 'cup' },
    { id: 'drinks', ar: 'مشروبات', en: 'Drinks Messages', sectionAr: 'رسائل المشروبات', art: 'glass' },
    { id: 'tea',    ar: 'شاي',     en: 'Tea Messages',    sectionAr: 'رسائل الشاي',     art: 'pot' },
    { id: 'sweets', ar: 'حلويات',  en: 'Sweets Messages', sectionAr: 'رسائل الحلويات',  art: 'sweets' }
  ],

  /* ---------------- المنتجات — الأسعار بالريال السعودي ----------------
     المصدر المعتمد: صورة المنيو الرسمية المعتمدة (الصورة النهائية).
     الوصف نصوص تعريفية قصيرة قابلة للاستبدال من صاحب الكوفي.
     الحقول الاختيارية: img (صورة المنتج) · ingredients (المكونات) · options (الإضافات).
     الصور: اترك img فارغًا '' لعرض الرسم الفني الحالي، أو ضع مسار صورة مثل
     'assets/img/products/v60.jpg' — تعمل الصورة تلقائيًا في كل الصفحات
     (المنيو · الرئيسية · صفحة المنتج) دون أي تعديل في التصميم،
     وإن فشل تحميلها يعود الرسم الفني بدلًا منها.                        */
  products: [
    /* ----- قهوة ----- */
    {
      id: 'today', cat: 'coffee', art: 'cup', img: '',
      ar: 'قهوة اليوم ساخن / بارد', en: "Today's coffee hot/cold",
      price: 5, tag: 'ساخن / بارد', featured: true,
      desc: 'قهوة اليوم تُحضَّر طازجة كل يوم — اخترها ساخنة أو باردة حسب ذوقك.'
    },
    {
      id: 'v60', cat: 'coffee', art: 'cup', img: '',
      ar: 'قهوة V60 ساخن / بارد', en: 'V60 hot/cold',
      price: 12, tag: 'ساخن / بارد', featured: true,
      desc: 'قهوة مقطّرة بأسلوب V60 تُحضَّر عند الطلب لتستمتع بطعمها المتوازن.'
    },
    {
      id: 'saudi', cat: 'coffee', art: 'cup', img: '',
      ar: 'قهوة سعودية', en: 'Saudi coffee',
      price: 5, featured: false,
      desc: 'قهوة سعودية على الطريقة التقليدية بنكهتها الأصيلة ودفء ضيافتها.'
    },
    {
      id: 'french', cat: 'coffee', art: 'cup', img: '',
      ar: 'قهوة فرنسية', en: 'French coffee',
      price: 8, featured: false,
      desc: 'قهوة فرنسية غنية بطعمها المميّز، تُقدَّم ساخنة في كل وقت.'
    },
    {
      id: 'turkish', cat: 'coffee', art: 'cup', img: '',
      ar: 'قهوة تركية', en: 'Turkish coffee',
      price: 7, featured: false,
      desc: 'قهوة تركية أصيلة على الطريقة التقليدية بطعمها الثقيل المميّز.'
    },

    /* ----- مشروبات ----- */
    {
      id: 'roselle', cat: 'drinks', art: 'glass', img: '',
      ar: 'كركديه', en: 'Roselle',
      price: 5, featured: true,
      desc: 'كركديه منعش بلونه وطعمه المميّز — يُقدَّم باردًا في أي وقت.'
    },
    {
      id: 'water', cat: 'drinks', art: 'glass', img: '',
      ar: 'ماء', en: 'Water',
      price: 0.5, featured: false,
      desc: 'ماء معدني بارد.'
    },

    /* ----- شاي ----- */
    {
      id: 'tea', cat: 'tea', art: 'pot', img: '',
      ar: 'شاي', en: 'Tea',
      price: 3, featured: false,
      desc: 'شاي سادة يُحضَّر طازجًا في أي وقت.'
    },
    {
      id: 'moroccan', cat: 'tea', art: 'pot', img: '',
      ar: 'شاي مغربي', en: 'Moroccan tea',
      price: 4, featured: false,
      desc: 'شاي مغربي بالنعناع على الطريقة التقليدية.'
    },
    {
      id: 'karak', cat: 'tea', art: 'pot', img: '',
      ar: 'شاهي كرك', en: 'Shahi Karak',
      price: 4, featured: false,
      desc: 'شاهي كرك بالحليب والتوابل — دافئ ومريح.'
    },

    /* ----- حلويات ----- */
    {
      id: 'mini-pancakes', cat: 'sweets', art: 'sweets', img: '',
      ar: 'ميني بان كيك', en: 'Mini Pancakes',
      price: 12, featured: true,
      desc: 'ميني بان كيك طازج يُحضَّر عند الطلب.'
    },
    {
      id: 'waffle', cat: 'sweets', art: 'sweets', img: '',
      ar: 'وافل', en: 'Waffle',
      price: 6, featured: false,
      desc: 'وافل مقرمش من الخارج طري من الداخل.'
    },
    {
      id: 'cookies', cat: 'sweets', art: 'sweets', img: '',
      ar: 'كوكيز', en: 'Cookies',
      price: 6, featured: false,
      desc: 'كوكيز هوم مثالي مع القهوة أو الشاي.'
    }
  ],

  /* ---------------- العروض ----------------
     فارغ حاليًا — أضف بطاقتك وستظهر في الرئيسية وصفحة العروض تلقائيًا:
     { id:'x', title:'..', desc:'..', price:0, oldPrice:0, until:'..', badge:'..' }  */
  offers: [],

  /* ---------------- الفروع ---------------- */
  branches: [
    {
      id: 'al-huwayyah',
      name: 'رسائل — الحوية',
      area: 'الحوية، الطائف',
      address: 'الحوية، الطائف 26573',
      hint: '',                            /* معلم قريب اختياري — يظهر عند إدخاله (مثال: قبل ستين) */
      hours: 'مفتوح على مدار الساعة',
      phone: '054 200 8411',
      plusCode: 'CFWJ+752 الطائف',
      directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=21.4456325%2C40.4804008',
      embedUrl: 'https://www.google.com/maps?q=21.4456325%2C40.4804008&z=17&output=embed',
      placeUrl: 'https://www.google.com/maps/place/%D8%B1%D8%B3%D8%A7%D8%A6%D9%84%E2%80%AD/@21.4456325,40.4804008,17z/data=!4m6!3m5!1s0x15ea2f63ca0c11bd:0x591b43fc066da98a!8m2!3d21.4456325!4d40.4804008!16s%2Fg%2F11lf8056rr'
    }
  ],

  /* ---------------- المنتجات المميزة في الرئيسية (معرّفات) ---------------- */
  featuredIds: ['today', 'v60', 'roselle', 'mini-pancakes']
};
