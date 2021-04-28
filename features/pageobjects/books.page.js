const Page = require('./page');
const expectChai = require('chai').expect;

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BooksPage extends Page {
    /**
     * define selectors using getter methods
     */
    // book store
    get searchBar() { return $('#searchBox') }
    get searchBtn() { return $('#basic-addon2') }
    get labelUsername() { return $('#userName-label') }
    get username() { return $('#userName-value') }
    get btnLogOut() { return $('#submit') }
    get table() { return $('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.books-wrapper > div.ReactTable.-striped.-highlight') }
    get bookTitles() { return $$('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.books-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div > div > .rt-td > div > span > a') }
    get firstBook() { return $('div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.books-wrapper div.ReactTable.-striped.-highlight div.rt-table div.rt-tbody div.rt-tr-group:nth-child(1) div.rt-tr.-odd div.rt-td:nth-child(2) div.action-buttons span.mr-2 > a:nth-child(1)') }
    get btnLogout() { return $('#searchBox-wrapper > div.text-right.col-md-4.col-sm-12 > button') }
    // book info
    get bookProfile() { return $('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.books-wrapper > div.profile-wrapper') }
    get isbnLabel() { return $('#ISBN-label') }
    get isbnValue() { return $('#userName-value') }
    get titleLabel() { return $('#title-label') }
    get titleValue() { return $('#title-wrapper > div.col-md-9.col-sm-12 > label') }
    get subtitleLabel() { return $('#subtitle-label') }
    get subtitleValue() { return $('div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.books-wrapper div.profile-wrapper div.mt-2.row:nth-child(3) > div.col-md-9.col-sm-12 > label') }
    get authorLabel() { return $('#author-label') }
    get authorValue() { return $('div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.books-wrapper div.profile-wrapper div.mt-2.row:nth-child(4) > div.col-md-9.col-sm-12 > label') }
    get publisherLabel() { return $('#publisher-label') }
    get publisherValue() { return $('div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.books-wrapper div.profile-wrapper div.mt-2.row:nth-child(5) > div.col-md-9.col-sm-12 > label') }
    get pagesLabel() { return $('#pages-label') }
    get pagesValue() { return $('div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.books-wrapper div.profile-wrapper div.mt-2.row:nth-child(6) > div.col-md-9.col-sm-12 > label') }
    get descriptionLabel() { return $('#description-label') }
    get descriptionValue() { return $('div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.books-wrapper div.profile-wrapper div.mt-2.row:nth-child(7) > div.col-md-9.col-sm-12 > label') }
    get websiteLabel() { return $('#website-label') }
    get websiteValue() { return $('div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.books-wrapper div.profile-wrapper div.mt-2.row:nth-child(8) > div.col-md-9.col-sm-12 > label') }
    get btnBackBookStore() { return $('div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.books-wrapper div.profile-wrapper div.mt-2.fullButtonWrap.row:nth-child(9) > div.text-left.fullButton > button') }
    get btnAddCollection() { return $('div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.books-wrapper div.profile-wrapper div.mt-2.fullButtonWrap.row:nth-child(9) > div.text-right.fullButton > button') }
    

    async bookstoreAssertion() {
        await expect(this.searchBar).toBeExisting();
        await expect(this.searchBtn).toBeExisting();        
        await expect(this.table).toBeExisting();
        await expect(this.bookTitles).toBeExisting();
        await expect(this.firstBook).toBeExisting();
    }

    async bookinfoAssertion() {
        await expect(this.bookProfile).toBeExisting();
        await expect(this.isbnLabel).toBeExisting();
        await expect(this.isbnValue).toBeExisting();
        await expect(this.titleLabel).toBeExisting();
        await expect(this.titleValue).toBeExisting();
        await expect(this.subtitleLabel).toBeExisting();
        await expect(this.subtitleValue).toBeExisting();
        await expect(this.authorLabel).toBeExisting();
        await expect(this.authorValue).toBeExisting();
        await expect(this.publisherLabel).toBeExisting();
        await expect(this.publisherValue).toBeExisting();
        await expect(this.pagesLabel).toBeExisting();
        await expect(this.pagesValue).toBeExisting();
        await expect(this.descriptionLabel).toBeExisting();
        await expect(this.descriptionValue).toBeExisting();
        await expect(this.websiteLabel).toBeExisting();
        await expect(this.websiteValue).toBeExisting();
        await expect(this.btnBackBookStore).toBeExisting();
    }

    async verifyBookStore(isBooks) {
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

    async clickLogout() {
        await (await this.btnLogout).waitForDisplayed();
        await (await this.btnLogout).click();
    }

    async deleteBooks() {
        await (await this.btnDeleteBooks).waitForDisplayed();
        await (await this.btnDeleteBooks).click();
        (await $('#closeSmallModal-ok')).click();
    }

    async acceptAl() {
        await super.alertAccept();
    }

    async goToBookStore() {
        await (await this.btnBookStore).waitForDisplayed();
        await (await this.btnBookStore).click();
    }

    async verifyUrl() {
        let url = await super.obtainUrl();
        expectChai(url).to.equal('https://demoqa.com/books')
    }

    async verifyAddBook(flag) {
        let isDisplayed = (await this.btnAddCollection).isDisplayed();
        if (isDisplayed && flag) {
            expectChai(isDisplayed).to.be.true;
        } else if (!isDisplayed && flag) {
            expectChai(isDisplayed).to.be.true;
        } else if (isDisplayed && !flag) {
            expectChai(isDisplayed).to.be.empty;
        } else if (!isDisplayed && !flag) {
            expectChai(isDisplayed).to.be.empty;
        }
    }

    async selectFirstBook() {
        await (await this.firstBook).waitForDisplayed();
        await (await this.firstBook).click();
    }

    async addCollection() {
        await (await this.btnAddCollection).waitForDisplayed();
        await (await this.btnAddCollection).scrollIntoView();
        await (await this.btnAddCollection).click();
    }

    async searchBook(book){
        await (await this.searchBar).waitForDisplayed();
        await (await this.searchBar).setValue(book);
    }

    async verifyFirstBook(book){
        await (await this.firstBook).waitForDisplayed();
        let search = await (await this.firstBook).getHTML(false);        
        expectChai(search).to.have.string(book);
    }

    open() {
        return super.open('books');
    }
}

module.exports = new BooksPage();
