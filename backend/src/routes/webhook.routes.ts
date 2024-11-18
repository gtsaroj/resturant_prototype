import { Router } from "express";
import { getWebhook, verifyWebhook } from "../controller/webhook.controller.js";

const webhookRouter = Router();

webhookRouter.route("/webhook").get(verifyWebhook);
webhookRouter.route("/webhook").post(getWebhook);

export default webhookRouter;
