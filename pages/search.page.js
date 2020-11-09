import Page from './page'
class SearchPage extends Page {

    get lk() {return $("//a[contains(text(),'кабинет')]")}
    get searchTitle() {return $('h1')}
    get searchItem() {return $('div.cc-item--info')}
    get searchItems() {return $$('div.cc-item--info')}
    get searchItemsBuyBtns() {return $$("//a[text()='Купить']")}
    //get itemNotLike() {return $('a.cc-item--like')}
    get itemsNotLike() {return $$('a.cc-item--like')}
    //get itemIsLike() {return $('a.cc-item--like.is-active.active.card__like--active')}
    get itemsIsLike() {return $$('a.cc-item--like.is-active.active.card__like--active')}
    get itemTitle() {return $('a.cc-item--title')}
    get allPages() {return $('ul.d-flex.justify-content-start.justify-content-md-end')}
    get pages() {return this.allPages.$$('li')}
    get toTop() {return $('div.toTop')}

    pageActive (index) {
        return this.allPages.$(`li.active:nth-child(${index})`)
    }

    likeItems (index) {
        this.itemsNotLike[index].waitForDisplayed({ timeout: 5000 });
        this.itemsNotLike[index].scrollIntoView();
        this.itemsNotLike[index].waitForClickable({ timeout: 5000 });
        this.itemsNotLike[index].click();
        this.itemsIsLike[index].waitForExist({ timeout: 5000 });
    }

}
export default new SearchPage()