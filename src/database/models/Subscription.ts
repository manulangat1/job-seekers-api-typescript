import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { UserSubscription } from "./UserSubscription";
@Entity()
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100 })
  name: string;
  @Column({ length: 100 })
  type: string;
  @Column()
  validity: number;
  @Column()
  price: number;
  @OneToMany(
    () => UserSubscription,
    (userSubscription) => userSubscription.subscription
  )
  userSubscriptions: UserSubscription[];
}
