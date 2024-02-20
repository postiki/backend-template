import express from "express";
import cors from "cors";
import {RootController} from "./controllers";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/', new RootController().router);

export default app;