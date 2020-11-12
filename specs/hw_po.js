import HomePage from '../pages/home.page'
import SearchPage from '../pages/search.page'

describe('eapteka.ru', () => {

    it('Search item', () => {
        HomePage.open('/');
        HomePage.selectPlace.click();
        HomePage.searchSomething('вакцина');
    });

    it('Count results', () => {
        SearchPage.searchTitle.waitForExist({ timeout: 5000 });
        let text = SearchPage.searchTitle.getText();
        let numEl = parseInt(text.match(/\d+/));
        let numIt = SearchPage.searchItems.length;
        if (SearchPage.allPages.isExisting() == true) {
            let lengthPages = SearchPage.pages.length;
            let lastPage = SearchPage.pages[lengthPages-1].getText();
            for (let i = 2; i <= lastPage; i++) {
                SearchPage.pageClick(i).click();
                SearchPage.loading.waitForExist({ timeout: 5000, reverse: true });
                let num = SearchPage.searchItems.length;
                numIt = numIt + num;
            }
        }
        console.log('Sum of items on pages: ', numIt);
        expect(numEl).to.equal(numIt);
    })

})