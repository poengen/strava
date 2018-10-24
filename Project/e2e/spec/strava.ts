import {} from "jasmine";
import { browser, element } from "protractor";
import { Passwords } from "../data/passwords";
import { StravaPage } from "../pageobject/strava.po";
import * as fetch from "isomorphic-fetch";
import { EndPoints } from "../data/endpoints";
import { CreateActivityRequestData } from "../data/CreateActivity";
import { CreateRequestModel } from "../models/RequestModels";

describe("Should run all the tests", () => {
  var data: Passwords = new Passwords();
  var page: StravaPage = new StravaPage();
  var url: EndPoints = new EndPoints();
  var reqmod: CreateRequestModel = new CreateRequestModel();
  var reqdat: CreateActivityRequestData = new CreateActivityRequestData();

  beforeAll(async () => {
    console.log("Run strava.ts");
  });

  it("Get Athlete", async done => {
    const res: Response = await fetch(url.GETAthlete, {
      method: "GET",
      headers: {
        Authorization: data.auth1
      }
    });
    console.log(await res.json());
    done();
  });

  it("POST Activity", async done => {
    reqmod = reqdat;
    const resPost: Response = await fetch(url.POSTCreateActivity, {
      method: reqdat.method,
      body: JSON.stringify(reqdat.body),
      headers: reqdat.headers
    });
    console.log(await resPost.json());
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

  afterAll(() => {
    console.log("All tests are done!");
  });
});
