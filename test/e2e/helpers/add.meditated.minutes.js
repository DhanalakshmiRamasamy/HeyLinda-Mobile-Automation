const StatsScreen = require("../../../screen-objects/stats.screen");

/**
 * Adds meditated minutes for a specific number of days.
 *
 * @param {number} days - The number of days for which to add meditated minutes.
 * @param {number} mins - The number of minutes meditated.
 * @return {Promise<void>} A promise that resolves when the meditated minutes have been added.
 */
async function addMeditatedMinutes(days, mins)
{
    var date = new Date();
    var day_to_add;
    if (days === 1) {
        day_to_add = date.getDate();
        await StatsScreen.addMeditatedMinutes(day_to_add, mins);
    } else if (days > 1) {
        for (let i = 0 ; i <= days-1 ; i++) {
            day_to_add =new Date(date.getFullYear(), date.getMonth(), date.getDate() - i).getDate();
            await StatsScreen.addMeditatedMinutes(day_to_add, mins);
        }
    }
}

module.exports = { addMeditatedMinutes };