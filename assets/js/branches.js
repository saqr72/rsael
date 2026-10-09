/* رسائل · صفحة الفروع — البطاقات والخريطة */
(function () {
  'use strict';
  var D = window.RISAEL, U = window.RISAEL_UI;
  var $ = U.$;

  var list = $('#branchesList');
  if (list) {
    list.innerHTML = D.branches.map(function (b) {
      return '' +
        '<article class="card branch-card reveal">' +
          '<div class="branch-card-head">' +
            '<div>' +
              '<h2>' + U.esc(b.name) + '</h2>' +
              '<p class="muted small" style="margin-top:4px">' + (b.hint ? U.esc(b.hint) + ' · ' : '') + U.esc(b.area) + '</p>' +
            '</div>' +
            '<span class="branch-badge">' + D.rating.value + ' ★ · ' + D.rating.count + ' تقييمًا</span>' +
          '</div>' +

          '<div class="info-list">' +
            '<div class="info-row"><span class="i-icon">' + U.icon('pin') + '</span>' +
              '<span><span class="i-label">العنوان</span><span class="i-value">' + U.esc(b.address) + '</span></span></div>' +
            '<div class="info-row"><span class="i-icon">' + U.icon('clock') + '</span>' +
              '<span><span class="i-label">ساعات العمل</span><span class="i-value">' + U.esc(b.hours) + '</span></span></div>' +
            '<div class="info-row"><span class="i-icon">' + U.icon('phone') + '</span>' +
              '<span><span class="i-label">الهاتف</span><span class="i-value"><a href="tel:+966542008411" dir="ltr">' + U.esc(b.phone) + '</a></span></span></div>' +
            '<div class="info-row"><span class="i-icon">' + U.icon('nav') + '</span>' +
              '<span><span class="i-label">Plus Code</span><span class="i-value">' + U.esc(b.plusCode) + '</span></span></div>' +
          '</div>' +

          '<div class="branch-actions">' +
            '<a class="btn btn--gold" href="' + b.directionsUrl + '" target="_blank" rel="noopener">' + U.icon('nav') + 'الاتجاهات</a>' +
            '<a class="btn btn--wa" href="' + U.waHref('السلام عليكم، أبغى أطلب من ' + D.brand.ar) + '" target="_blank" rel="noopener">' + U.icon('wa') + 'واتساب</a>' +
            '<a class="btn btn--outline" href="tel:+966542008411">' + U.icon('phone') + 'اتصال</a>' +
          '</div>' +
        '</article>';
    }).join('');
    U.initReveal(list);
  }

  /* الخريطة */
  var mapBox = $('#branchMap');
  var b0 = D.branches[0];
  if (mapBox && b0 && !mapBox.querySelector('iframe')) {
    var f = document.createElement('iframe');
    f.src = b0.embedUrl;
    f.loading = 'lazy';
    f.title = 'خريطة موقع ' + b0.name;
    f.referrerPolicy = 'no-referrer-when-downgrade';
    mapBox.appendChild(f);
  }

  /* عدد الفروع */
  var count = $('#branchCount');
  if (count) {
    count.textContent = D.branches.length === 1
      ? 'فرع واحد حاليًا'
      : D.branches.length + ' فروع';
  }
})();
