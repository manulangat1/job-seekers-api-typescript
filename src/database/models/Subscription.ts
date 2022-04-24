import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
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
}
