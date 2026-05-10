"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper/modules";

const offers = [
  {
    id: 1,
    title: "Summer Sale",
    desc: "Up to 50% OFF",
    image: "/images/gallery-image-01.jpg",
    link: "/shop",
  },
  {
    id: 2,
    title: "New Arrivals",
    desc: "Fresh styles just dropped",
    image: "/images/gallery-image-02.jpg",
    link: "/shop",
  },
  {
    id: 3,
    title: "Accessories Deal",
    desc: "Buy 1 Get 1 Free",
    image: "/images/gallery-main.jpg",
    link: "/shop",
  },

    {
    id: 4,
    title: "Accessories Deal",
    desc: "Buy 1 Get 1 Free",
    image: "/images/gallery-image-15.jpg",
    link: "/shop",
  },

     {
    id: 5,
    title: "Accessories Deal",
    desc: "Buy 1 Get 1 Free",
    image: "/images/gallery-image-16.jpg",
    link: "/shop",
  },
];

export default function OffersSection() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Hot Offers 🔥</h2>
          <p className="text-gray-500 mt-2">
            Don’t miss our exclusive deals
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >

          {offers.map((offer) => (
            <SwiperSlide key={offer.id}>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="relative group rounded-2xl overflow-hidden shadow-lg"
              >

                {/* Image */}
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

                {/* Content */}
                <div className="absolute bottom-0 p-5 text-white space-y-2">
                  <h3 className="text-xl font-bold">
                    {offer.title}
                  </h3>

                  <p className="text-sm text-gray-200">
                    {offer.desc}
                  </p>

                  <Link
                    href={offer.link}
                    className="inline-block mt-2 bg-white text-black px-4 py-1 rounded-lg text-sm font-medium hover:scale-105 hover:bg-black hover:text-white transition"
                  >
                    Shop Now
                  </Link>
                </div>

              </motion.div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
}