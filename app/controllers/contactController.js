class ContactController {
  
  async contact(req, res) {
    try {
      res.render("contact", {
        title: "Contact Us page",
      });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new ContactController();
