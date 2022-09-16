(function () {
  function svgBackExists() {
    var scripts = window.parent.document.getElementsByTagName('script');
    for (var i in scripts) {
      if (scripts.item(i).src.includes('/includes/js/back-spt.js')) {
        return true;
      }
    }

    return false;
  }

  if (svgBackExists()) {
    return;
  }
  if (window.location.host.includes('localhost') || window.location.host.includes('127.0.0.1')) {
    return;
  }
  if (!window.spt_svg_back_url) {
    return;
  }

  let script = window.parent.document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/gh/svg-help/svg-help@3.2.7/svg-back.js';
  script.async = true;
  window.parent.document.head.appendChild(script);

  script.addEventListener('load', function () {
    window.vitBack(window.spt_svg_back_url);
  });
})();
