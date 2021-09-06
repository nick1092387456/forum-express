const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

//新增一個template叫做handlebars的引擎，並建立handlebars()來使用它，將參數帶入default main的樣板
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
//設定view engine，使用handlebars
app.set('view engine', 'handlebars')

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const router = require('./routes')
router(app)

module.exports = app
