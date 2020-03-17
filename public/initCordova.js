document.addEventListener('DOMContentLoaded', function() {
  var delayCordovaLoad = setTimeout(function() {
    var scriptCordova, scriptCordovaPath;

    scriptCordovaPath = 'cordova.js';
    scriptCordova = document.createElement('script');
    scriptCordova.setAttribute('type', 'text/javascript');
    scriptCordova.setAttribute('src', scriptCordovaPath);

    document.body.appendChild(scriptCordova);
  }, 1000);
});
