const Selectors = require('./modules/selectors')

class StatsScreen {

    get editTextElement() {
        return $(".//android.widget.EditText");
    }

    get streakElement() {
        var xpathElementByText = Selectors.getXpathElementByText('Current Streak');
        return $(xpathElementByText + "/following-sibling::*");
    }

    get timeMeditatedElement() {
        var xpathElementByText = Selectors.getXpathElementByText('Time Meditating')
        return $(xpathElementByText + "/following-sibling::*");
    }
    /**
     * Adds meditated minutes for a specific date.
     *
     * @param {string} date - The date for which the meditated minutes are added.
     * @param {number} mins - The number of minutes meditated.
     * @return {Promise<void>} No return value.
     */
    async addMeditatedMinutes(date, mins) {
        var element = $(Selectors.getXpathElementByText(date));
        await element.click();
        console.log("Clicked Power of Love Meditation");
        await this.enterMeditatedMinutes(mins);
    }

    /**
     * Enters the meditated minutes for a specific date.
     *
     * @param {string} date - The date for which the meditated minutes are entered.
     * @param {number} mins - The number of minutes meditated.
     * @return {Promise<void>} No return value.
     */
    async enterMeditatedMinutes(mins) {
        await this.editTextElement.setValue(mins);
        await $(Selectors.getXpathElementByText('SUBMIT')).click();
    }

    async validateStreak() {
        return this.streakElement.getAttribute('text');
    }

    async getMeditatedMinutes() {
        return this.timeMeditatedElement.getAttribute('text');
    }
}

module.exports = new StatsScreen();