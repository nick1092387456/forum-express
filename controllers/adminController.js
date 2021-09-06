const adminController = {
  getRestaurants: (req, res) => {
    //這裡決定要去view裡面抓哪個handlebars
    return res.render('admin/restaurants')
  },
}

module.exports = adminController
