class HomeController {

    
  async index(req, res) {
    try {
      res.render("home", {
        title: "Home page",
      });
    } catch (err) {
      console.log(err);
    }
  }

  async about(req, res) {
    try {
      res.render("about", {
        title: "About Us Page",
      });
    } catch (err) {
      console.log(err);
    }
  }

  async contact(req, res) {
    try {
      res.render("contact", {
        title: "Contact Us Page",
      });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new HomeController();
