const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('../pageobjects/login.page');
const ProfilePage = require('../pageobjects/profile.page');

const pages = {
    login: LoginPage
}

Given(/^user is on the (\w+) page$/, async (page) => {
    await pages[page].open()
    await LoginPage.loginAssertion();
});

When(/^user login with his username and a wrong password$/, async () => {
    await LoginPage.login("yyanes", "Test.2020")
});

Then(/^should see a message of invalid password$/, async () => {
    await LoginPage.message()
});

When(/^user login with his username and password but his username will be wrong$/, async () => {
    await LoginPage.login("yayanes", "Test!2020")
});

Then(/^should see a message of invalid username$/, async () => {
    await LoginPage.message()
});

When(/^user login with his username and password$/, async () => {
    await LoginPage.login("yyanes", "Test!2020")
});

Then(/^should redirect to his profile page$/, async () => {
    await ProfilePage.profileAssertion();
});