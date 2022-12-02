import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateQuestionUseCase } from "./CreateQuestionUseCase";

class CreateQuestionController {
  handle(request: Request, response: Response) {
    const { code, title, subtitle, type } = request.body;

    const createQuestionUseCase = container.resolve(CreateQuestionUseCase);

    createQuestionUseCase.execute({ code, title, subtitle, type });

    return response.status(201).send();
  }
}

export { CreateQuestionController };
