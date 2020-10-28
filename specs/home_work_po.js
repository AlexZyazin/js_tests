import HomePage from '../pages/home.page'
import SearchPage from '../pages/search.page'

describe('eapteka.ru', () => {

    it('Search Nurofen', () => {
        HomePage.open('/');
        HomePage.searchSomething('нурофен');
    });

    it('Count results', () => {
        SearchPage.searchItem.waitForExist({ timeout: 5000 });
        let text = SearchPage.searchTitle.getText();
        let numEl = parseInt(text.match(/\d+/));
        let numIt = SearchPage.searchItems.length;
        expect(numEl).to.equal(numIt);
    })

})