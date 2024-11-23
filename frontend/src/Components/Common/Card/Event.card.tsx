import { useTranslation } from "react-i18next";
import { EventTypes } from "../../../types/event.types";

const EventCard = ({
  ctaLink,
  date,
  image,
  location,
  price,
  tags,
  time,
  title,
}: EventTypes) => {
  const { t } = useTranslation();
  const { reserve } = t("event") as any;

  return (
    <div className="sm:w-[20rem] w-full bg-white border border-gray-200 rounded-lg  overflow-hidden  duration-300">
      {/* Event Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm px-3 py-1">
          {date} • {time}
        </div>
      </div>

      {/* Event Details */}
      <div className="p-4 space-y-2">
        {/* Title */}
        <h3 className="text-lg font-medium text-gray-800 truncate">{title}</h3>

        {/* Location */}
        <p className="text-sm text-gray-500 flex items-center">📍 {location}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price */}
        <p className="text-base font-semibold text-gray-700 mt-3">
          {price ? `Rs. ${price}` : "Free"}
        </p>

        {/* CTA Button */}
        <a
          href={ctaLink}
          className="block border-[1px] hover:text-white border-[var(--border-color)] font-semibold w-full text-center text-sm text-[var(--primary-text)] bg-transparent py-2 rounded-md mt-4 hover:bg-[var(--primary-dark)] transition-colors"
        >
          {reserve}
        </a>
      </div>
    </div>
  );
};

export default EventCard;
