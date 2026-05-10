"use client";

import { motion } from "framer-motion";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper/modules";

import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Michael Smith",
    review:
      "Amazing quality and super fast delivery. Definitely ordering again!",
    image: "/images/team-01.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    review:
      "The products look even better in real life. Highly recommended.",
    image: "/images/team-02.jpg",
  },
  {
    id: 3,
    name: "David Brown",
    review:
      "Excellent customer support and premium experience overall.",
    image: "/images/team-03.jpg",
  },

    {
    id: 4,
    name: "Mohamed Magdy",
    review:
      "Excellent customer support and premium experience overall.",
    image: "/images/team-04.jpg",
  },

    {
    id: 5,
    name: "Ahmed Salem",
    review:
      "Excellent customer support and premium experience overall.",
    image: "/images/team-05.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            What Our Customers Say 💬
          </h2>

          <p className="text-gray-500 mt-2">
            Trusted by thousands of happy customers worldwide
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >

          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 h-full "
              >

                {/* User */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                    {/* Stars */}
                    <div className="flex text-yellow-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill="currentColor"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Review */}
                <p className="text-gray-600 leading-relaxed">
                  "{item.review}"
                </p>

              </motion.div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
}