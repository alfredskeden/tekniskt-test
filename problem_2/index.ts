import { Builder, By, WebDriver, WebElement } from 'selenium-webdriver';
const getDriver = (forBrowser: string): WebDriver => {
  return new Builder().forBrowser(forBrowser).build();
}

const checkForLinks = async (webpage: string, browser: string): Promise<void> => {
  let driver: WebDriver = getDriver(browser);
  try {
      /** navigate to webpage string */
      await driver.get(webpage);
      const elements: Array<WebElement> = await driver.findElements(By.tagName('a'));
      elements.forEach((webElement: WebElement) => {
        /** getAttribute on WebElement is a promise so wait for it then console.log each link */
        webElement.getAttribute('href').then((hrefString: string) => {
          console.log(hrefString);
        });
      });
  } finally {
    /** Quits the driver */
    await driver.quit();
  }
};

/** Url to check and what browser to use, chrome, can change to firefox etc */
checkForLinks('https://www.google.com/', 'chrome');