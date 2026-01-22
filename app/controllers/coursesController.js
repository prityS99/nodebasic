class CoursesController {
  
  async courses(req, res) {
    try {
      res.render("courses", {
        title: "Courses page",
      });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new CoursesController();


