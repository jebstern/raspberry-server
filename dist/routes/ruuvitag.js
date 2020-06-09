"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ruuvitag_1 = __importDefault(require("../models/ruuvitag"));
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router({
    strict: true,
});
exports.router.get("tags", async (req, res) => {
    const tag1 = "6f1e83bf46674f0d813ce59bdc8ca928";
    const tag2 = "fc60f47c5bd74baca93b662269ee2dcb";
    let tags = [];
    await ruuvitag_1.default.findOne({ id: tag1 }, { projection: { _id: 0, __v: 0 }, sort: { timestamp: 1 } }, (err, tag) => { })
        .then((ruuvitag) => tags.push(ruuvitag))
        .catch((e) => {
        console.log(e);
    });
    await ruuvitag_1.default.findOne({ id: tag2 }, { projection: { _id: 0, __v: 0 }, sort: { timestamp: 1 } }, (err, tag) => { })
        .then((ruuvitag) => tags.push(ruuvitag))
        .catch((e) => {
        console.log(e);
    });
    res.status(200).send(tags);
});
