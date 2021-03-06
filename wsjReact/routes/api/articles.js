// const axios = require("axios");
const router = require("express").Router();
const articlesController = require("../../contollers/articlesController");
// var cheerio = require("cheerio");

router.route("/")
    .get(articlesController.findAll)
    .post(articlesController.create)

router.route("/:id")
    .get(articlesController.findById)
    .put(articlesController.update)
    .delete(articlesController.remove)

module.exports = router;