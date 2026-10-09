/* ==========================================================================
   رسائل · محرّك الواجهة المشترك
   الهيدر والفوتر والأيقونات والرسوم · التنقل · حركات الظهور ·
   مكوّنات قابلة لإعادة الاستخدام (بطاقات المنتجات والعروض والفروع)
   ========================================================================== */
(function () {
  'use strict';

  var D = window.RISAEL;
  var doc = document;
  var body = doc.body;

  function $(sel, root) { return (root || doc).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || doc).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* ============================================================
     الأيقونات (SVG بأسلوب خط واحد)
     ============================================================ */
  var S = 'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
  var ICONS = {
    wa: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.07 4.49.71.3 1.26.49 1.7.63.72.22 1.37.2 1.88.11.58-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26A9.89 9.89 0 0 1 12.1 2.1a9.83 9.83 0 0 1 6.99 2.9 9.83 9.83 0 0 1 2.89 6.99 9.9 9.9 0 0 1-9.89 9.89m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5.0.16 5.34.16 11.89c0 2.1.55 4.15 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.89a11.82 11.82 0 0 0-3.48-8.41Z"/></svg>',
    phone: '<svg ' + S + '><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.6a1 1 0 0 1-.25 1l-2.22 2.2Z"/></svg>',
    pin: '<svg ' + S + '><path d="M12 21.5S5 16 5 10.5a7 7 0 1 1 14 0c0 5.5-7 11-7 11Z"/><circle cx="12" cy="10.5" r="2.6"/></svg>',
    nav: '<svg ' + S + '><path d="M3.5 11.2 20.5 3.5l-7.7 17-2.1-7.2-7.2-2.1Z"/></svg>',
    clock: '<svg ' + S + '><circle cx="12" cy="12" r="8.6"/><path d="M12 7.4V12l3 1.9"/></svg>',
    star: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9L12 2.6Z"/></svg>',
    search: '<svg ' + S + '><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>',
    menu: '<svg ' + S + '><path d="M4 6.5h16M4 12h16M4 17.5h16"/></svg>',
    close: '<svg ' + S + '><path d="M6 6l12 12M18 6 6 18"/></svg>',
    arrow: '<svg ' + S + '><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
    arrowBack: '<svg ' + S + '><path d="M19 12H5m6-6-6 6 6 6"/></svg>',
    check: '<svg ' + S + '><path d="M20 6.5 9.5 17 4.5 12"/></svg>',
    tag: '<svg ' + S + '><path d="M20.6 13.4 12 22l-9-9V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z"/><circle cx="7.6" cy="7.6" r="1.4"/></svg>',
    chat: '<svg ' + S + '><path d="M21 11.9a8.4 8.4 0 0 1-12.2 7.5L3.5 21l1.6-5.3A8.5 8.5 0 1 1 21 11.9Z"/></svg>',
    cup: '<svg ' + S + '><path d="M6 8h12l-1.2 11.2A2.6 2.6 0 0 1 14.2 21H9.8a2.6 2.6 0 0 1-2.6-1.8L6 8Z"/><path d="M5 5.2h14V8H5z"/><path d="M8.5 2.5c0 1 1.2 1.3 1.2 2.4M14.5 2.5c0 1 1.2 1.3 1.2 2.4"/></svg>',
    glass: '<svg ' + S + '><path d="M7.5 7h9l-1.1 12.6A2.4 2.4 0 0 1 13 21.8h-2a2.4 2.4 0 0 1-2.4-2.2L7.5 7Z"/><path d="M7 4.6h10"/><path d="M14.5 2 13 7"/></svg>',
    pot: '<svg ' + S + '><path d="M5.5 10.5a6.5 6.5 0 0 1 13 0v1.7a4.8 4.8 0 0 1-4.8 4.8h-3.4A4.8 4.8 0 0 1 5.5 12.2v-1.7Z"/><path d="M18.5 11.5c1.8.4 3 1.6 3.4 3.4M5.5 11.5c-1.8.4-3 1.6-3.4 3.4"/><path d="M9.6 6.6c0-1.4 4.8-1.4 4.8 0"/><path d="M10.5 3.4c0 .9 1.5.9 1.5 1.9"/></svg>',
    sweets: '<svg ' + S + '><ellipse cx="12" cy="17.6" rx="8.4" ry="3"/><ellipse cx="12" cy="13.4" rx="6.8" ry="2.7"/><ellipse cx="12" cy="9.6" rx="5.2" ry="2.4"/><path d="M9.8 6.4h4.4v1.9H9.8z"/></svg>',
    external: '<svg ' + S + '><path d="M14 4h6v6"/><path d="M20 4 11 13"/><path d="M19 14.5V19a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 4 19V7a1.5 1.5 0 0 1 1.5-1.5H10"/></svg>',
    gift: '<svg ' + S + '><path d="M4 11h16v8.5A1.5 1.5 0 0 1 18.5 21h-13A1.5 1.5 0 0 1 4 19.5V11Z"/><path d="M3 7.5h18V11H3z"/><path d="M12 7.5V21"/><path d="M12 7.5S10.8 3 8.4 3a2.2 2.2 0 0 0 0 4.5H12Zm0 0S13.2 3 15.6 3a2.2 2.2 0 0 1 0 4.5H12Z"/></svg>',
    instagram: '<svg ' + S + '><rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="3.9"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>',
    snapchat: '<svg ' + S + '><path d="M12 3c2.9 0 4.9 2.2 4.9 5.1 0 1-.1 1.9-.1 2.4.4.2.9.1 1.4-.2.7-.3 1.3.6.6 1.2-.6.5-1.5.8-1.5 1.2 0 .8 2 2.7 3.4 3.2.6.2.5 1-.1 1.2-.7.2-1.6.3-1.9.6-.2.3 0 .9-.5 1-.5.1-1.6-.3-2.6-.1-1 .2-1.6 1.4-3.1 1.4s-2.1-1.2-3.1-1.4c-1-.2-2.1.2-2.6.1-.5-.1-.3-.7-.5-1-.3-.3-1.2-.4-1.9-.6-.6-.2-.7-1-.1-1.2C6.7 16.8 8.7 15 8.7 14c0-.4-.9-.7-1.5-1.2-.7-.6-.1-1.5.6-1.2.5.3 1 .4 1.4.2 0-.5-.1-1.4-.1-2.4C9.1 5.2 10.9 3 12 3Z"/></svg>',
    tiktok: '<svg ' + S + '><path d="M14.5 3h2.6c.2 1.6 1.2 3 2.7 3.6.7.3 1.5.5 2.2.5v2.7c-1.9 0-3.7-.7-5.1-1.9v5.7A5.9 5.9 0 1 1 11 7.7v2.8a3.1 3.1 0 1 0 3.5 3.1V3Z"/></svg>',
    x: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.6 3h3.1l-6.8 7.8L22 21h-6.3l-4.9-6.4L5.1 21H2l7.3-8.3L2.3 3h6.4l4.4 5.9L17.6 3Zm-1.1 16.1h1.7L7.7 4.8H5.9l10.6 14.3Z"/></svg>',
    mail: '<svg ' + S + '><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="m3.8 7 8.2 6 8.2-6"/></svg>'
  };

  /* رسوم المنتجات (خط واحد بأسلوب الـMenu) */
  var ART = {
    cup: '<svg ' + S + '><path d="M7 9h11.2l-1.4 10.8A2.8 2.8 0 0 1 14 22.3h-5.6A2.8 2.8 0 0 1 5.7 19.8L7 9Z"/><path d="M5.6 5.4h14V9h-14z"/><path d="M9.4 2.7c0 1.1 1.4 1.4 1.4 2.5M15 2.7c0 1.1 1.4 1.4 1.4 2.5"/></svg>',
    glass: '<svg ' + S + '><path d="M8.6 7.5h9.8l-1.2 13a2.6 2.6 0 0 1-2.6 2.3h-2.2a2.6 2.6 0 0 1-2.6-2.3l-1.2-13Z"/><path d="M8 4.6h11"/><path d="M16.4 1.5 14.7 7.4"/><path d="M9.4 13.5c1.4.9 2.7-.7 4.1 0s2.7.7 4.1 0"/></svg>',
    pot: '<svg ' + S + '><path d="M6.8 11.5a6.2 6.2 0 0 1 12.4 0v1.6a4.6 4.6 0 0 1-4.6 4.6h-3.2a4.6 4.6 0 0 1-4.6-4.6v-1.6Z"/><path d="M19.2 12.3c1.7.4 2.8 1.5 3.2 3.2M6.8 12.3c-1.7.4-2.8 1.5-3.2 3.2"/><path d="M10.6 8.2c0-1.3 4.8-1.3 4.8 0"/><path d="M11.6 5c0 .9 1.4.9 1.4 1.9"/></svg>',
    sweets: '<svg ' + S + '><ellipse cx="12" cy="18" rx="8.4" ry="3.1"/><ellipse cx="12" cy="13.6" rx="6.9" ry="2.8"/><ellipse cx="12" cy="9.7" rx="5.3" ry="2.5"/><path d="M9.8 6.3h4.4v2.1H9.8z"/><path d="M17.8 10.6c1.2.6 1.8 1.7 1.6 2.9"/></svg>'
  };

  var BIRD = '<svg class="bird" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 30" fill="currentColor" aria-hidden="true"><path d="M3 21.5c6.8 3.4 13.6 2.5 20-2.6-.6 2.6-.2 5 1.4 7.1-2.9-.6-5.6-.1-8.2 1.6-1.5-2.2-3.7-3.9-6.6-4.9-2.1.8-4.4.8-6.6-.1 1.7-1.3 2.9-2.9 3.5-4.8-1.6.3-3 .1-4.4-.6 1.4-1.1 2.3-2.6 2.6-4.4 2.3 1.6 4.6 2.6 7 3 2.4-4.9 6-8.6 10.8-11.1-1.4 3.4-1.6 6.6-.6 9.7 4-3.4 8.6-5 13.9-4.7-3.6 1.7-6.4 4.1-8.4 7.3 3-.6 5.9-.2 8.7 1.2-3.4.9-6.2 2.6-8.5 5.1 2.4.3 4.5 1.3 6.4 3-4.6.6-9-.6-13.2-3.6-4.3 3.1-9.3 4.6-15 4.6-2.1 0-4.1-.2-6-.7Z"/></svg>';

  /* ============================================================
     روابط ودوال مساعدة
     ============================================================ */
  function waHref(text) {
    return 'https://wa.me/' + D.contact.whatsapp + (text ? '?text=' + encodeURIComponent(text) : '');
  }
  function fmtPrice(p) {
    return (Math.round(p * 100) / 100) + '';
  }
  function icon(name) { return ICONS[name] || ''; }

  function starsHTML(n, extraClass) {
    var out = '<span class="stars ' + (extraClass || '') + '" role="img" aria-label="' + n + ' من 5 نجوم">';
    for (var i = 0; i < 5; i++) out += '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9L12 2.6Z"/></svg>';
    return out + '</span>';
  }

  function catById(id) {
    for (var i = 0; i < D.categories.length; i++) if (D.categories[i].id === id) return D.categories[i];
    return { ar: '', en: '', sectionAr: '', art: 'cup' };
  }
  function productById(id) {
    for (var i = 0; i < D.products.length; i++) if (D.products[i].id === id) return D.products[i];
    return null;
  }

  /* ============================================================
     الهيدر
     ============================================================ */
  var NAV = [
    ['home', 'الرئيسية', 'index.html'],
    ['menu', 'المنيو', 'menu.html'],
    ['branches', 'الفروع', 'branches.html'],
    ['offers', 'العروض', 'offers.html'],
    ['rate', 'التقييم', 'rate.html'],
    ['contact', 'تواصل', 'contact.html']
  ];

  function buildHeader(slot) {
    var page = body.dataset.page || '';
    var links = NAV.map(function (n) {
      return '<a href="' + n[2] + '"' + (n[0] === page ? ' class="is-active" aria-current="page"' : '') + '>' + n[1] + '</a>';
    }).join('');

    slot.outerHTML =
      '<a class="skip-link" href="#main">تخطي إلى المحتوى</a>' +
      '<header class="site-header" id="siteHeader">' +
        '<div class="container header-inner">' +
          '<a class="brand" href="index.html" aria-label="' + esc(D.brand.ar) + ' ' + esc(D.brand.latin) + ' — الرئيسية">' +
            BIRD +
            '<span class="brand-texts">' +
              '<span class="brand-word">' + esc(D.brand.ar) + '</span>' +
              '<span class="brand-tag">' + esc(D.brand.latin) + '</span>' +
            '</span>' +
          '</a>' +
          '<nav class="main-nav" id="mainNav" aria-label="التنقل الرئيسي">' + links + '</nav>' +
          '<div class="header-actions">' +
            '<a class="icon-btn" href="' + waHref('السلام عليكم، أبغى أطلب من ' + D.brand.ar) + '" target="_blank" rel="noopener" aria-label="اطلب عبر واتساب">' + icon('wa') + '</a>' +
            '<button class="icon-btn nav-toggle" id="navToggle" aria-expanded="false" aria-controls="mainNav" aria-label="فتح القائمة">' + icon('menu') + '</button>' +
          '</div>' +
        '</div>' +
      '</header>';
  }

  function wireHeader() {
    var header = $('#siteHeader');
    var nav = $('#mainNav');
    var toggle = $('#navToggle');
    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.setAttribute('aria-label', open ? 'إغلاق القائمة' : 'فتح القائمة');
        toggle.innerHTML = icon(open ? 'close' : 'menu');
      });
    }
    if (header) {
      var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 6); };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  }

  /* ============================================================
     الفوتر
     ============================================================ */
  function buildFooter(slot) {
    var c = D.contact;
    var links = NAV.slice(1).map(function (n) {
      return '<li><a href="' + n[2] + '">' + n[1] + '</a></li>';
    }).join('');

    var socials = '';
    if (D.socials && D.socials.length) {
      socials =
        '<div class="footer-col">' +
          '<h2>تابعنا</h2>' +
          '<div class="socials">' +
            D.socials.map(function (s) {
              return '<a href="' + esc(s.url) + '" target="_blank" rel="noopener" aria-label="' + esc(s.name) + '">' + icon(s.icon || 'external') + '</a>';
            }).join('') +
          '</div>' +
        '</div>';
    }

    slot.outerHTML =
      '<footer class="site-footer">' +
        '<div class="container footer-top">' +
          '<div class="footer-brand">' +
            '<span class="brand-word">' + esc(D.brand.ar) + '</span>' +
            '<p>' + esc(D.brand.type) + ' في ' + esc(c.address.line1) + ' — نستقبلك في أي وقت' + (c.hours.open24 ? '، ومفتوحون على مدار الساعة.' : '، ' + esc(c.hours.label) + '.') + '</p>' +
            '<div class="chips">' +
              '<span class="chip chip--dark">' + icon('clock') + esc(c.hours.short) + '</span>' +
              '<span class="chip chip--dark">' + icon('star') + '‏' + D.rating.value + ' (' + D.rating.count + ')</span>' +
            '</div>' +
          '</div>' +
          '<div class="footer-col">' +
            '<h2>روابط سريعة</h2>' +
            '<ul>' + links + '</ul>' +
          '</div>' +
          '<div class="footer-col">' +
            '<h2>تواصل</h2>' +
            '<ul>' +
              '<li><a href="' + waHref('السلام عليكم، أبغى أطلب من ' + D.brand.ar) + '" target="_blank" rel="noopener">' + icon('wa') + 'واتساب: <span dir="ltr">' + esc(c.phoneDisplay) + '</span></a></li>' +
              '<li><a href="tel:' + esc(c.phoneIntl) + '">' + icon('phone') + 'اتصال مباشر</a></li>' +
              '<li><a href="' + D.map.placeUrl + '" target="_blank" rel="noopener">' + icon('pin') + esc(c.address.line1) + '</a></li>' +
              '<li><span class="muted-note" style="display:inline-flex;gap:8px;align-items:center">' + icon('clock') + esc(c.hours.label) + '</span></li>' +
              (c.email ? '<li><a href="mailto:' + esc(c.email) + '">' + icon('mail') + esc(c.email) + '</a></li>' : '') +
            '</ul>' +
          '</div>' +
          socials +
        '</div>' +
        '<div class="container footer-bottom">' +
          '<span>© <span id="year"></span> ' + esc(D.brand.ar) + ' — جميع الحقوق محفوظة</span>' +
          '<span>التقييمات والصور من <a href="' + D.map.placeUrl + '" target="_blank" rel="noopener">خرائط Google</a></span>' +
        '</div>' +
      '</footer>';

    var y = $('#year'); if (y) y.textContent = new Date().getFullYear();
  }

  /* ============================================================
     شريط الإجراءات السفلي (جوال) — حسب الصفحة
     ============================================================ */
  var BARS = {
    home: [
      { label: 'المنيو', href: 'menu.html', cls: 'btn--gold', icon: 'cup' },
      { label: 'اطلب واتساب', href: null, wa: true, cls: 'btn--wa', icon: 'wa' }
    ],
    menu: [
      { label: 'اطلب عبر واتساب', href: null, wa: true, cls: 'btn--wa', icon: 'wa' },
      { label: 'الاتجاهات', href: D.map.directionsUrl, cls: 'btn--ghost-light', icon: 'nav', ext: true }
    ],
    branches: [
      { label: 'الاتجاهات', href: D.map.directionsUrl, cls: 'btn--gold', icon: 'nav', ext: true },
      { label: 'واتساب', href: null, wa: true, cls: 'btn--wa', icon: 'wa' }
    ],
    product: [
      { label: 'اطلب عبر واتساب', href: null, wa: true, cls: 'btn--wa', icon: 'wa' }
    ]
  };

  function buildActionBar() {
    var conf = BARS[body.dataset.page];
    if (!conf) return;
    var slot = doc.querySelector('[data-action-bar]');
    if (!slot) return;
    var html = conf.map(function (b) {
      var href = b.wa ? waHref('السلام عليكم، أبغى أطلب من ' + D.brand.ar) : b.href;
      return '<a class="btn ' + b.cls + '" href="' + href + '"' +
        (b.ext || b.wa ? ' target="_blank" rel="noopener"' : '') + '>' +
        icon(b.icon) + '<span>' + b.label + '</span></a>';
    }).join('');
    slot.outerHTML = '<div class="action-bar" role="navigation" aria-label="إجراءات سريعة">' + html + '</div>';
    body.classList.add('has-action-bar');
  }

  /* ============================================================
     حركات الظهور عند التمرير
     ============================================================ */
  function initReveal(root) {
    var els = $$('.reveal', root);
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ============================================================
     مكوّنات مشتركة قابلة لإعادة الاستخدام
     ============================================================ */
  function productCardHTML(p, opts) {
    opts = opts || {};
    var cat = catById(p.cat);
    /* صورة المنتج إن وُجدت (حقل img في data.js) — وإلا الرسم الفني،
       وإذا فشل تحميل الصورة تُزال تلقائيًا فيظهر الرسم بدلًا منها */
    var art = ART[p.art || cat.art] || ART.cup;
    if (p.img) {
      art += '<img class="p-img" src="' + esc(p.img) + '" alt="" loading="lazy" decoding="async" onerror="this.remove()">';
    }
    return '' +
      '<a class="product-card' + (opts.plain ? '' : ' reveal') + (opts.cls ? ' ' + opts.cls : '') + '" href="product.html?id=' + encodeURIComponent(p.id) + '">' +
        '<span class="p-media">' + art + '</span>' +
        '<span class="p-body">' +
          '<span class="p-cat">' + esc(cat.en) + '</span>' +
          '<span class="p-name">' + esc(p.ar) + '</span>' +
          '<span class="p-name-en">' + esc(p.en) + '</span>' +
        '</span>' +
        '<span class="p-foot">' +
          '<span class="price-tag">' + fmtPrice(p.price) + ' <small>ريال</small></span>' +
          '<span class="p-arrow">' + icon('arrow') + '</span>' +
        '</span>' +
      '</a>';
  }

  function emptyStateHTML(iconName, title, text, btn, hLevel) {
    var h = hLevel || 3;
    return '' +
      '<div class="empty-state">' +
        '<span class="empty-icon">' + icon(iconName) + '</span>' +
        '<h' + h + '>' + esc(title) + '</h' + h + '>' +
        '<p>' + esc(text) + '</p>' +
        (btn ? '<a class="btn btn--gold btn--sm" href="' + btn.href + '"' + (btn.ext ? ' target="_blank" rel="noopener"' : '') + '>' + esc(btn.label) + '</a>' : '') +
      '</div>';
  }

  function offersHTML(list, hLevel) {
    if (!list.length) {
      return emptyStateHTML('gift', 'ما في عروض جديدة حاليًا',
        'كن أول من يعرف عروض رسائل القادمة عبر خرائط Google.',
        { label: 'تابعنا على خرائط Google', href: D.map.placeUrl, ext: true }, hLevel);
    }
    var h = hLevel || 3;
    return '<div class="offers-grid">' + list.map(function (o) {
      return '' +
        '<article class="offer-card reveal">' +
          (o.badge ? '<span class="o-tag">' + icon('tag') + esc(o.badge) + '</span>' : '') +
          '<h' + h + '>' + esc(o.title) + '</h' + h + '>' +
          (o.desc ? '<p>' + esc(o.desc) + '</p>' : '') +
          '<div class="o-foot">' +
            '<span class="o-price">' + (o.oldPrice ? '<small style="text-decoration:line-through;opacity:.55;font-size:15px">' + fmtPrice(o.oldPrice) + '</small> ' : '') + fmtPrice(o.price) + ' ريال</span>' +
            (o.until ? '<span class="small">حتى ' + esc(o.until) + '</span>' : '') +
          '</div>' +
        '</article>';
    }).join('') + '</div>';
  }

  /* ============================================================
     التشغيل
     ============================================================ */
  var headerSlot = doc.querySelector('[data-site-header]');
  if (headerSlot) { buildHeader(headerSlot); wireHeader(); }

  var footerSlot = doc.querySelector('[data-site-footer]');
  if (footerSlot) { buildFooter(footerSlot); }

  buildActionBar();
  initReveal(doc);

  /* رابط الخريطة المختصر من data.js — بطاقة الموقع في صفحة تواصل */
  var mapShort = doc.getElementById('mapShortLink');
  if (mapShort) mapShort.href = D.map.shortUrl;

  /* واجهة مشتركة للاستخدام من صفحات أخرى */
  window.RISAEL_UI = {
    $: $, $$: $$, esc: esc, icon: icon, BIRD: BIRD, ART: ART,
    waHref: waHref, fmtPrice: fmtPrice, starsHTML: starsHTML,
    catById: catById, productById: productById,
    productCardHTML: productCardHTML, emptyStateHTML: emptyStateHTML, offersHTML: offersHTML,
    initReveal: initReveal
  };
})();
