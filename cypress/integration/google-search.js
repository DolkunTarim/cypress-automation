import GooglePage from "../pages/GooglePage";

describe('a user should be able to search any keyword on the Google search page',function () {
    it('User should be able to search a city ', function () {
        const googlePage=new GooglePage()
        googlePage.search('New York')
    });
    it('User should be able to search a book ', function () {
        const googlePage=new GooglePage()
        googlePage.search('Harry Potter')
    });
})