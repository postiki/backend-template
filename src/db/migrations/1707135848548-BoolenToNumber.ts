import { MigrationInterface, QueryRunner } from "typeorm";

export class BoolenToNumber1707135848548 implements MigrationInterface {
    name = 'BoolenToNumber1707135848548'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Для room_condition
        await queryRunner.query(`ALTER TABLE "room_condition" ADD "tempLightOn" double precision`);
        await queryRunner.query(`UPDATE "room_condition" SET "tempLightOn" = CASE WHEN "lightOn" = true THEN 500 ELSE 0 END`);
        await queryRunner.query(`ALTER TABLE "room_condition" DROP COLUMN "lightOn"`);
        await queryRunner.query(`ALTER TABLE "room_condition" RENAME COLUMN "tempLightOn" TO "lightOn"`);

        // Для room
        await queryRunner.query(`ALTER TABLE "room" ADD "tempLightOn" double precision`);
        await queryRunner.query(`UPDATE "room" SET "tempLightOn" = CASE WHEN "lightOn" = true THEN 500 ELSE 0 END`);
        await queryRunner.query(`ALTER TABLE "room" DROP COLUMN "lightOn"`);
        await queryRunner.query(`ALTER TABLE "room" RENAME COLUMN "tempLightOn" TO "lightOn"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Возвращение к boolean для room_condition
        await queryRunner.query(`ALTER TABLE "room_condition" ADD "tempLightOn" boolean`);
        await queryRunner.query(`UPDATE "room_condition" SET "tempLightOn" = CASE WHEN "lightOn" = 500 THEN true ELSE false END`);
        await queryRunner.query(`ALTER TABLE "room_condition" DROP COLUMN "lightOn"`);
        await queryRunner.query(`ALTER TABLE "room_condition" RENAME COLUMN "tempLightOn" TO "lightOn"`);

        // Возвращение к boolean для room
        await queryRunner.query(`ALTER TABLE "room" ADD "tempLightOn" boolean`);
        await queryRunner.query(`UPDATE "room" SET "tempLightOn" = CASE WHEN "lightOn" = 500 THEN true ELSE false END`);
        await queryRunner.query(`ALTER TABLE "room" DROP COLUMN "lightOn"`);
        await queryRunner.query(`ALTER TABLE "room" RENAME COLUMN "tempLightOn" TO "lightOn"`);
    }
}
