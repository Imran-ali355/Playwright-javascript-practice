
import { attachStepScreenshot } from '../utils/screenshot';
class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login');
        this.usernameErrorSpan = page.locator('#username_span');
        this.passwordErrorSpan = page.locator('#password_span');
        this.authError = page.locator('.auth_error b');
        this.forgotPasswordLink = page.locator('text=Forgot Password?');
        this.registerLink = page.locator('text=New User Register Here');
    }
    async goto() {
        await this.page.goto('/');
        await attachStepScreenshot(this.page, '01 - Login page opened');

    }
   

    async login(username, password) {
        await this.usernameInput.fill(username);
        await attachStepScreenshot(this.page, '02 - After entering username');

        await this.passwordInput.fill(password);
        await attachStepScreenshot(this.page, '03 - After entering password');
        await this.loginButton.click();
        await attachStepScreenshot(this.page, '04 - After clicking Login');
    }

    async clickForgotPassword() {
        await this.forgotPasswordLink.click();
    }

    async clickRegister() {
        await this.registerLink.click();
    }
}

export default LoginPage;