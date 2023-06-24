// This script will be injected into the webpage

window.addEventListener('DarkModeEvent', function(event) {
    if (event.detail.enabled) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
  
  function enableDarkMode() {
    document.body.style.backgroundColor = '#333';
    document.body.style.color = '#f2f2f2';
  }
  
  function disableDarkMode() {
    document.body.style.backgroundColor = '#f2f2f2';
    document.body.style.color = '#333';
  }
  