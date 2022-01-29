const { DateTime } = require("luxon");
const express = require("express");
const app = express();

app.get("/api/:date", (req, res) => {
    const userDate = req.params.date;
    let dateResponse = {};
    const dt = (userDate.length === 13 ? DateTime.fromMillis(Number(userDate)) : DateTime.fromISO(userDate))
    if(!dt.isValid){
        dateResponse = { error: "Invalid Date" }
    } else {
        dateResponse = {
            unix: dt.toMillis(),
            utc: dt.toFormat("EEE, dd MMM yyyy HH:mm:ss ZZZZ"),
        };
    }
    res.json(dateResponse);
});

module.exports = app;
