import Page from './page'
class HomePage extends Page {
    get searchInput() {return $('#search')}
    get searchButton() {return $('button.searchbar__button.btn.btn-send')}
}
export default new HomePage()
//module.exports = new HomePage()