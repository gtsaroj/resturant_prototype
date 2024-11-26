import { MessageTypes } from "../types/message.types";
import { isMobile } from "../utility/deviceDetect";

export const addOrder = async ({ name }: MessageTypes) => {
  try {
    const phoneNumber = import.meta.env.VITE_WHATSHAPP;
    const messageText = `
      *Order Request*\n
        Hello! I'd like to confirm my following order.\n
        - *Item*: ${name}\n
        Thank you.
      `;
    // Function to check if the device is mobile
    let whatshappLink = "";

    if (isMobile()) {
      // Redirect to WhatsApp app on mobile
      whatshappLink = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
        messageText
      )}`;
      window.location.href = whatshappLink;
    } else {
      // Redirect to WhatsApp web on desktop
      whatshappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        messageText
      )}`;
      window.open(whatshappLink, "_blank");
    }

    // Set the location to the generated WhatsApp link
  } catch (error) {
    throw new Error("Error while send message " + error);
  }
};
