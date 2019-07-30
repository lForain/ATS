"use strict";
exports.__esModule = true;
var bodyParser = require("body-parser");
var express = require("express");
var config_1 = require("./config");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(config_1["default"].port, function () {
    console.log("Running on " + config_1["default"].port);
});
