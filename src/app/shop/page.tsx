

"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useShop } from "@/context/ShopContext";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";


export default function ShopPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const { wishlist, toggleCartItem, toggleWishlistItem } =
    useShop();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");
  const [maxPrice, setMaxPrice] = useState(5000);

  const limit = 8;

  /* ================= FETCH PRODUCTS ================= */
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          "https://dummyjson.com/products?limit=194"
        );

        await new Promise((resolve) =>
          setTimeout(resolve, 2000)
        );

        setProducts(res.data.products);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  /* ================= FILTER PRODUCTS ================= */
  const filteredProducts = products.filter(
    (product: any) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const matchesPrice =
        product.price <= maxPrice;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPrice
      );
    }
  );

  /* ================= PAGINATION ================= */
  const totalPages = Math.ceil(
    filteredProducts.length / limit
  );

  const startIndex =
    (currentPage - 1) * limit;

  const endIndex = startIndex + limit;

  const paginatedProducts =
    filteredProducts.slice(
      startIndex,
      endIndex
    );

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((p) => p - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((p) => p + 1);
    }
  };

  const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

  return (
    <motion.section  initial={{
    opacity: 0,
    scale: 0.98,
    y: 30,
  }}
  animate={{
    opacity: 1,
    scale: 1,
    y: 0,
  }}
  transition={{
    duration: 0.7,
    ease: "easeOut",
  }}
 className="py-24 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* ================= SIDEBAR ================= */}
          <aside className="lg:w-1/4 bg-white p-5 rounded-2xl shadow-sm h-fit sticky top-24">

            {/* Search */}
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              type="text"
              placeholder="Search..."
              className="w-full border p-2 rounded-lg mb-4"
            />

            {/* Categories */}
            <h3 className="font-bold mb-2">
              Category
            </h3>

            <ul className="space-y-2">
              {[
                "All",
                "beauty",
                "fragrances",
                "furniture",
                "groceries",
                "home-decoration",
                "kitchen-accessories",
              ].map((cat) => (
                <li
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`cursor-pointer transition flex items-center gap-2 ${
                    selectedCategory === cat
                      ? "text-black font-bold"
                      : "text-gray-600"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={
                      selectedCategory === cat
                    }
                    readOnly
                  />

                  {cat}
                </li>
              ))}
            </ul>

            {/* Price */}
            <h3 className="font-bold mt-6 mb-2">
              Price Range
            </h3>

            <input
              type="range"
              min="0"
              max="5000"
              value={maxPrice}
              onChange={(e) => {
                setMaxPrice(
                  Number(e.target.value)
                );
                setCurrentPage(1);
              }}
              className="w-full"
            />

            <p className="text-sm text-gray-500 mt-2">
              Price Range: $0 - ${maxPrice}
            </p>

            {/* Reset */}
            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
                setMaxPrice(5000);
                setCurrentPage(1);
              }}
              className="mt-6 w-full bg-black text-white py-2 rounded-lg hover:bg-white hover:text-black border hover:border-black transition"
            >
              Reset Filters
            </button>
          </aside>

          {/* ================= PRODUCTS ================= */}
          <div className="lg:w-3/4">

            <motion.div variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {loading ? (
                <div className="col-span-full flex items-center justify-center min-h-[60vh]">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-40 h-40 object-contain"
                  >
                    <source
                      src="/Loading3.webm"
                      type="video/webm"
                    />
                  </video>
                </div>
              ) : paginatedProducts.length > 0 ? (
                paginatedProducts.map(
                  (product: any) => (
                    <motion.div
                    variants={cardVariants}
                     whileHover={{
                          y: -8,
                       scale: 1.02,
                           }}
                         transition={{
                       type: "spring",
                       stiffness: 260,
                      damping: 20,
                      }}
                      key={product.id}
                      className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition group relative"
                    >

                      {/* Image */}
                      <Link
                        href={`/product/${product.id}`}
                      >
                        <div className="relative h-48">
                          <Image
                            src={product.thumbnail}
                            alt={product.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </Link>

                      {/* Wishlist */}
                      <div className="absolute top-3 right-3 bg-black w-12 h-12 opacity-0 group-hover:opacity-100 rounded-full transition-all duration-300 flex items-center justify-center">
                        <button
                          onClick={() =>
                            toggleWishlistItem(
                              product
                            )
                          }
                        >
                          <Heart
                            size={18}
                            className={
                              wishlist.some(
                                (item) =>
                                  item.id ===
                                  product.id
                              )
                                ? "fill-red-500 text-red-500"
                                : "text-white"
                            }
                          />
                        </button>
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <Link
                          href={`/product/${product.id}`}
                        >
                          <h3 className="font-semibold truncate">
                            {product.title}
                          </h3>
                        </Link>

                        <p className="text-gray-600 mt-1">
                          ${product.price}
                        </p>

                        <button
                          onClick={() =>
                            toggleCartItem(product)
                          }
                          className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-white hover:text-black border hover:border-black transition"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </motion.div>
                  )
                )
              ) : (
                <div className="col-span-full text-center text-gray-500 text-xl py-20 flex justify-center items-center">
                   <video
      autoPlay
      loop
      muted
      playsInline
      className="w-72 h-72 object-contain"
    >
      <source
        src="/Loading4.webm"
        type="video/webm"
      />
    </video>
                </div>
              )}
            </motion.div>

            {/* ================= PAGINATION ================= */}
            {!loading &&
              totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-10 flex-wrap">

                  {/* Prev */}
                  <button
                    onClick={handlePrev}
                    disabled={
                      currentPage === 1
                    }
                    className="px-4 py-2 border rounded-lg disabled:opacity-50"
                  >
                    Prev
                  </button>

                  {/* First Page */}
                  <button
                    onClick={() =>
                      setCurrentPage(1)
                    }
                    className={`px-4 py-2 border rounded-lg transition ${
                      currentPage === 1
                        ? "bg-black text-white"
                        : "hover:bg-black hover:text-white"
                    }`}
                  >
                    1
                  </button>

                  {/* Dots Before */}
                  {currentPage > 3 && (
                    <span className="px-2 text-gray-500">
                      ...
                    </span>
                  )}

                  {/* Middle Pages */}
                  {Array.from(
                    { length: totalPages },
                    (_, i) => i + 1
                  )
                    .filter(
                      (page) =>
                        page !== 1 &&
                        page !==
                          totalPages &&
                        page >=
                          currentPage - 1 &&
                        page <=
                          currentPage + 1
                    )
                    .map((page) => (
                      <button
                        key={page}
                        onClick={() =>
                          setCurrentPage(
                            page
                          )
                        }
                        className={`px-4 py-2 border rounded-lg transition ${
                          currentPage ===
                          page
                            ? "bg-black text-white"
                            : "hover:bg-black hover:text-white"
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                  {/* Dots After */}
                  {currentPage <
                    totalPages - 2 && (
                    <span className="px-2 text-gray-500">
                      ...
                    </span>
                  )}

                  {/* Last Page */}
                  {totalPages > 1 && (
                    <button
                      onClick={() =>
                        setCurrentPage(
                          totalPages
                        )
                      }
                      className={`px-4 py-2 border rounded-lg transition ${
                        currentPage ===
                        totalPages
                          ? "bg-black text-white"
                          : "hover:bg-black hover:text-white"
                      }`}
                    >
                      {totalPages}
                    </button>
                  )}

                  {/* Next */}
                  <button
                    onClick={handleNext}
                    disabled={
                      currentPage ===
                      totalPages
                    }
                    className="px-4 py-2 border rounded-lg disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}