import Page from './page'

class LkPage extends Page {

    get favourite() {return $("//a[contains(@href, '/personal/favourite/')]")}
    get itemsIsLike() {return $$('a.cc-item--like.active.card__like--active.is-active')}
    get likeItems() {return $$('div.cc-item--info')}
    get likeItemsGroup() {return $('div.cc-item--group ')}
    get itemsTitle() {return $$('a.cc-item--title')}
    get noLikeItems() {return $("//font[text()='Список избранного пуст']")}
    get likeTitle() {return $("//h1[text()='Избранное']")}
    get loader() {return $('div.waitwindowlocalshadow')}

    goToLikeItems () {
        this.favourite.waitForExist({ timeout: 5000 });
        this.favourite.click();
        this.likeTitle.waitForDisplayed({ timeout: 5000 });
    }

    dislikeItems (index) {
        browser.pause(1000);
        this.itemsIsLike[index].click();
        this.loader.waitForExist({ timeout: 5000, reverse: true });
    }
}
export default new LkPage()