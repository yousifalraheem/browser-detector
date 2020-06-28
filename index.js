document.onreadystatechange = function () {
    const target = document.querySelector("#jsDetector");
    target.innerHTML = "(" + whichBrowser() + ")";
    console.log(navigator.userAgent);
    console.log("window.safari", window.safari);
    console.log(window.chrome);
}

function whichBrowser() {
    if (isSafari()) {
        return "Safari";
    } else if (isFirefox()) {
        return "Firefox";
    } else if (isEdge()) {
        return "Edge";
    } else if (isIE()) {
        return "Internet Explorer";
    } else if (isOpera()) {
        return "Opera";
    } else if (isChrome()) {
        return "Chrome";
    } else {
        return "Unknown";
    }
}

function isIE() {
    return !!document.documentMode;
}

function isSafari() {
    return navigator.userAgent.search("Safari") >= 0 && (!!window.safari || navigator.userAgent.search("iPhone") >= 0);
}

function isChrome() {
    return (navigator.userAgent.search("Chrome") >= 0 && !!!window.safari) || (!!window.chrome);
}

function isFirefox() {
    return navigator.userAgent.search("Firefox") >= 0 && !!!window.safari;
}

function isEdge() {
    return navigator.userAgent.search("Edg") >= 0 && !!!window.safari;
}

function isOpera() {
    return navigator.userAgent.search("OPR") >= 0 && !!!window.safari;
}