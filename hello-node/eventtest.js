console.log("Events Module");
const EventEmitter = require("events"); //Returns a class

const emitter = new EventEmitter(); //Object of events class

//Register a request
emitter.on("message1", function() {
    console.log("Message Recieved");
});

emitter.on("upload", arg => {
    console.log(arg);
});

emitter.emit("message1");
emitter.emit("upload", { yo: "yo" });

const Logger = require("./logger");

const log = new Logger();
log.on("jobdone", arg => {
    console.log("Logging Done!", arg);
});

log.log("Hasdfs");

log.log2("abcd");
