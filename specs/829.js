import HomePage from '../pages/home.page'
import SearchPage from '../pages/search.page'
import configData from '../config'
import LkPage from '../pages/lk.page'

describe('eapteka.ru', () => {

    it('login and search', () => {
        HomePage.open('/');
        HomePage.selectPlace.click();
        HomePage.logIn(configData.login, configData.password);
        HomePage.searchSomething('нурофен');
    });

    it('like item and go to lk', () => {
        SearchPage.likeItem();
        SearchPage.lk.click();
    })

    it('go to favourites, assert and delete the like item', () => {
        LkPage.goToLikeItems();
        LkPage.itemIsLike.waitForDisplayed({ timeout: 5000 });
        expect(SearchPage.itemTitle.getText()).to.equal(LkPage.itemTitle.getText());
        LkPage.itemIsLike.click();
        LkPage.itemTitle.waitForExist({ timeout: 5000, reverse: true });
        expect(LkPage.itemTitle.isExisting()).to.equal(false);
    })

})