"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart,  ShoppingCart } from "lucide-react";
import axios from "axios";
import Link from "next/link";
import { useShop } from "@/context/ShopContext";

// Skeleton Card
const ProductSkeleton = () => {
  return (
    <div className="animate-pulse bg-white rounded-2xl overflow-hidden shadow-md">
      <div className="h-60 bg-gray-200" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="h-10 bg-gray-200 rounded-xl" />
      </div>
    </div>
  );
};

export default function FeaturedProducts() {
  type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { cart, wishlist, toggleCartItem, toggleWishlistItem } = useShop();


  // ✅ format price
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

  // ✅ fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const res = await axios.get("https://dummyjson.com/products");

        setProducts(res.data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured Products
          </h2>
          <p className="text-gray-500 mt-2">
            Discover our most popular items
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <ProductSkeleton key={i} />
              ))
            : products.slice(0,8).map((product: Product, index: number) => (
              
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <Link href={`/product/${product.id}`}>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    </Link>

                    {/* Wishlist */}
                    <button
                      onClick={() => toggleWishlistItem(product)}
                      className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 bg-white p-2 rounded-full shadow-md hover:scale-110 transition z-50 hover:bg-black hover:text-white"
                    >
                      <Heart
                        size={18}
                        className={
                          wishlist.some((item) => item.id === product.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-600"
                        }
                      />
                    </button>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <Link href={`/product/${product.id}`}>
                    <h3 className="font-semibold text-lg truncate">
                      {product.title}
                    </h3>
                    </Link>

                    <p className="text-gray-600 mt-1">
                      {formatPrice(product.price)}
                    </p>

                    <button
                    onClick={() => toggleCartItem(product)} className="mt-4 w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-xl hover:bg-white hover:text-black border hover:border-black transition">
                      <ShoppingCart size={18} />
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
                
              ))}
        </div>
      </div>
    </section>
  );
}