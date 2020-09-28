//const homePage = require("../pages/home.page");
//const pagesearchPage = require("../pages/search.page");
//const searchPage = requireimport searchPage from '../pages/search.page'
import HomePage from '../pages/home.page'
import SearchPage from '../pages/search.page'
describe('eapteka.ru', () => {
    it('Search Nurofen', () => {
        HomePage.open();
        HomePage.searchInput.waitForExist({ timeout: 5000 });
        HomePage.searchInput.setValue('нурофен');
        HomePage.searchButton.click();
    });
    it('Count results', () => {
        SearchPage.searchItem.waitForExist({ timeout: 5000 });
        let text = SearchPage.searchTitle.getText();
        let numEl = parseInt(text.match(/\d+/));
        let numIt = SearchPage.searchItems.length;
        expect(numEl).to.equal(numIt);
    })
})