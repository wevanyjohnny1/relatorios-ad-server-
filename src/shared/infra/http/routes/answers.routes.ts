import { Router } from "express";

import { CreateAnswerController } from "@modules/reports/useCases/createAnswer/CreateAnswerController";
import { ListAnswersController } from "@modules/reports/useCases/listAnswer/ListAnswersController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const answersRoutes = Router();

const createAnswerController = new CreateAnswerController();
const listAnswerController = new ListAnswersController();

answersRoutes.post("/", ensureAuthenticated, createAnswerController.handle);

answersRoutes.get(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  listAnswerController.handle
);

export { answersRoutes };
