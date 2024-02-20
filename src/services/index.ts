import {ExampleService} from "./example-service";

export class RootService {
    public readonly example = new ExampleService();

    public static readonly I = new RootService();
}