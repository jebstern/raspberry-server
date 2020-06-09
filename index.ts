export {}
import express from 'express'
import { json, urlencoded } from 'body-parser'
const ruuvi = require('node-ruuvitag')
import mongoose from 'mongoose'
import Ruuvitag from './models/ruuvitag'
const app: express.Application = express()
const port = process.env.PORT || 3100
import { ruuvitagRouter } from './routes'
import { RuuvitagModel } from './models/ruuvitag'
import { Request, Response, NextFunction } from 'express'

mongoose
  .connect('mongodb://localhost/raspberry-server', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res: any) => console.log('Connected to MongoDB'))
  .catch((error) => console.log('MongoDB connection error:' + error))

app.use(json())
app.use(urlencoded({ extended: false }))
const allowCrossDomain = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  next()
}
app.use(allowCrossDomain)
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/ruuvitag', ruuvitagRouter)
app.listen(port, () =>
  console.log(`Raspberry Pi server listening at http://localhost:${port}`)
)

ruuvi.on('found', (tag: any) => {
  tag.on('updated', (data: RuuvitagModel) => {
    saveRuuvitagData(data, tag.id)
  })
})

ruuvi.on('warning', (message: string) => {
  console.error(new Error(message))
})

const saveRuuvitagData = (data: RuuvitagModel, id: string) => {
  data.id = id
  data.timestamp = new Date().getTime()
  if (data.mac === 'C9:70:90:64:79:A6') {
    data.name = 'Balkong'
  } else if (data.mac === 'EE:1A:89:DC:3E:BB') {
    data.name = 'Tv'
  } else {
    data.name = 'Bastu'
  }
  const ruuvitag = new Ruuvitag(data)
  ruuvitag.save(function (err) {
    if (err) console.log(err)
  })
}
