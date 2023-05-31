function isValidUrl (url) {
    const { hostname, protocol } = new URL(url)
    return (/\.shaparak\.ir$/i).test(hostname) && protocol === "https:"
}

chrome.tabs.onUpdated.addListener(checkUrl);

function checkUrl (tabId, change, tab) {
    if (tab && tab.url && change.status === 'complete') {
        if (isValidUrl(tab.url)) {
            chrome.browserAction.setIcon({
                tabId: tabId,
                path: {
                    128: "/assets/logo/verify.png"
                }
            });
        }
    }
}
