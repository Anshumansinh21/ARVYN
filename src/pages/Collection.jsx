import React from "react";
import image1 from "../assets/Tshirt/over2.jpeg";
import image2 from "../assets/Tshirt/over3.jpg";
import image3 from "../assets/Tshirt/over4.jpg";

const collections = [
  {
    id: 1,
    title: "Monochrome Elegance",
    subtitle: "Timeless sophistication",
    image: image1,
  },
  {
    id: 2,
    title: "Structured Grace",
    subtitle: "Architectural precision",
    image: image2,
  },
  {
    id: 3,
    title: "Modern Ritual",
    subtitle: "Contemporary refinement",
    image: image3,
  },
];

const Collection = () => {
  return (
    <div className="bg-white text-black">
      {/* Hero Header */}
      <section className="relative text-center py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent -z-10"></div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold uppercase mb-6 tracking-tight">
            <span className="block text-gray-500 text-xl md:text-2xl font-sans font-normal tracking-widest mb-4">
              CURATED SELECTION
            </span>
            The Collection
          </h1>
          <div className="w-24 h-px bg-black mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            A curation of timeless silhouettes crafted for the modern wardrobe.
            Each piece is an embodiment of understated luxury.
          </p>
        </div>
      </section>

      {/* Collection Grid */}
      <section className="px-6 md:px-12 lg:px-24 pb-36">
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-none shadow-sm hover:shadow-lg transition-all duration-700"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[550px] object-cover transform transition-all duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-gold-500 text-sm tracking-widest font-light">
                    COLLECTION PIECE
                  </span>
                  <h3 className="text-white text-3xl font-serif font-medium mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 font-light">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Statement Section */}
      <section className="relative bg-black text-white text-center py-36 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        </div>
        <div className="max-w-4xl mx-auto relative">
          <span className="text-gold-500 text-sm tracking-widest font-light block mb-6">
            PHILOSOPHY
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-light mb-8 leading-tight">
            Crafted for <span className="italic">presence</span>.
          </h2>
          <div className="w-16 h-px bg-white mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-xl mx-auto text-lg leading-relaxed">
            Our collections are defined by architecture, fluidity, and monochrome
            identity — embodying luxury without excess. Each stitch tells a
            story of meticulous craftsmanship.
          </p>
          <button className="mt-12 px-8 py-3 border border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-widest font-light">
            EXPLORE THE MAKING
          </button>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-serif font-light mb-6">
            Experience the collection
          </h3>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Visit our flagship stores to feel the exceptional quality of our
            fabrics and craftsmanship.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-all duration-300 text-sm tracking-widest font-light">
              BOOK AN APPOINTMENT
            </button>
            <button className="px-8 py-3 border border-black text-black bg-transparent hover:bg-black hover:text-white transition-all duration-300 text-sm tracking-widest font-light">
              CONTACT US
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collection;