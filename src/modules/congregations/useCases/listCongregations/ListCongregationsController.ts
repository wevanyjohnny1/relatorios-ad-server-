import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCongregationsUseCase } from "./ListCongregationsUseCase";

class ListCongregationsController {
  async handle(request: Request, response: Response) {
    const listCongregationsUseCase = container.resolve(
      ListCongregationsUseCase
    );

    const all = await listCongregationsUseCase.execute();

    return response.json(all);
  }
}

export { ListCongregationsController };
