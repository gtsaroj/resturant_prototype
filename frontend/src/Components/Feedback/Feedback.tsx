import React from "react";
import { useTranslation } from "react-i18next";
import { useFeedbackFn } from "../../Hook/useFeedback";
import ReactLoading from "react-loading";

export const Feedback: React.FC = () => {
  const { t } = useTranslation();

  const { title, h1, submit } = t("feedback") as any;

  const { comment, isLoading, mutate, rating, setComment, setRating } =
    useFeedbackFn();

  return (
    <div className="flex flex-col items-center justify-center w-full gap-10 py-10">
      <div className="flex items-center w-full ">
        <h3 className="h-[2px] w-full sm:text-[22px] text-[16px]  bg-gradient-to-r from-black/100 dark:from-black/100  to-black/0 dark:to-black/0"></h3>
        <p className="font-bold text-center sm:text-[22px] text-[15px] sm:min-w-[300px] w-[512px] tracking-wide text-[var(--dark-text)]">
          {h1}
        </p>
        <h3 className="h-[2px] w-full  bg-gradient-to-r from-black/0 dark:from-black/0 to-black/100 dark:to-black/100"></h3>
      </div>
      <div className="w-full max-w-3xl p-6 mt-10 bg-white border border-gray-200 rounded-lg shadow">
        <form
          onSubmit={(e) => mutate(e)}
          className="flex flex-col w-full space-y-6"
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
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                {submit}{" "}
                <ReactLoading color="white" width={"28px"} height={"28px"} />
              </div>
            ) : (
              submit
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
