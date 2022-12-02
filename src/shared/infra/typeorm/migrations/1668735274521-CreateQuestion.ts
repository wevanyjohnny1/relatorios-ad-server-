import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateQuestion1668735274521 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "questions",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "code",
            type: "varchar",
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "subtitle",
            type: "varchar",
          },
          {
            name: "type",
            type: "varchar",
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
    await queryRunner.dropTable("questions");
  }
}
