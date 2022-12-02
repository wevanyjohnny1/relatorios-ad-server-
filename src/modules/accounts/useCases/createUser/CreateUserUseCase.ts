import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {
    this.usersRepository = usersRepository;
  }

  async execute({
    cpf,
    full_name,
    email,
    data_nasc,
    password,
  }: ICreateUserDTO): Promise<void> {
    const passwordHashed = await hash(password, 8);
    const userCpfAlreadyExists = await this.usersRepository.findByCpf(cpf);

    const userEmailAlreadyExists = await this.usersRepository.findByEmail(
      email
    );

    if (userCpfAlreadyExists || userEmailAlreadyExists) {
      throw new AppError(
        "Usuário já cadastrado, verifique seu email ou cpf",
        409
      );
    }

    this.usersRepository.create({
      cpf,
      full_name,
      email,
      data_nasc,
      password: passwordHashed,
    });
  }
}

export { CreateUserUseCase };
