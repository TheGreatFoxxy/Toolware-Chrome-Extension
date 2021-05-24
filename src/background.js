  chrome.browserAction.setBadgeText({text: 'ON'});
  chrome.browserAction.setBadgeBackgroundColor({color: '#4688F1'});
  chrome.runtime.onInstalled.addListener(function() {
        /** When I get how Context menus work, this will get uncommented.
        for (let key of Object.keys(kLocales)) {
      chrome.contextMenus.create({
        id: key,
        title: kOptions[key],
        type: 'normal',
        contexts: ['selection'],
      });
    }; */
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([
        {
          // The extension only runs when the page is secure.
          conditions: [
            new chrome.declarativeContent.PageStateMatcher({
              pageUrl: { urlContains: 'https://' },
            })
          ],
          actions: [ new chrome.declarativeContent.ShowPageAction() ]
        }
      ]);
    });
  });
chrome.runtime.onInstalled.addListener((about) => {
  if (about === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({
      url: 'About.html'
    });
  }
});
