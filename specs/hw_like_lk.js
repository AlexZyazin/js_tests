import HomePage from '../pages/home.page'
import SearchPage from '../pages/search.page'
import configData from '../config'
import LkPage from '../pages/lk.page'

describe('eapteka.ru', () => {

    it('login', () => {
        HomePage.open('/');
        HomePage.selectPlace.click();
        HomePage.logIn(configData.login, configData.password);
    });

    it('search', () => {
        HomePage.searchSomething('витамин');
    });

    it('like all items on the first page', () => {
        SearchPage.likeAllItemsOnFirstPage();
        SearchPage.toTop.click();
        expect(SearchPage.itemNotLike.isExisting()).to.equal(false);
    })

    it('go to the lk', () => {
        SearchPage.lk.waitForDisplayed({ timeout: 5000 });
        SearchPage.lk.click();
    })

    it('go to favourites and delete all like items', () => {
        LkPage.goToLikeItems();
        LkPage.dislikeAllItems();
        LkPage.noLikeItems.waitForDisplayed({ timeout: 5000 });
        expect(LkPage.noLikeItems.isExisting()).to.equal(true);
    })

})