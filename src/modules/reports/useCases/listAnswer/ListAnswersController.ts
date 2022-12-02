import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAnswersUseCase } from "./ListAnswersUseCase";

class ListAnswersController {
  async handle(request: Request, response: Response) {
    const listAnswersUseCase = container.resolve(ListAnswersUseCase);
    const all = await listAnswersUseCase.execute();

    return response.json(all);
  }
}

export { ListAnswersController };
