"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Heart, User } from "lucide-react";
import modalImg from "@/public/images/a2.jpg";
import Image from "next/image";
import { useShop } from "@/context/ShopContext";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const { cart, wishlist } = useShop();
  const { isSignedIn } = useUser();

  return (
    <>
    <nav className="w-full border-b bg-white fixed top-0 left-0 shadow-md z-[999]">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Shop<span className="text-blue-500">Now</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 font-medium">
          <Link href="/" className="hover:text-blue-500 cursor-pointer transition-all duration-300 nav-link">Home</Link>
          <Link href="/shop" className="hover:text-blue-500 cursor-pointer transition-all duration-300 nav-link">Shop</Link>
          <Link href="/about" className="hover:text-blue-500 cursor-pointer transition-all duration-300 nav-link">About</Link>
          <Link href="/contact" className="hover:text-blue-500 cursor-pointer transition-all duration-300 nav-link">Contact</Link>
          <Link href="/deals" className="hover:text-blue-500 cursor-pointer transition-all duration-300 nav-link">Deals</Link>
          <Link href="/blog" className="hover:text-blue-500 cursor-pointer transition-all duration-300 nav-link">Blog</Link>
        </ul>

        <div className="flex gap-2">
            <button onClick={() => setLoginOpen(true)} className="flex gap-4 items-center px-4 py-2 bg-black text-white rounded-md hover:bg-white transition-all duration-300 cursor-pointer border hover:border-black hover:text-black">Login <span><User /></span></button>
        </div>

        
    {isSignedIn ? (
    <UserButton />
  ) : (
    <SignInButton mode="modal">
      <button className="flex gap-4 items-center px-4 py-2 bg-black text-white rounded-md hover:bg-white transition-all duration-300 border hover:border-black hover:text-black">
        Sign in with google <User />
      </button>
    </SignInButton>
  )}

        <ul className="flex items-center gap-4">
            <Link href="/wishlist" className="relative"><Heart className="w-6 h-6 cursor-pointer hover:text-red-500 transition-all duration-300" /><span className="absolute top-0 left-4 w-4 h-4 bg-orange-700 rounded-full flex items-center justify-center text-white">{wishlist.length}</span></Link>
            <Link href="/cart" className="relative"><ShoppingCart className="w-6 h-6 cursor-pointer hover:text-blue-500 transition-all duration-300"/><span className="absolute top-0 left-4 w-4 h-4 bg-orange-700 rounded-full flex items-center justify-center text-white">{cart.length}</span></Link>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      
        <div
  className={`md:hidden flex flex-col gap-4 text-center border-t overflow-hidden transition-all duration-300 ease-in-out
  ${open ? "max-h-60 opacity-100 py-4" : "max-h-0 opacity-0 py-0"}`}
>
          <Link href="/" className="hover:text-blue-500 cursor-pointer transition-all duration-300 nav-link-mobile">Home</Link>
          <Link href="/shop" className="hover:text-blue-500 cursor-pointer transition-all duration-300 nav-link-mobile">Shop</Link>
          <Link href="about" className="hover:text-blue-500 cursor-pointer transition-all duration-300 nav-link-mobile">About</Link>
          <Link href="/contact" className="hover:text-blue-500 cursor-pointer transition-all duration-300 nav-link-mobile">Contact</Link>
          <Link href="/deals" className="hover:text-blue-500 cursor-pointer transition-all duration-300 nav-link-mobile">Deals</Link>
          <Link href="/deals" className="hover:text-blue-500 cursor-pointer transition-all duration-300 nav-link-mobile">Blog</Link>
        </div>
      
    </nav>

<div className={`fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 transition-all duration-300
${loginOpen 
  ? "opacity-100 scale-100 translate-y-0" 
  : "opacity-0 scale-95 translate-y-4 pointer-events-none"
}`}> 
    <div className="bg-white w-[90%] md:w-[900px] md:h-[500px] p-6 rounded-2xl shadow-2xl relative transition-all duration-300 ease-out">

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3 h-full">

        <div className="modal-form h-full flex flex-col gap-3">       
      {/* Close */}
      <button
        onClick={() => setLoginOpen(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl hover:rotate-90 transition-transform"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold mb-4">Login</h2>


        <label htmlFor="">Email:</label>
      <input
        type="email"
        placeholder="Email"
        className="w-full border mb-3 border-gray-200 p-3 rounded-xl 
focus:outline-none focus:ring-2 focus:ring-blue-500
transition-all duration-200"
      />

<label htmlFor="">Password:</label>
      <input
        type="password"
        placeholder="Password"
        className="w-full border mb-3 border-gray-200 p-3 rounded-xl 
focus:outline-none focus:ring-2 focus:ring-blue-500
transition-all duration-200"
      />

      <button
   onClick={() => {
  setLoginOpen(false);
  setSignupOpen(true);
}}  
      className="w-full bg-black rounded-xl font-medium tracking-wide text-white py-2 hover:bg-white hover:text-black border hover:border-black transition-all duration-300 cursor-pointer hover:scale-[1.02]">
        Sign In
      </button>


    </div>


    <div className="modal-bg relative w-full h-full">
        <Image 
  src="/images/a2.jpg" 
  alt="login"
  fill
  className="object-cover rounded-r-2xl"
/>
    </div>


        </div>
    </div>
</div>

<div className={`fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 transition-all duration-300
${signupOpen ? "scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none"}`}>

    <div className="bg-white w-[90%] md:w-[900px] md:h-[500px] p-6 rounded-xl shadow-lg relative transition-all duration-300 ease-out">

      {/* Close */}
      <button
        onClick={() => setSignupOpen(false)}
        className="absolute top-3 right-3 text-xl hover:rotate-90 transition-transform"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

      <input className="w-full border p-2 mb-3 rounded" placeholder="Name" />
      <input className="w-full border p-2 mb-3 rounded" placeholder="Email" />
      <input className="w-full border p-2 mb-4 rounded" placeholder="Password" />

      <button className="w-full bg-black text-white py-2 rounded-full">
        Create Account
      </button>

    </div>

  </div>

    </>
  );
}




