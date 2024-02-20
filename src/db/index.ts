import {DataSource} from "typeorm";
import {Example} from "./models/Example";
import {PlantCondition} from "./models/PlantCondition";
import {Room} from "./models/Room";
import {RoomCondition} from "./models/RoomCondition";
import config from "../config";

export const db = new DataSource({
    type: "postgres",
    host: config.dbUrl,
    port: 5432,
    username: "esp32",
    password: "postiki",
    database: "farm",
    synchronize: true,
    logging: ["error"],
    entities: [Example, PlantCondition, Room, RoomCondition],
    subscribers: [],
    migrations: ['src/db/migrations/*.ts'],
    extra: {
        timezone: 'Asia/Tbilisi',
    },
})