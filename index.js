// async-await.js
const { Builder, By, Key, promise, until } = require('selenium-webdriver');

// disable promise manager
promise.USE_PROMISE_MANAGER = false;

// wrap in async function
async function test() {
  let driver;

  // use try-catch-finally
  try {
    // we need to `await` for the promise to finish
    driver = await new Builder().forBrowser('chrome').build();

    // Navigate to website
    await driver.get('http://automationpractice.com/index.php');

    // Getting the title of the webpage and store it to var. !NOTE: We can use the stored value to compare with expected result.!
    const title = await driver.getTitle();
    console.log('getTitle:', title);

    // Find link "Women" and then click it
    await driver.findElement(By.xpath('//a[@title="Women"]')).click();

    // Wait until see the title of the new opened page
    await driver.wait(until.titleContains('Women - My Store'), 5000);

    // Wait until the element is located
    await driver.wait(until.elementLocated(By.xpath('//i[@class="icon-th-list"]')), 5000);

    // `await` can be used inside `console.log` We wait for the page to open and then check its title.
    console.log('getTitle:', await driver.getTitle());

    // Click on View Button - to change view from list to grid.
    await driver.findElement(By.xpath('//i[@class="icon-th-list"]')).click();

    // Wait for the product and Click on the first product in the list.
    await driver.wait(until.elementLocated(By.xpath('(//a[@class="product-name"])[1]')), 5000);
    await driver.findElement(By.xpath('(//a[@class="product-name"])[1]')).click();

    // Hardcoded wait to make a pause after the execution is done.
    await driver.sleep(10000);


  } catch (error) {
    // when a promise is rejected
    console.error(error);
  } finally {
    // executes after `try` or `catch`
    await driver.quit();
  }
}

// call async function
test();