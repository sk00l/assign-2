const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const studentsRouter = require('./students')

const app = express()

dotenv.config()
app.use(express.json())
app.use('/', studentsRouter)

mongoose
  .connect(
    'mongodb+srv://saurav:saurav@cluster0.0vlel7d.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )

  .then((res) => {
    console.log('connected')
  })
  .catch((err) => console.log('err', err))

app.listen(3000, () => {
  console.log('listening at port 3000')
})
