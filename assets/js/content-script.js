function isValidUrl (url) {
    const { hostname, protocol } = new URL(url)
    return (/\.shaparak\.ir$/i).test(hostname) && protocol === "https:"
}

if (isValidUrl(location.href)) {
    badge = document.createElement('div')
    badge.id = "safe_payment_badge"
    badge.style.position = "fixed"
    badge.style.backgroundColor = "rgba(49, 175, 145, 0.85)"
    badge.style.zIndex = 999999999
    badge.style.bottom = "8px"
    badge.style.left = "8px"
    badge.style.padding = "8px 24px"
    badge.style.borderRadius = "4px"
    badge.style.fontSize = "20px"
    badge.style.fontWeight = "900"
    badge.style.color = "white"
    badge.innerText = "پرداخت امن"
    document.body.append(badge)
}
