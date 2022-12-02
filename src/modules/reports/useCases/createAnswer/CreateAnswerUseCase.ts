import { inject, injectable } from "tsyringe";

import { IAnswersRepository } from "@modules/reports/repositories/IAnswersRepository";

interface IRequest {
  question_id: string;
  report_id?: string;
  answer_str?: string;
  answer_bol?: boolean;
}

@injectable()
class CreateAnswerUseCase {
  constructor(
    @inject("AnswersRepository")
    private answersRepository: IAnswersRepository
  ) {
    this.answersRepository = answersRepository;
  }

  async execute({
    question_id,
    report_id,
    answer_str,
    answer_bol,
  }: IRequest): Promise<void> {
    this.answersRepository.create({
      question_id,
      report_id,
      answer_str,
      answer_bol,
    });
  }
}

export { CreateAnswerUseCase };
