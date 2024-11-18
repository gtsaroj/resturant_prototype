import { Router } from "express";
import { sendMessage } from "../controller/message.controller.js";

const orderRouter = Router();
orderRouter.route("/order").post(sendMessage);
export default orderRouter;
