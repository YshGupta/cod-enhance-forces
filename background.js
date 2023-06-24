



///--------------------
// Create a listener for the browser action (extension button) click event
// chrome.browserAction.onClicked.addListener(function(tab) {
//   // Send a message to the content script in the active tab
//   chrome.tabs.sendMessage(tab.id, {greeting: "hello"});
// });

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.url.startsWith('https://codeforces.com/')) {
    chrome.tabs.sendMessage(tabId, { action: 'DarkMode' });
  }
});







// chrome.browserAction.onClicked.addListener(function() {
//   chrome.tabs.query({ url: 'https://codeforces.com/*' }, function(tabs) {
//     for (var i = 0; i < tabs.length; i++) {
//       chrome.tabs.sendMessage(tabs[i].id, { action: 'enableDarkMode' });
//     }
//   });
// });







// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.executeScript(tab.id, { code: 'document.querySelector("body").classList.toggle("dark-mode");' });
// });


// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.executeScript(tab.id, { code: 'document.body.style.backgroundColor = "#333333";' });
// });

// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.executeScript(tab.id, {file: "content.js"});
// });