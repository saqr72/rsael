/* رسائل · صفحة التقييم — نجوم + ملاحظة + إرسال عبر واتساب أو خرائط Google */
(function () {
  'use strict';
  var D = window.RISAEL, U = window.RISAEL_UI;
  var $ = U.$, $$ = U.$$;

  var MSGS = [
    null,
    'نعتذر، تجربتك ما كانت بالمستوى — وصّلنا ملاحظتك',
    'آسفون، من حقك الأفضل — نريد نسمع تفاصيلك',
    'شكرًا، بنتحسن مع كل تجربة',
    'يسعدنا ذلك!',
    'ممتاز! شكرًا لك 🌟'
  ];

  var rating = 0;
  var stars = $$('.rate-star');
  var msg = $('#rateMsg');
  var note = $('#rateNote');
  var actions = $('#rateActions');
  var thanks = $('#rateThanks');
  var waBtn = $('#rateWa');
  var gBtn = $('#rateGoogle');

  function paint() {
    stars.forEach(function (s, i) {
      var on = i < rating;
      s.classList.toggle('is-on', on);
      s.setAttribute('aria-checked', on ? 'true' : 'false');
    });
    if (msg) {
      msg.textContent = MSGS[rating] || 'اختر عدد النجوم';
      msg.classList.toggle('is-ready', rating > 0);
    }
    if (actions) {
      actions.hidden = rating === 0;
      if (rating > 0) {
        actions.classList.remove('is-pop');
        void actions.offsetWidth;
        actions.classList.add('is-pop');
        /* التقييم المنخفض يفضّل التواصل المباشر، والعالي يذهب لجوجل */
        if (waBtn && gBtn) {
          if (rating <= 3) {
            waBtn.parentNode.insertBefore(waBtn, gBtn);
            waBtn.querySelector('span').textContent = 'شاركنا ملاحظتك عبر واتساب';
            gBtn.querySelector('span').textContent = 'أو قيّمنا على خرائط Google';
          } else {
            gBtn.parentNode.insertBefore(gBtn, waBtn);
            gBtn.querySelector('span').textContent = 'قيّمنا على خرائط Google';
            waBtn.querySelector('span').textContent = 'أو راسلنا عبر واتساب';
          }
        }
      }
    }
    if (thanks) thanks.classList.remove('is-on');
  }

  function buildWaMessage() {
    var txt = 'تقييمي لـ' + D.brand.ar + ' ⭐ ' + rating + '/5';
    var n = note && note.value.trim();
    if (n) txt += '\nملاحظتي: ' + n;
    return txt;
  }

  stars.forEach(function (s, i) {
    s.addEventListener('click', function () {
      rating = i + 1;
      paint();
      s.classList.remove('is-pop');
      void s.offsetWidth;
      s.classList.add('is-pop');
    });
    s.addEventListener('keydown', function (e) {
      var next = null;
      if (e.key === 'ArrowLeft') next = Math.min(i + 1, stars.length - 1);   /* LTR row */
      if (e.key === 'ArrowRight') next = Math.max(i - 1, 0);
      if (next !== null) { e.preventDefault(); stars[next].focus(); stars[next].click(); }
    });
  });

  if (waBtn) {
    waBtn.href = U.waHref('');
    waBtn.addEventListener('click', function () {
      waBtn.href = U.waHref(buildWaMessage());
      if (thanks) thanks.classList.add('is-on');
    });
  }
  if (gBtn) {
    gBtn.href = D.map.placeUrl;
    gBtn.addEventListener('click', function () {
      if (thanks) thanks.classList.add('is-on');
    });
  }

  /* ملخص التقييم الحالي */
  var sum = $('#rateSummary');
  if (sum) {
    sum.innerHTML =
      '<span class="big-num">' + D.rating.value + '</span>' +
      '<span class="rs-text">' + U.starsHTML(Math.round(D.rating.value)) +
      '<br>من ' + D.rating.count + ' تقييمًا على خرائط Google</span>';
  }

  paint();
})();
