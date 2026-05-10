"use client";

import { useShop } from "@/context/ShopContext";
import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";
import { Variants, easeOut } from "framer-motion";

export default function CheckoutPage() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [address, setAddress] = useState("");
  const { cart, showToast  } = useShop();

  // ================= TOTALS =================
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const shipping = subtotal > 0 ? 20 : 0;

  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!name || !email || !phone || !address) {
    showToast("⚠️ Please fill all fields");
    return;
  }

  showToast("✅ Order placed successfully");
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

  return (
    <section className="min-h-screen bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Checkout
          </h1>

          <p className="text-gray-500 mt-2">
            Complete your order details
          </p>
        </div>

        {/* Layout */}
        <motion.div   variants={containerVariants}
                initial="hidden"
                animate="visible"
                     className="grid lg:grid-cols-3 gap-8">

          {/* LEFT SIDE */}
          <motion.div variants={itemVariants} className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">

            <h2 className="text-2xl font-bold mb-6">
              Billing Details
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>

              {/* Name */}
              <div>
                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  value={name}
                onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-medium">
                  Email Address
                </label>

                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-2 font-medium">
                  Phone Number
                </label>

                <input
                  value={phone}
                onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  placeholder="Enter your phone"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black transition"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block mb-2 font-medium">
                  Address
                </label>

                <textarea
                  value={address}
            onChange={(e) => setAddress(e.target.value)}
                  rows={4}
                  placeholder="Enter your address"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black transition resize-none"
                />
              </div>

              {/* Payment */}
              <div>
                <label className="block mb-3 font-medium">
                  Payment Method
                </label>

                <div className="space-y-3">

                  <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer hover:border-black transition">
                    <input
                      type="radio"
                      name="payment"
                      defaultChecked
                    />

                    <span>
                      Cash on Delivery
                    </span>
                  </label>

                  <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer hover:border-black transition">
                    <input
                      type="radio"
                      name="payment"
                    />

                    <span>
                      Credit / Debit Card
                    </span>
                  </label>

                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-xl hover:bg-gray-800 transition"
              >
                Place Order
              </button>

            </form>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div variants={itemVariants} whileHover={{ y: -3 }} className="bg-white rounded-2xl p-6 shadow-sm h-fit sticky top-24">

            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            {/* Products */}
            <div className="space-y-4">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4"
                >

                  <div>
                    <h3 className="font-medium">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Qty: {item.qty}
                    </p>
                  </div>

                  <div className="font-semibold">
                    $
                    {(
                      item.price * item.qty
                    ).toFixed(2)}
                  </div>

                </div>
              ))}

            </div>

            {/* Totals */}
            <div className="border-t mt-6 pt-6 space-y-4">

              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>${shipping}</span>
              </div>

              <div className="border-t pt-4 flex justify-between text-xl font-bold">
                <span>Total</span>

                <span>
                  ${total.toFixed(2)}
                </span>
              </div>

            </div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}