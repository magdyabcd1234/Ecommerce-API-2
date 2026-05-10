"use client";

import { motion } from "framer-motion";
import { Truck, ShieldCheck, Headphones } from "lucide-react";
import brandImg from "@/public/images/section-banner.jpg"

export default function BrandStory() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/section-banner.jpg"
            alt="about"
            className="rounded-2xl shadow-lg hover:scale-110 transition-all duration-300"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >

          <h2 className="text-3xl font-bold">
            Why Shop With Us?
          </h2>

          <p className="text-gray-600">
            We deliver high-quality products with fast shipping,
            secure payment, and 24/7 customer support to ensure
            the best shopping experience.
          </p>

          {/* Features */}
          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <Truck className="text-blue-500" />
              <span>Fast & Free Delivery</span>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-green-500" />
              <span>Secure Payment</span>
            </div>

            <div className="flex items-center gap-3">
              <Headphones className="text-purple-500" />
              <span>24/7 Support</span>
            </div>

          </div>

          <button className="mt-4 bg-black text-white px-6 py-2 rounded-xl hover:scale-105 transition hover:bg-white border hover:border-black hover:text-black">
            Learn More
          </button>

        </motion.div>

      </div>
    </section>
  );
}