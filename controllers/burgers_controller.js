// Routes 
var express = require("express");

// Use router method off of express object to control routes in the application
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
// This is the JS object/data which is getting passed to view engine (in this case, handlebars)
// Handlebars renders html file index.handlebars and rendering the object burgers
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
          };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers", function (req, res) {
    burger.insertOne([
        "burger_name"
    ], [
        req.body.burger_name
    ], function () {
        res.redirect("/");
    });
});

router.put("/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    // console.log("condition", condition);

    burger.updateOne({
        devoured: true
    }, condition, function (data) {
        res.redirect("/");

    });
});

// Export routes for server.js to use.
module.exports = router;