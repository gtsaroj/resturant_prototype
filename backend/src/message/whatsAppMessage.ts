import axios from "axios";
import dotenv from "dotenv";
import { ApiResponse } from "../helper/ApiResponse.js";
import { ApiError } from "../helper/ApiError.js";
dotenv.config();
const sendWhatsAppMessage = async (imageUrl: string, message: string) => {
  try {
    const myNumber = process.env.PHONE_NUMBER;
    const accessToken = process.env.ACCESS_TOKEN;
    const response = await axios.post<ApiResponse>(
      `https://graph.facebook.com/v21.0/${myNumber}/messages`,
      {
        messaging_product: "whatsapp",
        to: myNumber,
        type: "image",
        image: {
          link: imageUrl,
        },
        text: {
          body: message,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Message sent successfully:", response.data);
    return response;
  } catch (error) {
    console.error("Error sending message:", error);
    throw new ApiError(
      500,
      "Error sending message to whatsapp",
      null,
      error as string[]
    );
  }
};

export default sendWhatsAppMessage;
