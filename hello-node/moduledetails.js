const path = require("path");

function displayModuleDetails() {
    var dirInfo = path.parse(__dirname);
    var fileInfo = path.parse(__filename);

    setTimeout(
        () =>
            console.log(`
    Path obj ${JSON.stringify(dirInfo)}
    File obj ${JSON.stringify(fileInfo)}
`),
        2000
    );
    console.log("end moduledetail");
}

module.exports.displayModuleDetails = displayModuleDetails;
