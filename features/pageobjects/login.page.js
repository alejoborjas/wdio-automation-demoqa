const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get welcomeText() { return $('#userForm > div:nth-child(1) > h2') }
    get loginText() { return $('#userForm > div:nth-child(1) > h5') }
    get labelUsername() { return $('#userName') }
    get inputUsername() { return $('#userName') }
    get labelPassword() { return $('#password') }
    get inputPassword() { return $('#password') }
    get btnLogin() { return $('#login') }
    get btnNewUser() { return $('#newUser') }
    get errorMessage() { return $('#name') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnLogin).click();
    }

    async loginAssertion() {
        await expect(this.welcomeText).toBeExisting();
        await expect(this.loginText).toBeExisting();
        await expect(this.labelUsername).toBeExisting();
        await expect(this.inputUsername).toBeExisting();
        await expect(this.labelPassword).toBeExisting();
        await expect(this.inputPassword).toBeExisting();
        await expect(this.btnLogin).toBeExisting();
        await expect(this.btnNewUser).toBeExisting();
    }

    async clickLogin() {
        await (await this.btnLogin).click();
    }

    async clickNewUser() {
        await (await this.btnNewUser).click();
    }

    async message() {
        await (await this.errorMessage).waitForDisplayed();                
        await expect(this.errorMessage).toBeExisting();        
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();
