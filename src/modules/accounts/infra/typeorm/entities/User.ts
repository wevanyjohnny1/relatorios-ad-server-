import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("Users")
class User {
  @PrimaryColumn()
  id?: string;

  @Column()
  cpf: number;

  @Column()
  full_name: string;

  @Column()
  email: string;

  @Column()
  data_nasc: Date;

  @Column()
  password: string;

  @Column()
  is_admin: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
