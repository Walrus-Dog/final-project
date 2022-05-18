const express = require("express");
const router = express.Router();
const port = process.env.PORT || 3001;

router.get("/", (req, res) => {
    res.json({ 
        "All Products": `http://localhost:${port}/api/instock`,
        "Coming Soon": `http://localhost:${port}/api/comingsoon`,
        "Customer Stories": `http://localhost:${port}/api/stories`
    })
});

router.use("/instock", require("./api/isRoute"));
router.use("/comingsoon", require("./api/csRoute"));
router.use("/stories", require("./api/custRoute"));
// router.use("/instockproducts", require("./api/isRoute"));

module.exports = router;