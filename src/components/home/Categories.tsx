"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";









const categories = [
  {
    id: 1,
    title: "Men Collection",
    image: "/images/17.jpg",
    link: "/shop",
  },

  {
    id: 2,
    title: "Women Fashion",
    image: "/images/19.jpg",
    link: "/shop",
  },

  {
    id: 3,
    title: "Accessories",
    image: "/images/3.jpg",
    link: "/shop",
  },
];

export default function Categories() {

    const sectionRef = useRef(null);

    const imageRef = useRef([]);

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    // ================= DESKTOP =================
    mm.add("(min-width: 768px)", () => {
      const cards = gsap.utils.toArray(".category-card");

      gsap.from(cards, {
        y: 140,
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: "power4.out",
        willChange: "transform, opacity",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
gsap.utils.toArray<HTMLElement>(".category-img").forEach((img) => {
  const parent = img.closest(".category-card");
  if (!parent) return;

  gsap.to(img, {
    y: -60,
    ease: "none",
    scrollTrigger: {
      trigger: parent,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.7,
    },
  });
});


});

    // ================= MOBILE =================
    mm.add("(max-width: 767px)", () => {
      const cards = gsap.utils.toArray(".category-card");

      gsap.from(cards, {
        y: 80,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);
  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-500 font-semibold uppercase tracking-[4px]">
            Categories
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Shop By Category
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {categories.map((item, index) => (
            <Link
              key={item.id}
              href={item.link}
              className="category-card relative h-[450px] rounded-3xl overflow-hidden group"
            >
              {/* Image */}

              <div className="category-img absolute inset-0"
                 >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="category-img object-cover group-hover:scale-110 transition-transform duration-700"
              />

              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-500" />

              {/* Content */}
              <div className="absolute bottom-10 left-10 text-white z-10">

                <h3 className="text-3xl font-bold mb-4">
                  {item.title}
                </h3>

                <span className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
                  Shop Now
                </span>

              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}