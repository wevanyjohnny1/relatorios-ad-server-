import { CongregationRepositoryInMemory } from "@modules/congregations/repositories/in-memory/CongregationsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCongregationUseCase } from "./CreateCongregationUseCase";

let createCongregationUseCase: CreateCongregationUseCase;
let congregationsRepositoryInMemory: CongregationRepositoryInMemory;

describe("Create congregation", () => {
  beforeEach(() => {
    congregationsRepositoryInMemory = new CongregationRepositoryInMemory();
    createCongregationUseCase = new CreateCongregationUseCase(
      congregationsRepositoryInMemory
    );
  });

  it("should be able to create a new congregation", async () => {
    const congregation = {
      code: "CTEST",
      name: "Congregation Test",
    };
    await createCongregationUseCase.execute(congregation);

    const congregationCreated =
      await congregationsRepositoryInMemory.findByCode(congregation.code);

    expect(congregationCreated).toHaveProperty("id");
  });

  it("shouldn't be able to create a congregation with the same code", async () => {
    expect(async () => {
      const congregation = {
        code: "CTEST",
        name: "Congregation Test",
      };
      await createCongregationUseCase.execute(congregation);
      await createCongregationUseCase.execute(congregation);
    }).rejects.toBeInstanceOf(AppError);
  });
});
