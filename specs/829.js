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
        SearchPage.likeItems(0);
        SearchPage.lk.click();
    })

    it('go to favourites, assert and delete the like item', () => {
        LkPage.goToLikeItems();
        LkPage.likeItemsGroup.waitForDisplayed({ timeout: 5000 });
        expect(SearchPage.itemTitle.getText()).to.equal(LkPage.itemsTitle[0].getText());
        LkPage.dislikeItems(0);
        LkPage.likeItemsGroup.waitForExist({ timeout: 5000, reverse: true });
        expect(LkPage.noLikeItems.isExisting()).to.equal(true);
    })

})