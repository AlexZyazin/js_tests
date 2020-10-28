import Page from './page'

class LkPage extends Page {

    get favourite() {return $("//a[contains(@href, '/personal/favourite/')]")}
    get itemIsLike() {return $('a.cc-item--like.active.card__like--active.is-active')}
    get itemTitle() {return $('a.cc-item--title')}

    goToLikeItems () {
        this.favourite.waitForExist({ timeout: 5000 });
        this.favourite.click();
    }
}
export default new LkPage()