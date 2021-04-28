const Page = require('./page');
const expectChai = require('chai').expect;

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProfilePage extends Page {
    /**
     * define selectors using getter methods
     */
    get username() { return $('#userName-value') }
    get labelUsername() { return $('#userName-label') }
    get btnLogout() { return $('div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.profile-wrapper div.mt-2.align-items-center.row:nth-child(1) > div.text-right.col-md-5.col-sm-12:nth-child(3) > button') }
    get labelBooks() { return $('#books-wrapper > div.text-left.col-md-1.col-sm-12') }
    get searchBox() { return $('#searchBox') }
    get table() { return $('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.profile-wrapper > div.ReactTable.-striped.-highlight') }
    get btnBookStore() { return $('#gotoStore') }
    get btnDeleteAccount() { return $('div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.profile-wrapper div.mt-2.buttonWrap.row:nth-child(4) > div.text-center.button > button') }
    get btnDeleteBooks() { return $('div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.profile-wrapper div.mt-2.buttonWrap.row:nth-child(4) > div.text-right.button.di > button') }    
    get bodyTable() { return $('div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.profile-wrapper > div.ReactTable.-striped.-highlight:nth-child(2)') }
    get bookTitles() { return $$('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.profile-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div > div > div > div > span > a') }

    async profileAssertion() {
        await expect(this.username).toBeExisting();
        await expect(this.labelUsername).toBeExisting();
        await expect(this.labelBooks).toBeExisting();
        await expect(this.searchBox).toBeExisting();
        await expect(this.table).toBeExisting();
        await expect(this.btnBookStore).toBeExisting();
        await expect(this.btnDeleteAccount).toBeExisting();
        await expect(this.btnDeleteBooks).toBeExisting();
        await expect(this.btnLogout).toBeExisting();
        await expect(this.bodyTable).toBeExisting();        
    }

    async verifyMyBooks(isBooks) {
        await (await this.bodyTable).waitForDisplayed();
        let table = await this.bookTitles;
        let numBooks = table.length;
        if (table.length == 0 && isBooks == false) {
            expectChai(table.length).to.equal(0);
        } else if (table.length > 0 && isBooks == true) {
            expectChai(table.length).to.equal(numBooks);
        } else if (table.length > 0 && isBooks == false) {
            expectChai(table.length).to.equal(0);
        } else if (table.length == 0 && isBooks == true) {
            expectChai(table.length).to.equal(numBooks);
        }
    }

    async deleteBooks() {
        await (await this.btnDeleteBooks).waitForDisplayed();
        await (await this.btnDeleteBooks).scrollIntoView();
        await (await this.btnDeleteBooks).click();
        (await $('#closeSmallModal-ok')).click();
    }

    async acceptAl() {
        await super.alertAccept();
    }

    async goToBookStore() {
        await (await this.btnBookStore).waitForDisplayed();
        await (await this.btnBookStore).scrollIntoView();
        await (await this.btnBookStore).click();
    }

    async deleteAccount() {
        await (await this.btnDeleteAccount).waitForDisplayed();
        await (await this.btnDeleteAccount).scrollIntoView();
        await (await this.btnDeleteAccount).click();
    }

    async accceptModal() {
        (await $('#closeSmallModal-ok')).click();
    }

    async clickLogout() {
        await (await this.btnLogout).waitForDisplayed();
        await (await this.btnLogout).click();
    }
    

    open() {
        return super.open('profile');
    }
}

module.exports = new ProfilePage();
