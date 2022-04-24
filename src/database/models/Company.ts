import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
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
}
