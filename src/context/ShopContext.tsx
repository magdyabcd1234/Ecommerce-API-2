"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ShopContext = createContext(undefined);

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [toast, setToast] = useState(null);


  // ================= TOAST =================

  const showToast = (message) => {
  setToast(message);

  setTimeout(() => {
    setToast(null);
  }, 2500);
};

  // ================= CART TOGGLE =================
  const toggleCartItem = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        showToast(`❌ ${product.title} removed from cart`);
        return prev.filter((item) => item.id !== product.id);
      }
      showToast(`🛒 ${product.title} added to cart`);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // ================= WISHLIST TOGGLE =================
  const toggleWishlistItem = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
    

      if (exists) {
        showToast(`💔 ${product.title} removed from wishlist`);
        return prev.filter((item) => item.id !== product.id);
      }
      showToast(`❤️ ${product.title} added to wishlist`);
      return [...prev, product];
    });
  };

  // ================= LOCAL STORAGE LOAD =================
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const savedWishlist = localStorage.getItem("wishlist");

    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
  }, []);

  // ================= LOCAL STORAGE SAVE =================
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // ================= INCREASE QTY =================
const increaseQty = (id) => {
  setCart((prev) =>
    prev.map((item) =>
      item.id === id
        ? { ...item, qty: item.qty + 1 }
        : item
    )
  );
};

// ================= DECREASE QTY =================
const decreaseQty = (id) => {
  setCart((prev) =>
    prev
      .map((item) =>
        item.id === id
          ? { ...item, qty: item.qty - 1 }
          : item
      )
      .filter((item) => item.qty > 0)
  );
};


// ================= REMOVE ITEM =================
const removeCartItem = (id) => {
  setCart((prev) =>
    prev.filter((item) => item.id !== id)
  );
};

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        toggleCartItem,
        toggleWishlistItem,
        increaseQty,
        decreaseQty,
        removeCartItem,
        toast,
        showToast
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

// ================= HOOK =================
export const useShop = () => {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("useShop must be used within ShopProvider");
  }

  return context;
};