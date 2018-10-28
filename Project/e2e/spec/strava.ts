import {} from "jasmine";
import { browser } from "protractor";
import * as fetch from "isomorphic-fetch";
import { Passwords } from "../data/passwords";
import { EndPoints } from "../data/endpoints";
import { StravaPage } from "../pageobject/strava.po";
import { CreateActivityRequestData } from "../data/CreateActivity";
import { CreateRequestModel } from "../models/RequestModels";
import {
  CreateResponseModel,
  GetAthleteResponseModel
} from "../models/ResponseModels";

describe("Should run all the tests", () => {
  var pwd: Passwords = new Passwords();
  var url: EndPoints = new EndPoints();
  var page: StravaPage = new StravaPage();
  var data: CreateActivityRequestData = new CreateActivityRequestData();
  var model: CreateRequestModel = new CreateRequestModel();
  var resp: CreateResponseModel = new CreateResponseModel();
  var athlete: GetAthleteResponseModel = new GetAthleteResponseModel();

  console.log("blablabla");

  beforeAll(async () => {
    console.log("Run 1_strava.ts");
  });

  it("POST Activity", async done => {
    model = data;
    const resPost: Response = await fetch(url.POSTCreateActivity, {
      method: model.method,
      body: JSON.stringify(model.body),
      headers: model.headers
    });
    resp = await resPost.json();
    done();
  });

  it("Console log activity number", async done => {
    console.log("Activity number = " + resp.id);
    done();
  });

  it("Get Athlete", async done => {
    // var resAth: Response;
    await fetch(url.GETAthlete, {
      method: "GET",
      headers: {
        Authorization: pwd.auth1
      }
    })
      .then(async resAth => {
        athlete = await resAth.json();
      })
      .catch(error => {
        console.log(error);
      });
    // athlete = await resAth.json();
    done();
  });

  it("Navigate to strava.com", async done => {
    await browser.waitForAngularEnabled(false);
    await browser.driver.get("https://www.strava.com/login");
    await browser.sleep(2000);
    done();
  });

  it("login to strava.com", async done => {
    await page.usernameField().sendKeys(pwd.username);
    await page.passwordField().sendKeys(pwd.password);
    await page.loginButton().click();
    await browser.sleep(2000);
    done();
  });

  it("Should check name of athlete", async done => {
    var athleteName: string = await page.athleteName().getText();
    console.log(
      athleteName + " == " + athlete.firstname + " " + athlete.lastname
    );
    expect(athleteName).toBe(athlete.firstname + " " + athlete.lastname);
    await browser.sleep(2000);
    done();
  });

  it("Go to activities", async done => {
    await browser.driver.get("https://www.strava.com/activities/" + resp.id);
    await browser.sleep(2000);
    done();
  });

  it("Check activity name", async done => {
    expect(await page.activityName().getText()).toBe(model.body.name);
    await browser.sleep(2000);
    done();
  });

  it("Click utilities", async done => {
    await page.utilitySprite().click();
    await browser.sleep(2000);
    done();
  });

  it("Click delete", async done => {
    console.log(await page.deleteButton().getText());
    await page.deleteButton().click();
    await browser.sleep(2000);
    done();
  });

  it("Confirm delete", async done => {
    browser
      .switchTo()
      .alert()
      .accept();
    await browser.sleep(2000);
    done();
  });

  it("Check deletion", async done => {
    await browser.driver.get("https://www.strava.com/activities/" + resp.id);
    expect(await page.alertMessage().getText()).toBe(
      "The requested activity could not be found"
    );
    await browser.sleep(5000);
    done();
  });

  afterAll(() => {
    console.log("All tests are done!");
  });
});
