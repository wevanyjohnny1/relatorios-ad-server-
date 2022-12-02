import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { User } from "@modules/accounts/infra/typeorm/entities/User";

import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({
    cpf,
    data_nasc,
    email,
    full_name,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      cpf,
      data_nasc,
      email,
      full_name,
      password,
    });

    this.users.push(user);
  }

  async findByCpf(cpf: number): Promise<User> {
    return this.users.find((user) => user.cpf === cpf);
  }
  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }
  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }
  async list(): Promise<User[]> {
    return this.users;
  }
}

export { UsersRepositoryInMemory };
