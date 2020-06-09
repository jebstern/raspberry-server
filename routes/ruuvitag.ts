import Ruuvitag, { RuuvitagModel } from '../models/ruuvitag'
import express, { Request, Response } from 'express'

export const router = express.Router({
  strict: true,
})

router.get('/tags', async (req: Request, res: Response) => {
  const mac1 = 'C9:70:90:64:79:A6'
  const mac2 = 'EE:1A:89:DC:3E:BB'
  const mac3 = 'EA:E5:E3:30:84:CE'
  const tags = [] as RuuvitagModel[]

  await Ruuvitag.findOne({ mac: mac1 }, '-_id: -__v')
    .sort({ timestamp: -1 })
    .exec()
    .then((ruuvitag: RuuvitagModel) => tags.push(ruuvitag))
    .catch((e) => {
      console.log(e)
    })
  await Ruuvitag.findOne({ mac: mac2 }, '-_id: -__v')
    .sort({ timestamp: -1 })
    .exec()
    .then((ruuvitag: RuuvitagModel) => tags.push(ruuvitag))
    .catch((e) => {
      console.log(e)
    })
  await Ruuvitag.findOne({ mac: mac3 }, '-_id: -__v')
    .sort({ timestamp: -1 })
    .exec()
    .then((ruuvitag: RuuvitagModel) => tags.push(ruuvitag))
    .catch((e) => {
      console.log(e)
    })
  res.status(200).send(tags)
})
