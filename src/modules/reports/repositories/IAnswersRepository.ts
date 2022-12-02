import { ICreateAnswerDTO } from "../dtos/ICreateAnswerDTO";
import { IListAnswerByReportQuestionDTO } from "../dtos/IListAnswerByReportQuestion";
import { Answer } from "../infra/typeorm/entities/Answer";

interface IAnswersRepository {
  findById(id: string): Promise<Answer>;
  listByQuestion(question_id: string): Promise<Answer[]>;
  listByReport(report_id: string): Promise<Answer[]>;
  listByReportQuestion({
    report_id,
    question_id,
  }: IListAnswerByReportQuestionDTO): Promise<Answer[]>;
  create({
    question_id,
    answer_str,
    answer_bol,
    report_id,
  }: ICreateAnswerDTO): Promise<void>;
}

export { IAnswersRepository };
