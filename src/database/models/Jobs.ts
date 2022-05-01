import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { AppliedJobs } from "./AppliedJobs";
import { Company } from "./Company";
@Entity()
export class Jobs {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100 })
  title: string;
  // @Column({ length: 100 })
  // company: string;
  @Column({ length: 100 })
  link: string;
  @Column({ length: 100 })
  description: string;
  @Column()
  active: boolean;
  @CreateDateColumn()
  datePosted: Date;
  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Company, (company) => company.jobs)
  company: Company;
  @OneToMany(() => AppliedJobs, (appliedJobs) => appliedJobs.jobs)
  appliedJobs: AppliedJobs[];
}
