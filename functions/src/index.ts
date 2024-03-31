import * as functions from "firebase-functions";

export const helloWorld = functions.https.onRequest((_, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
