"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

// ================= TYPES =================

type CartItem = {
  id: number;
  title: string;
  price: number;
  qty: number;
  thumbnail: string;
  description: string;
};

type ShopContextType = {
  cart: CartItem[];
  wishlist: any[];
  toggleCartItem: (product: any) => void;
  toggleWishlistItem: (product: any) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  removeCartItem: (id: number) => void;
  toast: string | null;
  showToast: (msg: string) => void;
};

// ================= CONTEXT =================

const ShopContext = createContext<ShopContextType | undefined>(undefined);

// ================= PROVIDER =================

export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<any[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  // ================= TOAST =================
  const showToast = (message: string) => {
    setToast(message);

    setTimeout(() => {
      setToast(null);
    }, 2500);
  };

  // ================= CART =================
  const toggleCartItem = (product: any) => {
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

  // ================= WISHLIST =================
  const toggleWishlistItem = (product: any) => {
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

  // ================= QTY =================
  const increaseQty = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id: number) => {
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

  const removeCartItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
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
        showToast,
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