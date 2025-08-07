"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Hydration-safe
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={mounted ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center text-black">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-wide">ORVION</span>
        </Link>
        <nav className="space-x-6 text-sm font-medium uppercase">
          <Link href="/collections" className="hover:text-neutral-600">
            Collections
          </Link>
          <Link href="/about" className="hover:text-neutral-600">
            About
          </Link>
          <Link href="/contact" className="hover:text-neutral-600">
            Contact
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
