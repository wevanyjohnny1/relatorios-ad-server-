import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";

interface IUsersRepository {
  findByCpf(cpf: number): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  list(): Promise<User[]>;
  create(data: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository };
