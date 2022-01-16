const { DateTime } = require("luxon");
const express = require("express");
const app = express();

app.get("/api/:date", (req, res) => {
    const dt = DateTime.fromISO(req.params.date);
    res.json({ unix: dt.toMillis() });
});

module.exports = app;
