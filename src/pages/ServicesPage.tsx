import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Settings, Flame, Target, Cog, CircleDot, AlertTriangle,
  CheckCircle, ArrowRight, Phone, Gauge, Truck, Clock, Shield,
} from 'lucide-react';

const services = [
  {
    id: 'line-boring',
    icon: <Settings className="w-8 h-8" />,
    title: 'Mobile Line Boring',
    tagline: 'On-site precision boring — no dismantling required.',
    description: 'BHEL Engineering offers professional mobile line boring services across Perth and all of Western Australia. Using our state-of-the-art Hofmann Triangle portable line boring equipment, we restore worn or damaged bores to precise OEM specifications — directly on your site.',
    image: '/img/Mobile-Line-Boring-Service.jpg',
    details: [
      'We service bores from 38mm up to 500mm+ in diameter',
      'No need to dismantle or transport heavy machinery',
      'Ideal for excavators, haul trucks, loaders, crushers, and more',
      'Bore welding available to restore worn or undersized bores before reboring',
      'Results verified with precision measuring instruments',
      'Available across Perth metro, Goldfields, Pilbara, and all regional WA',
    ],
    applications: ['Excavator bucket & stick pins', 'Haul truck suspension pins', 'Crusher frames & mainframes', 'Dragline components', 'Loader linkages', 'Marine & industrial machinery'],
    specs: [{ label: 'Bore Range', value: '38mm – 500mm+' }, { label: 'Equipment', value: 'Hofmann Triangle' }, { label: 'Service', value: 'Fully Mobile' }, { label: 'Availability', value: '24/7 Emergency' }],
    color: 'from-blue-600 to-primary-700',
  },
  {
    id: 'fabrication',
    icon: <Flame className="w-8 h-8" />,
    title: 'Light Fabrication & Welding',
    tagline: 'Custom metalwork and welding — built to your exact spec.',
    description: "BHEL Engineering provides professional light fabrication and welding services for mining, construction, and industrial clients across Western Australia. Our qualified welders and fabricators deliver high-quality results — on-site or at your facility.",
    image: '/img/Light-Fabrication-Welding-Home.jpg',
    details: [
      'MIG, TIG, and Stick welding capabilities',
      'Custom sheet metal work and structural fabrication',
      'Part repair, modification, and custom component manufacturing',
      'Structural steel fabrication and modification',
      'Hard-facing and build-up welding for wear components',
      'Compliant with Australian welding standards',
    ],
    applications: ['Equipment brackets & mounts', 'Wear plates & liners', 'Custom jigs & fixtures', 'Structural repairs', 'Pipeline & vessel work', 'Guard & handrail fabrication'],
    specs: [{ label: 'Welding Types', value: 'MIG / TIG / Stick' }, { label: 'Materials', value: 'Steel, SS, Alloy' }, { label: 'Service', value: 'On-site & Workshop' }, { label: 'Standards', value: 'Australian WIS' }],
    color: 'from-orange-500 to-red-600',
  },
  {
    id: 'bore-facing',
    icon: <Target className="w-8 h-8" />,
    title: 'Bore Facing',
    tagline: 'Restore worn flanges and pivot faces to OEM tolerances.',
    description: 'Our bore facing service restores the mating faces, flanges, and pivot points of heavy machinery components to OEM specification. Using portable facing equipment, we can perform this work directly on-site — minimising downtime and avoiding costly part replacement.',
    image: '/img/Bore-Facing-Service-Home.jpg',
    details: [
      'Restores worn, pitted, or damaged faces to flat and square',
      'Ensures correct seating for bushes, seals, and bearings',
      'Performed on-site with our portable facing tools',
      'Works on pivot pins, flange faces, cylinder mounts, and more',
      'Reduces wear on replacement components by ensuring correct seating',
      'Precision-measured and documented on completion',
    ],
    applications: ['Pivot pin faces', 'Cylinder end caps', 'Flange mating surfaces', 'Bearing housings', 'Slew ring mounting faces', 'Hydraulic cylinder mounts'],
    specs: [{ label: 'Process', value: 'Portable Facing' }, { label: 'Tolerance', value: 'OEM Specification' }, { label: 'Service', value: 'On-site' }, { label: 'Documentation', value: 'Full Report' }],
    color: 'from-primary-600 to-teal-600',
  },
  {
    id: 'mechanical-design',
    icon: <Cog className="w-8 h-8" />,
    title: 'Mechanical Design',
    tagline: 'Custom-engineered tooling and components for your site.',
    description: "When standard solutions don't fit, BHEL Engineering designs, manufactures, and tests custom mechanical components, tools, and jigs tailored to your specific operational needs. From concept to completion, our engineering team ensures every solution is practical, safe, and effective.",
    image: '/img/Mechanical-Design-Service.jpg',
    details: [
      'Custom tool and jig design for specific tasks',
      'Bracket, mount, and adapter fabrication',
      'Reverse engineering of unavailable or obsolete parts',
      'Prototype development and on-site testing',
      'Engineering solutions for unique or non-standard equipment',
      'Full design, manufacture, and delivery service',
    ],
    applications: ['Boring bar aligners', 'Custom lifting devices', 'Maintenance access platforms', 'Specialised repair jigs', 'Adapter plates & flanges', 'Unique component manufacture'],
    specs: [{ label: 'Scope', value: 'Design to Delivery' }, { label: 'Capabilities', value: 'CAD & Prototype' }, { label: 'Materials', value: 'All Metals' }, { label: 'Service', value: 'Site-Specific' }],
    color: 'from-purple-600 to-indigo-700',
  },
  {
    id: 'bush-bearing',
    icon: <CircleDot className="w-8 h-8" />,
    title: 'Bush & Bearing Installation',
    tagline: 'Precise installation with acoustic alignment for longer life.',
    description: 'Proper bush and bearing installation is critical for equipment longevity and performance. BHEL Engineering provides professional on-site installation services using precision tooling and acoustic alignment techniques — ensuring every component is seated correctly and aligned perfectly.',
    image: '/img/Acoustic-alignment.jpg',
    details: [
      'On-site press-fit bush installation with purpose-built tooling',
      'Acoustic alignment techniques for precision fit',
      'Pre-installation bore checking and surface preparation',
      'Greased, sealed, and ready-to-operate on completion',
      'All major brands and custom-manufactured bushes available',
      'Installation records and documentation provided',
    ],
    applications: ['Pin & bush assemblies', 'Bucket & stick pins', 'Slewing ring bearings', 'Track roller bearings', 'Conveyor idler assemblies', 'Hydraulic cylinder eyes'],
    specs: [{ label: 'Method', value: 'Acoustic Alignment' }, { label: 'Tooling', value: 'Purpose-Built' }, { label: 'Service', value: 'On-site' }, { label: 'Result', value: 'OEM Fit & Function' }],
    color: 'from-green-600 to-teal-700',
  },
  {
    id: 'breakdown',
    icon: <AlertTriangle className="w-8 h-8" />,
    title: 'Breakdown Repairs',
    tagline: '24/7 emergency response to keep your operation moving.',
    description: 'When machinery fails, every minute of downtime costs money. BHEL Engineering offers rapid 24/7 breakdown repair services across Perth and regional WA. Our mobile units are fully equipped to diagnose and repair on-site — getting your equipment back in operation as quickly as possible.',
    image: '/img/Breakdown-Repairs-Service-Home.jpg',
    details: [
      '24/7 emergency availability for critical breakdowns',
      'Rapid mobilisation to site — Perth metro and regional WA',
      'Full diagnostic and repair capabilities on-site',
      'Temporary and permanent repair solutions available',
      'Works alongside your maintenance team for fast resolution',
      'Comprehensive breakdown report provided on completion',
    ],
    applications: ['Emergency pin & bore repairs', 'Structural crack repairs', 'Hydraulic system repairs', 'Weld failures & cracks', 'Bearing & bush failures', 'Urgent custom component fabrication'],
    specs: [{ label: 'Availability', value: '24/7 Response' }, { label: 'Coverage', value: 'All of WA' }, { label: 'Response', value: 'Rapid Mobilisation' }, { label: 'Repair Types', value: 'Temp & Permanent' }],
    color: 'from-red-600 to-orange-600',
  },
];

function PageHero() {
  return (
    <section className="relative pt-32 pb-20 bg-primary-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/img/services_hero_banner.png"
          alt="BHEL Engineering Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/80 to-primary-900/40" />
      </div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-6">Our Services</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Precision Engineering{' '}
            <span className="text-accent">Services</span>
          </h1>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl">
            From mobile line boring to custom fabrication, BHEL Engineering delivers industry-leading on-site machining solutions across Western Australia's toughest environments.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Request a Quote <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a href="tel:0861180954" className="btn-outline border-white text-white hover:bg-white hover:text-primary-700 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" /> (08) 6118 0954
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceNav() {
  return (
    <section className="sticky top-20 z-40 bg-white border-b border-secondary-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="flex-shrink-0 px-4 py-2 text-sm font-medium text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors whitespace-nowrap"
            >
              {s.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceDetail({ service, index }: { service: typeof services[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIsVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <section id={service.id} ref={ref} className={`py-24 ${isEven ? 'bg-white' : 'bg-secondary-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-16 items-start ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Content */}
          <div className={isEven ? 'order-1' : 'order-1 lg:order-2'}>
            <div className="flex items-center gap-4 mb-6">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg`}>
                {service.icon}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900">{service.title}</h2>
            </div>
            <p className="text-accent font-semibold text-lg mb-4">{service.tagline}</p>
            <p className="text-secondary-600 leading-relaxed mb-8 text-lg">{service.description}</p>

            <h3 className="text-lg font-bold text-secondary-900 mb-4">What We Offer:</h3>
            <ul className="space-y-3 mb-8">
              {service.details.map((detail) => (
                <li key={detail} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary-600">{detail}</span>
                </li>
              ))}
            </ul>

            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Request This Service <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          {/* Cards */}
          <div className={isEven ? 'order-2' : 'order-2 lg:order-1'}>
            {/* Service Image */}
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg mb-8 group">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {service.specs.map((spec) => (
                <div key={spec.label} className="bg-white rounded-2xl p-6 shadow-md border border-secondary-100 text-center">
                  <div className="text-2xl font-bold text-primary-700 mb-1">{spec.value}</div>
                  <div className="text-secondary-500 text-sm">{spec.label}</div>
                </div>
              ))}
            </div>

            {/* Applications */}
            <div className="bg-primary-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-5">Typical Applications</h3>
              <div className="grid grid-cols-2 gap-3">
                {service.applications.map((app) => (
                  <div key={app} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-primary-200 text-sm">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick contact */}
            <div className="mt-6 bg-accent/10 border border-accent/20 rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-secondary-700 font-medium">Need this service urgently?</p>
                <a href="tel:0861180954" className="text-accent font-bold text-lg hover:underline">(08) 6118 0954</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilitiesBanner() {
  return (
    <section className="py-16 bg-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { icon: <Gauge className="w-8 h-8 text-accent mx-auto mb-3" />, title: '38mm–500mm+', sub: 'Bore Range' },
            { icon: <Truck className="w-8 h-8 text-accent mx-auto mb-3" />, title: 'All of WA', sub: 'Service Coverage' },
            { icon: <Clock className="w-8 h-8 text-accent mx-auto mb-3" />, title: '24/7', sub: 'Emergency Response' },
            { icon: <Shield className="w-8 h-8 text-accent mx-auto mb-3" />, title: 'OEM Spec', sub: 'Precision Guaranteed' },
          ].map((item) => (
            <div key={item.title}>
              {item.icon}
              <div className="text-white font-bold text-xl">{item.title}</div>
              <div className="text-primary-200 text-sm">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // slight timeout to ensure DOM is rendered, then scroll with offset for sticky nav
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // adjust for sticky header/navigation height
          window.scrollBy(0, -80);
        }, 60);
      }
    }
  }, [location]);
  return (
    <>
      <title>Services – BHEL Engineering | Mobile Line Boring Perth WA</title>
      <PageHero />
      <ServiceNav />
      {services.map((service, index) => (
        <ServiceDetail key={service.id} service={service} index={index} />
      ))}
      <CapabilitiesBanner />
      <section className="py-20 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-secondary-600 mb-8">Contact us today for a fast, free quote on any of our services.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">Get a Free Quote <ArrowRight className="w-5 h-5 ml-2" /></Link>
            <a href="tel:0861180954" className="btn-outline text-lg px-8 py-4"><Phone className="w-5 h-5 mr-2" /> Call Us Now</a>
          </div>
        </div>
      </section>
    </>
  );
}
