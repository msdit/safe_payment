function isValidUrl (url) {
  const { hostname, protocol } = new URL(url)
  return (/\.shaparak\.ir$/i).test(hostname) && protocol === "https:"
}

chrome.tabs.query({ active: true, currentWindow: true }, setVariables)

function setVariables(tabs) {
  const iconElement = document.getElementById('sf_popup_icon')
  const titleElement = document.getElementById('sf_popup_title')

  if (isValidUrl(tabs[0].url)) {
    iconElement.src = 'assets/logo/verify.png';
    titleElement.innerText = 'درگاه پرداخت امن';
    titleElement.style.color = '#31AF91'
  } else {
    iconElement.src = 'assets/logo/logo128.png';
    titleElement.innerText = 'این درگاه پرداخت امن نیست';
    titleElement.style.color = '#d40000'
  }
}
