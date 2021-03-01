import { Builder, By, WebDriver, WebElement } from 'selenium-webdriver';

const getDriver = (): WebDriver => {
  return new Builder().forBrowser('chrome').build();
}

const checkForLinks = async (webpage: string): Promise<void> => {
  let driver: WebDriver = getDriver();
  try {
      await driver.get(webpage);
      const elements: Array<WebElement> = await driver.findElements(By.tagName('a'));
      elements.forEach((webElement: WebElement) => {
        webElement.getAttribute('href').then((hrefString: string) => {
          console.log(hrefString);
        });
      });
  } finally {
    await driver.quit();
  }
};

checkForLinks('https://www.google.com/');