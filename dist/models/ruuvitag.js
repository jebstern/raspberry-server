"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const RuuvitagSchema = new mongoose_1.Schema({
    id: {
        type: String,
    },
    dataFormat: {
        type: Number,
    },
    rssi: {
        type: Number,
    },
    temperature: {
        type: Number,
    },
    humidity: {
        type: Number,
    },
    pressure: {
        type: Number,
    },
    accelerationX: {
        type: Number,
    },
    accelerationY: {
        type: Number,
    },
    accelerationZ: {
        type: Number,
    },
    battery: {
        type: Number,
    },
    txPower: {
        type: Number,
    },
    movementCounter: {
        type: Number,
    },
    measurementSequenceNumber: {
        type: Number,
    },
    mac: {
        type: String,
    },
    timestamp: {
        type: Number,
    },
});
exports.default = mongoose_1.default.model("ruuvitag", RuuvitagSchema);
