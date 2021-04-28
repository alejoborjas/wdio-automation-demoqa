const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('../pageobjects/login.page');
const ProfilePage = require('../pageobjects/profile.page');
const BookPage = require('../pageobjects/books.page');

const pages = {
    login: LoginPage
}

Given(/^user is (\w+) and on the Profile Page$/, async (page) => {
    await pages[page].open()
    await LoginPage.loginAssertion();
    await LoginPage.login("yyanes2", "Test!2020")
    await ProfilePage.profileAssertion();
});

When(/^user clicks on the button Go to Book Store$/, async () => {    
    await ProfilePage.goToBookStore();    
});

Then(/^user will be redirect to the Book Store Page$/, async () => {
    await BookPage.verifyUrl();
});

When(/^user will logout from book store page$/, async () => {
    await BookPage.clickLogout();
});

Then(/^user will be redirect to login page from book store$/, async () => {
    await LoginPage.loginAssertion();
});

When(/^user verifies that he have Books$/, async () => {    
    await ProfilePage.verifyMyBooks(true);
});

When(/^clicks on Delete all Books$/, async () => {
    await ProfilePage.deleteBooks();
    await browser.pause(3000)
});

Then(/^an alert shows up to confirm the books were deleted$/, async () => {
    await ProfilePage.acceptAl();
});

When(/^the table doesn't have books$/, async () => {
    await ProfilePage.verifyMyBooks(false);
});

When(/^user will logout from profile page$/, async () => {
    await ProfilePage.clickLogout();
});

Then(/^user will be redirect to login page from profile store$/, async () => {
    await LoginPage.loginAssertion();
});

When(/^user clicks on the button Delete account$/, async () => {
    await ProfilePage.deleteAccount();
});

Then(/^an modal should display to confirm that you want to delete your account$/, async () => {
    await ProfilePage.accceptModal();
    await browser.pause(3000)
});

Then(/^an alert will confirm that you account was deleted$/, async () => {
    await ProfilePage.acceptAl();
});

When(/^user will be redirect to Login page$/, async () => {
    await LoginPage.loginAssertion();    
});

When(/^user wants to login with his deleted account info$/, async () => {
    await LoginPage.login("yyanes2", "Test!2020")
});

Then(/^error message should be displayed$/, async () => {
    await LoginPage.message()
});