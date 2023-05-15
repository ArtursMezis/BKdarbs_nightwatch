import {HomepageHelper} from "../helpers/homepage-helper";

describe('Basic Tests', function() {
    const homepageHelper = new HomepageHelper()


    beforeEach(browser => {
        browser.setWindowSize(1440, 900);
        browser.navigateTo('http://localhost:8080')
    });

    it('Check Documentation link container content', function(browser) {
        browser
            .waitForElementVisible('body')
            .assert.visible(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > a:nth-of-type(1)`)
            .getAttribute(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > a:nth-of-type(1)`, `href`, function(result) {
                this.assert.equal(result.value, `https://laravel.com/docs`)
            })
            .assert.visible(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > a:nth-of-type(1) > div > div`)
            .assert.visible(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > a:nth-of-type(1) > div > h2`)
            .assert.visible(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > a:nth-of-type(1) > div > p`)
            .assert.visible(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > a:nth-of-type(1) > svg`)
            .assert.textContains(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > a:nth-of-type(1) > div > h2`, `Documentation`)
            .assert.textContains(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > a:nth-of-type(1) > div > p`, `Laravel has wonderful documentation covering every aspect of the framework. Whether you are a newcomer or have prior experience with Laravel, we recommend reading our documentation from beginning to end.`)
    });

    it('Check Documentation link', function(browser) {
        browser
            .waitForElementVisible('body')
            .click(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > a:nth-of-type(1)`)
            .waitForElementVisible(`body`)
            .assert.urlEquals(`https://laravel.com/docs/10.x`)
            .assert.visible(`html > body > div:nth-of-type(2) > div > aside > div > a`)
    });

    it('Check Laracast link container content', function(browser) {
        browser
            .waitForElementVisible('body')
            .assert.visible(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > a:nth-of-type(2)`)
            .getAttribute(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > a:nth-of-type(2)`, `href`, function(result) {
                this.assert.equal(result.value, `https://laracasts.com`)
            })
            .assert.visible(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > a:nth-of-type(2) > div > div`)
            .assert.visible(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > a:nth-of-type(2) > div > h2`)
            .assert.visible(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > a:nth-of-type(2) > div > p`)
            .assert.visible(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > a:nth-of-type(2) > svg`)
            .assert.textContains(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > a:nth-of-type(2) > div > h2`, `Laracasts`)
            .assert.textContains(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > a:nth-of-type(2) > div > p`, `Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see for yourself, and massively level up your development skills in the process.`)
    });

    it('Check Laracast link', function(browser) {
        browser
            .waitForElementVisible('body')
            .click(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > a:nth-of-type(2)`)
            .waitForElementVisible(`body`)
            .assert.urlEquals(`https://laracasts.com/`)
            .assert.visible(`img[alt$='Logo']`)
    });

    it('Check Laravel News link container content', function(browser) {
        browser
            .waitForElementVisible('body')
            .assert.visible(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > a:nth-of-type(3)`)
            .getAttribute(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > a:nth-of-type(3)`, `href`, function(result) {
                this.assert.equal(result.value, `https://laravel-news.com`)
            })
            .assert.visible(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > a:nth-of-type(3) > div > div`)
            .assert.visible(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > a:nth-of-type(3) > div > h2`)
            .assert.visible(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > a:nth-of-type(3) > div > p`)
            .assert.visible(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > a:nth-of-type(3) > svg`)
            .assert.textContains(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > a:nth-of-type(3) > div > h2`, `Laravel News`)
            .assert.textContains(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > a:nth-of-type(3) > div > p`, `Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials.`)
    });

    it('Check Laravel News link', function(browser) {
        browser
            .waitForElementVisible('body')
            .click(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > a:nth-of-type(3)`)
            .waitForElementVisible(`body`)
            .assert.urlEquals(`https://laravel-news.com/`)
            .assert.visible(`html > body > header > nav > div:nth-of-type(2) > div:nth-of-type(1) > a:nth-of-type(1) > svg > path:nth-of-type(1)`)
    });

    it('Check ecosystem container content', function(browser) {
        browser
            .waitForElementVisible('body')
            .assert.visible(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > div`)
            .assert.visible(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > div > div > div`)
            .assert.visible(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > div > div > h2`)
            .assert.visible(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > div > div > p`)
            .assert.textContains(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > div > div > h2`, `Vibrant Ecosystem`)
            .assert.textContains(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > div > div > p`, `Laravel's robust library of first-party tools and libraries, such as Forge, Vapor, Nova, and Envoyer help you take your projects to the next level. Pair them with powerful open source libraries like Cashier, Dusk, Echo, Horizon, Sanctum, Telescope, and more.`)
    });

    it('Check sponsor link', function(browser) {
        browser
            .waitForElementVisible('body')
            .assert.visible(`a[href="https://github.com/sponsors/taylorotwell"]`)
            .assert.textContains(`a[href="https://github.com/sponsors/taylorotwell"]`, `Sponsor`)
            .assert.visible(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div > a > svg`)
            .click(`a[href="https://github.com/sponsors/taylorotwell"]`)
            .waitForElementVisible(`body`)
            .assert.urlEquals(`https://github.com/sponsors/taylorotwell`)
            .assert.visible(`[class="octicon octicon-mark-github"]`)
    });

    it('Homepage logotype check', function(browser) {
        browser
            .waitForElementVisible('body')
            .assert.visible(`[class="h-16 w-auto bg-gray-100 dark:bg-gray-900"]`)

    });

    it('Homepage Log in container check', function(browser) {
        browser
            .waitForElementVisible('body')
            .assert.visible(`a[href="http://localhost:8080/login"]`)
            .assert.textContains(`a[href="http://localhost:8080/login"]`,`Log in`)
    });

    it('Homepage Register container check', function(browser) {
        browser
            .waitForElementVisible('body')
            .assert.visible(`[href="http://localhost:8080/register"]`)
            .assert.textContains(`[href="http://localhost:8080/register"]`,`Register`)
    });

    it('Register page check', function(browser) {
        browser
            .waitForElementVisible('body')
            .click(`[href="http://localhost:8080/register"]`)
            .waitForElementVisible('body')
            .assert.visible(`input[id="name"]`)
            .assert.visible(`label[for="name"]`)
            .assert.visible(`input[id="email"]`)
            .assert.visible(`label[for="email"]`)
            .assert.visible(`input[id="password"]`)
            .assert.visible(`label[for="password"]`)
            .assert.visible(`input[id="password_confirmation"]`)
            .assert.visible(`label[for="password_confirmation"]`)
            .assert.visible(`html > body > div > div > div:nth-of-type(2) > form > div:nth-of-type(5) > a`)
            .getAttribute(`html > body > div > div > div:nth-of-type(2) > form > div:nth-of-type(5) > a`, `href`, function(result) {
                this.assert.equal(result.value, `http://localhost:8080/login`)
            })
            .assert.visible(`button[type="submit"]`)
            .assert.textContains(`button[type="submit"]`, `REGISTER`)
    });

    it('Register A user', function(browser) {
        const randomName = homepageHelper.randomString(10)
        const randomEmail = homepageHelper.randomValidEmail()
        const randomPassword = homepageHelper.randomValidPassword()

        browser
            .waitForElementVisible('body')
            .click(`[href="http://localhost:8080/register"]`)
            .waitForElementVisible('body')
            .setValue(`input[id="name"]`, randomName)
            .setValue(`input[id="email"]`, randomEmail)
            .setValue(`input[id="password"]`, randomPassword)
            .setValue(`input[id="password_confirmation"]`, randomPassword)
            .click(`button[type="submit"]`)
            .waitForElementVisible('body')
            .assert.visible(`html > body > div > div > div > main > div > div > div > div`)
            .assert.textContains(`html > body > div > div > div > main > div > div > div > div`, `You're logged in!`)

    });

    it('Login page check', function(browser) {
        browser
            .waitForElementVisible('body')
            .click(`[href="http://localhost:8080/login"]`)
            .waitForElementVisible('body')
            .assert.visible(`input[id="email"]`)
            .assert.visible(`label[for="email"]`)
            .assert.visible(`input[id="password"]`)
            .assert.visible(`label[for="password"]`)
            .assert.visible(`html > body > div > div > div:nth-of-type(2) > form > div:nth-of-type(4) > a`)
            .getAttribute(`html > body > div > div > div:nth-of-type(2) > form > div:nth-of-type(4) > a`, `href`, function(result) {
                this.assert.equal(result.value, `http://localhost:8080/forgot-password`)
            })
            .assert.visible(`button[type="submit"]`)
            .assert.textContains(`button[type="submit"]`, `LOG IN`)
    });

    it('Successful Login', function(browser) {
        browser
            .waitForElementVisible('body')
            .click(`[href="http://localhost:8080/login"]`)
            .waitForElementVisible('body')
            .setValue(`input[id="email"]`, `TestUser00@testmail.com`)
            .setValue(`input[id="password"]`, `QAZwsx!@#456`)
            .click(`button[type="submit"]`)
            .waitForElementVisible('body')
            .assert.visible(`html > body > div > div > div > main > div > div > div > div`)
            .assert.textContains(`html > body > div > div > div > main > div > div > div > div`, `You're logged in!`)
    });

    it('Unsuccessful Login, wrong email and wrong password', function(browser) {
        const randomEmail = homepageHelper.randomValidEmail()
        const randomPassword = homepageHelper.randomValidPassword()
        browser
            .waitForElementVisible('body')
            .click(`[href="http://localhost:8080/login"]`)
            .waitForElementVisible('body')
            .setValue(`input[id="email"]`, randomEmail)
            .setValue(`input[id="password"]`, randomPassword)
            .click(`button[type="submit"]`)
            .waitForElementVisible('body')
            .assert.visible(`html > body > div > div > div:nth-of-type(2) > form > div:nth-of-type(1) > div > p`)
            .assert.textContains(`html > body > div > div > div:nth-of-type(2) > form > div:nth-of-type(1) > div > p`,`These credentials do not match our records.`)
    });

    it('Unsuccessful Login, right email and wrong password', function(browser) {
        const randomPassword = homepageHelper.randomValidPassword()
        browser
            .waitForElementVisible('body')
            .click(`[href="http://localhost:8080/login"]`)
            .waitForElementVisible('body')
            .setValue(`input[id="email"]`, `TestUser00@testmail.com`)
            .setValue(`input[id="password"]`, randomPassword)
            .click(`button[type="submit"]`)
            .waitForElementVisible('body')
            .assert.visible(`html > body > div > div > div:nth-of-type(2) > form > div:nth-of-type(1) > div > p`)
            .assert.textContains(`html > body > div > div > div:nth-of-type(2) > form > div:nth-of-type(1) > div > p`,`These credentials do not match our records.`)
    });

    it('Unsuccessful Login, right email and wrong password', function(browser) {
        const randomEmail = homepageHelper.randomValidEmail()
        browser
            .waitForElementVisible('body')
            .click(`[href="http://localhost:8080/login"]`)
            .waitForElementVisible('body')
            .setValue(`input[id="email"]`, randomEmail)
            .setValue(`input[id="password"]`, `QAZwsx!@#456`)
            .click(`button[type="submit"]`)
            .waitForElementVisible('body')
            .assert.visible(`html > body > div > div > div:nth-of-type(2) > form > div:nth-of-type(1) > div > p`)
            .assert.textContains(`html > body > div > div > div:nth-of-type(2) > form > div:nth-of-type(1) > div > p`,`These credentials do not match our records.`)
    });

    it('Profile page check', function(browser) {
        const randomName = homepageHelper.randomString(10)
        const randomEmail = homepageHelper.randomValidEmail()
        const randomPassword = homepageHelper.randomValidPassword()
        browser
            .waitForElementVisible('body')
            .click(`[href="http://localhost:8080/register"]`)
            .waitForElementVisible('body')
            .setValue(`input[id="name"]`, randomName)
            .setValue(`input[id="email"]`, randomEmail)
            .setValue(`input[id="password"]`, randomPassword)
            .setValue(`input[id="password_confirmation"]`, randomPassword)
            .click(`button[type="submit"]`)
            .waitForElementVisible('body')
            .assert.visible(`html > body > div > div > div > main > div > div > div > div`)
            .assert.textContains(`html > body > div > div > div > main > div > div > div > div`, `You're logged in!`)

            .assert.visible(`html > body > div > div > div > nav > div:nth-of-type(1) > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > span > button`)
            .assert.textContains(`html > body > div > div > div > nav > div:nth-of-type(1) > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > span > button`, randomName)
            .click(`html > body > div > div > div > nav > div:nth-of-type(1) > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > span > button`)

            .assert.visible(`a[class='block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out']`)
            .assert.textContains(`a[class='block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out']`, `Profile`)
            .assert.visible(`html > body > div:nth-of-type(1) > div > div > nav > div:nth-of-type(1) > div > div:nth-of-type(2) > div > div > div:nth-of-type(3) > div > button`)
            .assert.textContains(`html > body > div:nth-of-type(1) > div > div > nav > div:nth-of-type(1) > div > div:nth-of-type(2) > div > div > div:nth-of-type(3) > div > button`, `Log Out`)
            .click(`a[class='block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out']`)

            .assert.visible(`html > body > div:nth-of-type(1) > div > div > main > div > div > div:nth-of-type(1) > section > header > h2`)
            .assert.textContains(`html > body > div:nth-of-type(1) > div > div > main > div > div > div:nth-of-type(1) > section > header > h2`, `Profile Information`)
            .assert.visible(`html > body > div:nth-of-type(1) > div > div > main > div > div > div:nth-of-type(1) > section > header > p`)
            .assert.textContains(`html > body > div:nth-of-type(1) > div > div > main > div > div > div:nth-of-type(1) > section > header > p`, `Update your account's profile information and email address.`)

            .assert.visible(`label[for='name'] span`)
            .assert.textContains(`label[for='name'] span`, `Name`)
            .assert.visible(`input[id='name']`)
            .getValue(`input[id='name']`, function(result) {
                this.assert.equal(result.value, randomName)
            })

            .assert.visible(`label[for='email'] span`)
            .assert.textContains(`label[for='email'] span`, `Email`)
            .assert.visible(`input[id='email']`)
            .getValue(`input[id='email']`, function(result) {
                this.assert.equal(result.value, randomEmail)
            })

            .assert.visible(`label[for='current_password'] span`)
            .assert.textContains(`label[for='current_password'] span`, `Current Password`)
            .assert.visible(`input[id='current_password']`)

            .assert.visible(`label[for='password'] span`)
            .assert.textContains(`label[for='password'] span`, `New Password`)
            .assert.visible(`input[id='password']`)

            .assert.visible(`label[for='password_confirmation'] span`)
            .assert.textContains(`label[for='password_confirmation'] span`, `Confirm Password`)
            .assert.visible(`input[id='password_confirmation']`)

            .assert.visible(`html > body > div:nth-of-type(1) > div > div > main > div > div > div:nth-of-type(3) > section > header > h2`)
            .assert.textContains(`html > body > div:nth-of-type(1) > div > div > main > div > div > div:nth-of-type(3) > section > header > h2`, `Delete Account`)
            .assert.visible(`html > body > div:nth-of-type(1) > div > div > main > div > div > div:nth-of-type(3) > section > header > p`)
            .assert.textContains(`html > body > div:nth-of-type(1) > div > div > main > div > div > div:nth-of-type(3) > section > header > p`, `Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.`)

            .assert.visible(`button[class='inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150']`)
            .assert.textContains(`button[class='inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150']`, `DELETE ACCOUNT`)

    });

    it('Profile page - change name', function(browser) {
        const randomName = homepageHelper.randomString(10)
        const randomName2 = homepageHelper.randomString(10)
        const randomEmail = homepageHelper.randomValidEmail()
        const randomPassword = homepageHelper.randomValidPassword()
        browser
            .waitForElementVisible('body')
            .click(`[href="http://localhost:8080/register"]`)
            .waitForElementVisible('body')
            .setValue(`input[id="name"]`, randomName)
            .setValue(`input[id="email"]`, randomEmail)
            .setValue(`input[id="password"]`, randomPassword)
            .setValue(`input[id="password_confirmation"]`, randomPassword)
            .click(`button[type="submit"]`)
            .waitForElementVisible('body')
            .assert.visible(`html > body > div > div > div > main > div > div > div > div`)
            .assert.textContains(`html > body > div > div > div > main > div > div > div > div`, `You're logged in!`)

            .assert.visible(`html > body > div > div > div > nav > div:nth-of-type(1) > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > span > button`)
            .assert.textContains(`html > body > div > div > div > nav > div:nth-of-type(1) > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > span > button`, randomName)
            .click(`html > body > div > div > div > nav > div:nth-of-type(1) > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > span > button`)
            .click(`a[class='block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out']`)

            .assert.visible(`input[id='name']`)
            .clearValue(`input[id='name']`)
            .setValue(`input[id="name"]`, randomName2)
            .click(`html > body > div:nth-of-type(1) > div > div > main > div > div > div:nth-of-type(1) > section > form > div:nth-of-type(3) > button`)
            .waitForElementVisible('body')
            .getValue(`input[id='name']`, function(result) {
                this.assert.equal(result.value, randomName2)
            })

    });

    it('Profile page - change email', function(browser) {
        const randomName = homepageHelper.randomString(10)
        const randomEmail = homepageHelper.randomValidEmail()
        const randomEmail2 = homepageHelper.randomValidEmail()
        const randomPassword = homepageHelper.randomValidPassword()
        browser
            .waitForElementVisible('body')
            .click(`[href="http://localhost:8080/register"]`)
            .waitForElementVisible('body')
            .setValue(`input[id="name"]`, randomName)
            .setValue(`input[id="email"]`, randomEmail)
            .setValue(`input[id="password"]`, randomPassword)
            .setValue(`input[id="password_confirmation"]`, randomPassword)
            .click(`button[type="submit"]`)
            .waitForElementVisible('body')
            .assert.visible(`html > body > div > div > div > main > div > div > div > div`)
            .assert.textContains(`html > body > div > div > div > main > div > div > div > div`, `You're logged in!`)

            .assert.visible(`html > body > div > div > div > nav > div:nth-of-type(1) > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > span > button`)
            .assert.textContains(`html > body > div > div > div > nav > div:nth-of-type(1) > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > span > button`, randomName)
            .click(`html > body > div > div > div > nav > div:nth-of-type(1) > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > span > button`)
            .click(`a[class='block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out']`)

            .assert.visible(`input[id='email']`)
            .clearValue(`input[id='email']`)
            .setValue(`input[id="email"]`, randomEmail2)
            .click(`html > body > div:nth-of-type(1) > div > div > main > div > div > div:nth-of-type(1) > section > form > div:nth-of-type(3) > button`)
            .waitForElementVisible('body')
            .getValue(`input[id='email']`, function(result) {
                this.assert.equal(result.value, randomEmail2)
            })

    });

    it('Profile page - change password', function(browser) {
        const randomName = homepageHelper.randomString(10)
        const randomEmail = homepageHelper.randomValidEmail()
        const randomPassword = homepageHelper.randomValidPassword()
        const randomPassword2 = homepageHelper.randomValidPassword()
        browser
            .waitForElementVisible('body')
            .click(`[href="http://localhost:8080/register"]`)
            .waitForElementVisible('body')
            .setValue(`input[id="name"]`, randomName)
            .setValue(`input[id="email"]`, randomEmail)
            .setValue(`input[id="password"]`, randomPassword)
            .setValue(`input[id="password_confirmation"]`, randomPassword)
            .click(`button[type="submit"]`)
            .waitForElementVisible('body')
            .assert.visible(`html > body > div > div > div > main > div > div > div > div`)
            .assert.textContains(`html > body > div > div > div > main > div > div > div > div`, `You're logged in!`)

            .assert.visible(`html > body > div > div > div > nav > div:nth-of-type(1) > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > span > button`)
            .assert.textContains(`html > body > div > div > div > nav > div:nth-of-type(1) > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > span > button`, randomName)
            .click(`html > body > div > div > div > nav > div:nth-of-type(1) > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > span > button`)
            .click(`a[class='block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out']`)

            .assert.visible(`input[id^='current']`)
            .clearValue(`input[id^='current']`)
            .setValue(`input[id^='current']`, randomPassword)

            .assert.visible(`input[id^='password']`)
            .clearValue(`input[id^='password']`)
            .setValue(`input[id^='password']`, randomPassword2)

            .assert.visible(`input[id$='confirmation']`)
            .clearValue(`input[id$='confirmation']`)
            .setValue(`input[id$='confirmation']`, randomPassword2)

            .click(`html > body > div:nth-of-type(1) > div > div > main > div > div > div:nth-of-type(2) > section > form > div:nth-of-type(4) > button`)
    });

    it('Profile page - delete account', function(browser) {
        const randomName = homepageHelper.randomString(10)
        const randomEmail = homepageHelper.randomValidEmail()
        const randomPassword = homepageHelper.randomValidPassword()
        browser
            .waitForElementVisible('body')
            .click(`[href="http://localhost:8080/register"]`)
            .waitForElementVisible('body')
            .setValue(`input[id="name"]`, randomName)
            .setValue(`input[id="email"]`, randomEmail)
            .setValue(`input[id="password"]`, randomPassword)
            .setValue(`input[id="password_confirmation"]`, randomPassword)
            .click(`button[type="submit"]`)
            .waitForElementVisible('body')
            .assert.visible(`html > body > div > div > div > main > div > div > div > div`)
            .assert.textContains(`html > body > div > div > div > main > div > div > div > div`, `You're logged in!`)

            .assert.visible(`html > body > div > div > div > nav > div:nth-of-type(1) > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > span > button`)
            .assert.textContains(`html > body > div > div > div > nav > div:nth-of-type(1) > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > span > button`, randomName)
            .click(`html > body > div > div > div > nav > div:nth-of-type(1) > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > span > button`)
            .click(`a[class='block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out']`)

            .click(`button[class='inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150']`)

            .assert.visible(`html > body > div:nth-of-type(2) > div:nth-of-type(2) > div > div:nth-of-type(1) > input`)
            .setValue(`html > body > div:nth-of-type(2) > div:nth-of-type(2) > div > div:nth-of-type(1) > input`, randomPassword)
            .click(`html > body > div:nth-of-type(2) > div:nth-of-type(2) > div > div:nth-of-type(2) > button:nth-of-type(2)`)
            .waitForElementVisible('body')
            .assert.visible(`html > body > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > a:nth-of-type(1)`)

    });


    afterEach(browser => browser.end());
});