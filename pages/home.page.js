import Page from './page'
class HomePage extends Page {
    
    get searchInput() {return $('#search')}
    get searchButton() {return $('button.searchbar__button.btn.btn-send')}
    get goLogin() {return $("//a[text()='Вход']")}
    get loginField() {return $("//input[@name='LOGIN']")}
    get passwordField() {return $("//input[@name='PASSWORD']")}
    get goEnter() {return $("//button[text()='Войти']")}
    get lk() {return $("//a[contains(text(),'кабинет')]")}
    get selectPlace() {return $("//a[text()='Да, я тут']")}

    logIn (index1, index2) {
        this.goLogin.waitForExist({ timeout: 5000 });
        this.goLogin.click();
        this.loginField.waitForExist({ timeout: 5000 });
        this.loginField.setValue(index1);
        this.passwordField.setValue(index2);
        this.goEnter.click();
    }
    searchSomething (index) {
        this.searchInput.waitForEnabled({ timeout: 5000 });
        this.searchInput.moveTo();
        this.searchInput.setValue(index);
        this.searchButton.click();
    }
}
export default new HomePage()