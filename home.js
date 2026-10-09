/* رسائل · الصفحة الرئيسية — المختارات والعروض والفرع والآراء */
(function () {
  'use strict';
  var D = window.RISAEL, U = window.RISAEL_UI;
  var $ = U.$;

  /* 1) المنتجات المميزة */
  var featured = D.featuredIds.map(U.productById).filter(Boolean);
  var grid = $('#featuredGrid');
  if (grid) {
    grid.innerHTML = featured.map(function (p) { return U.productCardHTML(p); }).join('');
    U.initReveal(grid);
  }

  /* 2) العروض الحالية */
  var offersBox = $('#offersPreview');
  if (offersBox) {
    offersBox.innerHTML = U.offersHTML(D.offers.slice(0, 2));
    U.initReveal(offersBox);
  }

  /* 3) الفرع */
  var b = D.branches[0];
  if (b) {
    var setText = function (id, val) { var el = $(id); if (el) el.textContent = val; };
    setText('#branchName', b.name);
    setText('#branchAddress', b.address);
    setText('#branchHours', b.hours);
    setText('#branchRating', D.rating.value + ' · ' + D.rating.count + ' تقييمًا');
    var dirBtn = $('#branchDirections');
    if (dirBtn) dirBtn.href = b.directionsUrl;
    var mapBox = $('#branchMap');
    if (mapBox && !mapBox.querySelector('iframe')) {
      var f = document.createElement('iframe');
      f.src = b.embedUrl;
      f.loading = 'lazy';
      f.title = 'موقع ' + b.name + ' على خرائط Google';
      f.referrerPolicy = 'no-referrer-when-downgrade';
      mapBox.appendChild(f);
    }
  }

  /* 4) آراء العملاء + ملخص التقييم */
  var reviewsBox = $('#reviewsGrid');
  if (reviewsBox) {
    var summary =
      '<article class="review-card review-summary reveal">' +
        '<span class="big-num">' + D.rating.value + '</span>' +
        U.starsHTML(Math.round(D.rating.value), 'stars--lg') +
        '<p class="muted small">من ' + D.rating.count + ' تقييمًا على خرائط Google</p>' +
        '<a class="btn btn--gold btn--sm" href="' + D.map.placeUrl + '" target="_blank" rel="noopener">شاهد كل التقييمات</a>' +
      '</article>';
    var cards = D.reviews.map(function (r) {
      return '' +
        '<article class="review-card reveal">' +
          '<div class="review-head">' +
            '<span class="review-avatar">' + U.esc(r.initial || r.name.charAt(0)) + '</span>' +
            '<span><span class="review-name">' + U.esc(r.name) + '</span>' +
            '<span class="review-meta">' + U.esc(r.meta) + ' · ' + U.esc(r.date) + '</span></span>' +
          '</div>' +
          U.starsHTML(r.stars) +
          '<p class="review-text">' + U.esc(r.text) + '</p>' +
          '<div class="review-foot"><span class="review-src">' + U.icon('pin') + 'خرائط Google</span></div>' +
        '</article>';
    }).join('');
    reviewsBox.innerHTML = summary + cards;
    U.initReveal(reviewsBox);
  }
})();
