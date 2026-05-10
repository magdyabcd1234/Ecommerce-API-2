"use client";

import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DealsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState("discount");

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          "https://dummyjson.com/products?limit=100"
        );

        setProducts(res.data.products);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDeals();
  }, []);

  // 🔥 Deals filter
  const deals = useMemo(() => {
    return products.filter(
      (p) => p.discountPercentage >= 10
    );
  }, [products]);

  // 🔥 Sorting
  const sortedDeals = useMemo(() => {
    const data = [...deals];

    if (sort === "discount") {
      return data.sort(
        (a, b) =>
          b.discountPercentage - a.discountPercentage
      );
    }

    if (sort === "price") {
      return data.sort((a, b) => a.price - b.price);
    }

    return data;
  }, [deals, sort]);

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-5xl font-black text-black">
            Hot Deals 🔥
          </h1>
          <p className="text-gray-500 mt-3">
            Best discounted products for you
          </p>
        </motion.div>

        {/* SORT */}
        {!loading && (
          <div className="flex justify-end mb-6">
            <select
              value={sort}
              onChange={(e) =>
                setSort(e.target.value)
              }
              className="border p-2 rounded-lg"
            >
              <option value="discount">
                Highest Discount
              </option>
              <option value="price">
                Lowest Price
              </option>
            </select>
          </div>
        )}

        {/* LOADING */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <video
              autoPlay
              loop
              muted
              className="w-40 h-40"
            >
              <source
                src="/Loading4.webm"
                type="video/webm"
              />
            </video>
          </div>
        ) : sortedDeals.length === 0 ? (
          // EMPTY STATE
          <div className="text-center py-20 text-gray-500">
            No deals available right now 🥲
          </div>
        ) : (
          // PRODUCTS
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedDeals.map((product, index) => {
              const oldPrice =
                product.price /
                (1 -
                  product.discountPercentage /
                    100);

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.03,
                  }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-2xl shadow-sm overflow-hidden relative group"
                >
                  {/* BADGE */}
                  <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full z-10">
                    -{Math.round(
                      product.discountPercentage
                    )}
                    %
                  </div>

                  {/* IMAGE */}
                  <Link
                    href={`/product/${product.id}`}
                  >
                    <div className="relative h-48">
                      <Image
                        src={product.thumbnail}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                  </Link>

                  {/* CONTENT */}
                  <div className="p-4">
                    <Link
                      href={`/product/${product.id}`}
                    >
                      <h3 className="font-semibold truncate">
                        {product.title}
                      </h3>
                    </Link>

                    {/* PRICE */}
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-black font-bold">
                        ${product.price}
                      </span>

                      <span className="text-gray-400 line-through text-sm">
                        $
                        {oldPrice.toFixed(0)}
                      </span>
                    </div>

                    <button className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-white hover:text-black border transition">
                      Grab Deal
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}