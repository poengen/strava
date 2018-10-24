export class CreateActivityRequestData {
  method = "POST";
  body = {
    name: "Netlight demo test activity",
    type: "Run",
    start_date_local: "2018-10-24T18:25:43-05:00",
    elapsed_time: 56
  };
  headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer 4255cdcba2f732537f720275fb24ab8afb77765b"
  };
}
