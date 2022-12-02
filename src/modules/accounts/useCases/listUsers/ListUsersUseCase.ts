import { inject, injectable } from "tsyringe";

import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

@injectable()
class ListUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {
    this.usersRepository = usersRepository;
  }

  async execute(): Promise<User[]> {
    const users = this.usersRepository.list();

    return users;
  }
}

export { ListUsersUseCase };
