import { CustomWorld } from './../hooks/world';
import { Given,Then,When } from "@cucumber/cucumber";
import {expect} from "@playwright/test";


Given('User navigates to the application', async function (this:CustomWorld) {
    
    await this.page.goto("https://tutorialsninja.com/demo/");
  
});
Given('User click on the My account link', async function (this:CustomWorld) {
  await this.page.locator("//span[normalize-space()='My Account']").click();
});

Given('User click on the Registration link', async function (this:CustomWorld) {
    await this.page.locator("//a[normalize-space()='Register']").click();
  
});

Given('User enter the firstname as {string}', async function (this:CustomWorld,firstname) {
    await this.page.locator("#input-firstname").fill(firstname);
  
});

Given('User enter the lastname as {string}', async function (this:CustomWorld,lastname) {
    await this.page.locator("//input[@id='input-lastname']").fill(lastname);
 
});

Given('User enter the email as {string}', async function (this:CustomWorld,email) {
    await this.page.locator("#input-email").fill(email);
  
});

Given('User enter the telephone as {string}', async function (this:CustomWorld,telephone) {
     await this.page.locator("#input-telephone").fill(telephone);
});
Given('User enter the password as {string}',async function (this:CustomWorld,password) {
  await this.page.locator("#input-password").fill(password)
});

Given('User enter the cpassword as {string}', async function (this:CustomWorld,cpassword) {
    await this.page.locator("#input-confirm").fill(cpassword);
});
Given('User clicks privacy policy checkbox', async function (this:CustomWorld) {
    await this.page.locator("//input[@name='agree']").check();

});

When('User click on the continue button', async function (this:CustomWorld) {
    await this.page.locator("//input[@value='Continue']").click();  
});
Then('Registration should be success'{ timeout: 50000 }, async function (this:CustomWorld) {
    await expect(this.page.getByText('Your Account Has Been Created!')).toBeVisible();
  
});
Then('Registration should be fail', async function (this:CustomWorld) {
  await expect(this.page.locator("//div[@class='alert alert-danger alert-dismissible']")).toBeVisible();
});

