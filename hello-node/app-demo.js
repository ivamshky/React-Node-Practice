// const logger = require("./logger");

const displayModule = require("./moduledetails");
const fs = require("fs");

displayModule.displayModuleDetails();

var files_sync = fs.readdirSync(__dirname);

// it'll fail
fs.readdir("./somefolder/", (err, files) => {
    if (err) console.error(err);
    else console.log("Async", files);
});

//It'll not
fs.readdir(__dirname, (err, files) => {
    if (err) console.error(err);
    else console.log("Async", files);
});

// setTimeout(() => console.log("Sync ", files_sync), 2000);

console.log("Sync ", files_sync);
