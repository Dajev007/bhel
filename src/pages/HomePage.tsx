import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, ChevronDown, Wrench, Flame, Target, Settings, CircleDot,
  AlertTriangle, CheckCircle, Truck, Shield, Award, Users,
  ArrowRight, Gauge, Cog, Clock, MapPin, Star,
} from 'lucide-react';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setIsVisible(true); }, []);

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl animate-pulse-slow animation-delay-500" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-primary-100 text-sm font-medium">Available 24/7 for Breakdowns</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Precision{' '}
              <span className="text-accent">On-Site</span>
              <br />
              Machining Solutions
            </h1>

            <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-xl">
              Mobile line boring, bore welding, fabrication & welding services across Perth and regional WA. 20+ years of machining excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Get a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a href="tel:0861180954" className="btn-outline border-white text-white hover:bg-white hover:text-primary-700 text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                (08) 6118 0954
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { value: '20+', label: 'Years Experience' },
                { value: '500+', label: 'Projects Completed' },
                { value: '24/7', label: 'Support Available' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-primary-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={isVisible ? 'animate-fade-in animation-delay-300' : 'opacity-0'}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 to-accent/30 rounded-3xl blur-2xl animate-pulse-slow" />
              <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Gauge className="w-10 h-10 text-accent mx-auto mb-3" />, title: '38-500mm+', sub: 'Bore Range' },
                    { icon: <Truck className="w-10 h-10 text-accent mx-auto mb-3" />, title: 'Fully Mobile', sub: 'WA-Wide Service' },
                    { icon: <Target className="w-10 h-10 text-accent mx-auto mb-3" />, title: 'OEM Spec', sub: 'Precision Results' },
                    { icon: <Clock className="w-10 h-10 text-accent mx-auto mb-3" />, title: 'Fast Turnaround', sub: 'Minimal Downtime' },
                  ].map((item) => (
                    <div key={item.title} className="bg-white/10 p-6 rounded-2xl text-center">
                      {item.icon}
                      <div className="text-white font-semibold">{item.title}</div>
                      <div className="text-primary-200 text-sm">{item.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#services-overview" className="text-white/60 hover:text-white transition-colors">
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ServicesOverview() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIsVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const services = [
    { icon: <Settings className="w-8 h-8" />, title: 'Mobile Line Boring', desc: 'On-site bore welding & machining (38mm–500mm+) using precision Hofmann Triangle equipment. No dismantling needed.', features: ['On-site service', '38mm–500mm+ range', 'Hofmann equipment'], id: 'line-boring' },
    { icon: <Flame className="w-8 h-8" />, title: 'Light Fabrication & Welding', desc: 'Custom sheet metal work, MIG/TIG/Stick welding, and part fabrication done to spec — fast and precise.', features: ['MIG/TIG/Stick welding', 'Custom fabrication', 'On-site service'], id: 'fabrication' },
    { icon: <Target className="w-8 h-8" />, title: 'Bore Facing', desc: 'Restore worn faces, flanges, and pivot points to OEM spec — ensuring smooth alignment and reduced wear.', features: ['Flange facing', 'Surface reconditioning', 'Precision alignment'], id: 'bore-facing' },
    { icon: <Cog className="w-8 h-8" />, title: 'Mechanical Design', desc: 'We design, build, and test custom tools, brackets, and jigs tailored for your site needs.', features: ['Custom tooling', 'Site-specific solutions', 'Full design service'], id: 'mechanical-design' },
    { icon: <CircleDot className="w-8 h-8" />, title: 'Bush & Bearing Installation', desc: 'Accurate on-site installation with acoustic alignment for longer-lasting machinery performance.', features: ['Precision installation', 'Acoustic alignment', 'Extended equipment life'], id: 'bush-bearing' },
    { icon: <AlertTriangle className="w-8 h-8" />, title: 'Breakdown Repairs', desc: 'Rapid mobile repair for unexpected failures and scheduled servicing to keep your equipment running strong.', features: ['24/7 availability', 'Rapid response', 'Mobile repair unit'], id: 'breakdown' },
  ];

  return (
    <section id="services-overview" ref={ref} className="py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">Our Services</span>
          <h2 className="section-heading mb-4">Comprehensive Engineering Solutions</h2>
          <p className="section-subheading">From mobile line boring to custom fabrication, we deliver precision results on-site across Western Australia.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card group cursor-pointer ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div className="p-8">
                <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-primary-100 group-hover:bg-accent transition-all duration-500">
                  <div className="text-primary-600 group-hover:text-white transition-colors duration-500">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">{service.title}</h3>
                <p className="text-secondary-600 mb-4 leading-relaxed">{service.desc}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-secondary-500">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to={`/services#${service.id}`} className="inline-flex items-center gap-2 text-primary-600 font-semibold group-hover:text-accent transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-secondary text-lg px-8 py-4">
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIsVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const reasons = [
    { icon: <Award className="w-8 h-8" />, title: '20+ Years of Machining Excellence', description: "With nearly two decades in the mining and heavy industrial sectors, we understand the demands of WA's toughest environments. Whether it's line boring on a haul truck or precision facing on a crusher assembly, our solutions are backed by hands-on experience and technical mastery." },
    { icon: <Users className="w-8 h-8" />, title: 'One-Stop Engineering Partner', description: "We don't just line bore. From bore welding, facing, and bush installation to light fabrication and custom component design, BHEL is your all-in-one precision engineering provider. No need to coordinate with multiple vendors." },
    { icon: <Truck className="w-8 h-8" />, title: 'Fully Mobile, On-Site Solutions', description: "Forget the hassle of dismantling and transporting large components. Our fully equipped mobile service vans and trucks bring high-end Hofmann Triangle equipment directly to your site — saving time, cost, and effort." },
    { icon: <Shield className="w-8 h-8" />, title: 'Precision That Meets OEM Standards', description: "We maintain exacting tolerances with every repair — ensuring your equipment operates as reliably as the day it was manufactured. Every job is tested, verified, and documented." },
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">Why Choose Us</span>
          <h2 className="section-heading mb-4">Why Partner with BHEL Engineering</h2>
          <p className="section-subheading">Industry-leading expertise, mobile service, and precision results — delivered where you need them.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`group p-8 bg-secondary-50 rounded-2xl hover:bg-primary-700 transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary-100 group-hover:bg-primary-600 flex items-center justify-center transition-colors duration-500">
                  <div className="text-primary-600 group-hover:text-white transition-colors duration-500">{reason.icon}</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary-900 group-hover:text-white mb-3 transition-colors duration-500">{reason.title}</h3>
                  <p className="text-secondary-600 group-hover:text-primary-100 leading-relaxed transition-colors duration-500">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/about" className="btn-outline text-lg px-8 py-4">
            Learn More About Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIsVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const testimonials = [
    { name: 'John Mitchell', role: 'Site Manager – Pilbara Mining', text: "BHEL's on-site line boring saved us weeks of downtime. Their team was professional, fast, and the results were spot-on to OEM specs. Highly recommend for any mining operation." },
    { name: 'Sarah Chen', role: 'Operations Director – Construction Co.', text: "We've used BHEL for multiple breakdown repairs across our Perth sites. Their 24/7 response time is unmatched and their work quality is consistently excellent." },
    { name: 'Mark Thompson', role: 'Maintenance Engineer – Goldfields', text: "The bore welding and facing work BHEL completed on our crusher was outstanding. They came out to a remote site without hesitation and delivered precision results." },
  ];

  return (
    <section ref={ref} className="py-24 bg-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-4">Client Feedback</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">Trusted by mining, construction, and industrial operations across Western Australia.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-accent fill-accent" />)}
              </div>
              <p className="text-primary-100 leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-semibold">{t.name}</p>
                <p className="text-primary-300 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceAreasPreview() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIsVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const areas = [
    { name: 'Perth', description: 'Metro & Suburbs' },
    { name: 'Goldfields', description: 'Mining Region' },
    { name: 'Pilbara', description: 'Remote Operations' },
    { name: 'Newman', description: 'Mining Town' },
  ];

  return (
    <section ref={ref} className="py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">Coverage Area</span>
          <h2 className="section-heading mb-4">Servicing All of Western Australia</h2>
          <p className="section-subheading">Our mobile units travel across Perth and regional WA to deliver precision machining directly to your site.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div
              key={area.name}
              className={`group bg-white border border-secondary-200 rounded-2xl p-8 text-center hover:bg-primary-700 hover:border-primary-700 transition-all duration-500 shadow-md hover:shadow-xl ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <MapPin className="w-10 h-10 text-accent mx-auto mb-4 group-hover:text-white transition-colors duration-500" />
              <h3 className="text-2xl font-bold text-secondary-900 mb-1 group-hover:text-white transition-colors">{area.name}</h3>
              <p className="text-secondary-500 group-hover:text-primary-200 transition-colors duration-500">{area.description}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in-up animation-delay-500' : 'opacity-0'}`}>
          <p className="text-secondary-600 mb-4">Need service outside these areas? Get in touch — we go where you need us.</p>
          <Link to="/service-areas" className="btn-primary">
            View All Service Areas
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIsVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>
      <div className={`relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
          <Wrench className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-medium">Ready to Get Started?</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Need On-Site Machining Today?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Contact BHEL Engineering for a free quote. We service Perth and all of regional WA — mobile, reliable, and precise.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-accent font-bold rounded-lg hover:bg-primary-50 transition-all duration-300 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5">
            Request a Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          <a href="tel:0861180954" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-accent transition-all duration-300 text-lg">
            <Phone className="w-5 h-5 mr-2" />
            (08) 6118 0954
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <title>Home – BHEL Engineering | On-Site Machining Perth WA</title>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <ServiceAreasPreview />
      <CTABanner />
    </>
  );
}
