"use client";

import Link from "next/link";
import Image from "next/image";
import { Trash2, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useShop } from "@/context/ShopContext";

export default function WishlistPage() {
  const { wishlist, toggleWishlistItem } = useShop();

  const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};


const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

  // empty state
  if (wishlist.length === 0) {
    return (
      <motion.div   initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }} className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <Heart size={70} className="text-gray-300" />

        <h2 className="text-3xl font-bold mt-6">
          Your wishlist is empty
        </h2>

        <p className="text-gray-500 mt-2">
          Save your favorite products here ❤️
        </p>

        <Link
          href="/shop"
          className=" mt-6 bg-black text-white hover:text-black border hover:border-black hover:bg-white px-6 py-3 rounded-xl transition-all duration-300"
        >
          Browse Products
        </Link>
      </motion.div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-10">
          My Wishlist
        </h1>

        <motion.div variants={container} initial="hidden" animate="show" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {wishlist.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
  initial="hidden"
  animate="show"
              className="bg-white rounded-2xl shadow-sm overflow-hidden group"
            >

              {/* image */}
              <Link href={`/product/${item.id}`}>
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition"
                  />
                </div>
              </Link>

              {/* info */}
              <div className="p-4">

                <Link href={`/product/${item.id}`}>
                  <h3 className="font-semibold text-lg truncate">
                    {item.title}
                  </h3>
                </Link>

                <p className="text-gray-600 mt-1">
                  ${item.price}
                </p>

                <button
                  onClick={() => toggleWishlistItem(item)}
                  className="mt-4 w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition"
                >
                  <Trash2 size={18} />
                  Remove
                </button>

              </div>

            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}