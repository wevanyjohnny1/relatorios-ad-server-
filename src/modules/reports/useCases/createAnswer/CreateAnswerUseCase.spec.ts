import { AnswersRepositoryInMemory } from "@modules/reports/repositories/in-memory/AnswersRepositoryInMemory";

import { CreateAnswerUseCase } from "./CreateAnswerUseCase";

let createAnswerUseCase: CreateAnswerUseCase;
let answersRepositoryInMemory: AnswersRepositoryInMemory;

describe("Create answer", () => {
  beforeEach(() => {
    answersRepositoryInMemory = new AnswersRepositoryInMemory();
    createAnswerUseCase = new CreateAnswerUseCase(answersRepositoryInMemory);
  });

  it("should be able to create a new answer", async () => {
    await createAnswerUseCase.execute({
      question_id: "12",
      answer_str: "Answer",
      answer_bol: false,
      report_id: "12",
    });
  });
});
