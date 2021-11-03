const request = require("request");
const fs = require("fs");
const args = process.argv.slice(2);
[url, filePath] = args;

console.log(url);

request(url, (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body); // Print the HTML for the Google homepage.
  fs.writeFile(filePath, body, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
  });
});

//last ftn is callback

const content = "Some content!";

///Users/karolinaswislocki/lighthouse/temp2/d3/page-fetcher/index.html
