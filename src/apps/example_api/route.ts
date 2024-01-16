import {getAll} from "./controller";
import {Router} from "express";

const route = Router();
route.get("/", getAll);

export default route;