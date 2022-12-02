import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAnswers1669086310320 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "answers",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "answer_str",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "answer_bol",
            type: "boolean",
            isNullable: true,
          },
          {
            name: "question_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "report_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKQuestionAnswer",
            referencedTableName: "questions",
            referencedColumnNames: ["id"],
            columnNames: ["question_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          //   {
          //     name: "FKReportAnswer",
          //     referencedTableName: "reports",
          //     referencedColumnNames: ["id"],
          //     columnNames: ["report_id"],
          //     onDelete: "SET_NULL",
          //     onUpdate: "SET_NULL",
          //   },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("answers");
  }
}
