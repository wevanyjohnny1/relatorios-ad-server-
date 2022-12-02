import { ICreateCongregationDTO } from "../dtos/ICreateCongregationDTO";
import { Congregation } from "../infra/typeorm/entities/Congregation";

interface ICongregationsRepository {
  findByCode(code: string): Promise<Congregation>;
  findByName(name: string): Promise<Congregation>;
  list(): Promise<Congregation[]>;
  create({ code, name }: ICreateCongregationDTO): Promise<void>;
}

export { ICongregationsRepository };
