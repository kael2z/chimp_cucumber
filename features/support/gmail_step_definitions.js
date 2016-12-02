/**
 * Created by daniil.blagov on 11/29/2016.
 */

module.exports = function() {

    this.When(/^I enter username "([^"]*)" and password "([^"]*)"$/, function (userLogin, userPwd) {
        // Write code here that turns the phrase above into concrete actions
        browser.waitForExist('[name=Email]', 4000);
        browser.setValue('[name=Email]', userLogin);
        browser.click('#next');

        browser.waitForExist('[name=Passwd]');
        browser.setValue('[name=Passwd]', userPwd);
        browser.click('#signIn');
    });

    this.Then(/^I see emails table list$/, function () {
        // Write code here that turns the phrase above into concrete actions
        browser.waitForExist('[role=main]', 6000);
    });

};