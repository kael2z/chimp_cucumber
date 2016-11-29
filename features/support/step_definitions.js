module.exports = function(){

    this.Given(/^I have visited "([^"]*)"$/, function (pageUrl) {
        // Write code here that turns the phrase above into concrete actions
        browser.url(pageUrl);
        browser.waitForExist('input', 4000);
    });

    this.When(/^I search for "([^"]*)"$/, function (query) {
        // Write code here that turns the phrase above into concrete actions
        browser.setValue('[name=q]', query);
        browser.element('[name=btnG]').click();

        browser.waitForExist('.g', 2000);
    });

    this.Then(/^I see "([^"]*)" search results$/, function (count) {
        // Write code here that turns the phrase above into concrete actions
        expect(function(){
            var searchResults = browser.elements('.g');
            //console.log("Search results count: " + searchResults.value.length);
            expect(searchResults.value.length).toEqual(parseInt(count, 10));
        }).not.toThrow();
    });

    this.Then(/^I see "([^"]*)" small search results$/, function (count) {
        // Write code here that turns the phrase above into concrete actions
        var searchResults = browser.elements('.srg>.g');
        //console.log("Small search results count: " + searchResults.value.length);
        expect(searchResults.value.length).toEqual(parseInt(count, 10));
    });


};