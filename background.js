// chrome.runtime.onInstalled.addListener(function () {
//   chrome.tabs.getSelected(null, function (tab) {
//     const regTest = /^https:\/\/[\w\d]{1,}.chrome.com\//.test(tab.url);
//     let imageData = {};
//     for (let size of ["16", "32", "48", "128"]) {
//       imageData[size] = `assets/logo/lg${size}.png`;
//     }
//     chrome.storage.sync.set({ regTest }, function () {
//       console.log("regTest: ", regTest);
//       console.log("tab.url: ", tab.url);
//       console.log("imageData: ", imageData);
//     });
//     if (regTest) {
//       chrome.browserAction.setIcon({ imageData });
//     }
//   });
// });

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
    if (change.url == undefined) {
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
