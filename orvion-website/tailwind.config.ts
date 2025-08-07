// import { type Config } from 'tailwindcss';

// const config: Config = {
//   content: [
//     './app/**/*.{ts,tsx}',
//     './components/**/*.{ts,tsx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#ff0000', // Orvion Red
//         background: '#ffffff', // Clean White
//         dark: '#0f0f0f',
//       },
//       fontFamily: {
//         sans: ['Inter', 'sans-serif'],
//         display: ['Poppins', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;

// // ✅ Hero.tsx basic structure (motion + Tailwind + CTA)
// 'use client';

// import { motion } from 'framer-motion';

// export default function Hero() {
//   return (
//     <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white text-black">
//       <motion.h1
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-5xl md:text-7xl font-display font-bold"
//       >
//         ORVION
//       </motion.h1>
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.8 }}
//         className="mt-4 text-lg max-w-xl"
//       >
//         Redefining luxury fashion — one iconic piece at a time.
//       </motion.p>
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="mt-8 px-6 py-3 bg-primary text-white rounded-2xl shadow-lg font-semibold text-lg"
//       >
//         Explore Collection
//       </motion.button>
//     </section>
//   );
// }
