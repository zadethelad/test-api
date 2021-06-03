const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const api = require("./api");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use("/api", api);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`🚀 Listening on port ${port}`);
});
