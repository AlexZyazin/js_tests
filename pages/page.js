export default class Page {
    open (path) {
        browser.url(path)
        browser.setWindowSize(1920, 1080);
    }
}