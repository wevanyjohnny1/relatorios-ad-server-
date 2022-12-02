import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCongregationUseCase } from "./CreateCongregationUseCase";

class CreateCongregationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { code, name } = request.body;

    const createCongregationUseCase = container.resolve(
      CreateCongregationUseCase
    );

    await createCongregationUseCase.execute({ code, name });

    return response.status(201).send();
  }
}

export { CreateCongregationController };
