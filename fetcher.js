const request = require("request");
const fs = require("fs");
const args = process.argv.slice(2);
const [url, filePath] = args;

// console.log(url);

request(url, (error, response, body) => {
  if (error) {
    console.error(error.message);
    return;
  }
  // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body); // Print the HTML for the Google homepage.
  fs.writeFile(filePath, body, err => {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
  });
});
