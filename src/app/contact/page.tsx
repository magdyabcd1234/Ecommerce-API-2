"use client";

import { motion } from "framer-motion";
import { useState } from "react";


export default function ContactPage() {
      const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors: any = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Invalid email";
    }

    if (form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (validate()) {
      setSuccess(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setErrors({});
    } else {
      setSuccess(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-5xl font-black text-[#0f172a]">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-4">
            We are here to help you anytime. Reach out and we’ll respond fast.
          </p>
        </motion.div>

        {/* MAP SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
        >
<div className="bg-white p-10 rounded shadow">
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.761!2d31.23571231511552!3d30.04441988187843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840b5c6c9b3a7%3A0x2c4d1f0f0f0f0f0f!2sCairo%2C%20Egypt!5e0!3m2!1sen!2sus!4v1690000000000"
  width="100%"
  height="500"
  loading="lazy"
  className="w-full rounded-2xl"
></iframe>
</div>
        </motion.div>

        {/* CONTACT INFO */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {[
            {
              title: "Email",
              value: "support@shop.com",
            },
            {
              title: "Phone",
              value: "+20 100 000 0000",
            },
            {
              title: "Location",
              value: "Cairo, Egypt",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -8 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100"
            >
              <h3 className="font-bold text-[#0f172a]">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-10">

            <div className="grid md:grid-cols-2 gap-6">

              {/* NAME */}
              <div>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 border rounded-xl"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 border rounded-xl"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

            </div>

            {/* MESSAGE */}
            <div className="mt-6">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                className="w-full p-4 border rounded-xl"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="mt-6 bg-[#0f172a] text-white px-8 py-4 rounded-xl"
            >
              Send Message
            </button>

            {/* SUCCESS */}
            {success && (
              <p className="text-green-600 mt-4">
                Message sent successfully 🚀
              </p>
            )}

          </form>

      </div>
    </div>
  );
}