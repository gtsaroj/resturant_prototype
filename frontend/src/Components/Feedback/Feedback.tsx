import React, { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";

export const Feedback: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();

  const { title, h1, submit, message } = t("feedback") as any;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (rating && comment) {
      console.log({ rating, comment }); // Replace with API call or state management
      setSubmitted(true);
      setRating(0);
      setComment("");
    }
  };

  return (
    <div className="w-full flex py-10 flex-col gap-10 items-center justify-center">
      <div className="w-full flex items-center ">
        <h3 className="h-[2px] w-full sm:text-[22px] text-[16px]  bg-gradient-to-r from-black/100 dark:from-black/100  to-black/0 dark:to-black/0"></h3>
        <p className="font-bold text-center sm:text-[22px] text-[15px] sm:min-w-[300px] w-[512px] tracking-wide text-[var(--dark-text)]">
          {h1}
        </p>
        <h3 className="h-[2px] w-full  bg-gradient-to-r from-black/0 dark:from-black/0 to-black/100 dark:to-black/100"></h3>
      </div>
      <div className="max-w-3xl  w-full p-6 mt-10 bg-white rounded-lg shadow border border-gray-200">
        {submitted ? (
          <div className="text-center">
            <h2 className="text-lg font-semibold text-green-500">Thank You!</h2>
            <p className="text-gray-600 mt-2">{message}</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="space-y-6 flex flex-col w-full"
          >
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

            {/* Rating Input */}
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  onClick={() => setRating(star)}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 cursor-pointer ${
                    star <= rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927a1 1 0 011.902 0l1.286 4.482a1 1 0 00.95.692h4.717a1 1 0 01.592 1.81l-3.81 2.771a1 1 0 00-.364 1.118l1.286 4.482a1 1 0 01-1.54 1.118L10 14.435l-3.81 2.771a1 1 0 01-1.54-1.118l1.286-4.482a1 1 0 00-.364-1.118L2.763 9.911a1 1 0 01.592-1.81h4.717a1 1 0 00.95-.692l1.286-4.482z" />
                </svg>
              ))}
            </div>

            {/* Comment Input */}
            <textarea
              required
              className="w-full p-3 border border-gray-300  rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none"
              placeholder="Write your feedback here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full ${
                !rating || !comment ? "cursor-not-allowed" : ""
              }   py-2 tracking-wider px-4 hover:text-white bg-transparent  text-[var(--primary-text)] font-medium rounded-lg transition-colors duration-200`}
              disabled={!rating || !comment}
            >
              {submit}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
