const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
app.use(cors());

//for post method
app.use(express.json());

app.use("/api", routes);

//Route for Home
app.get("/", (req, res) => {
    res.send("MONGO CRUD");
});

app.listen(4000, () => console.log("Server listenig on 4000"));
