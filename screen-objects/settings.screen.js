const Selectors = require('./modules/selectors')

class SettingsScreen {

    get clearDataButton() {
        return $("//android.widget.Button[@text='CLEAR DATA']");
    }

    /**
     * Clicks on a setting element with the given name.
     *
     * @param {string} settingName - The name of the setting element to click on.
     * @return {Promise<void>} No return value
     */
    async clickOnaSetting(settingName) {
        var element = $(Selectors.getXpathElementByText(settingName));
        await element.click();
        console.log("Clicked the setting" + settingName);
    }

    /**
     * Clicks on the clear data button to clear the app data.
     */
    async clearData() {
        await this.clearDataButton.click();
    }
}

module.exports = new SettingsScreen();