import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Question } from "./Question";

@Entity("answers")
class Answer {
  @PrimaryColumn()
  id?: string;

  @ManyToOne(() => Question)
  @JoinColumn({ name: "question_id" })
  question: Question;

  @Column()
  question_id: string;

  @Column()
  report_id?: string;

  @Column()
  answer_str?: string;

  @Column()
  answer_bol?: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Answer };
