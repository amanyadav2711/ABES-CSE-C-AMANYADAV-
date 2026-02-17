const fs = require("fs").promises;

async function readfile1() {
    try {
        const data = await fs.readfile("myfile.txt", "utf8");
        console.log("file content:", data);

    }
    catch (err) {
        console.log("error reading file:", err);
    }
}
readfile1();

//or with util.promisify (node.js 8.0.0+)
const { promisify } = require("util");
const readfilleAsync = promisify(require("fs").readfile);

async function readwithpromisify() {
    try {
        const data=await readfilleAsync("myfile.txt","utf8");
        console.log(data);
    }
    catch(err)
    {
        console.error(err);
    }

    }
    readwithpromisify();


