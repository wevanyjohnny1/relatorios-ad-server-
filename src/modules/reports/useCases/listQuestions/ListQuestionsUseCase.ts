import { inject, injectable } from "tsyringe";

import { Question } from "@modules/reports/infra/typeorm/entities/Question";
import { IQuestionsRepository } from "@modules/reports/repositories/IQuestionsRepository";

@injectable()
class ListQuestionsUseCase {
  constructor(
    @inject("QuestionsRepository")
    private questionsRepository: IQuestionsRepository
  ) {
    this.questionsRepository = questionsRepository;
  }

  async execute(): Promise<Question[]> {
    const questions = await this.questionsRepository.list();

    return questions;
  }
}

export { ListQuestionsUseCase };
