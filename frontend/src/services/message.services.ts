import { MessageTypes } from "../types/message.types";
import { isMobile } from "../utility/deviceDetect";

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
      // Function to check if the device is mobile

      if (isMobile()) {
        // Redirect to WhatsApp app on mobile
        return `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
          messageText
        )}`;
      } else {
        // Redirect to WhatsApp web on desktop
        return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          messageText
        )}`;
      }
    };

    // Set the location to the generated WhatsApp link
    window.location.href = generateWhatsAppLink();
  } catch (error) {
    throw new Error("Error while send message " + error);
  }
};
