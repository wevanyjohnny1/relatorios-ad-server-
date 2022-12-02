import { Router } from "express";

import { CreateQuestionController } from "@modules/reports/useCases/createQuestion/CreateQuestionController";
import { ListQuestionsController } from "@modules/reports/useCases/listQuestions/ListQuestionsController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const questionsRoutes = Router();

const createQuestionController = new CreateQuestionController();
const listQuestionController = new ListQuestionsController();

questionsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createQuestionController.handle
);

questionsRoutes.get("/", ensureAuthenticated, listQuestionController.handle);

export { questionsRoutes };
