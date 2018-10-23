import {} from "jasmine";
import { browser, element } from "protractor";
import { Passwords } from "../data/passwords";
import { StravaPage } from "../pageobject/strava.po";
import * as fetch from "isomorphic-fetch";

describe("Should run all the tests", () => {
  var data: Passwords = new Passwords();
  var page: StravaPage = new StravaPage();

  beforeAll(async () => {
    console.log("Run strava.ts");
  });

  it("Get Athlete", async done => {
    const res: Response = await fetch("https://www.strava.com/api/v3/athlete", {
      method: "GET",
      headers: {
        Authorization: "Bearer 8d7506269c28c090bca6595da8be1416ebca5851"
      }
    });
    console.log(await res.json());
    done();
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

  it("Go to activities", async done => {
    await browser.driver.get("https://www.strava.com/activities/1923380235");
    await browser.sleep(5000);
    done();
  });

  it("Check activity name", async done => {
    expect(await page.activityName().getText()).toBe("Postman test activity");
    done();
  });

  it("Click utilities", async done => {
    await page.utilitySprite().click();
    await browser.sleep(1000);
    done();
  });

  it("Click utilities", async done => {
    await page.deleteButton("1923380235").click();
    await browser.sleep(5000);
    browser
      .switchTo()
      .alert()
      .accept();
    await browser.sleep(5000);
    done();
  });

  afterAll(() => {
    console.log("All tests are done!");
  });
});
