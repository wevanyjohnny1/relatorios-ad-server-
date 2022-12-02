import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("questions")
class Question {
  @PrimaryColumn()
  id?: string;

  @Column()
  code: string;

  @Column()
  title: string;

  @Column()
  subtitle?: string;

  @Column()
  type: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at?: Date;
  // todo
  // answers: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Question };
