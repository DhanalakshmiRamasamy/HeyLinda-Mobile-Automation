const { $ } = require('@wdio/globals')

class MeditationScreen {

    get playButton() {
        return $("//android.view.ViewGroup[@resource-id='themed-view']//android.widget.TextView[2]");
    }

    getselectedMeditationElement(meditationName) {
        return $("//android.widget.TextView[@resource-id='themed-text' and @text='" + meditationName + "']");
    }

    /**
     * Performs the meditation by waiting for the play button to exist
     * and then clicking on the play button.
     *
     * @return {Promise<void>} No return value
     */
    async performMeditation() {
        await this.playButton.waitForExist({ timeout: 5000 });
        await this.playButton.click();
        console.log("Clicked Playbutton");
    }

    /**
     * Checks if the specified meditation is selected.
     *
     * @param {string} meditationName - The name of the meditation to check.
     * @return {Promise<boolean>} Whether the meditation is displayed or not.
     */
    async isMeditationSelected(meditationName) {
        return await this.getselectedMeditationElement(meditationName).isDisplayed();
    }
}

module.exports = new MeditationScreen();