// https://github.com/DosX-dev/geoblock.js

(() => {

    let blockedList, redirectTo;


    const currentJs = document.currentScript;

    if (currentJs) {
        blockedList = currentJs.getAttribute("blocked").split(" ").join("").toLowerCase();
        redirectTo = currentJs.getAttribute("redirect");

        if (!blockedList) throw "No 'blocked' attribute.";
        else if (!redirectTo) throw "No 'redirect' attribute.";

        const blockedListArr = blockedList.split(",");

        blockedListArr.forEach(country => {

            if (country.length > 2) {
                throw "You must use the country code in the 'blocked' attribute.";
            }

            let currentBrowserLanguage = navigator.language.split("-")[0].toLowerCase();

            if (navigator.language !== navigator.languages[0] || country == currentBrowserLanguage) {
                forbid();
            }

        });
    } else {
        throw "Failed to get current <script> element.";
    }

    function forbid() {
        location.href = redirectTo;
    }

})();