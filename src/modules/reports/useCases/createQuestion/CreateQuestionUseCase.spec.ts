import { QuestionRepositoryInMemory } from "@modules/reports/repositories/in-memory/QuestionsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateQuestionUseCase } from "./CreateQuestionUseCase";

let createQuestionUseCase: CreateQuestionUseCase;
let questionsRepositoryInMemory: QuestionRepositoryInMemory;

describe("Create question", () => {
  beforeEach(() => {
    questionsRepositoryInMemory = new QuestionRepositoryInMemory();
    createQuestionUseCase = new CreateQuestionUseCase(
      questionsRepositoryInMemory
    );
  });

  it("should be able to create a new question", async () => {
    const question = {
      code: "ADQ01",
      title: "First question",
      subtitle: "Description",
      type: "string",
    };
    await createQuestionUseCase.execute(question);

    const questionCreated = await questionsRepositoryInMemory.findByCode(
      question.code
    );

    expect(questionCreated).toHaveProperty("id");
  });

  it("shouldn't be able to create a question with the same code", async () => {
    expect(async () => {
      const question = {
        code: "ADQ01",
        title: "First question",
        subtitle: "Description",
        type: "string",
      };
      await createQuestionUseCase.execute(question);
      await createQuestionUseCase.execute(question);
    }).rejects.toBeInstanceOf(AppError);
  });
});
