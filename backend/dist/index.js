import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getWebhook, verifyWebhook } from "./controller/webhook.controller.js";
import { sendMessage } from "./controller/message.controller.js";
import sendWhatsAppMessage from "./message/whatsAppMessage.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.listen(process.env.PORT || 8000, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});
app.get("/test", (_, res) => {
    res.send("Test route hit.");
});
app.get("/webhook", verifyWebhook);
app.post("/webhook", getWebhook);
app.post("/order", sendMessage);
sendWhatsAppMessage("https://images.unsplash.com/photo-1568901346375-23c9450c58cd", "New order: Chicken Burger, price:Rs 500");
export default app;
