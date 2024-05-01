const Selectors = require('./modules/selectors')

class HomeScreen {
    /**
     * Clicks on a meditation with the given name.
     *
     * @param {string} meditationName - The name of the meditation element to click on.
     */
    async clickOnAMeditation(meditationName) {
        var element = $(Selectors.getXpathElementByText(meditationName));
        //Explicitly waiting till the element is displayed
        await element.waitForDisplayed({timeout: 5000});
        await element.click();
        console.log("Clicked the " + meditationName + " Meditation");
    }
}

module.exports = new HomeScreen();