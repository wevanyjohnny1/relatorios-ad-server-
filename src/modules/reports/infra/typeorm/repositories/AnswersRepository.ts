import { Repository } from "typeorm";

import { ICreateAnswerDTO } from "@modules/reports/dtos/ICreateAnswerDTO";
import { IAnswersRepository } from "@modules/reports/repositories/IAnswersRepository";
import { AppDataSource } from "@shared/infra/typeorm/data-source";

import { Answer } from "../entities/Answer";

class AnswersRepository implements IAnswersRepository {
  private repository: Repository<Answer>;

  constructor() {
    this.repository = AppDataSource.getRepository(Answer);
  }

  async create({
    question_id,
    answer_bol,
    answer_str,
    report_id,
  }: ICreateAnswerDTO): Promise<void> {
    const answer = this.repository.create({
      question_id,
      answer_bol,
      answer_str,
      report_id,
    });

    await this.repository.save(answer);
  }

  async list(): Promise<Answer[]> {
    const answers = await this.repository.find();
    return answers;
  }

  async findById(id: string): Promise<Answer> {
    const answer = await this.repository.findOne({ where: { id } });

    return answer;
  }
}

export { AnswersRepository };
