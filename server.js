const express = require('express')
const app = express()
const uploadUser = require('./middlewares/ImageUpload')

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    nome: 'teste',
    desc: 'tetete'
  })
})

app.post('/image', (req, res) => {
  // if(req.file) {
  //   return res.json({
  //     erro: false,
  //     message: "upload realizado com sucesso"
  //   })
  // }

  // return res.status(400).json({
  //   erro: true,
  //   message: "Erro: Upload não realizado com sucesso"
  // })

  res.json(req.body)

})

app.listen(8080)