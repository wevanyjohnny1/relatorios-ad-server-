import { Repository } from "typeorm";

import { ICreateCongregationDTO } from "@modules/congregations/dtos/ICreateCongregationDTO";
import { ICongregationsRepository } from "@modules/congregations/repositories/ICongregationsRepository";
import { AppDataSource } from "@shared/infra/typeorm/data-source";

import { Congregation } from "../entities/Congregation";

class CongregationsRepository implements ICongregationsRepository {
  private repository: Repository<Congregation>;

  constructor() {
    this.repository = AppDataSource.getRepository(Congregation);
  }

  async create({ code, name }: ICreateCongregationDTO): Promise<void> {
    const congregation = this.repository.create({
      code,
      name,
    });

    await this.repository.save(congregation);
  }

  async list(): Promise<Congregation[]> {
    const congregations = await this.repository.find();
    return congregations;
  }

  async findByCode(code: string): Promise<Congregation> {
    const congregation = await this.repository.findOne({ where: { code } });

    return congregation;
  }

  async findByName(name: string): Promise<Congregation> {
    const congregation = await this.repository.findOne({ where: { name } });

    return congregation;
  }
}

export { CongregationsRepository };
