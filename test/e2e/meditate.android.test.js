const HomeScreen = require('../../screen-objects/home.screen.js');
const MeditationScreen = require('../../screen-objects/meditation.screen.js');
const Footer = require('../../screen-objects/components/footer.js');
const StatsScreen = require('../../screen-objects/stats.screen.js');
const SettingsScreen = require('../../screen-objects/settings.screen.js');
const TestUtils = require('./helpers/add.meditated.minutes.js')
const {
    MEDITATION_NAME,
    TEN_MINUTES,
    FIFTEEN_MINUTES,
    STREAK_DAYS,
    NUMBER_OF_DAYS_3,
    NUMBER_OF_DAYS_1
} = require('../../config/constant.js')

describe('Meditation Scenarios', () => {
    it('Clicking on a Meditation Tile and Perform Meditation', async () => {
        await HomeScreen.clickOnAMeditation(MEDITATION_NAME);
        await MeditationScreen.performMeditation();
        await expect(MeditationScreen.isMeditationSelected(MEDITATION_NAME)).toBeTruthy();
    });

    it( 'Adding Meditated Minutes for the past 3 days and validating Streak for Progress', async() => {
        await Footer.clickOnAFooter('Stats');
        //Adding 10 mins as meditated minutes for the past 3 days;
        await TestUtils.addMeditatedMinutes(NUMBER_OF_DAYS_3, TEN_MINUTES);
        await expect(await StatsScreen.validateStreak()).toContain(STREAK_DAYS);
    });

    it( 'Adding Meditated Minutes to see if it is reflecting in Time Meditating', async() => {
        await Footer.clickOnAFooter('Settings');
        await SettingsScreen.clickOnaSetting('Clear Data');
        await SettingsScreen.clearData();
        await Footer.clickOnAFooter('Stats');
        await TestUtils.addMeditatedMinutes(NUMBER_OF_DAYS_1, FIFTEEN_MINUTES);
        await expect(await StatsScreen.getMeditatedMinutes()).toContain(FIFTEEN_MINUTES);
    });
});