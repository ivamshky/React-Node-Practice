const EventEmitter = require("events");

class Logger extends EventEmitter {
    log(msg) {
        console.log(msg);

        this.emit("jobdone", { id: 1, data: "Entry done!" });
    }

    log2(message) {
        console.log("log2: ", message);
        this.emit("jobdone", { id: 2, data: "Entry done! 2" });
    }
}

module.exports = Logger;
