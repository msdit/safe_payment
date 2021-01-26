chrome.storagesync.get(["regTest"], function (result) {
  console.log("Value currently is " + result.key);
  document.write(`regTest: ${result.key}`);
});
