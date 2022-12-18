(function(exports) {
  'use strict';

  var textInput = document.getElementById('text-input');

  textInput.onkeydown = () => {
    setTimeout(() => {
      var lines = (textInput.value.match(/\n/g) || []).length;
      if(lines >= 3) {
        lines = 3;
      }

      document.body.style.setProperty('--textbox-padding', (lines * 22) + 'px');
    }, 10);
  };
})(window);