import express, { Request, Response } from 'express';
import {RootService} from "../services";

export class ExampleController {
    public readonly router = express.Router();

    constructor() {
        this.router.post('/createSomething', this.createSomething);
        }
    private async createSomething(req: Request, res: Response): Promise<void> {
        try {
            const userService = RootService.I.example.exampleMethod()

            res.status(201).send(userService);
        } catch (e:any) {
            res.status(500).send(e.message);
        }
    }
}
