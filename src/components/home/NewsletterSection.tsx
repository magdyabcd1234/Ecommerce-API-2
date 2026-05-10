"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-black text-white p-10 md:p-16"
        >

          {/* Background Glow */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10 text-center">

            <h2 className="text-3xl md:text-4xl font-bold">
              Subscribe to Our Newsletter 📩
            </h2>

            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Get exclusive offers, new arrivals, and special discounts
              delivered straight to your inbox.
            </p>

            {/* Form */}
            <form className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-[400px] px-5 py-4 rounded-xl bg-white text-black outline-none border focus:border-blue-600 transition-all duration-300"
              />

              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-white text-black px-6 py-4 rounded-xl font-medium hover:bg-amber-700 hover:text-white transition-all duration-300"
              >
                Subscribe
                <Send size={18} />
              </button>

            </form>

          </div>

        </motion.div>

      </div>
    </section>
  );
}