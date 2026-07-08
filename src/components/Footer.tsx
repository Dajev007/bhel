import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const services = [
    { label: 'Mobile Line Boring', to: '/services#line-boring' },
    { label: 'Light Fabrication & Welding', to: '/services#fabrication' },
    { label: 'Bore Facing', to: '/services#bore-facing' },
    { label: 'Mechanical Design', to: '/services#mechanical-design' },
    { label: 'Bush & Bearing Installation', to: '/services#bush-bearing' },
    { label: 'Breakdown Repairs', to: '/services#breakdown' },
  ];

  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'About Us', to: '/about' },
    { label: 'Recent Work', to: '/recent-work' },
    { label: 'Blogs', to: '/blogs' },
    { label: 'Contact', to: '/contact' },
  ];

  const serviceAreas = ['Perth', 'Goldfields', 'Pilbara', 'Newman', 'Kalgoorlie', 'Port Hedland'];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6 inline-flex items-center rounded-2xl bg-white/10 p-3">
              <img
                src="/img/BHEL-Engineering-Onsite-Line-Boring-Logo.png"
                alt="BHEL Engineering"
                className="h-12 w-auto object-contain rounded-2xl"
              />
            </div>
            <p className="text-secondary-400 mb-6 leading-relaxed">
              Precision on-site machining solutions for mining, construction, and industrial equipment across Western Australia.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/bhel.engineering"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-300 hover:bg-primary-600 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/bhel.engineering/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-300 hover:bg-primary-600 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/bhelengineering/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-300 hover:bg-primary-600 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="tel:0861180954"
                className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-300 hover:bg-primary-600 hover:text-white transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:bhelengperth@gmail.com"
                className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-300 hover:bg-primary-600 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-secondary-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.to}
                    className="text-secondary-400 hover:text-white transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:0861180954" className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-secondary-400 text-xs mb-0.5">Phone</p>
                  <span className="font-semibold group-hover:text-accent transition-colors">(08) 6118 0954</span>
                </div>
              </a>
              <a href="mailto:bhelengperth@gmail.com" className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-secondary-400 text-xs mb-0.5">Email</p>
                  <span className="font-semibold group-hover:text-accent transition-colors text-sm">bhelengperth@gmail.com</span>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-secondary-400 text-xs mb-0.5">Location</p>
                  <p className="font-semibold">Perth, Western Australia</p>
                  <p className="text-secondary-400 text-sm">WA-6000</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-secondary-400 text-xs font-medium uppercase tracking-wider mb-2">Service Areas</p>
                <div className="flex flex-wrap gap-1">
                  {serviceAreas.map((area) => (
                    <span key={area} className="text-xs bg-secondary-800 text-secondary-300 px-2 py-1 rounded">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-400 text-sm">
              © {new Date().getFullYear()} BHEL Engineering. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-secondary-500">
              <Link to="/services" className="hover:text-secondary-300 transition-colors">Services</Link>
              <Link to="/about" className="hover:text-secondary-300 transition-colors">About</Link>
              <Link to="/contact" className="hover:text-secondary-300 transition-colors">Contact</Link>
            </div>
            <p className="text-secondary-500 text-sm">
              Precision On-Site Machining Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
