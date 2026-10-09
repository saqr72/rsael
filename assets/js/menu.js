/* رسائل · المنيو التفاعلي — البحث والتصفية حسب التصنيف */
(function () {
  'use strict';
  var D = window.RISAEL, U = window.RISAEL_UI;
  var $ = U.$, $$ = U.$$;

  var state = { cat: 'all', q: '' };

  /* شرائح التصنيفات */
  var chipsBox = $('#catChips');
  if (chipsBox) {
    var items = [{ id: 'all', ar: 'الكل', en: 'All' }].concat(D.categories);
    chipsBox.innerHTML = items.map(function (c) {
      var ic = c.id === 'all' ? 'cup' : (U.catById(c.id).art || 'cup');
      return '<button type="button" class="chip' + (c.id === 'all' ? ' is-active' : '') + '" data-cat="' + c.id + '" aria-pressed="' + (c.id === 'all') + '">' +
        U.icon(ic) + '<span>' + U.esc(c.ar) + '</span></button>';
    }).join('');
  }

  /* قراءة التصنيف والبحث من الرابط (?cat=tea&q=كرك) */
  var params = new URLSearchParams(location.search);
  if (params.get('cat')) state.cat = params.get('cat');
  if (state.cat !== 'all' && !D.categories.some(function (c) { return c.id === state.cat; })) state.cat = 'all';
  if (params.get('q')) state.q = params.get('q');

  var grid = $('#menuGrid');
  var meta = $('#menuMeta');
  var emptyBox = $('#menuEmpty');
  var searchInput = $('#menuSearch');
  if (searchInput && state.q) searchInput.value = state.q;

  /* مزامنة الرابط مع الحالة (رابط قابل للمشاركة) */
  function syncUrl() {
    var ps = new URLSearchParams();
    if (state.cat !== 'all') ps.set('cat', state.cat);
    if (state.q.trim()) ps.set('q', state.q.trim());
    var qs = ps.toString();
    history.replaceState(null, '', location.pathname + (qs ? '?' + qs : ''));
  }

  function matches(p) {
    if (state.cat !== 'all' && p.cat !== state.cat) return false;
    if (!state.q) return true;
    var q = state.q.trim().toLowerCase();
    return p.ar.toLowerCase().indexOf(q) > -1 ||
      p.en.toLowerCase().indexOf(q) > -1 ||
      String(p.price).indexOf(q) > -1;
  }

  function render() {
    var list = D.products.filter(matches);
    grid.innerHTML = list.map(function (p) { return U.productCardHTML(p, { plain: true }); }).join('');
    grid.classList.remove('menu-grid-anim');
    void grid.offsetWidth;                 /* إعادة تشغيل حركة الدخول */
    grid.classList.add('menu-grid-anim');

    if (meta) {
      var catLabel = state.cat === 'all' ? 'كل التصنيفات' : U.catById(state.cat).ar;
      meta.textContent = list.length + ' من ' + D.products.length + ' صنفًا · ' + catLabel;
    }
    var has = list.length > 0;
    if (emptyBox) emptyBox.hidden = has;
    grid.hidden = !has;

    $$('#catChips .chip').forEach(function (chip) {
      var on = chip.dataset.cat === state.cat;
      chip.classList.toggle('is-active', on);
      chip.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  if (chipsBox) {
    chipsBox.addEventListener('click', function (e) {
      var btn = e.target.closest('.chip');
      if (!btn) return;
      state.cat = btn.dataset.cat;
      syncUrl();
      render();
    });
  }
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      state.q = searchInput.value;
      syncUrl();
      render();
    });
  }
  var clearBtn = $('#menuClear');
  if (clearBtn) {
    clearBtn.addEventListener('click', function () {
      state.q = ''; state.cat = 'all';
      if (searchInput) searchInput.value = '';
      syncUrl();
      render();
    });
  }

  render();
})();
