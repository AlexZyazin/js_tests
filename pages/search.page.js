import Page from './page'
class SearchPage extends Page {

    get lk() {return $("//a[contains(text(),'кабинет')]")}
    get searchTitle() {return $('h1')}
    get searchItems() {return $$('div.cc-item--info')}
    get searchItemsBuyBtns() {return $$("//a[text()='Купить']")}
    get itemsNotLike() {return $$('a.cc-item--like')}
    get itemNotLike() {return $("//a[@class='a.cc-item--like']")}
    get itemsIsLike() {return $$('a.cc-item--like.is-active.active.card__like--active')}
    get itemTitle() {return $('a.cc-item--title')}
    get allPages() {return $('ul.custom-pagination__list')}
    get pages() {return this.allPages.$$('a.custom-pagination__item')}
    get toTop() {return $('div.toTop')}
    get loading() {return $('div.waitwindowlocalshadow')}

    pageClick (index) {
        return $(`//ul/li/a[text()='${index}']`)
    }

    likeItems (index) {
        this.itemsNotLike[index].waitForDisplayed({ timeout: 5000 });
        this.itemsNotLike[index].scrollIntoView();
        this.itemsNotLike[index].waitForClickable({ timeout: 5000 });
        this.itemsNotLike[index].click();
        this.loading.waitForExist({ timeout: 5000, reverse: true });
    }

    likeAllItemsOnFirstPage () {
        let liked = this.itemsNotLike.length;
        for (let i = 0; i < liked; i++) {
            this.likeItems(i);
        }
    }

}
export default new SearchPage()