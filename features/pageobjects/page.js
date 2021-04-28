/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
const config = require('../../wdio.conf')

module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open(path) {
        return browser.url(`${config.config.baseUrl}/${path}`)
    }

    async getAlertText() {
        return await browser.getAlertText()
    }

    async alertAccept() {
        return await browser.acceptAlert()
    }

    async dismissAlert() {
        return await browser.dismissAlert()
    }

    async switchFrame(frame) {
        await browser.switchToFrame(frame)
    }

    async obtainUrl() {
        return browser.getUrl();
    }
}
