import { Passwords } from "../data/passwords";
var pwd: Passwords = new Passwords();

export class CreateActivityRequestData {
  method = "POST";
  body = {
    name: "Postman test activity2",
    type: "Run",
    start_date_local: "2018-10-16T18:25:43-05:00",
    elapsed_time: 56
  };
  headers = {
    Accept: "application/json",
    Authorization: "Bearer 4255cdcba2f732537f720275fb24ab8afb77765b",
    "Content-Type": "application / json"
  };
}
