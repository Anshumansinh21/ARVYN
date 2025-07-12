import { motion, useScroll, useTransform } from "framer-motion";
// import hero from "../assets/hero-model.jpg";
import philosophyImage from "../assets/Tshirt/polo1.jpg";
import hero from "../assets/Tshirt/pol5.jpeg";
import collection1 from "../assets/collection-1.jpg";
import collection2 from "../assets/collection-2.jpg";
import collection3 from "../assets/collection-3.jpg";
import look1 from "../assets/lookbook-1.jpg";
import look2 from "../assets/lookbook-2.jpg";
import look3 from "../assets/lookbook-3.jpg";
import look4 from "../assets/lookbook-4.jpg";
import look5 from "../assets/lookbook-5.jpg";
import bgvid from "../assets/bgvid.mp4";

import { Link } from 'react-router-dom';


export default function Home() {
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], [0, -200]);

  motion

  return (
    <div className="bg-white text-black overflow-x-hidden">
{/* Hero Section - Enhanced Visibility */}
<section className="h-screen relative overflow-hidden">
  {/* Darker overlay for better text contrast */}
  <motion.div 
    className="absolute inset-0 bg-black/50 z-10"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
  />
  
  {/* Background image with parallax */}
  <motion.img
    src={philosophyImage}
    className="absolute inset-0 w-full h-full object-cover"
    style={{ y: yPos }}
    initial={{ scale: 1.2 }}
    animate={{ scale: 1 }}
    transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
  />
  
  {/* Text content container */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
    className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4"
  >
    {/* Main title with text shadow */}
    <h1 className="text-7xl md:text-8xl font-serif mb-6 tracking-tight text-white drop-shadow-lg">
      ARVYN
    </h1>
    
    <div className="overflow-hidden">
      {/* Subtitle with improved contrast */}
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-xl font-light uppercase tracking-[0.3em] border-t border-b border-white/70 py-3 text-white/90"
      >
        Redefining Contemporary Elegance
      </motion.p>
    </div>
    
    {/* Animated divider */}
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: 1.2, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      className="h-px bg-white/70 mt-8 origin-left max-w-xs mx-auto"
    />
  </motion.div>
  
  {/* Scroll indicator */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5, duration: 1 }}
    className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
  >
    <p className="text-sm tracking-widest mb-2 text-white/80">SCROLL</p>
    <div className="w-px h-16 bg-white/60">
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="w-0.5 h-4 bg-white"
      />
    </div>
  </motion.div>
</section>

      {/* Philosophy Section - Split Screen with Reveal */}
      <section className="min-h-screen relative">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
          <div className="relative overflow-hidden">
            <motion.img
              src={hero}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
              className="absolute inset-0 bg-black/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
          </div>
          <div className="bg-white flex items-center p-12 md:p-24">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="flex items-center mb-8">
                <div className="w-16 h-px bg-black mr-4" />
                <p className="text-sm uppercase tracking-widest">Philosophy</p>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">
                Crafting Timeless Narratives
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 mb-8">
                At ARVYN, we transcend trends to create pieces that become
                heirlooms. Our philosophy is rooted in the belief that true
                luxury lies in impeccable craftsmanship and thoughtful design.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Each collection is a dialogue between tradition and innovation,
                where every stitch carries intention and every silhouette tells
                a story of refined elegance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Collection - Full Width Carousel Effect */}
      <section className="py-36 bg-black text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-between items-end mb-16"
          >
            <h2 className="text-5xl font-serif">Featured Collection</h2>
            <p className="text-sm uppercase tracking-widest">SS/24</p>
          </motion.div>
          
          <div className="relative h-[80vh]">
            {[collection1, collection2, collection3].map((img, i) => (
              <motion.div
                key={i}
                className={`absolute inset-0 overflow-hidden rounded-lg ${i === 0 ? 'z-30' : i === 1 ? 'z-20' : 'z-10'}`}
                initial={{ x: i === 0 ? 0 : i === 1 ? '30%' : '60%', scale: i === 0 ? 1 : 0.9 }}
                whileInView={{ 
                  x: i === 0 ? 0 : i === 1 ? '20%' : '40%',
                  transition: { duration: 1, delay: i * 0.2 }
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute bottom-0 left-0 p-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <h3 className="text-2xl font-serif mb-2">Collection 0{i+1}</h3>
                  <button className="text-sm uppercase tracking-widest border-b border-white pb-1 hover:opacity-70 transition-opacity">
                    Explore
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    {/* Lookbook - Enhanced Masonry Grid */}
<section className="py-24 px-6 bg-white">
  <div className="container mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center mb-6">
        <div className="w-12 h-px bg-black mr-4" />
        <p className="text-sm uppercase tracking-widest">Lookbook</p>
        <div className="w-12 h-px bg-black ml-4" />
      </div>
      <h2 className="text-4xl md:text-5xl font-serif mb-4">Curated Ensembles</h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        Explore the versatility of ARVYN through our seasonal styling narratives
      </p>
    </motion.div>
    
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {[look1, look2, look3, look4, look5].map((img, i) => (
        <motion.div
          key={i}
          className={`relative group overflow-hidden ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: i === 0 ? "-100px" : "-50px" }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
        >
          {/* Image container with aspect ratio */}
          <div className={`${i === 0 ? 'aspect-[4/5] md:aspect-[3/4]' : 'aspect-[3/4]'} w-full`}>
            <img
              src={img}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              alt={`Lookbook ${i+1}`}
            />
          </div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6">
            <div className="self-end">
              <motion.span 
                className="inline-block bg-white text-black px-3 py-1 text-xs uppercase tracking-widest"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
              >
                View
              </motion.span>
            </div>
            <div>
              <motion.p
                className="text-white text-lg font-medium mb-1"
                initial={{ y: 10, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Look {i+1}
              </motion.p>
              <motion.p
                className="text-white/80 text-sm"
                initial={{ y: 10, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Spring/Summer 2024
              </motion.p>
            </div>
          </div>
        </motion.div>
      ))}
      
     
        
     
    </div>
  </div>
</section>

      {/* Quote Section - Full Screen Video Background */}
      <section className="min-h-screen relative flex items-center justify-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        >
          <source src={bgvid} type="video/mp4" />
        </video>
        <motion.div
          className="relative z-20 text-center px-6 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <svg
            viewBox="0 0 48 24"
            className="w-16 h-8 mx-auto mb-12 fill-white"
          >
            <path d="M0,12 C8,12 12,8 12,0 C12,8 16,12 24,12 C16,12 12,16 12,24 C12,16 8,12 0,12 Z M24,12 C32,12 36,8 36,0 C36,8 40,12 48,12 C40,12 36,16 36,24 C36,16 32,12 24,12 Z" />
          </svg>
          <blockquote className="text-3xl md:text-5xl font-serif italic leading-tight mb-12">
            "Elegance is not about being noticed, it's about being remembered.
            True style is the perfect balance between who you are and who you
            aspire to be."
          </blockquote>
          <div className="h-px w-24 bg-white mx-auto mb-8" />
          <p className="text-sm uppercase tracking-widest">— Arvyn</p>
        </motion.div>
      </section>

      {/* CTA Section - Minimalist */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif mb-6">Experience ARVYN</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              Visit our flagship store or explore the complete collection online
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/collection">
              <button className="px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors">
                Discover Collections
              </button>
               </Link>

               <Link to="/contact">
              <button className="px-8 py-3 border border-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                Book Appointment
              </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}