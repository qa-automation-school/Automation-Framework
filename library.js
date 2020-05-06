// How to handle alerts using Selenium JS

//Click the link to activate the alert
await driver.findElement(By.linkText('See an example alert')).click();

// Wait for the alert to be displayed
await driver.wait(until.alertIsPresent());

// Store the alert in a variable
let alert = await driver.switchTo().alert();

//Store the alert text in a variable
let alertText = await alert.getText();

//Press the OK button
await alert.accept();

// Note: To use await, the above code should be inside an async function

// ============================ How to handle Prompts.  ====================================================================

//Click the link to activate the alert
driver.findElement(By.linkText("See a sample prompt")).click();

//Wait for the alert to be displayed and store it in a variable
Alert alert = wait.until(ExpectedConditions.alertIsPresent());

//Type your message
alert.sendKeys("Selenium");

//Press the OK button
alert.accept();

// ============================ How to handle Confirm Box.  ====================================================================

//Click the link to activate the alert
driver.findElement(By.linkText("See a sample confirm")).click();

//Wait for the alert to be displayed
wait.until(ExpectedConditions.alertIsPresent());

//Store the alert in a variable
Alert alert = driver.switchTo().alert();

//Store the alert in a variable for reuse
String text = alert.getText();

//Press the Cancel button
alert.dismiss();

// ============================ How to set window size.  ====================================================================

await driver.manage().window().setRect({ width: 1024, height: 768 });

// ============================ How to maximize window size.  ====================================================================

await driver.manage().window().maximize();

// ============================ How to set window size to Fullscreen.  ====================================================================

await driver.manage().window().fullscreen();

// ============================ How to change Page Loading Strategy - none, normal and eager.  ====================================================================

const {Builder, Capabilities} = require('selenium-webdriver');
const caps = new Capabilities();
caps.setPageLoadStrategy("normal"); // change here to "none", "eager" or "normal" depending on your neeeds.
(async function example() {
    let driver = await new Builder().
                withCapabilities(caps).
                forBrowser('chrome').
                build();
    try {
        // Navigate to Url
        await driver.get('https://www.google.com');
    }
    finally {
        await driver.quit();
    }
})();

// ============================ How to Get Active Element.  ====================================================================


  const {Builder, By} = require('selenium-webdriver');

  (async function example() {
      let driver = await new Builder().forBrowser('chrome').build();
      await driver.get('https://www.google.com');
      await  driver.findElement(By.css('[name="q"]')).sendKeys("webElement");

      // Get attribute of current active element
      let attr = await driver.switchTo().activeElement().getAttribute("title");
      console.log(`${attr}`)
  })();
  
  // ============================ How to click Enter button - Key Down.  ====================================================================

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to Url
    await driver.get('https://www.google.com');

    // Enter text "webdriver" and perform keyboard action "Enter"
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.ENTER); // change the button name depending on your needs.

    // Perform action ctrl + A (modifier CONTROL + Alphabet A) to select the page
    await driver.actions().keyDown(Key.CONTROL).sendKeys('a').perform();
  }
  finally {
    await driver.quit();
  }
})();

  // ============================ How to clear the element from existing data. for example textbox, alert and more.  ====================================================================

const {Builder, By} = require('selenium-webdriver');
(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Navigate to Url
    await driver.get('https://www.google.com');
    // Store 'SearchInput' element
    let searchInput = driver.findElement(By.name('q'));
    await searchInput.sendKeys("selenium");
    // Clears the entered text
    await searchInput.clear();
  }
  finally {
    await driver.quit();
  }
})();

