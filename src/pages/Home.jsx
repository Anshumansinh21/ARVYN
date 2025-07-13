import { motion } from "framer-motion";
import philosophyImage from "../assets/homeh3.jpg";
import home2 from "../assets/homeh1.jpg";
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

motion

export default function Home() {
 

  return (
    <div className="bg-white text-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-black/50 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        <motion.img
          src={philosophyImage}
          className="absolute inset-0 w-full h-full object-cover"
          
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif mb-6 tracking-tight text-white drop-shadow-lg">
            ARVYN
          </h1>
          
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-sm sm:text-xl font-light uppercase tracking-[0.3em] border-t border-b border-white/70 py-2 sm:py-3 text-white/90"
            >
              Redefining Contemporary Elegance
            </motion.p>
          </div>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-px bg-white/70 mt-6 sm:mt-8 origin-left max-w-xs mx-auto"
          />
        </motion.div>
        
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

      {/* Philosophy Section - Now mobile responsive */}
      <section className="min-h-screen relative">
        <div className="absolute inset-0 flex flex-col md:grid md:grid-cols-2">
          {/* Image Column - Full width on mobile, half on desktop */}
          <div className="relative h-96 md:h-auto w-full md:w-auto">
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
          
          {/* Text Column - Full width on mobile, half on desktop */}
          <div className="bg-white flex items-center p-8 sm:p-12 md:p-16 lg:p-24 w-full">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-full"
            >
              <div className="flex items-center mb-6 md:mb-8">
                <div className="w-12 md:w-16 h-px bg-black mr-3 md:mr-4" />
                <p className="text-xs sm:text-sm uppercase tracking-widest">Philosophy</p>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6 md:mb-8 leading-tight">
                Crafting Timeless Narratives
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-gray-600 mb-6 md:mb-8">
                At ARVYN, we transcend trends to create pieces that become
                heirlooms. Our philosophy is rooted in the belief that true
                luxury lies in impeccable craftsmanship and thoughtful design.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-600">
                Each collection is a dialogue between tradition and innovation,
                where every stitch carries intention and every silhouette tells
                a story of refined elegance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="relative py-16 sm:py-24 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/5"
              initial={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                width: Math.random() * 10 + 2,
                height: Math.random() * 10 + 2,
              }}
              animate={{
                x: [null, Math.random() * 100],
                y: [null, Math.random() * 100],
                transition: {
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1] 
              } 
            }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-20 text-center"
          >
            <motion.h2 
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-4"
              whileHover={{
                backgroundImage: 'linear-gradient(90deg, #fff, #aaa, #fff)',
                backgroundSize: '200% auto',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                transition: { 
                  duration: 1.5,
                  repeat: Infinity 
                }
              }}
            >
              Featured Collection
            </motion.h2>
            <motion.div 
              className="h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto w-1/2"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 1.5 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[collection1, collection2, collection3].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60, rotate: i % 2 ? -2 : 2 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  rotate: 0,
                  transition: { 
                    duration: 0.8, 
                    delay: i * 0.15,
                    ease: [0.16, 1, 0.3, 1] 
                  } 
                }}
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[3/4]">
                  <motion.img
                    src={img}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ 
                      scale: 1.1,
                      filter: "brightness(1.1)",
                      transition: { duration: 0.8 }
                    }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.4 }}
                  />
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 w-full p-4 sm:p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ 
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.1 } 
                  }}
                >
                  <motion.h3 
                    className="text-xl sm:text-2xl lg:text-3xl font-serif mb-1 sm:mb-2"
                    whileHover={{
                      x: [0, 5, -5, 0],
                      transition: { duration: 0.6 }
                    }}
                  >
                    Collection 0{i+1}
                  </motion.h3>
                  <motion.button
                    className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest"
                    whileHover={{ 
                      gap: 6,
                      transition: { type: "spring", stiffness: 500 }
                    }}
                  >
                    <span>Discover</span>
                    <motion.span
                      animate={{
                        x: [0, 5, 0],
                        transition: { 
                          duration: 1.5,
                          repeat: Infinity 
                        }
                      }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </motion.div>

                <motion.div 
                  className="absolute inset-0 border-2 border-white/20 rounded-xl sm:rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  whileHover={{
                    borderColor: "rgba(255,255,255,0.5)",
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex justify-center mt-12 sm:mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: { delay: 0.6 } 
            }}
            viewport={{ once: true }}
          >
            <motion.button
              className="px-8 sm:px-12 py-3 sm:py-4 bg-white text-black rounded-full font-medium relative overflow-hidden text-sm sm:text-base"
              whileHover={{
                backgroundColor: "#000",
                color: "#fff",
                border: "1px solid white"
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="relative z-10">View All Collections</span>
              <motion.div 
                className="absolute inset-0 bg-black origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Lookbook Section */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-px bg-black mr-3 sm:mr-4" />
              <p className="text-xs sm:text-sm uppercase tracking-widest">Lookbook</p>
              <div className="w-8 sm:w-12 h-px bg-black ml-3 sm:ml-4" />
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif mb-2 sm:mb-4">Curated Ensembles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-lg">
              Explore the versatility of ARVYN through our seasonal styling narratives
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
            {[look1, look2, look3, look4, look5].map((img, i) => (
              <motion.div
                key={i}
                className={`relative group overflow-hidden ${i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: i === 0 ? "-100px" : "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className={`${i === 0 ? 'aspect-[4/5] sm:aspect-[3/4]' : 'aspect-[3/4]'} w-full`}>
                  <img
                    src={img}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    alt={`Lookbook ${i+1}`}
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-3 sm:p-4 md:p-6">
                  <div className="self-end">
                    <motion.span 
                      className="inline-block bg-white text-black px-2 sm:px-3 py-1 text-xs uppercase tracking-widest"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                    >
                      View
                    </motion.span>
                  </div>
                  <div>
                    <motion.p
                      className="text-white text-sm sm:text-lg font-medium mb-1"
                      initial={{ y: 10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      Look {i+1}
                    </motion.p>
                    <motion.p
                      className="text-white/80 text-xs sm:text-sm"
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

      {/* Quote Section with Video - Mobile Optimized */}
      <section className="min-h-screen relative flex items-center justify-center bg-black text-white overflow-hidden">
        {/* Fallback image for mobile devices that don't support autoplay */}
        <div className="md:hidden absolute inset-0">
          <img src={home2} className="w-full h-full object-cover opacity-70" alt="Background" />
        </div>
        
        {/* Video background - hidden on mobile, shown on desktop */}
        <div className="hidden md:block absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          >
            <source src={bgvid} type="video/mp4" />
          </video>
        </div>
        
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        <motion.div
          className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <svg
            viewBox="0 0 48 24"
            className="w-12 sm:w-16 h-6 sm:h-8 mx-auto mb-8 sm:mb-12 fill-white"
          >
            <path d="M0,12 C8,12 12,8 12,0 C12,8 16,12 24,12 C16,12 12,16 12,24 C12,16 8,12 0,12 Z M24,12 C32,12 36,8 36,0 C36,8 40,12 48,12 C40,12 36,16 36,24 C36,16 32,12 24,12 Z" />
          </svg>
          <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif italic leading-tight mb-8 sm:mb-12">
            "Elegance is not about being noticed, it's about being remembered.
            True style is the perfect balance between who you are and who you
            aspire to be."
          </blockquote>
          <div className="h-px w-16 sm:w-24 bg-white mx-auto mb-6 sm:mb-8" />
          <p className="text-xs sm:text-sm uppercase tracking-widest">— Arvyn</p>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-6">Experience ARVYN</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base">
              Visit our flagship store or explore the complete collection online
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link to="/collection">
                <button className="px-6 sm:px-8 py-2 sm:py-3 bg-black text-white text-xs sm:text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors w-full sm:w-auto">
                  Discover Collections
                </button>
              </Link>

              <Link to="/contact">
                <button className="px-6 sm:px-8 py-2 sm:py-3 border border-black text-xs sm:text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all w-full sm:w-auto">
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