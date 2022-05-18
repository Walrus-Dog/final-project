const express = require("express");
const router = express.Router();

const dao = require("../../daos/api/custDao");

router.get("/", (req, res) => {
    dao.findAll(res, "CustomerStories")
});

router.get("/count", (req, res) => {
    dao.countAll(res, "CustomerStories")
});

router.get("/:id", (req, res) => {
    dao.findById(res, "CustomerStories", req.params.id)
});

router.post("/create", (req, res) => {
    dao.create(req, res)
});

router.patch("/update/:id", (req, res) => {
    dao.update(req, res)
});

module.exports = router;