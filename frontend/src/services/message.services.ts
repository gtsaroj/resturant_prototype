import { MessageTypes } from "../types/message.types";
import { isMobile } from "../utility/deviceDetect";

export const addOrder = async ({ name }: MessageTypes) => {
  try {
    const generateWhatsAppLink = () => {
      const phoneNumber = import.meta.env.VITE_WHATSHAPP;
      const messageText = `
      *Order Request*
        Hello! I'd like to confirm my following order.
        - *Item*: ${name}
        Thank you.
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
