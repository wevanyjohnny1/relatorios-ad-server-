import { inject, injectable } from "tsyringe";

import { Answer } from "@modules/reports/infra/typeorm/entities/Answer";
import { IAnswersRepository } from "@modules/reports/repositories/IAnswersRepository";

@injectable()
class ListAnswersUseCase {
  constructor(
    @inject("AnswersRepository")
    private answersRepository: IAnswersRepository
  ) {
    this.answersRepository = answersRepository;
  }

  async execute(): Promise<Answer[]> {
    const answers = await this.answersRepository.list();

    return answers;
  }
}

export { ListAnswersUseCase };
