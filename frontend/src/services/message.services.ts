import { MessageTypes } from "../types/message.types";

export const addOrder = async ({ name, price, imageUrl }: MessageTypes) => {
  try {
    const generateWhatsAppLink = () => {
      const phoneNumber = import.meta.env.VITE_WHATSHAPP;
      const messageText = `
        Hi! I'd like to confirm my order.
  
        Product: ${name}
        Price: $${price}
        Image: ${imageUrl}
  
        Please reply with "Confirm" to proceed or "Cancel" to cancel the order.
      `;
      return `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
        messageText
      )}`;
    };
    window.location.href = generateWhatsAppLink();
  } catch (error) {
    throw new Error("Error while send message " + error);
  }
};
