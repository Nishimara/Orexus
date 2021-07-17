import { Entity, PrimaryColumn, Column } from 'typeorm';

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
}
