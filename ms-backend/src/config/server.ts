import * as bodyParser from "body-parser";
import * as express from "express";
import config from "./config";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(config.port, () => {
    console.log(`Running on ${config.port}`);
});
