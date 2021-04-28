const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
    /**
     * define selectors using getter methods
     */
    get title() { return $('#userForm > div:nth-child(1) > h4') }
    get labelFirstname() { return $('#firstname-label') }
    get inputFirstname() { return $('#firstname') }
    get labelLastname() { return $('#lastname-label') }
    get inputLastname() { return $('#lastname') }
    get labelUsername() { return $('#userName-label') }
    get inputUsername() { return $('#userName') }
    get labelPassword() { return $('#password-label') }
    get inputPassword() { return $('#password') }
    get checkCaptcha() { return $('#recaptcha-anchor > div.recaptcha-checkbox-border') }
    get btnSubmit() { return $('#register') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async register(firstname, lastname, username, password) {
        await (await this.inputFirstname).setValue(firstname);
        await (await this.inputLastname).setValue(lastname);
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await super.switchFrame(1))
        await (await this.checkCaptcha).click();
        //await (await this.btnSubmit).click();
    }

    async registerAssertion() {
        await expect(this.labelFirstname).toBeExisting();
        await expect(this.labelLastname).toBeExisting();
        await expect(this.labelUsername).toBeExisting();
        await expect(this.labelPassword).toBeExisting();
        await expect(this.inputFirstname).toBeExisting();
        await expect(this.inputLastname).toBeExisting();
        await expect(this.inputUsername).toBeExisting();
        await expect(this.inputPassword).toBeExisting();
        await expect(this.btnSubmit).toBeExisting();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('register');
    }

    async dismissAlert() {
        return super.dismissAlert();
    }

    async acceptAlert() {
        return super.acceptAlert();
    }

    async getAlertText() {
        return super.getAlertText();
    }
}

module.exports = new RegisterPage();
