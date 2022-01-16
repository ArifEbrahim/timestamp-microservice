const { DateTime } = require("luxon");
const express = require("express");
const app = express();

app.get("/api/:date", (req, res) => {
    const dt = DateTime.fromISO(req.params.date);
    const dateResponse = {
        unix: dt.toMillis(),
        utc: dt.toFormat('EEE, dd MMM yyyy HH:mm:ss ZZZZ')
    }
    res.json(dateResponse);
});

module.exports = app;
