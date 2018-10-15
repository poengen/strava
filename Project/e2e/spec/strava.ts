import {} from "jasmine";
import { browser, element } from "protractor";
import { Passwords } from "../data/passwords";
import { StravaPage } from "../pageobject/strava.po";

describe("Should run all the tests", () => {
  var data: Passwords = new Passwords();
  var page: StravaPage = new StravaPage();

  beforeAll(async () => {
    console.log("Run strava.ts");
  });

  it("Navigate to strava.com", async done => {
    console.log("hello world.");
    await browser.waitForAngularEnabled(false);
    await browser.driver.get("https://www.strava.com/login");
    await browser.sleep(5000);
    done();
  });

  it("login to strava.com", async done => {
    await page.usernameField().sendKeys(data.username);
    await page.passwordField().sendKeys(data.password);
    await page.loginButton().click();
    await browser.sleep(10000);
    done();
  });

  afterAll(() => {
    console.log("All tests are done!");
  });
});
