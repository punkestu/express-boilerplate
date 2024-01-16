import {hello, header} from "./controller";
import {Router} from "express";

const route = Router();
route.get("/", hello);
route.get("/header", header);
route.get("/:name", hello);

export default route;