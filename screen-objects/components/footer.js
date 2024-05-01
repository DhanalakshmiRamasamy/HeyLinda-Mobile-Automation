const Selectors = require('../modules/selectors')

class Footer {
    /**
     * Clicks on a footer element with the given name.
     *
     * @param {string} footerName - The name of the footer element to click on.
     */
    async clickOnAFooter(footerName) {
        var element = $(Selectors.getXpathElementByText(footerName));
        await element.waitForExist({ timeout: 5000 });
        await element.click();
        console.log("Clicked the footer" + footerName);
    }
}

module.exports = new Footer();