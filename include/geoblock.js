// https://github.com/DosX-dev/geoblock.js

(() => {

    let countryCodesList, redirectTo;

    const config = {
        strings: {
            listAttrName: "blocked", // Country codes attribute
            redirAttrName: "redirect" // Redirect to
        }
    };

    const currentJs = document.currentScript;

    if (!currentJs)
        throw new Error("Failed to get current <script> element.");


    [config.strings.listAttrName, config.strings.redirAttrName].forEach(attributeToCheck => {
        if (!currentJs.getAttribute(attributeToCheck))
            throw new Error(`No '${attributeToCheck}' attribute.`);
    });


    countryCodesList = currentJs.getAttribute(config.strings.listAttrName).toLowerCase().split(",").map(code => code.trim());
    redirectTo = currentJs.getAttribute(config.strings.redirAttrName);


    const currentBrowserLanguage = navigator.language.split("-")[0].toLowerCase();

    if (countryCodesList.includes(currentBrowserLanguage) || navigator.language !== navigator.languages[0]) {
        forbid();
    }

    function forbid() {
        location.href = redirectTo;
    }

})();