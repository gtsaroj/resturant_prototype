import { makeRequest } from "../makeRequest";
import { MessageTypes } from "../types/message.types";

export const addOrder = async ({
  imageUrl,
  name,
  price,
  recipientId,
}: MessageTypes) => {
  try {
    const response = await makeRequest({
      method: "post",
      url: "/message/order",
      data: {
        imageUrl,
        name,
        price,
        recipientId,
      },
    });
    return response.data.data;
  } catch (error) {
    throw new Error("Error while send message " + error);
  }
};
