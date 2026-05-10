"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { Variants, easeOut } from "framer-motion";

import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
} from "lucide-react";

import { useShop } from "@/context/ShopContext";


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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
export default function CartPage() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeCartItem,
  } = useShop();

  // ================= TOTAL PRICE =================
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const shipping = subtotal > 0 ? 20 : 0;

  const total = subtotal + shipping;

  // ================= EMPTY CART =================
  if (cart.length === 0) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <ShoppingBag
          size={70}
          className="text-gray-300"
        />

        <h2 className="text-3xl font-bold mt-6">
          Your cart is empty
        </h2>

        <p className="text-gray-500 mt-2">
          Looks like you haven’t added anything yet.
        </p>

        <Link
          href="/shop"
          className="mt-6 bg-black text-white hover:text-black border hover:border-black hover:bg-white px-6 py-3 rounded-xl transition-all duration-300"
        >
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Shopping Cart
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your products and checkout
          </p>
        </div>

        {/* Layout */}
        <motion.div   variants={containerVariants}
  initial="hidden"
  animate="visible"
 className="grid lg:grid-cols-3 gap-8">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">

            {cart.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-5 shadow-sm flex flex-col md:flex-row gap-5"
              >

                {/* Image */}
                <div className="relative w-full md:w-40 h-40 rounded-xl overflow-hidden bg-gray-100 hover:scale-110 transition-all duration-300">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-between">

                  <div>
                    <h2 className="text-xl font-semibold">
                      {item.title}
                    </h2>

                    <p className="text-gray-500 mt-2 line-clamp-2">
                      {item.description}
                    </p>

                    <p className="mt-3 font-bold text-lg">
                      ${item.price}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mt-5">

                    {/* Quantity */}
                    <div className="flex items-center gap-3 border rounded-xl px-3 py-2">

                      <button
                        onClick={() =>
                          decreaseQty(item.id)
                        }
                        className="hover:text-red-500 transition"
                      >
                        <Minus size={18} />
                      </button>

                      <span className="font-medium">
                        {item.qty}
                      </span>

                      <button
                        onClick={() =>
                          increaseQty(item.id)
                        }
                        className="hover:text-green-500 transition"
                      >
                        <Plus size={18} />
                      </button>

                    </div>

                    {/* Total */}
                    <div className="font-bold text-lg">
                      $
                      {(
                        item.price * item.qty
                      ).toFixed(2)}
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() =>
                        removeCartItem(item.id)
                      }
                      className="text-red-500 hover:scale-110 transition"
                    >
                      <Trash2 size={20} />
                    </button>

                  </div>

                </div>
              </motion.div>
            ))}

          </div>

          {/* RIGHT SIDE */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 shadow-sm h-fit sticky top-24">

            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>${shipping}</span>
              </div>

              <div className="border-t pt-4 flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

            </div>

            {/* Checkout */}
            <Link
              href="/checkout"
              className="mt-8 block text-center  py-3 rounded-xl border bg-black hover:border-black text-white hover:text-black hover:bg-white transition"
            >
              Proceed to Checkout
            </Link>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}