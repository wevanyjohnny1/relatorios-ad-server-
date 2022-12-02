import { Repository } from "typeorm";

import { ICreateQuestionDTO } from "@modules/reports/dtos/ICreateQuestionDTO";
import { IQuestionsRepository } from "@modules/reports/repositories/IQuestionsRepository";
import { AppDataSource } from "@shared/infra/typeorm/data-source";

import { Question } from "../entities/Question";

class QuestionsRepository implements IQuestionsRepository {
  private repository: Repository<Question>;

  constructor() {
    this.repository = AppDataSource.getRepository(Question);
  }

  async create({
    code,
    title,
    subtitle,
    type,
  }: ICreateQuestionDTO): Promise<void> {
    const question = this.repository.create({
      code,
      title,
      subtitle,
      type,
    });

    await this.repository.save(question);
  }

  async list(): Promise<Question[]> {
    const questions = await this.repository.find();
    return questions;
  }

  async findByCode(code: string): Promise<Question> {
    const question = await this.repository.findOne({ where: { code } });

    return question;
  }
}

export { QuestionsRepository };
