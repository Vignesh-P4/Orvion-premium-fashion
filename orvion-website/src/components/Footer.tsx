"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-black text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">ORVION</h2>
          <p className="text-sm text-neutral-400">
            Elevating everyday fashion with modern design and timeless style.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/collections" className="hover:text-neutral-300">Collections</Link></li>
            <li><Link href="/about" className="hover:text-neutral-300">About</Link></li>
            <li><Link href="/contact" className="hover:text-neutral-300">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://www.instagram.com/orvionofficial" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-300"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-300"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-300"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Render year only if it's available */}
      <div className="mt-10 text-center text-xs text-neutral-500">
        {year && `© ${year} ORVION. All rights reserved.`}
      </div>
    </footer>
  );
}
