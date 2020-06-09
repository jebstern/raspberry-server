"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
//import { on } from "node-ruuvitag";
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = process.env.PORT || 3100;
const routes_1 = require("./routes");
const conn = mongoose_1.default.createConnection("mongodb://localhost/raspberry-server", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
conn.on("error", console.error.bind(console, "MongoDB connection error:"));
conn.once("open", function callback() {
    console.log("Connected to MongoDB");
});
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({ extended: false }));
app.get("/", (req, res) => res.send("Hello World!"));
app.use("/ruuvitag", routes_1.ruuvitagRouter);
app.listen(port, () => console.log(`Raspberry Pi server listening at http://localhost:${port}`));
/*
on("found", (tag) => {
  tag.on("updated", (data) => {
    saveRuuvitagData(data, tag.id);
  });
});

on("warning", (message) => {
  console.error(new Error(message));
});

function saveRuuvitagData(data, id) {
  var ruuvitag = new Ruuvitag(data);
  ruuvitag.id = id
  ruuvitag.timestamp = new Date().getTime()
  ruuvitag.save(function (err) {
    if (err) {
      console.log(err)
    }
  });
}


ruuviTag format:
{
  "dataFormat": 5,
  "rssi": -64,
  "temperature": 17.22,
  "humidity": 67.9375,
  "pressure": 100843,
  "accelerationX": 52,
  "accelerationY": -52,
  "accelerationZ": 1044,
  "battery": 3127,
  "txPower": 4,
  "movementCounter": 206,
  "measurementSequenceNumber": 11353,
  "mac": "C9:70:90:64:79:A6"
}
*/
