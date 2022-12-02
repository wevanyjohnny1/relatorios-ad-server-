import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1668739027004 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "cpf",
            type: "int",
          },
          {
            name: "full_name",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "data_nasc",
            type: "timestamp",
          },
          {
            name: "password",
            type: "varchar",
          },
          {
            name: "is_admin",
            type: "boolean",
            default: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
