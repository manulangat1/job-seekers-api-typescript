import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Subscription } from "./Subscription";
import { User } from "./User";

@Entity()
export class UserSubscription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  validity: number;

  @ManyToOne(() => User, (user) => user.userSubscriptions)
  user: User;
  @ManyToOne(
    () => Subscription,
    (subscription) => subscription.userSubscriptions
  )
  subscription: Subscription;
}
