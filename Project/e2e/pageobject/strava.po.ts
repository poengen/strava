import {} from "jasmine";
import {
  element,
  by,
  browser,
  promise,
  ExpectedConditions,
  ProtractorExpectedConditions,
  ElementFinder
} from "protractor";

export class StravaPage {
  usernameField(): ElementFinder {
    return element(by.id("email"));
  }

  passwordField(): ElementFinder {
    return element(by.id("password"));
  }

  loginButton(): ElementFinder {
    return element(by.id("login-button"));
  }

  activityName(): ElementFinder {
    return element(by.css(".activity-name"));
  }

  utilitySprite(): ElementFinder {
    return element(by.css(".utility"));
  }

  deleteButton(nr: string): ElementFinder {
    return element(by.css("a[href=/activities/" + nr + "]"));
  }
}
