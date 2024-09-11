import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";



@Entity({
    name: "appointments"
})

export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @Column()
    time: string;

    @ManyToOne(() => User, (user) => user.appointment)
    user: User;

    @Column()
    userId: number;

    @Column()
    status: 'active'|'cancelled';

    @Column()
    description: string;
}

