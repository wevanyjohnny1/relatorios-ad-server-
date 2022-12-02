import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const ormconfig: PostgresConnectionOptions = {
  type: "postgres",
  port: 5432,
  host: "localhost",
  username: "johnny",
  password: "marquinhos",
  database: "relatorios",
  synchronize: false,
  logging: false,
  migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
  entities: ["./src/modules/**/entities/*.ts"],
};
