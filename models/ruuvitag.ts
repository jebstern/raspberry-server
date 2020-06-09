import mongoose, { Schema, Document } from 'mongoose'

export interface RuuvitagModel extends Document {
  id: string
  name: string
  dataFormat: number
  rssi: number
  temperature: number
  humidity: number
  pressure: number
  accelerationX: number
  accelerationY: number
  accelerationZ: number
  battery: number
  txPower: number
  movementCounter: number
  measurementSequenceNumber: number
  mac: string
  timestamp: number
}

const RuuvitagSchema: Schema = new Schema({
  id: {
    type: String,
  },
  name: {
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
})

export default mongoose.model<RuuvitagModel>('ruuvitag', RuuvitagSchema)
