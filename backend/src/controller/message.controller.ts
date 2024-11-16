import axios from "axios";
import { asyncHandler } from "../helper/AsyncHandler.js";
import { ApiResponse } from "../helper/ApiResponse.js";


export const sendMessage = asyncHandler(async (req: any, res: any) => {
  try {
    const { recipientId, price, imageUrl, name } = req.body;
    const pageId = process.env.PAGE_ID;
    const accessToken = process.env.ACCESS_TOKEN;

    const messageData = {
      recipient: { id: recipientId },
      message: {
        attachment: {
          type: "template",
          payload: {
            template_type: "generic",
            elements: [
              {
                title: name,
                subtitle: `Price: Rs ${price}`,
                image_url: imageUrl,
              },
            ],
          },
        },
      },
    };
    await axios.post(
      `https://graph.facebook.com/v21.0/${pageId}/messages?access_token=${accessToken}`,
      messageData
    );
    return res
      .status(201)
      .json(new ApiResponse(201, [], "Order message sent successfully.", true));
  } catch (error) {
    return res
      .status(500)
      .json(
        new ApiResponse(
          500,
          error as string[],
          "Something went wrong while sending message.",
          false
        )
      );
  }
});
