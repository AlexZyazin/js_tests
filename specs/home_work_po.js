import HomePage from '../pages/home.page'
import SearchPage from '../pages/search.page'

describe('eapteka.ru', () => {

    it('Search item', () => {
        HomePage.open('/');
        HomePage.selectPlace.click();
        HomePage.searchSomething('вакцина');
    });

    it('Count results', () => {
        SearchPage.searchItem.waitForExist({ timeout: 5000 });
        let text = SearchPage.searchTitle.getText();
        let numEl = parseInt(text.match(/\d+/));
        let numIt = SearchPage.searchItems.length;        
        if (SearchPage.allPages.isExisting() == true) {
              for (let i = 1; i < SearchPage.pages.length; i++) {
                SearchPage.pages[i].click();
                let p = i + 1;
                SearchPage.pageActive(p).waitForExist({ timeout: 5000 });
                let num = SearchPage.searchItems.length;
                numIt = numIt + num;                
              }
          }
        console.log('Sum of items on pages: ', numIt);
        expect(numEl).to.equal(numIt);
    })

})