import { isMobile } from "../utility/deviceDetect";
import { EventTypes } from "./../types/event.types";
import { ReserveTypes } from "../types/reserve.types";
import { User } from "../types/user.types";
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
    let whatsappLink = "";

    // Generate the WhatsApp link based on device type
    if (isMobile()) {
      whatsappLink = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
      window.location.href = whatsappLink;
    } else {
      whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappLink, "_blank");
    }
  } catch (error) {
    throw new Error(
      "An error occurred while sending the event booking message. " + error
    );
  }
};

export const bookTable = async (store: {
  seatPlan: ReserveTypes["seatPlan"];
  user: User;
}) => {
  const phoneNumber = import.meta.env.VITE_WHATSHAPP;
  const allSeats = store.seatPlan.flatMap((categoryPlan) =>
    categoryPlan.table.flatMap((tablePlan) => tablePlan.seat)
  );
  const user = `Name : ${store.user.name} \n ---Booking---- 
  \n Date : ${store.user.dateToCome} \n Time : ${
    store.user.timeToCome
  } \n Contact no : ${store.user.phoneNumber}
   \n Seats : ${allSeats?.map((seat) => ` ${seat}, `)} `;

  const encodedMessage = encodeURIComponent(user);
  let whatsappLink = "";

  // Generate the WhatsApp link based on device type
  if (isMobile()) {
    whatsappLink = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.location.href = whatsappLink;
  } else {
    whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
  }
};
