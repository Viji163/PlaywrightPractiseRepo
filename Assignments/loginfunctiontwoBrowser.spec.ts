import {test , chromium,webkit} from "@playwright/test";




test("launch Redbus in Edge", async ({}) => {
 const browser = await chromium.launch({channel:"msedge",headless:false})
 const context = await browser.newContext()
 const page = await context.newPage()
 await page.goto("https://www.redbus.in ")
 
 console.log( await page.title(),"Title of the Page"  );
 console.log(page.url());
 
    
})

test("launch flipkart in Webkit", async ({}) => {

    const browser = await webkit.launch({headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()
     await page.goto("https://www.flipkart.com")
     console.log( await page.title() , "title of the page is displayed sucessfully");
     console.log(page.url);
     
     
    
})