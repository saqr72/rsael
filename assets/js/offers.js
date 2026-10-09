/* رسائل · صفحة العروض */
(function () {
  'use strict';
  var D = window.RISAEL, U = window.RISAEL_UI;
  var box = document.getElementById('offersList');
  if (box) {
    box.innerHTML = U.offersHTML(D.offers, 2);
    U.initReveal(box);
  }
})();
