export class CreateRequestModel {
  public method: string;
  public body: BodyRequestModel;
  public headers: HeadersRequestModel;
}

export class BodyRequestModel {
  public name: string;
  public type: string;
  public start_date_local: string;
  public elapsed_time: number;
}

export class HeadersRequestModel {
  public accept: string;
  public authorization: string;
  public contentType: string;
}
