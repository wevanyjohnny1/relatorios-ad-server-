import { Router } from "express";

import { CreateCongregationController } from "@modules/congregations/useCases/createCongregation/CreateCongregationController";
import { ListCongregationsController } from "@modules/congregations/useCases/listCongregations/ListCongregationsController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const congregationsRoutes = Router();

const createCongregationController = new CreateCongregationController();
const listCongregationController = new ListCongregationsController();

congregationsRoutes.post(
  "/",
  ensureAuthenticated,
  createCongregationController.handle
);

congregationsRoutes.get("/", listCongregationController.handle);

export { congregationsRoutes };
