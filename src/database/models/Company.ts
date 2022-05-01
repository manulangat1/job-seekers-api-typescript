import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Jobs } from "./Jobs";
@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100 })
  name: string;
  @Column({ length: 100 })
  email: string;
  @Column({ length: 100 })
  website: string;
  @OneToMany(() => Jobs, (job) => job.company)
  jobs: Jobs[];
}
