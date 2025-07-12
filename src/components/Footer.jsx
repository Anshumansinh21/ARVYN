import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-10 py-12 ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand Info */}
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-lg font-serif tracking-widest">ARVYN</h3>
          <p className="text-xs text-gray-400 uppercase">Modern Luxury Wear</p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm uppercase tracking-widest text-gray-400">
          <Link to="/about" className="hover:text-white transition">About</Link>
          <Link to="/collection" className="hover:text-white transition">Collection</Link>
          <Link to="/lookbook" className="hover:text-white transition">Lookbook</Link>
          <Link to="/contact" className="hover:text-white transition">Contact</Link>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-6"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} ARVYN. All rights reserved.</p>
        <p>
          Designed & Developed by{" "}
          <a
            href="https://anshumansinh-pf.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
          >
            The Anshuman Sinh Rathore
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
