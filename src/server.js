const express = require('express')
const path = require('path')
const { allowedNodeEnvironmentFlags } = require('process')

const app = express()

//Definindo a template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

//Habilitando server para receber dados via post (Formulario)
app.use(express.urlencoded({ extended: true }))

//rotas
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo Teste'
    })
})

//404 error (not found)
app.use((req, res) => {
    res.send('Página não encontrada!')
})

//executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))