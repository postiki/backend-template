import express from 'express';
import AuthMiddleware from "../middlewares/AuthMiddleware";
import {ExampleController} from "./example-controller";

export class RootController {
    public readonly router = express.Router();

    constructor() {
        this.router.use('/example', AuthMiddleware, new ExampleController().router)
    }
}