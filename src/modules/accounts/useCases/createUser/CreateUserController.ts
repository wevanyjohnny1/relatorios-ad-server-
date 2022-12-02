import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { cpf, full_name, email, data_nasc, password } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      cpf,
      full_name,
      email,
      data_nasc,
      password,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
