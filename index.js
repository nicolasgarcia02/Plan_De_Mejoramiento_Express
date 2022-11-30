const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use('/', require('./router/RutasWeb'));
app.use('/index', require('./router/index'));

app.use('/Ejercicio_1', require('./router/RutasWeb'));
app.use('/Ejercicio_1', require('./router/Ejercicio_1'));

app.use((req, res, next) => {
    res.status(404).render('error')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})