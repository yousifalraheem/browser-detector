document.onreadystatechange = function () {
    const target = document.querySelector("#jsDetector");
    target.innerHTML = "(" + whichBrowser() + ")";
};

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
    } else if (isVivaldi()) {
        return "Vivalid";
    } else if (isChrome()) {
        return "Chrome";
    } else {
        return "Unknown";
    }
}

function agentHas(keyword) {
    navigator.userAgent.toLowerCase().search(keyword.toLowerCase()) >= 0;
}

function isIE() {
    return !!document.documentMode;
}

function isSafari() {
    return !!window.ApplePaySetupFeature || !!window.safari;
}

function isChrome() {
    return agentHas("CriOS") || agentHas("Chrome") || !!window.chrome;
}

function isFirefox() {
    return agentHas("Firefox") || agentHas("FxiOS") || agentHas("Focus");
}

function isEdge() {
    return agentHas("Edg");
}

function isOpera() {
    return agentHas("OPR");
}

function isVivaldi() {
    return agentHas("Vivaldi");
}
