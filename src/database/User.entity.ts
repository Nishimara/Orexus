import { Entity, PrimaryColumn, Column } from 'typeorm';

export enum ENUMSex {
    female = 1,
    male
}

@Entity()
export class User {
    @PrimaryColumn()
    id!: number;

    @Column({ type: 'float' })
    rating!: number;

    @Column({ type: 'float' })
    dickSize!: number;

    @Column({ type: 'float' })
    analSize!: number;
    
    @Column({ type: 'enum', enum:  ENUMSex})
    sex!: ENUMSex
}
