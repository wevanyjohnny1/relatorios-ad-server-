import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IAuthenticateUserDTO } from "@modules/accounts/dtos/IAuthenticateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

interface IResponse {
  user: {
    full_name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {
    this.usersRepository = usersRepository;
  }

  async execute({ cpf, password }: IAuthenticateUserDTO): Promise<IResponse> {
    const user = await this.usersRepository.findByCpf(cpf);

    if (!user) {
      throw new AppError("Cpf or password incorrect", 409);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Cpf or password incorrect", 409);
    }

    const token = sign({}, "d91357bed9656b62b44b182198749936", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        full_name: user.full_name,
        email: user.email,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
