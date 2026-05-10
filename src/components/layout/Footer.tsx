"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              Shop<span className="text-blue-500">Now</span>
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Discover premium fashion, modern style, and exclusive deals
              tailored just for you.
            </p>

            {/* Socials */}
            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-blue-500 transition"
              >
                <Mail size={18} />
              </a>

              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-pink-500 transition"
              >
                <Phone size={18} />
              </a>

              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-sky-500 transition"
              >
                <MapPin size={18} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/shop" className="hover:text-white transition">
                  Shop
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Support
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link href="#" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition">
                  Shipping & Returns
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Cairo, Egypt</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+20 100 000 0000</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>support@shopnow.com</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
          © 2026 ShopNow. All rights reserved.
        </div>

      </div>
    </footer>
  );
}