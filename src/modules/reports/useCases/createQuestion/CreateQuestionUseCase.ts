import { inject, injectable } from "tsyringe";

import { IQuestionsRepository } from "@modules/reports/repositories/IQuestionsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  code: string;
  title: string;
  subtitle?: string;
  type: string;
}

@injectable()
class CreateQuestionUseCase {
  constructor(
    @inject("QuestionsRepository")
    private questionsRepository: IQuestionsRepository
  ) {
    this.questionsRepository = questionsRepository;
  }

  async execute({
    code,
    title,
    subtitle,
    type = "string",
  }: IRequest): Promise<void> {
    const questionAlreadyExists = await this.questionsRepository.findByCode(
      code
    );

    if (questionAlreadyExists) {
      throw new AppError("Código da questão já cadastrada", 409);
    }

    this.questionsRepository.create({ code, title, subtitle, type });
  }
}

export { CreateQuestionUseCase };
