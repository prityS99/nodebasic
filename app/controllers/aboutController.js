class AboutController {
  
  async about(req, res) {
    try {
      res.render("about", {
        title: "About page",
      });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new AboutController();


