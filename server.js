const express = require("express");

const helmet = require("helmet");
const cors = require("cors");

const server = express().use(helmet()).use(cors()).use(express.json());

const router = require("./app/routes/router");
// server.set("view engine", "react");
server.use("/api", router);

const port = process.env.PORT || 3001;
server.listen(port, () => {
    console.log(`Port: ${port}. It's alive!`)
});