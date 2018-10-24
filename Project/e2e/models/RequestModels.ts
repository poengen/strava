export class CreateRequestModel {
  public method: string;
  public body: BodyRequestModel;
  public headers: Record<string, string>;
}

export class BodyRequestModel {
  public name: string;
  public type: string;
  public start_date_local: string;
  public elapsed_time: number;
}
