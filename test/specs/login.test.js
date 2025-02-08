import { expect, driver } from '@wdio/globals'
import profilePage from '../pageobjects/profile.page.js'
import loginPage from '../pageobjects/login.page.js'
import homePage from '../pageobjects/home.page.js'


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await homePage.openMenu('profile')
        await loginPage.login('peitester@ebac.com','04091998')
        await homePage.openMenu('profile')
        expect((await profilePage.profileName('chewie peipei')).isDisplayed()).toBeTruthy()

    })
})

