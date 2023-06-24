// document.addEventListener('DOMContentLoaded', function() {
//   var toggleButton = document.getElementById('toggleButton');

//   toggleButton.addEventListener('click', function() {
//     chrome.tabs.query({ url: 'https://codeforces.com/*' }, function(tabs) {
//       for (var i = 0; i < tabs.length; i++) {
//         chrome.tabs.sendMessage(tabs[i].id, { action: 'enableDarkMode' });
//       }
//     });
//   });
// });

let toggle = false; // Initial state of dark mode

// Retrieve the dark mode state from storage
chrome.storage.local.get({ darkModeEnabled: false }, function(data) {
  toggle = data.darkModeEnabled || false;
  updateButtonText();
});

// Function to update the button text based on the dark mode state
function updateButtonText() {
  var toggleButton = document.getElementById('toggleButton');
  toggleButton.textContent = toggle ? 'Disable Dark Mode' : 'Enable Dark Mode';
}

// Toggle the dark mode state and update storage
function toggleDarkMode() {
  toggle = !toggle;

  // Save the updated dark mode state to storage
  chrome.storage.local.set({ darkModeEnabled: toggle });

  // Send a message to the background/content ? script to enable or disable dark mode
  // chrome.runtime.sendMessage({ action: 'toggleDarkMode' });

  // toggleButton.addEventListener('click', function() {
    chrome.tabs.query({ url: 'https://codeforces.com/*' }, function(tabs) {
      for (var i = 0; i < tabs.length; i++) {
        chrome.tabs.sendMessage(tabs[i].id, { action: "DarkMode"});
      }
    });
  // });
  updateButtonText();
}

// Add event listener to the toggle button
document.addEventListener('DOMContentLoaded', function() {
  var toggleButton = document.getElementById('toggleButton');
  toggleButton.addEventListener('click', toggleDarkMode);
});
