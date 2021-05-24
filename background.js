// BACKGROUND.JS
// For Toolware Chrome Extension
// Written May 24, 2021

chrome.commands.onCommand.addListener(function(command) {
  console.log('Open Popup:', Ctrl+Alt+W);
});

chrome.runtime.onInstalled.addListener((about) => {
  if (about === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({
      url: 'About.html'
    });
  }
});
