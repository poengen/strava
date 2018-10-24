import {} from "jasmine";
import {
  element,
  by,
  ElementFinder,
  ElementArrayFinder
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

  athleteName(): ElementFinder {
    return element.all(by.css(".athlete-name")).get(0);
  }

  activityName(): ElementFinder {
    return element(by.css(".activity-name"));
  }

  utilitySprite(): ElementFinder {
    return element(by.css(".utility"));
  }

  deleteButton(): ElementFinder {
    var s: ElementFinder = element.all(by.css(".open-menu")).get(0);
    return s.all(by.tagName("li")).get(1);
  }

  alertMessage(): ElementFinder {
    var s: ElementFinder = element.all(by.css(".alert-warning")).get(0);
    return s.all(by.css(".container")).get(0);
  }
}
