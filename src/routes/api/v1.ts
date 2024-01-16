import {Router} from "express";
import ExampleApi from "../../apps/example_api/route";

const route = Router();
route.use("/example", ExampleApi);

export default route;