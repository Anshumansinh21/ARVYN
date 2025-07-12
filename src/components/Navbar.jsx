import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/arvyn dark.PNG';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Collection', path: '/collection' },
    { name: 'Lookbook', path: '/lookbook' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white text-black border-b border-gray-200 fixed w-full top-0 z-50 transition-all duration-300">
      <div className="flex justify-between items-center px-6 md:px-10 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={Logo} alt="ARVYN Logo" className="h-8 w-auto object-contain" />
          <span className="text-xl md:text-2xl font-serif font-light tracking-widest">ARVYN</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8 text-sm  font-medium uppercase tracking-wider">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative group transition duration-300 ${
                location.pathname === link.path ? 'text-black' : 'text-black'
              }`}
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl transition-transform duration-200"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-sm transform transition-transform duration-300 ${
          menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-4 px-6 py-4 text-sm font-light uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`transition-opacity duration-300 ${
                location.pathname === link.path ? 'text-black' : 'text-gray-600'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
