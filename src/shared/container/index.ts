import { container } from "tsyringe";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { CongregationsRepository } from "@modules/congregations/infra/typeorm/repositories/CongregationsRepository";
import { ICongregationsRepository } from "@modules/congregations/repositories/ICongregationsRepository";
import { AnswersRepository } from "@modules/reports/infra/typeorm/repositories/AnswersRepository";
import { QuestionsRepository } from "@modules/reports/infra/typeorm/repositories/QuestionsRepository";
import { IAnswersRepository } from "@modules/reports/repositories/IAnswersRepository";
import { IQuestionsRepository } from "@modules/reports/repositories/IQuestionsRepository";

container.registerSingleton<ICongregationsRepository>(
  "CongregationsRepository",
  CongregationsRepository
);

container.registerSingleton<IQuestionsRepository>(
  "QuestionsRepository",
  QuestionsRepository
);

container.registerSingleton<IAnswersRepository>(
  "AnswersRepository",
  AnswersRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
