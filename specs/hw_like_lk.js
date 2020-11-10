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
        let liked = SearchPage.itemsNotLike.length;
        for (let i = 0; i < liked; i++) {
            SearchPage.likeItems(i);
        }
        SearchPage.toTop.click();
    })

    it('go to the lk', () => {
        SearchPage.lk.waitForDisplayed({ timeout: 5000 });
        SearchPage.lk.click();
    })

    it('go to favourites and delete all like items', () => {
        LkPage.goToLikeItems();
        LkPage.likeItemsGroup.waitForDisplayed({ timeout: 5000 });
        if (LkPage.allPages.isExisting() == true) {
            let liked1 = LkPage.likeItems.length;
            for (let i = 0; i < liked1; i++) {
                LkPage.dislikeItems(0);
            }
            browser.pause(2000);
            let liked2 = LkPage.likeItems.length;
            for (let i = 0; i < liked2; i++) {
                LkPage.dislikeItems(0);
            }
        } else {
            let liked = LkPage.likeItems.length;
            for (let i = 0; i < liked; i++) {
                LkPage.dislikeItems(0);
            }
        }
        LkPage.noLikeItems.waitForDisplayed({ timeout: 5000 });
        expect(LkPage.noLikeItems.isExisting()).to.equal(true);
    })

})