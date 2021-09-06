const restController = {
  getRestaurants: (req, res) => {
    //這裡決定要去view裡面抓哪個handlebars
    return res.render('restaurants')
  },
}

module.exports = restController
