import axios from "axios";
import dayjs from "dayjs";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

export const useFeedbackFn = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    if (!rating || !comment)  throw new Error("All field are required")
    event.preventDefault();
    const formData = new FormData(this);
    formData.append("service_id", import.meta.env.VITE_SERVICE_ID);
    formData.append("template_id", "template_m3ogwdr");
    formData.append("user_id", import.meta.env.VITE_PUBLICID);
    formData.append("comment", " " + comment);
    formData.append("rating", JSON.stringify(rating));
    formData.append("date", dayjs().format(" MMMM D, YYYY h:mm A"));
    try {
      await axios({
        method: "post",
        data: formData,
        url: "https://api.emailjs.com/api/v1.0/email/send-form",
      });
    } catch (error) {
      throw new Error("Error while submitting feedback " + error);
    } finally {
      setComment("");
      setRating(0);
    }
  };
  const { mutate, isLoading } = useMutation(handleSubmit, {
    onSuccess: () => {
      toast.success("Thank you for feedback!");
    },
    onError: (error: any) => {
            toast.error(error.message)
      
    },
  });

  return { mutate, isLoading, rating, comment, setRating, setComment };
};
