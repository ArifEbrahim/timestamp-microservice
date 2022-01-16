const { DateTime } = require("luxon");
const express = require("express");
const app = express();

app.get("/api/:date", (req, res) => {
    const userDate = req.params.date;
    let dateResponse = {};
    if (userDate.length === 13) {
        const dt = DateTime.fromMillis(Number(userDate));
        dateResponse = {
            unix: Number(userDate),
            utc: dt.toFormat("EEE, dd MMM yyyy HH:mm:ss ZZZZ"),
        };
    } else {
        const dt = DateTime.fromISO(userDate);
        dateResponse = {
            unix: dt.toMillis(),
            utc: dt.toFormat("EEE, dd MMM yyyy HH:mm:ss ZZZZ"),
        };
    }
    res.json(dateResponse);
});

module.exports = app;
