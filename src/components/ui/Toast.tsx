"use client";

import { useShop } from "@/context/ShopContext";

export default function Toast() {
  const { toast } = useShop();

  if (!toast) return null;

  return (
    <div className="fixed bottom-5 right-5 bg-black text-white px-4 py-3 rounded-xl shadow-lg z-[9999] animate-bounce">
      {toast}
    </div>
  );
}