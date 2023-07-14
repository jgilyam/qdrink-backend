import { Router} from "express";
import { validateFields } from "../../../../middlewares/validator.middleware";
import { messageController } from "../../message.dependencies";

const router = Router();

router.post("/webHook", messageController.receiver);

export default router;