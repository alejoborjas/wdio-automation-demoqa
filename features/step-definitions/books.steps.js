const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('../pageobjects/login.page');
const ProfilePage = require('../pageobjects/profile.page');
const BookPage = require('../pageobjects/books.page');

const pages = {
    login: LoginPage,
    book: BookPage,
    profile: ProfilePage
}

Given(/^user already (\w+) and on the Profile Page$/, async (page) => {
    await pages[page].open()
    await LoginPage.loginAssertion();
    await LoginPage.login("yyanes100", "Test!2020")
    await ProfilePage.profileAssertion();
});

When(/^user click on the button Go To Book Store$/, async () => {
    await ProfilePage.goToBookStore();
});

Then(/^he will be redirect to the Book Store Page$/, async () => {
    await BookPage.verifyUrl();
    await BookPage.bookstoreAssertion();
});

When(/^he select the first book already login$/, async () => {
    await BookPage.selectFirstBook();
});

Then(/^he will see the info of the book selected$/, async () => {
    await BookPage.bookinfoAssertion();
});

When(/^user clicks the button Add To Your Collection$/, async () => {
    await BookPage.addCollection();
    await browser.pause(3000)
});

Then(/^an alert shows up to confirm the book were added to your collection$/, async () => {
    await BookPage.acceptAl();
});

When(/^user go back to his (\w+)$/, async (page) => {
    await pages[page].open()
});

Then(/^the book should be in the table of his books$/, async () => {
    await ProfilePage.verifyMyBooks(true);
});

Given(/^user without logged in and on the (\w+) store Page$/, async (page) => {
    await pages[page].open();
    await BookPage.bookstoreAssertion();
});

When(/^he select the first book witout login$/, async () => {
    await BookPage.selectFirstBook();
});

Then(/^he will see the info of the book$/, async () => {
    await BookPage.bookinfoAssertion();
});

When(/^the button Add To Your Collection should not be displayed for the user$/, async () => {
    await BookPage.verifyAddBook(false)
});

Given(/^a user on the (\w+) Store Page$/, async (page) => {
    await pages[page].open()
});

When(/^he search an existing book$/, async () => {
    await BookPage.searchBook("JS")
    await browser.pause(3000)
});

Then(/^the book should be displayed in the table$/, async () => {
    await BookPage.verifyFirstBook("JS")
});