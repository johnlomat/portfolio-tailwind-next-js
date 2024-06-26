// components/ContactForm.js
import useContactForm from "../../hooks/useContactForm";
import sendEmail from "../../lib/sendEmail";
import { useState } from "react";

export default function ContactForm() {
  const { values, handleChange } = useContactForm();
  const [responseMessage, setResponseMessage] = useState({
    isSuccessful: false,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const req = await sendEmail(values.email, values.subject, values.message);
      if (req.status === 250) {
        setResponseMessage({
          isSuccessful: true,
          message: "Thank you for your message.",
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
    <div className="flex w-full max-w-[31.25rem] items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full rounded bg-white p-8 font-montserrat font-bold uppercase shadow-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            id="name"
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            id="message"
            className="w-full rounded border px-3 py-2"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full rounded border-2 border-black bg-transparent px-4 py-2 font-bold uppercase text-black hover:bg-black hover:text-white"
        >
          Send
        </button>
      </form>
    </div>
  );
}
