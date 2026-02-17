const fs = require("fs");
const fileName = "example.txt";

fs.unlink(fileName, (err) => {
  if (err) {
    console.log("Error writing file:", err);
  } else {
    console.log("File written successfully!");
  }
});


 
