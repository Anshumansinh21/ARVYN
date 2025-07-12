import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

motion
// Custom Components
const SectionDivider = () => (
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    transition={{ duration: 1.5 }}
    viewport={{ once: true, margin: "-100px" }}
    className="h-px bg-gray-200 my-24 md:my-32"
  />
);

const SectionTitle = ({ children }) => (
  <motion.h2 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: true, margin: "-100px" }}
    className="text-4xl md:text-5xl font-serif font-light mb-12 tracking-wider uppercase"
  >
    {children}
  </motion.h2>
);

const Paragraph = ({ children, className = "" }) => (
  <motion.p 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.4 }}
    viewport={{ once: true }}
    className={`text-lg leading-relaxed text-gray-500 font-light ${className}`}
  >
    {children}
  </motion.p>
);

const About = () => {
  const [heroRef, heroInView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
    <div className="bg-white text-black overflow-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="min-h-screen flex items-center justify-center bg-black text-white text-center px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5 }}
          className="relative z-10"
        >
          <div className="mb-16 overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={heroInView ? { y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-5xl md:text-8xl lg:text-9xl font-serif font-light mb-6 tracking-tight uppercase"
            >
              Arvyn
            </motion.h1>
          </div>
          
          <motion.div
            initial={{ width: 0 }}
            animate={heroInView ? { width: "100%" } : {}}
            transition={{ duration: 2, delay: 0.8 }}
            className="h-px bg-white mx-auto max-w-md"
          />
        </motion.div>
      </section>

      <SectionDivider />

      {/* Essence Section */}
      <section className="py-12 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-sm tracking-widest text-gray-400 uppercase">Est. 2025</span>
          </motion.div>
          
          <SectionTitle>The Essence</SectionTitle>
          
          <div className="space-y-8 max-w-2xl mx-auto">
            <Paragraph>
              Arvyn exists in the space between permanence and progression. Our designs speak through their silence, making statements through precision rather than proclamation.
            </Paragraph>
            <Paragraph>
              Each collection is an exercise in reduction—stripping away the unnecessary to reveal garments of pure intention and enduring relevance.
            </Paragraph>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Philosophy Section */}
      <section className="py-12 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <SectionTitle>Philosophy</SectionTitle>
            <div className="space-y-8">
              <Paragraph>
                We believe true luxury lies in restraint. In the discipline to say no, to edit, to refine until only the essential remains.
              </Paragraph>
              <Paragraph>
                Our approach rejects seasonal trends in favor of designs that transcend time—garments meant to be worn for decades, not just seasons.
              </Paragraph>
              <Paragraph className="text-gray-400 italic">
                "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away."
              </Paragraph>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative"
          >
            <div className="absolute -inset-4 bg-gray-50 -z-10 transform rotate-1"></div>
            <img
              src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=2787&auto=format&fit=crop"
              alt="Arvyn craftsmanship"
              className="w-full h-[500px] object-cover object-center"
            />
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Materials Section */}
      <section className="py-12 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gray-50 -z-10 transform -rotate-1"></div>
            <img
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2787&auto=format&fit=crop"
              alt="Arvyn materials"
              className="w-full h-[500px] object-cover object-center"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Materials</SectionTitle>
            <div className="space-y-8">
              <Paragraph>
                We source only the most exceptional fabrics—each selected for its inherent qualities, its ability to age beautifully, and its minimal environmental impact.
              </Paragraph>
              <Paragraph>
                From rare wool varieties to innovative sustainable textiles, every material meets our exacting standards for quality, durability, and tactile pleasure.
              </Paragraph>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Closing Statement */}
      <section className="py-32 px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Paragraph className="text-2xl md:text-3xl leading-relaxed text-gray-700 mb-12">
            Arvyn is not worn—it is inhabited. A second skin for those who understand that true sophistication whispers.
          </Paragraph>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="h-px bg-gray-200 mt-12 mx-auto max-w-xs"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default About;