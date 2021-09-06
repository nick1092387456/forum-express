const express = require('express')
const handlebars = require('express-handlebars')
const db = require('./models') //引入資料庫
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const flash = require('connect-flash')
const session = require('express-session')

//新增一個template叫做handlebars的引擎，並建立handlebars()來使用它，將參數帶入default main的樣板
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
//設定view engine，使用handlebars
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }))
app.use(flash())

app.use((req, res, next) => {
  res.locals.success_messages = req.flash('success_messages')
  res.locals.error_messages = req.flash('error_messages')
  next()
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const router = require('./routes')
router(app)

module.exports = app
