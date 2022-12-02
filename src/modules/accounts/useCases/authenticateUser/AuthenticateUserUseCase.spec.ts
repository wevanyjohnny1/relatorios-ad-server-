import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("should be able to authenticate an user", async () => {
    const user: ICreateUserDTO = {
      cpf: 11111111111,
      email: "email@email.com",
      password: "123123",
      data_nasc: new Date(),
      full_name: "John Doe",
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      cpf: user.cpf,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });

  it("shouldn't be able to authenticate a nonexistent user", () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        cpf: 12312312312,
        password: "nopass",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("shouldn't be able to authenticate with an incorrect password", () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        cpf: 11111111112,
        email: "email2@email.com",
        password: "123123",
        data_nasc: new Date(),
        full_name: "John Doe",
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        cpf: user.cpf,
        password: "nopass",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
