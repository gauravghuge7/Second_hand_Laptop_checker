"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"; // Shadcn Button
import { Input } from "@/components/ui/input"; // Shadcn Input
import { Textarea } from "@/components/ui/textarea"; // Shadcn Textarea

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Placeholder for API submission logic
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black to-gray-900 px-6 py-16">
      <div className="bg-gray-800 rounded-xl shadow-2xl p-8 max-w-lg w-full border border-gray-700 transition-transform transform hover:scale-105 duration-300">
        <h2 className="text-3xl font-extrabold text-center text-white mb-6">
          Contact <span className="text-cyan-400">MputeTest</span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2 font-medium">Name</label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full bg-gray-700 text-white border-gray-600 focus:border-cyan-500 focus:ring-cyan-500 placeholder-gray-400"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2 font-medium">Email</label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full bg-gray-700 text-white border-gray-600 focus:border-cyan-500 focus:ring-cyan-500 placeholder-gray-400"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2 font-medium">Message</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Your Message"
              className="w-full bg-gray-700 text-white border-gray-600 focus:border-cyan-500 focus:ring-cyan-500 placeholder-gray-400"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-full py-3 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-cyan-500/50"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}