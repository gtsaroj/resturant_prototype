import axios from "axios";
import React, { FormEvent } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import dayjs from "dayjs";

export const useSuscribeFn = () => {
  const [email, setEmail] = React.useState<string>("");

  const handleSubmit = async (event: FormEvent, email: string) => {
    event.preventDefault();
    const formData = new FormData(this);
    formData.append("service_id", import.meta.env.VITE_SERVICE_ID);
    formData.append("template_id", import.meta.env.VITE_TEMPATE_ID);
    formData.append("user_id", import.meta.env.VITE_PUBLICID);
    formData.append("from_email", " " + email);
    formData.append("date", dayjs().format(" MMMM D, YYYY h:mm A"));
    try {
      await axios({
        method: "post",
        data: formData,
        url: "https://api.emailjs.com/api/v1.0/email/send-form",
      });
    } catch (error) {
      throw new Error("Error while submitting form in getform.in " + error);
    }
  };

  const { mutate, isLoading } = useMutation(
    (event: FormEvent) => handleSubmit(event, email),
    {
      onSuccess: () => {
        toast.success("Sucessfully suscribed.");
      },
      onError: () => {
        toast.error("Something went wrong.");
      },
    }
  );
  return { setEmail, isLoading, mutate, email };
};
