import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAnswerUseCase } from "./CreateAnswerUseCase";

class CreateAnswerController {
  handle(request: Request, response: Response) {
    const { question_id, answer_bol, answer_str, report_id } = request.body;

    const createAnswerUseCase = container.resolve(CreateAnswerUseCase);

    createAnswerUseCase.execute({
      question_id,
      answer_bol,
      answer_str,
      report_id,
    });

    return response.status(201).send();
  }
}

export { CreateAnswerController };
