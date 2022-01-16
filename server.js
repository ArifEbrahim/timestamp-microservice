const express = require("express");
const app = express();

app.get("/api/:date", (req, res) => {
    res.json({unix: '1642291200'})
});

module.exports = app;
