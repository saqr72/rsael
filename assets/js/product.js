/* رسائل · صفحة تفاصيل المنتج */
(function () {
  'use strict';
  var D = window.RISAEL, U = window.RISAEL_UI;
  var $ = U.$;

  var id = new URLSearchParams(location.search).get('id');
  var p = id ? U.productById(id) : null;
  var notFound = $('#productNotFound');
  var layout = $('#productLayout');

  if (!p) {
    if (layout) layout.hidden = true;
    if (notFound) notFound.hidden = false;
    return;
  }

  var cat = U.catById(p.cat);

  /* الملء */
  $('#pCat').textContent = cat.sectionAr;
  $('#pCatEn').textContent = cat.en;
  $('#pName').textContent = p.ar;
  $('#pNameEn').textContent = p.en;
  $('#pPrice').innerHTML = U.fmtPrice(p.price) + ' <small>ريال</small>';
  $('#pDesc').textContent = p.desc || '';
  document.title = p.ar + ' — ' + D.brand.ar;

  /* وسم الساخن/البارد */
  if (p.tag) {
    var tag = $('#pTag');
    tag.hidden = false;
    tag.innerHTML = U.icon('tag') + '<span>' + U.esc(p.tag) + '</span>';
  }

  /* الرسم — أو صورة المنتج إن وُجدت (حقل img)، مع رجوع تلقائي للرسم عند فشل الصورة */
  var media = $('#pMediaArt');
  if (media) {
    media.innerHTML = U.ART[cat.art] || U.ART.cup;
    if (p.img) {
      var pImg = document.createElement('img');
      pImg.className = 'p-img';
      pImg.src = p.img;
      pImg.alt = '';
      pImg.decoding = 'async';
      pImg.onerror = function () { pImg.remove(); };
      media.appendChild(pImg);
    }
  }

  /* المكونات */
  var ing = $('#pIngredients');
  if (p.ingredients && p.ingredients.length) {
    ing.hidden = false;
    $('#pIngredientsList').innerHTML = p.ingredients.map(function (i) {
      return '<li class="chip chip--outline">' + U.esc(i) + '</li>';
    }).join('');
  }

  /* الإضافات */
  var opt = $('#pOptions');
  if (p.options && p.options.length) {
    opt.hidden = false;
    $('#pOptionsList').innerHTML = p.options.map(function (o) {
      var label = typeof o === 'string' ? o : (o.name + (o.price ? ' · +' + U.fmtPrice(o.price) + ' ريال' : ''));
      return '<li class="chip chip--outline">' + U.esc(label) + '</li>';
    }).join('');
  }

  /* زر الطلب عبر واتساب */
  var wa = $('#orderWa');
  if (wa) {
    wa.href = U.waHref('السلام عليكم، أبغى أطلب من ' + D.brand.ar + ':\n• ' + p.ar + ' — ' + U.fmtPrice(p.price) + ' ريال');
  }

  /* من نفس التصنيف */
  var related = D.products.filter(function (x) { return x.cat === p.cat && x.id !== p.id; }).slice(0, 4);
  var relBox = $('#relatedGrid');
  if (relBox && related.length) {
    relBox.innerHTML = related.map(function (x) { return U.productCardHTML(x); }).join('');
    $('#relatedWrap').hidden = false;
    U.initReveal(relBox);
  }

  /* مسار التصفح */
  $('#crumbCat').textContent = cat.ar;
  var crumbLink = $('#crumbCatLink');
  if (crumbLink) crumbLink.href = 'menu.html?cat=' + encodeURIComponent(p.cat);
})();
