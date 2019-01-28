
const { extractSheets } = require(".");

const spreadsheetKey = "1vc7wCjNXK39HMEYDkOJRMhQGPJpxMu4MJgTsydyLats";
const credentials = require("./client_id.json");

extractSheets(
  {
    spreadsheetKey
    // credentials
  },
  (err, data) => {
    if (err) {
      console.log("ERROR:", err);
    }
    console.log(JSON.stringify({ err, data }, null, 2));
  }
);