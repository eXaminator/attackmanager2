<<<<<<< HEAD
describe('App', () => {
    beforeEach(() => {
        browser.get('/home');
    });

    it('should have a title', () => {
        let subject = browser.getTitle();
        let result = 'Angular2 Webpack Starter by @gdi2990 from @AngularClass';
=======
describe('Home', () => {

    beforeEach(() => {
        // change hash depending on router LocationStrategy
        browser.get('/#/home');
    });


    it('should have a title', () => {
        let subject = browser.getTitle();
        let result = 'Angular2 Webpack Starter by @gdi2290 from @AngularClass';
>>>>>>> upstream/master
        expect(subject).toEqual(result);
    });
});
