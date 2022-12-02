import { ICreateCongregationDTO } from "@modules/congregations/dtos/ICreateCongregationDTO";
import { Congregation } from "@modules/congregations/infra/typeorm/entities/Congregation";

import { ICongregationsRepository } from "../ICongregationsRepository";

class CongregationRepositoryInMemory implements ICongregationsRepository {
  congregations: Congregation[] = [];

  async findByCode(code: string): Promise<Congregation> {
    const congregation = this.congregations.find(
      (congregation) => congregation.code === code
    );
    return congregation;
  }

  async findByName(name: string): Promise<Congregation> {
    const congregation = this.congregations.find(
      (congregation) => congregation.name === name
    );
    return congregation;
  }

  async list(): Promise<Congregation[]> {
    const all = this.congregations;
    return all;
  }

  async create({ code, name }: ICreateCongregationDTO): Promise<void> {
    const congregation = new Congregation();

    Object.assign(congregation, {
      code,
      name,
    });

    this.congregations.push(congregation);
  }
}

export { CongregationRepositoryInMemory };
