import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Directory {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name: string;

    @Column('text', { array: true })
    emails: string[];
}
