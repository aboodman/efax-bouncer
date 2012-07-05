chrome.webNavigation.onCommitted.addListener(function(details) {
  var link = document.createElement("a");
  link.href = details.url;
  var efaxHostPattern = /\.efax\.(.+)$/;
  var match = link.host.match(efaxHostPattern);
  if (match && match[1] != "com") {
    link.host = link.host.replace(efaxHostPattern, ".efax.com");
    chrome.tabs.update(details.tabId, {url: link.href});
  }
});
