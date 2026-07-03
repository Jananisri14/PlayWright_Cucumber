import { Before,After, Status } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { CustomWorld } from "./world";
Before(async function(this:CustomWorld){
    this.browser=await chromium.launch({headless:true});
    this.context=await this.browser.newContext();
    this.page=await this.context.newPage();
    
})
After(async function ({pickle,result}){
    console.log(result?.status);
    if(result?.status==Status.FAILED){
        const img=await this.page.screenshot({path:`./test-results/screenshots/${pickle.name}.png`,type:"png"});
        await this.attach(img,"img/png");
    }
    await this.page.close();
    await this.context.close();

    
})
