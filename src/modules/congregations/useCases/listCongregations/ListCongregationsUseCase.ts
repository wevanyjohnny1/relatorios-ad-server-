import { inject, injectable } from "tsyringe";

import { Congregation } from "@modules/congregations/infra/typeorm/entities/Congregation";
import { ICongregationsRepository } from "@modules/congregations/repositories/ICongregationsRepository";

@injectable()
class ListCongregationsUseCase {
  constructor(
    @inject("CongregationsRepository")
    private congregationsRepository: ICongregationsRepository
  ) {
    this.congregationsRepository = congregationsRepository;
  }

  async execute(): Promise<Congregation[]> {
    const congregations = this.congregationsRepository.list();

    return congregations;
  }
}

export { ListCongregationsUseCase };
