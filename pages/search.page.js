import Page from './page'
class SearchPage extends Page {

    get lk() {return $("//a[contains(text(),'кабинет')]")}
    get searchTitle() {return $('h1')}
    get searchItem() {return $('div.cc-item--info')}
    get searchItems() {return $$('div.cc-item--info')}
    get searchItemsBuyBtns() {return $$("//a[text()='Купить']")}
    get itemNotLike() {return $('a.cc-item--like')}
    get itemIsLike() {return $('a.cc-item--like.is-active.active.card__like--active')}
    get itemTitle() {return $('a.cc-item--title')}
    get allPages() {return $('ul.d-flex.justify-content-start.justify-content-md-end')}
    get pages() {return this.allPages.$$('li')}

    pageActive (index) {
        return this.allPages.$(`li.active:nth-child(${index})`)
    }

    likeItem () {
        this.itemNotLike.waitForExist({ timeout: 5000 });
        this.itemNotLike.waitForDisplayed({ timeout: 5000 });
        this.itemNotLike.click();
        this.itemIsLike.waitForExist({ timeout: 5000 });
    }
}
export default new SearchPage()