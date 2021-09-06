const db = require('../models')
const Restaurant = db.Restaurant

//對應至router/index
const adminController = {
  //這裡決定要去view裡面抓哪個handlebars
  getRestaurants: (req, res) => {
    return Restaurant.findAll({ raw: true }).then((restaurants) => {
      return res.render('admin/restaurants', { restaurants: restaurants })
    })
  },
}

module.exports = adminController
