// path: ./src/api/restaurant/controllers/restaurant.js

const { createCoreController } = require("@strapi/strapi").factories;
const https = require("https");
const PaytmChecksum = require("paytmchecksum");
// const { env } = require("process");

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async exampleAction(ctx) {
    var paytmParams = {};

    paytmParams.body = {
      requestType: "Payment",
      mid: process.env.MID,
      websiteName: "YOUR_WEBSITE_NAME",
      orderId: "SDJKSJKSK",
      callbackUrl: "https://localhost:1337/api/orders/posttransaction",
      txnAmount: {
        value: "1.00",
        currency: "INR",
      },
      userInfo: {
        custId: "CUST_001",
      },
    };

    /*
     * Generate checksum by parameters we have in body
     * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
     */
    let checksum = await PaytmChecksum.generateSignature(
      JSON.stringify(paytmParams.body),
      process.env.M_KEY
    );

    paytmParams.head = {
      signature: checksum,
    };

    var post_data = JSON.stringify(paytmParams);

    const getToken = async () => {
      return new Promise((resolve, reject) => {
        var options = {
          /* for Staging */
          // hostname: "securegw.paytm.in",

          /* for Production */
          hostname: 'securegw.paytm.in',

          port: 443,
          path: `/theia/api/v1/initiateTransaction?mid=${process.env.MID}&orderId=SDJKSJKSK`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": post_data.length,
          },
        };

        var response = "";
        var post_req = https.request(options, function (post_res) {
          post_res.on("data", function (chunk) {
            response += chunk;
          });

          post_res.on("end", function () {
            console.log("Response: ", response);
            resolve(response)
          });
        });

        post_req.write(post_data);
        post_req.end();
      });
    };

    let myResponse = await getToken()
    ctx.body=myResponse
  },
}));
