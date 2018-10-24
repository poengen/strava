export class RequestData {
  method = "POST";
  body = {
    payment: {
      operation: "Purchase",
      intent: "Authorization",
      currency: "NOK",
      prices: [
        {
          type: "Vipps",
          amount: 3300,
          vatAmount: 0
        }
      ],
      description: "Catapults by ACME",
      payerReference: "AB1535096944",
      userAgent: "Mozilla/5.0 weeeeee",
      language: "nb-NO",
      urls: {
        completeUrl: "https://admin.stage.payex.com/psp/login",
        cancelUrl: "http://test-dummy.net/payment-canceled",
        callbackUrl: "http://fakeservices.psp.stage.utvnet.net/fakecallback"
      },
      payeeInfo: {
        payeeId: "58221705-e126-48f4-a3e0-316f5580e1a4",
        payeeReference:
          "Testauto" + Date.now() + Math.floor(Math.random() * 1000) + 1,
        payeeName: "Acme Corp",
        productCategory: "A123"
      },
      prefillInfo: {
        msisdn: "+4799999999"
      }
    }
  };
  headers = {
    "Content-type": "application/json; charset=utf-8",
    Authorization:
      "Bearer 450af5ada200d15a7d9da15a4b791925f3939ee679a72da6686ae43c2c7d4db0"
  };
}
