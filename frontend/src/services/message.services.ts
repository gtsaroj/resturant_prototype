import { MessageTypes } from "../types/message.types";

export const addOrder = async ({name, price }: MessageTypes) => {
  try {
    const pageId = import.meta.env.VITE_PAGE_ID;
    // const response = await makeRequest({
    //   method: "post",
    //   url: "/order",
    //   data: {
    //     imageUrl,
    //     name,
    //     price,
    //   },
    // });
    // console.log(response);
    const message = `New order: \n
    Name: ${name} \n
    Price: ${price} \n
    `;
    const fbMessengerUrl = `https://m.me/${pageId}?ref=${encodeURIComponent(
      message
    )}`;
    window.open(fbMessengerUrl, "_blank");
  } catch (error) {
    throw new Error("Error while send message " + error);
  }
};
