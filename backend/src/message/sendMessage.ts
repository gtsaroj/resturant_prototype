import { ApiError } from "../helper/ApiError.js";
import dotenv from "dotenv";
dotenv.config();

export const sendMessageToFb = async (message: string) => {
  try {
    const pageId = process.env.PAGE_ID;
    const accessToken = process.env.ACCESS_TOKEN;
    console.log({ pageId, accessToken });
    // const response = await axios.post<ApiResponse>(
    //   `https://graph.facebook.com/v21.0/${pageId}/messages?access_token=${accessToken}`,
    //   {
    //     messaging_type: "MESSAGE",
    //     recipient: { id: process.env.PAGE_ID },
    //     message: { text: message },
    //   }
    // );
    const response = await fetch(
      `https://graph.facebook.com/v21.0/${pageId}/messages?access_token=${accessToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          recipient: {
            id: pageId,
          },
          message: {
            text: `${message}`,
          },
        }),
      }
    );
    console.log({ response });
      if (!response.ok) {
         const errorText = await response.text();
         console.log("Error Details:", errorText);
      throw new ApiError(response.status, response.statusText);
    }

    const data = await response.json();
    console.log({ data });

    return response;
  } catch (error) {
    console.error(error);
    throw new ApiError(
      500,
      "Something went wrong while sending message.",
      null,
      error as string[],
      undefined,
      false
    );
  }
};
