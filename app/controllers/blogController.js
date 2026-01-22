class BlogController {
  
  async blog(req, res) {
    try {
      res.render("blog", {
        title: "Blog page",
      });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new BlogController();


