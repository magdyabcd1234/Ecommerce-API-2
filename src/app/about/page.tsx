"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="min-h-screen bg-[#f7f7f7] py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[6px] text-gray-500 mb-4">
              About Us
            </p>

            <h1 className="text-5xl md:text-6xl font-black leading-tight text-black">
              We Create Modern Shopping Experiences.
            </h1>

            <p className="text-gray-600 mt-6 text-lg leading-8 max-w-xl">
              Our mission is to combine elegant design, smooth user experience,
              and premium quality products into one modern ecommerce platform.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-black text-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black border border-black transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
                Explore Shop
              </button>

              <button className="bg-white text-black px-8 py-4 rounded-2xl border border-gray-300 hover:border-black transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-black/5 rounded-full blur-3xl" />

            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop"
              alt="About"
              className="rounded-[40px] shadow-2xl object-cover h-[600px] w-full hover:scale-[1.03] transition-transform duration-500"
            />
          </motion.div>
        </div>

        {/* STATS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-28"
        >
          {[
            {
              number: "10K+",
              title: "Happy Customers",
            },
            {
              number: "500+",
              title: "Premium Products",
            },
            {
              number: "24/7",
              title: "Customer Support",
            },
            {
              number: "99%",
              title: "Positive Reviews",
            },
          ].map((item) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              key={item.title}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <h2 className="text-4xl font-black text-black">
                {item.number}
              </h2>

              <p className="text-gray-500 mt-3 text-lg">
                {item.title}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* WHY CHOOSE US */}
        <div className="mt-32">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="uppercase tracking-[5px] text-gray-500 text-sm">
              Why Choose Us
            </p>

            <h2 className="text-5xl font-black mt-5 leading-tight">
              Designed For Modern Customers
            </h2>

            <p className="text-gray-600 mt-6 text-lg leading-8">
              Every detail is crafted carefully to deliver a premium shopping
              experience with smooth interactions and clean interfaces.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          >
            {[
              {
                title: "Fast Delivery",
                desc: "Quick and reliable shipping for every order.",
              },
              {
                title: "Premium Quality",
                desc: "Products carefully selected with top quality.",
              },
              {
                title: "Secure Payments",
                desc: "Safe and trusted checkout experience.",
              },
              {
                title: "Modern UI",
                desc: "Elegant and smooth shopping interface.",
              },
              {
                title: "Easy Returns",
                desc: "Simple and customer-friendly return policy.",
              },
              {
                title: "24/7 Support",
                desc: "Always available to help our customers.",
              },
            ].map((feature) => (
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                key={feature.title}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl border border-gray-100 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center text-2xl font-bold mb-6 group-hover:rotate-6 transition-transform duration-300">
                  ✦
                </div>

                <h3 className="text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 bg-black rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-white/5 backdrop-blur-3xl" />

          <div className="relative z-10">
            <p className="uppercase tracking-[5px] text-gray-300 text-sm">
              Start Shopping
            </p>

            <h2 className="text-4xl md:text-6xl font-black mt-6 leading-tight max-w-4xl mx-auto">
              Upgrade Your Lifestyle With Premium Products.
            </h2>

            <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto leading-8">
              Explore our modern collection and discover products designed to
              improve your everyday experience.
            </p>

            <div className="mt-10">
              <Link
                href="/shop"
                className="bg-white text-black px-10 py-4 rounded-2xl font-semibold hover:scale-110 shadow-2xl hover:bg-black hover:text-white border hover:border-white transition-all duration-300 inline-block"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}