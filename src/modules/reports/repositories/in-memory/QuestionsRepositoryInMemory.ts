import { ICreateQuestionDTO } from "@modules/reports/dtos/ICreateQuestionDTO";
import { Question } from "@modules/reports/infra/typeorm/entities/Question";

import { IQuestionsRepository } from "../IQuestionsRepository";

class QuestionRepositoryInMemory implements IQuestionsRepository {
  questions: Question[] = [];

  async findByCode(code: string): Promise<Question> {
    const question = this.questions.find((question) => question.code === code);
    return question;
  }

  async list(): Promise<Question[]> {
    const all = this.questions;
    return all;
  }

  async create({
    code,
    title,
    subtitle,
    type,
  }: ICreateQuestionDTO): Promise<void> {
    const question = new Question();

    Object.assign(question, {
      code,
      title,
      subtitle,
      type,
    });

    this.questions.push(question);
  }
}

export { QuestionRepositoryInMemory };
