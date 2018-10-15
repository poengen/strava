// activityID = ****
// https://www.strava.com/api/v3/activities/{id}/kudos

const FETCH: any = require("isomorphic-fetch");

console.log("Hello World!");

describe("Test Strava API", () => {
  //  beforeEach((done) => {
  //      console.log("Executes once before running tests");
  //      done();
  //  });

  it("Should return status code 200", done => {
    console.log("Hei Verden");

    FETCH("https://www.strava.com/api/v3/activities/1695675041/kudos", {
      method: "GET",
      headers: {
        authorization: "****"
      }
    })
      .then(response => {
        expect(response.status).toEqual(200);
        return response.json();
      })
      .then(res => {
        console.log(res[0].username);
        // console.log(res);
        done();
      });
  });
});
