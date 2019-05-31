var db = require("../models");
var moment = require("moment");
moment().format();
module.exports = function(app) {
  // Get all examples
  app.get("/api/bookings/", function(req, res) {
    db.GroupFinder.findAll({
      where: {
        createdAt: {
          $gte: moment()
            .subtract(8, "days")
            .toDate()
        }
      }
    }).then(function(dbBook) {
      res.json(dbBook);
    });
  });
  //all locations
  app.get("/api/map", function(req, res) {
    db.GroupFinder.findAll({
      attributes: ["location"]
    }).then(function(dbBook) {
      res.json(dbBook);
    });
  });
  app.post("/api/bookings/", function(req, res) {
    db.GroupFinder.create({
      activity: req.body.activity,
      location: req.body.location,
      StartTime: req.body.startTime,
      EndTime: req.body.endTime,
      people: req.body.people
      // comments: req.body.comments
    })
      .then(function(dbentry) {
        console.log(dbentry);
        // We have access to the new todo as an argument inside of the callback function
        res.json(dbentry);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  // Create a new example
  app.post("/api/bookings/category/:category", function(req, res) {
    db.GroupFinder.findAll({
      where: {
        category: req.params.category
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Delete an example by id
  // app.delete("/api/bookings/:id", function(req, res) {
  //   db.book.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
  // app.post("/api/bookings", function(req, res) {
  //   console.log(req.body);
  //   db.book
  //     .create({
  //       activity: req.body.activity,
  //       location: req.body.location,
  //       startTime: req.body.startTime,
  //       endTime: req.body.endTime,
  //       people: req.body.people
  //     })
  //     .then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  // });
  //updating bookings
  app.put("/api/bookings", function(req, res) {
    db.GroupFinder.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};
