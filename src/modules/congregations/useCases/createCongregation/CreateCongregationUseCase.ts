import { inject, injectable } from "tsyringe";

import { ICongregationsRepository } from "@modules/congregations/repositories/ICongregationsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  code: string;
  name: string;
}

@injectable()
class CreateCongregationUseCase {
  constructor(
    @inject("CongregationsRepository")
    private congregationsRepository: ICongregationsRepository
  ) {
    this.congregationsRepository = congregationsRepository;
  }

  async execute({ code, name }: IRequest): Promise<void> {
    const congregationCodeAlreadyExists =
      await this.congregationsRepository.findByCode(code);

    const congregationNameAlreadyExists =
      await this.congregationsRepository.findByName(name);

    if (congregationCodeAlreadyExists || congregationNameAlreadyExists) {
      throw new AppError("Congregação já cadastrada", 409);
    }

    this.congregationsRepository.create({ code, name });
  }
}

export { CreateCongregationUseCase };
