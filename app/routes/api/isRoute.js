const express = require("express");
const router = express.Router();

const dao = require("../../daos/api/isDao");

router.get("/", (req, res) => {
    dao.findAll(res, "InStock")
});

router.get("/count", (req, res) => {
    dao.countAll(res, "InStock")
});

router.get("/:id", (req, res) => {
    dao.findById(res, "InStock", req.params.id)
});

router.post("/create", (req, res) => {
    dao.create(req, res)
});

router.patch("/update/:id", (req, res) => {
    dao.update(req, res)
});

module.exports = router;