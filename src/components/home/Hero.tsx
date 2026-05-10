"use client";

import Image from "next/image";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// modules
import {
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import Link from "next/link";


export default function Hero() {
  return (
    <section className="w-full h-screen py-16">
      <Swiper
        spaceBetween={0}
        effect={"fade"}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <Image
              src="/images/main-slider-01.jpg"
              alt="Hero"
              fill
              priority
              className="object-cover animate-slowZoom"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 animate-fadeUp">
              <h1 className="text-5xl md:text-7xl tracking-wide font-bold mb-4">
                New Collection
              </h1>

              <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-6">
                Discover the latest trends with premium quality and modern style.
              </p>

              <Link href="/shop" className="px-8 py-3 bg-white text-black rounded-full backdrop-blur-md hover:bg-black hover:text-white border border-white transition-all duration-300">
                Shop Now
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <Image
              src="/images/main-slider-02.jpg"
              alt="Hero"
              fill
              className="object-cover animate-slowZoom"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-5xl md:text-7xl tracking-wide font-bold mb-4">
                Summer Sale
              </h1>

              <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-6">
                Up to 50% off on selected products for a limited time.
              </p>

              <button className="px-8 py-3 bg-blue-500 rounded-full backdrop-blur-md hover:bg-blue-600 transition-all duration-300">
                Explore Deals
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <Image
              src="/images/main-slider-03.jpg"
              alt="Hero"
              fill
              className="object-cover animate-slowZoom"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-5xl md:text-7xl tracking-wide font-bold mb-4">
                Modern Fashion
              </h1>

              <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-6">
                Style meets comfort in our newest arrivals.
              </p>

              <button className="px-8 py-3 bg-white text-black rounded-full backdrop-blur-md hover:bg-black hover:text-white border border-white transition-all duration-300">
                Discover More
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}