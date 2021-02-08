const urlRegex = (url) => /^https:\/\/[\w\d]{1,}.shaparak.ir\//.test(url);

var alertError = function (arg) {
  if (urlRegex(arg.url)) {
    alert("This page is shaparak page ad it's safe. ;)");
  } else {
    alert("WARNING: This page is NOT shaparak page and it's DANGEROUS!!!!");
  }
};

chrome.browserAction.onClicked.addListener(alertError);
chrome.tabs.onActivated.addListener(function (info) {
  chrome.tabs.get(info.tabId, function (change) {
    if (!change || change.url == undefined) {
      chrome.browserAction.setPopup({ tabId: info.tabId, popup: "" });
      chrome.browserAction.setIcon({
        path: "assets/logo/lr.png",
        tabId: info.tabId,
      });
      console.log("undefined");
    } else if (urlRegex(change.url)) {
      chrome.browserAction.setPopup({ tabId: info.tabId, popup: "" });
      chrome.browserAction.setIcon({
        path: "assets/logo/lg.png",
        tabId: info.tabId,
      });
      console.log("matched");
    } else {
      chrome.browserAction.setPopup({ tabId: info.tabId, popup: "" });
      chrome.browserAction.setIcon({
        path: "assets/logo/lr.png",
        tabId: info.tabId,
      });
      console.log("not matching");
    }
  });
});
chrome.tabs.onUpdated.addListener(function (tabId, change, tab) {
  if (tab.url == undefined) {
    return;
  } else if (urlRegex(tab.url)) {
    chrome.browserAction.setPopup({ tabId: tabId, popup: "" });
    chrome.browserAction.setIcon({
      path: "assets/logo/lg.png",
      tabId: tabId,
    });
    console.log("matched");
  } else {
    chrome.browserAction.setPopup({ tabId: tabId, popup: "" });
    chrome.browserAction.setIcon({
      path: "assets/logo/lr.png",
      tabId: tabId,
    });
    console.log("not matching");
  }
});
