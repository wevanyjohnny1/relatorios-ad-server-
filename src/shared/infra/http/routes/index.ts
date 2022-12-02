import { Router } from "express";

import { answersRoutes } from "./answers.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { congregationsRoutes } from "./congregations.routes";
import { questionsRoutes } from "./questions.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/congregations", congregationsRoutes);
router.use("/questions", questionsRoutes);
router.use("/answers", answersRoutes);
router.use("/users", usersRoutes);
router.use(authenticateRoutes);

export { router };
