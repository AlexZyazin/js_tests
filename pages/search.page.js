import Page from './page'
class SearchPage extends Page {
    get searchTitle() {return $('h1')}
    get searchItem() {return $('div.cc-item--info')}
    get searchItems() {return $$('div.cc-item--info')}
}
export default new SearchPage()
//module.exports = new SearchPage()