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

  // async contact(req, res) {
  //   try {
  //     res.render("contact", {
  //       title: "Contact Us Page",
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

    async blog(req, res) {
    try {
      res.render("blog", {
        title: "Blog",
      });
    } catch (err) {
      console.log(err);
    }
  }

    async singleBlog(req, res) {
    try {
      res.render("blog-single", {
        title: "Blog Page",
      });
    } catch (err) {
      console.log(err);
    }
  }
    async courses(req, res) {
    try {
      res.render("courses", {
        title: "Courses Page",
      });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new HomeController();
