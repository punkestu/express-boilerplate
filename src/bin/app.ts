import Express from "express";
import WebRoute from "../routes/web";
import APIRouteV1 from "../routes/api/v1";
import StaticRoute from "../routes/static";
import {Liquid} from "liquidjs";
import path from 'path';
const __dirname = path.resolve();

const app = Express();
const engine = new Liquid();

// region: view engine
app.engine('liquid', engine.express());
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'liquid');
// region
// region: default middleware
app.use(Express.json());
// region
// region: routes
app.use("/", WebRoute);
app.use("/api/v1/", APIRouteV1);
app.use("/static", StaticRoute);
app.use("/public", Express.static(path.join(__dirname, "/public")));
// region

export default app;