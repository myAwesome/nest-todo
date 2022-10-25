import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column({default: () => "CURRENT_TIMESTAMP"})
    createdAt: Date;

    @Column({ default: false })
    done: boolean;

    @Column()
    priority: number;
}