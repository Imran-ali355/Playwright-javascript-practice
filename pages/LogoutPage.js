class LogoutPage {
    constructor(page) {
        this.page = page;
        // this.logoutButton = page.locator('#logout');
        this.loginAgainLink = page.getByRole('link', { name: 'Click here to login again' });
        this.logoutLink = page.getByRole('link', { name: 'Logout' });
    }
 
    async gotoLogoutPage() {
         await this.logoutLink.click();
         await this.loginAgainLink.click();
 
    }
}
 
export default LogoutPage;