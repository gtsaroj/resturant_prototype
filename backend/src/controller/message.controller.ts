// import axios from "axios";
import { asyncHandler } from "../helper/AsyncHandler.js";
import { ApiResponse } from "../helper/ApiResponse.js";
// import { sendMessageToFb } from "../message/sendMessage.js";
import sendWhatsAppMessage from "../message/whatsAppMessage.js";

export const sendMessage = asyncHandler(async (req: any, res: any) => {
  console.log("reached send message controller");
  try {
    const { price, imageUrl, name } = req.body;
    const message = `New order: \n
    Name: ${name}, \n
    Price: ${price} \n
    `;

    // const messageData = {
    //   recipient: { id: recipientId },
    //   message: {
    //     attachment: {
    //       type: "template",
    //       payload: {
    //         template_type: "generic",
    //         elements: [
    //           {
    //             title: name,
    //             subtitle: `Price: Rs ${price}`,
    //             image_url: imageUrl,
    //           },
    //         ],
    //       },
    //     },
    //   },
    // };

    await sendWhatsAppMessage(imageUrl, message);
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
