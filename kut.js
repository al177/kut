
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('kut_loader.html', {
    id: 'kutLoader',
    bounds: { width: 620, height: 500 }
  });
});
