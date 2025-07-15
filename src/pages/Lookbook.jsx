import React from "react";
import { motion } from "framer-motion";
motion

import img1 from "../assets/Tshirt/polob1.jpg";
import lookh from "../assets/lookbook-4.jpg";
import img2 from "../assets/Tshirt/polob.jpeg";
import img3 from "../assets/Tshirt/reg2.jpg";
import img4 from "../assets/Tshirt/reg1.jpg";
import img5 from "../assets/Tshirt/pol4.jpeg";
import img6 from "../assets/Tshirt/pol5.jpeg";
import img7 from "../assets/Tshirt/polo2.jpg";
import img8 from "../assets/Tshirt/polo3.jpg";
import img9 from "../assets/Tshirt/over 5c.png";
import img10 from "../assets/Tshirt/over1.jpeg";

// ✅ Create array using imported values
const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
];

const Lookbook = () => {
  return (
    <div className="bg-neutral-950 text-stone-100 font-sans antialiased">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] md:h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent z-10" />
        <img
          src={lookh}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-xs tracking-[0.5em] uppercase text-stone-400">
              Spring Collection
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif uppercase tracking-tight leading-[0.9] mb-8"
          >
            <span className="block font-light">The Art of</span>
            <span className="block mt-2 md:mt-4">Silhouette</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-24 h-px bg-stone-400 mx-auto my-6 transform origin-left"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-stone-300 text-sm sm:text-base max-w-md mx-auto font-light tracking-wide"
          >
            A visual narrative exploring form and texture through contemporary elegance
          </motion.p>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-12 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20 px-4">
            <h2 className="text-2xl md:text-3xl font-serif uppercase tracking-wider mb-4">
              The Collection
            </h2>
            <div className="w-16 h-px bg-stone-700 mx-auto" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 sm:gap-2">
            {images.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 0.98 }}
                className="relative overflow-hidden group aspect-[3/4]"
              >
                <img
                  src={img}
                  alt={`Look ${i + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 md:p-6">
                  <div>
                    <span className="text-xs tracking-wider text-stone-300 font-light">
                      Look {i + 1}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATEMENT SECTION */}
      <section className="py-16 md:py-28 px-6 sm:px-8 bg-neutral-950 border-t border-stone-800">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif uppercase tracking-wider mb-6 leading-tight">
              <span className="font-light">Every Frame</span> A Statement
            </h2>
            <div className="w-20 h-px bg-stone-700 mx-auto my-6" />
            <p className="text-stone-400 text-sm sm:text-base leading-relaxed font-light tracking-wide">
              Shot in natural tones with bold silhouettes, this collection transcends fashion to become wearable art. Each piece is designed to interact with light and space, creating dynamic visual interest.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FULL BLEED SHOWCASE */}
      <section className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-neutral-950/60 z-10" />
        <img 
          src={images[5]} 
          alt="Showcase" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-6 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif uppercase tracking-wider mb-4">
              Crafted for Movement
            </h3>
            <div className="w-16 h-px bg-stone-400 mx-auto my-6" />
            <p className="text-stone-300 text-sm sm:text-base font-light mb-8">
              Our signature tailoring combines structure with fluidity, allowing each garment to move with the body while maintaining its architectural form.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Lookbook;