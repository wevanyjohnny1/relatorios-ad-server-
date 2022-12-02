interface ICreateAnswerDTO {
  question_id: string;
  report_id?: string;
  answer_str?: string;
  answer_bol?: boolean;
}

export { ICreateAnswerDTO };
