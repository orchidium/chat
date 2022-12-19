(function(exports) {
  'use strict';

  function Embed(url, parent) {
    if (url.includes(location.host) || url.includes('orchidfoss.github.io')) {
      var hasIframe = parent.querySelector('iframe[src="' + encodeURI(url) + '"].embed.frame');
      if (hasIframe) {
        return;
      }

      var iframe = document.createElement('iframe');
      iframe.classList.add('embed');
      iframe.classList.add('frame');
      iframe.src = encodeURI(url);
      parent.appendChild(iframe);
      return iframe;
    } else {
      return;
    }
  }

  exports.Embed = Embed;
})(window);