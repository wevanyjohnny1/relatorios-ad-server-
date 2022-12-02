import "reflect-metadata";
import { DataSource } from "typeorm";

import { ormconfig } from "../../../../ormconfig";

export const AppDataSource = new DataSource(ormconfig);

export function createConnection(
  host = "database_relatorios"
): Promise<DataSource> {
  return AppDataSource.setOptions({ host }).initialize();
}
