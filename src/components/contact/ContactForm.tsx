"use client";

import { useState } from "react";
import { Button } from "../common/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Contact Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Please enter username here"
            className="bg-soft-cream w-full px-4 py-2 border rounded focus:ring-sky-9 focus:ring-opacity-50"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Please enter email here"
            className="bg-soft-cream w-full px-4 py-2 border rounded focus:ring-sky-9 focus:ring-opacity-50"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Please enter your message here"
            rows={4}
            className="bg-soft-cream w-full px-4 py-2 border rounded focus:ring-sky-9 focus:ring-opacity-50"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default ContactForm;
