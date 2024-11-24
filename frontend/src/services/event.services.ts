import { EventTypes } from "./../types/event.types";
export const bookEvent = async ({
  title,
  date,
  time,
  image,
  location,
  price,
}: EventTypes) => {
  try {
    const phoneNumber = import.meta.env.VITE_WHATSHAPP;
    const messageText = `
        Hi! I'd like to confirm my event booking.
  
        Event: ${title}
        Date: ${date}
        Time: ${time}
        Location: ${location}
        Price: $${price}
        Image: ${image}
  
        Please confirm or cancel my booking.`;
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappLink = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.location.href = whatsappLink;

    window.location.href = whatsappLink;

    window.location.href = whatsappLink;
  } catch (error) {
    throw new Error(
      "An error occurred while sending the event booking message. " + error
    );
  }
};
