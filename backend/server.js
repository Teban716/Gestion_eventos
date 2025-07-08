import express from 'express'
import cors from 'cors';
import EventsRepository from './repositories/events-repository.js'

const app = express()
const port = 3000

let eventsRepository = new EventsRepository()

// Middleware para que express interprete el body de la petición como un objeto json
app.use(cors());

app.use(express.json());

app.get('/events', (req, res) => {
  res.send(eventsRepository.readData())
})

app.post('/events', (req, res) => {
  const event = eventsRepository.create(req.body)
  res.send(event)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
