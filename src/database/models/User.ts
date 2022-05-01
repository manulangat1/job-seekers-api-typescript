import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { AppliedJobs } from "./AppliedJobs";
import { UserSubscription } from "./UserSubscription";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  username: string;
  @Column({ length: 100 })
  email: string;
  @Column({ length: 100 })
  password: string;
  @Column({ length: 100 })
  phone: string;
  @Column({ length: 100 })
  address: string;
  @OneToMany(() => AppliedJobs, (appliedJobs) => appliedJobs.user)
  appliedJobs: AppliedJobs[];
  @OneToMany(
    () => UserSubscription,
    (userSubscription) => userSubscription.user
  )
  userSubscriptions: UserSubscription[];
}
