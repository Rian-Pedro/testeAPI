const express = require('express')
const app = express()
const cors = require('cors')
const uploadUser = require('./middlewares/ImageUpload')

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json({
    nome: 'teste',
    test: "hhhh"
  })
})

app.get('/image', (req, res) => {
  res.sendFile(__dirname + '/img/' + '1678135666867_IMG_20220903_130404_496 (1).jpg')
})

app.post('/image', uploadUser.single('foto'), (req, res) => {
  if(req.file) {
    return res.json({
      erro: false,
      message: "upload realizado com sucesso"
    })
  }

  return res.status(400).json({
    erro: true,
    message: "Erro: Upload não realizado com sucesso"
  })

})

app.listen(8080)