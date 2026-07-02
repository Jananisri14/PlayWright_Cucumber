import { When,Then,Given } from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import { CustomWorld } from "../hooks/world";
Given('user launches to the application', async function (this:CustomWorld) {
   await this.page.goto("https://tutorialsninja.com/demo/");
});
Given('user click on the My account link', async function (this:CustomWorld) {
    await this.page.locator("//span[@class='caret']").click();
  
});

Given('user click on the Login link', async function (this:CustomWorld) {
  await this.page.locator("//a[normalize-space()='Login']").click();
});

Given('user enter the email as {string}', async function (this:CustomWorld,email) {
  await this.page.locator("#input-email").fill(email);
});

Given('user enter the password as {string}', async function (this:CustomWorld,pass) {
  await this.page.locator("#input-password").fill(pass);
});

When('user clicks Login button', async function (this:CustomWorld) {
  await this.page.locator("//input[@value='Login']").click();
});

Then('login should be success', async function (this:CustomWorld) {
 await expect(this.page.locator("//a[@class='list-group-item'][normalize-space()='Logout']")).toBeVisible();
});

Then('login should be fail', async function (this:CustomWorld) {
  await expect(this.page.locator("//div[@class='alert alert-danger alert-dismissible']")).toBeVisible()
});
