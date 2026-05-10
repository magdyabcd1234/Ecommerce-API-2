"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "How to Choose the Best Products Online",
    desc: "A complete guide to smart shopping and avoiding bad purchases.",
    tag: "Shopping",
  },
  {
    id: 2,
    title: "Top 10 Ecommerce Trends in 2026",
    desc: "Discover what’s shaping the future of online shopping.",
    tag: "Trends",
  },
  {
    id: 3,
    title: "Why UX Matters in Ecommerce",
    desc: "How design directly affects sales and user trust.",
    tag: "UX",
  },
  {
    id: 4,
    title: "Building Trust in Online Stores",
    desc: "Strategies to increase customer confidence and conversions.",
    tag: "Business",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-black text-[#0f172a]">
            Our Blog
          </h1>
          <p className="text-gray-600 mt-4">
            Insights, tips and trends in modern ecommerce
          </p>
        </motion.div>

        {/* FEATURED */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-white rounded-3xl overflow-hidden shadow-xl border mb-12 grid md:grid-cols-2"
        >
          <div className="p-10 flex flex-col justify-center">
            <span className="text-sm text-gray-500 uppercase">
              Featured Article
            </span>

            <h2 className="text-3xl font-bold mt-3">
              How Ecommerce UX Impacts Sales
            </h2>

            <p className="text-gray-600 mt-4">
              A deep dive into how user experience design directly influences
              conversion rates and customer satisfaction.
            </p>

            <button className="mt-6 bg-black text-white px-6 py-3 rounded-xl w-fit hover:bg-white hover:text-black border transition">
              Read More
            </button>
          </div>

          <div className="bg-gray-200 h-64 md:h-auto" />
        </motion.div>

        {/* BLOG GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              whileHover={{ y: -6 }}
              className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-xl transition"
            >

              <span className="text-xs bg-black text-white px-3 py-1 rounded-full">
                {blog.tag}
              </span>

              <h3 className="font-bold text-xl mt-4">
                {blog.title}
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                {blog.desc}
              </p>

              <Link
                href={`/blog/${blog.id}`}
                className="inline-block mt-4 text-black font-medium hover:underline"
              >
                Read more →
              </Link>

            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
}