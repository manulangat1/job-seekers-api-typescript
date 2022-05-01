import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Jobs } from "./Jobs";
import { User } from "./User";

@Entity()
export class AppliedJobs {
  @PrimaryGeneratedColumn()
  id: number;
  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.appliedJobs)
  user: User;
  @ManyToOne(() => Jobs, (jobs) => jobs.appliedJobs)
  jobs: Jobs;
}
