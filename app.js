const express = require('express')
const { engine } = require('express-handlebars')
const PORT = 3000
const app = express()
const routes = require('./routes')

app.engine('hbs', engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(routes)

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})