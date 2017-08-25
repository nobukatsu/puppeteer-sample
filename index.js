'use strict';

const puppeteer = require('puppeteer');

const TARGET_URL = 'https://github.com';

(async() => {

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto(TARGET_URL);

const result = await page.evaluate(() => {
    return document.querySelector('form').outerHTML;
});

console.log(result);
browser.close();

})();
