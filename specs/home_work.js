describe('eapoteka.ru', function () {
    it('Search Nurofen', function () {
        browser.url('/');
        browser.setWindowSize(1920, 1080);
        const search = $('#search');
        search.waitForExist({ timeout: 5000 });
        search.setValue('нурофен');
        const searchbutton = $('button.searchbar__button.btn.btn-send');
        searchbutton.click();
        browser.pause(3000);
    });
//    it('Count results', function () {
//    })
})