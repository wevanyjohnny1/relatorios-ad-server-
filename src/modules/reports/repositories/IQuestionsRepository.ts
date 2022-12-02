import { ICreateQuestionDTO } from "../dtos/ICreateQuestionDTO";
import { Question } from "../infra/typeorm/entities/Question";

interface IQuestionsRepository {
  findByCode(code: string): Promise<Question>;
  list(): Promise<Question[]>;
  create({ code, title, subtitle, type }: ICreateQuestionDTO): Promise<void>;
}

export { IQuestionsRepository };
