import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
  async handle(request: Request, response: Response) {
    const listUsersUseCase = container.resolve(ListUsersUseCase);

    const all = await listUsersUseCase.execute();

    return response.json(all);
  }
}

export { ListUsersController };
