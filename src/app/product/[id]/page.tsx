"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { ShoppingCart, Heart } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export default function ProductDetails() {
  const { id } = useParams() as { id: string };
    type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);




  const {
    toggleCartItem,
    toggleWishlistItem,
    wishlist,
    cart,
  } = useShop();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading)
    return <div className="p-10 text-center">Loading...</div>;

  if (!product)
    return <div className="p-10 text-center">Product not found</div>;

  const inCart = cart.some((item) => item.id === product.id);
  const inWishlist = wishlist.some((item) => item.id === product.id);

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10 mt-28 mb-52">
      
      {/* Image */}
      <div className="rounded-2xl overflow-hidden bg-gray-300 p-10">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-[400px] object-cover hover:scale-110 transition-all duration-300"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-4 flex justify-center">
        <h1 className="text-3xl font-bold">{product.title}</h1>

        <p className="text-gray-600">{product.description}</p>

        <p className="text-2xl font-semibold">
          ${product.price}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">

          <button
            onClick={() => toggleCartItem(product)}
            className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-3 rounded-xl hover:bg-white hover:text-black border hover:border-black transition-all duration-300"
          >
            <ShoppingCart />
            {inCart ? "Remove from Cart" : "Add to Cart"}
          </button>

          <button
            onClick={() => toggleWishlistItem(product)}
            className="p-3 border rounded-xl hover:bg-black hover:text-white transition-all duration-300"
          >
            <Heart
              className={
                inWishlist ? "fill-red-500 text-red-500" : ""
              }
            />
          </button>

        </div>
      </div>
    </div>
  );
}