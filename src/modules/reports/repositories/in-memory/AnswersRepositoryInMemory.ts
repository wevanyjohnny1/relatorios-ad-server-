import { ICreateAnswerDTO } from "@modules/reports/dtos/ICreateAnswerDTO";
import { Answer } from "@modules/reports/infra/typeorm/entities/Answer";

import { IAnswersRepository } from "../IAnswersRepository";

class AnswersRepositoryInMemory implements IAnswersRepository {
  answers: Answer[] = [];

  async create({
    question_id,
    answer_str,
    answer_bol,
    report_id,
  }: ICreateAnswerDTO): Promise<void> {
    const answer = new Answer();

    Object.assign(answer, {
      question_id,
      answer_str,
      answer_bol,
      report_id,
    });

    this.answers.push(answer);
  }

  findById(id: string): Promise<Answer> {
    throw new Error("error");
  }

  list(): Promise<Answer[]> {
    throw new Error("error");
  }
}

export { AnswersRepositoryInMemory };
