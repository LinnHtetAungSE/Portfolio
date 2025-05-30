"use client";

import { useState } from "react";
import { Button } from "../common/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("Send");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      setStatus("An error occurred.");
    }
  };

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Contact Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Please enter name here"
            className="bg-soft-cream w-full px-4 py-2 border rounded focus:ring-sky-9 focus:ring-opacity-50"
            value={formData.name}
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

        <Button type="submit">{status}</Button>
      </form>
    </div>
  );
};

export default ContactForm;
