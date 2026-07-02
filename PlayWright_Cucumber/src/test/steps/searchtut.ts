import { Given,When,Then } from "@cucumber/cucumber";
import { expect, Expect } from "@playwright/test";
import { CustomWorld } from "../hooks/world";
Given('user launches the application', async function (this:CustomWorld) {
  await this.page.goto("https://tutorialsninja.com/demo/");
});

Given('user enter product in searchbox as {string}', async function (this:CustomWorld,product) {
    await this.page.locator("//input[@placeholder='Search']").fill(product);
  
});

When('user clicks Search button', async function (this:CustomWorld) {
  await this.page.locator("//button[@class='btn btn-default btn-lg']").click();
});

Then('product should appear', async function (this:CustomWorld) {
  await expect(this.page.locator("//a[normalize-space()='HP LP3065']")).toBeVisible();
});

Then('product should not appear', async function (this:CustomWorld) {
  await expect(this.page.locator("//p[contains(text(),'There is no product that matches the search criter')]")).toBeVisible();
});