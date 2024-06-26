"use client";

import { useState } from "react";
import {
  Toast,
  ToastToggle,
  Button,
  Label,
  TextInput,
  Textarea,
} from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import useContactForm from "../../hooks/useContactForm";
import sendEmail from "../../lib/sendEmail";

export default function ContactForm() {
  const { values, handleChange } = useContactForm();
  const [responseMessage, setResponseMessage] = useState({
    isSuccessful: false,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const req = await sendEmail(values.name, values.email, values.message);
      if (req.status === 200) {
        setResponseMessage({
          isSuccessful: true,
          message: "Thank you for your message.",
        });
      } else {
        setResponseMessage({
          isSuccessful: false,
          message: "Oops something went wrong. Please try again.",
        });
      }
    } catch (e) {
      console.log(e);
      setResponseMessage({
        isSuccessful: false,
        message: "Oops something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="flex w-full max-w-[31.25rem] flex-col items-center justify-center space-y-6">
      <form
        onSubmit={handleSubmit}
        className="w-full rounded bg-white p-8 uppercase shadow-md"
      >
        <div className="mb-4">
          <div className="mb-2 block">
            <Label
              htmlFor="name"
              value="Name"
              className="font-montserrat font-bold"
            />
          </div>
          <TextInput
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            id="name"
            required
            className="font-open-sans"
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label
              htmlFor="email"
              value="Email"
              className="font-montserrat font-bold"
            />
          </div>
          <TextInput
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            required
            className="font-open-sans"
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label
              htmlFor="message"
              value="Message"
              className="font-montserrat font-bold"
            />
          </div>
          <Textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            id="message"
            placeholder="Leave a message..."
            required
            rows={4}
            className="font-open-sans"
          />
        </div>
        <Button
          type="submit"
          className="w-full border border-black bg-neutral-700 font-montserrat font-bold uppercase text-white transition ease-in-out enabled:hover:bg-cyan-700"
        >
          Submit
        </Button>
      </form>
      {responseMessage.message && (
        <Toast className="fixed bottom-4 left-1/2 z-10 m-0 w-4/5 max-w-none -translate-x-1/2 p-4 md:w-auto">
          <FontAwesomeIcon
            icon={responseMessage.isSuccessful ? faCircleCheck : faCircleXmark}
            className={`text-2xl ${responseMessage.isSuccessful ? "text-green-400" : "text-red-600"}`}
          />
          <div className="mx-3 font-open-sans text-sm">
            {responseMessage.message}
          </div>
          <ToastToggle className="flex items-center justify-center" />
        </Toast>
      )}
    </div>
  );
}
