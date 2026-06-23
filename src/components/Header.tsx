import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const transparent = isHome && !isScrolled;

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/recent-work', label: 'Recent Work' },
    { to: '/blogs', label: 'Blogs' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent ? 'bg-transparent' : 'bg-white/95 backdrop-blur-md shadow-lg'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/img/BHEL-Engineering-Onsite-Line-Boring-Logo.png"
              alt="BHEL Engineering"
              className="h-12 md:h-14 w-auto rounded-2xl"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-medium transition-colors duration-200 hover:text-accent relative group ${
                    transparent ? 'text-white' : active ? 'text-primary-600' : 'text-secondary-700'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
            <a href="tel:0861180954" className="btn-primary">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${transparent ? 'text-white' : 'text-secondary-700'}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-xl mt-2 p-6 animate-scale-in">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block py-3 font-medium transition-colors border-b border-secondary-100 last:border-0 ${
                  location.pathname === link.to ? 'text-primary-600' : 'text-secondary-700 hover:text-primary-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:0861180954"
              className="btn-primary w-full mt-4"
            >
              <Phone className="w-4 h-4 mr-2" />
              (08) 6118 0954
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
