import { Document } from 'mongoose'

export interface Ruuvitag2 extends Document {
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
