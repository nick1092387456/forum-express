const restController = require('../controllers/restController.js')
const adminController = require('../controllers/adminController.js')
const userController = require('../controllers/userController.js')

function router(app, passport) {
  //如果使用者訪問首頁，就導向/restaurants頁面
  app.get('/', (req, res) => {
    res.redirect('/restaurants')
  })
  //進入restaurants頁面後再轉交給restController輸出畫面
  app.get('/restaurants', restController.getRestaurants)

  app.get('/admin', (req, res) => {
    res.redirect('/admin/restaurants')
  })
  app.get('/admin/restaurants', adminController.getRestaurants)

  app.get('/signup', userController.signUpPage)
  app.post('/signup', userController.signUp)

  app.get('/signin', userController.signInPage)
  app.post(
    '/signin',
    passport.authenticate('local', {
      failureRedirect: '/signin',
      failureFlash: true,
    }),
    userController.signIn
  )
  app.get('/logout', userController.logout)
}

module.exports = router
