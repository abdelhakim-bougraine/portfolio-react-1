import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // دالة باش نعرفو واش الرابط هو اللي خدام دابا (Active)
  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/', icon: 'fa-home' },
    { name: 'About', path: '/about', icon: 'fa-user' },
    { name: 'Education', path: '/education', icon: 'fa-graduation-cap' },
    { name: 'Experience', path: '/experience', icon: 'fa-briefcase' },
    { name: 'Projects', path: '/projects', icon: 'fa-code' },
    { name: 'Contact', path: '/contact', icon: 'fa-envelope' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-yellow-600/20 py-3 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-3">
        
        {/* Logo & Mobile Toggle */}
        <div className="w-full lg:w-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600 tracking-tighter">
            AB.
          </Link>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-yellow-500 focus:outline-none p-1"
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`${isOpen ? 'flex' : 'hidden'} lg:flex flex-col items-center gap-2 w-full lg:w-auto transition-all duration-300`}>
          <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-3 text-[10px] font-black uppercase tracking-[0.15em]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center transition-colors duration-300 ${
                  isActive(link.path) ? 'text-yellow-500' : 'text-white/70 hover:text-yellow-500'
                }`}
              >
                <i className={`fas ${link.icon} text-yellow-500/50 mr-1.5`}></i>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link 
            to="/contact" 
            className="bg-yellow-500 border border-yellow-500 text-black px-4 py-1.5 rounded-full font-black text-[9px] uppercase tracking-widest hover:bg-transparent hover:text-yellow-500 transition-all"
          >
            Hire Me
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;