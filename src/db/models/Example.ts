import {Entity, PrimaryGeneratedColumn, BaseEntity} from 'typeorm';

@Entity()
export class Example extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
}