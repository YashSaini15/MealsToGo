/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { geocodeRequest } = require("./geocode/index");
const { onRequest } = require("firebase-functions/v2/https");

exports.geocode = onRequest((request, response) => {
  geocodeRequest(request, response);
});
