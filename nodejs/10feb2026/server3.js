const fs = require("fs");
const fileName = "example.txt";

fs.writeFile(fileName, "Hello, this is the first line.\n", (err) => {
  if (err) {
    console.log("Error writing file:", err);
  } else {
    console.log("File written successfully!");
  }
});
fs.appendFile(fileName,"prince sabse bada hero h.\n",(err)=>{
     if (err) {
    console.log("Error writing file:", err);
  } else {
    console.log("File appended successfully!");
  }

});


 
