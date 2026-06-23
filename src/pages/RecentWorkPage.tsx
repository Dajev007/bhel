import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Settings, Target, Wrench, AlertTriangle, ArrowRight, Phone, CheckCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Crusher Mainframe Bore Restoration',
    location: 'Pilbara Region, WA',
    service: 'Mobile Line Boring',
    icon: <Settings className="w-8 h-8 text-white" />,
    color: 'bg-primary-700',
    description: 'Emergency response to a major iron ore site where a primary crusher mainframe suffered severe bore wear. We mobilized within 24 hours with our Hofmann Triangle equipment.',
    results: [
      'Bore diameter 450mm restored to exact OEM specification.',
      'Saved the client an estimated $120,000 in transport and downtime costs.',
      'Completed over a 48-hour continuous shift to minimize operational impact.',
    ],
  },
  {
    id: 2,
    title: 'Excavator Bucket Stick Pin Repair',
    location: 'Kalgoorlie, WA',
    service: 'Bore Welding & Facing',
    icon: <Target className="w-8 h-8 text-white" />,
    color: 'bg-accent',
    description: 'A 300-tonne excavator experienced catastrophic failure of the stick pin. BHEL was called in to perform on-site bore welding followed by precision line boring and face restoration.',
    results: [
      'Fully mobile repair completed at the active mine face.',
      'Integrated bore welding and facing in a single setup.',
      'Zero safety incidents during a high-risk heavy lift operation.',
    ],
  },
  {
    id: 3,
    title: 'Custom Lifting Jigs Fabrication',
    location: 'Perth Metro, WA',
    service: 'Mechanical Design & Fabrication',
    icon: <Wrench className="w-8 h-8 text-white" />,
    color: 'bg-purple-600',
    description: 'A construction client required specialized lifting jigs for a unique architectural steel installation. We designed, tested, and fabricated the required components.',
    results: [
      'Engineered from scratch based on structural requirements.',
      'Fabricated using high-tensile steel and certified welded.',
      'Delivered 3 days ahead of the critical lift schedule.',
    ],
  },
  {
    id: 4,
    title: 'Haul Truck Suspension Bush Replacement',
    location: 'Newman, WA',
    service: 'Bush & Bearing Installation',
    icon: <AlertTriangle className="w-8 h-8 text-white" />,
    color: 'bg-orange-600',
    description: 'Planned maintenance shutdown requiring the replacement of all suspension bushes on a fleet of CAT 793 haul trucks using acoustic alignment.',
    results: [
      'Completed 12 trucks within the tight 7-day shutdown window.',
      'Acoustic alignment ensured perfect seating, increasing expected part lifespan.',
      'Client awarded BHEL ongoing fleet maintenance contract.',
    ],
  },
];

function PageHero() {
  return (
    <section className="relative pt-32 pb-20 bg-primary-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/img/recent_work_hero_banner.png"
          alt="BHEL Engineering Recent Work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/80 to-primary-900/40" />
      </div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-6">Our Portfolio</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Recent <span className="text-accent">Work</span>
          </h1>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl">
            Explore some of our recent on-site machining, fabrication, and repair projects delivered across Western Australia's most demanding industrial environments.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProjectList() {
  return (
    <section className="py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {projects.map((project) => {
            return (
              <div 
                key={project.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row transition-all duration-700"
              >
                {/* Visual Block */}
                <div className={`lg:w-2/5 p-12 flex flex-col justify-center items-center text-center ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                      {project.icon}
                    </div>
                    <span className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-bold tracking-wide uppercase mb-2">
                      {project.service}
                    </span>
                    <p className="text-white/80 font-medium">{project.location}</p>
                  </div>
                </div>
                
                {/* Content Block */}
                <div className="lg:w-3/5 p-8 lg:p-12">
                  <h2 className="text-3xl font-bold text-secondary-900 mb-4">{project.title}</h2>
                  <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <h3 className="text-sm font-bold text-secondary-900 uppercase tracking-wider mb-4">Project Outcomes</h3>
                  <ul className="space-y-3 mb-8">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-secondary-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact" className="inline-flex items-center font-bold text-primary-600 hover:text-accent transition-colors">
                    Need similar work done? Contact us <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectGallery() {
  const categories = ['All', 'Line Boring', 'Welding & Fabrication', 'Bore Facing & Alignment'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryImages = [
    { src: '/img/1.jpg', category: 'Line Boring', title: 'On-site Line Boring' },
    { src: '/img/2.jpg', category: 'Line Boring', title: 'Precision Boring Setup' },
    { src: '/img/3.jpg', category: 'Welding & Fabrication', title: 'Heavy Component Welding' },
    { src: '/img/4.jpg', category: 'Bore Facing & Alignment', title: 'Flange Bore Facing' },
    { src: '/img/5.jpg', category: 'Line Boring', title: 'Mobile Machining Setup' },
    { src: '/img/6.jpg', category: 'Welding & Fabrication', title: 'Certified Structural Welding' },
    { src: '/img/7.jpg', category: 'Bore Facing & Alignment', title: 'Alignment Inspection' },
    { src: '/img/8.jpg', category: 'Welding & Fabrication', title: 'Component Hard-facing' },
    { src: '/img/9.jpg', category: 'Bore Facing & Alignment', title: 'Precision Alignment' },
    { src: '/img/10.jpg', category: 'Line Boring', title: 'Completed Bore Restoration' },
    { src: '/img/11.jpg', category: 'Welding & Fabrication', title: 'Lifting Jig Fabrication' },
    { src: '/img/12.jpg', category: 'Bore Facing & Alignment', title: 'On-site Flange Reconditioning' },
    { src: '/img/13.jpg', category: 'Line Boring', title: 'Hofmann Triangle Boring' },
    { src: '/img/14.jpg', category: 'Welding & Fabrication', title: 'On-site Bucket Welds' },
    { src: '/img/15.jpg', category: 'Bore Facing & Alignment', title: 'Final Face Inspection' }
  ];

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section className="py-24 bg-white border-t border-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">Gallery</span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">On-Site Project Gallery</h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">Take a visual tour of our mobile line boring, welding, and facing operations in the field.</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setLightboxIndex(null);
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary-700 text-white shadow-lg'
                  : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, index) => (
            <div
              key={img.src}
              onClick={() => setLightboxIndex(index)}
              className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-accent text-xs font-bold uppercase tracking-wider block mb-1">{img.category}</span>
                <h4 className="text-white text-lg font-bold">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          <button 
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <button 
            onClick={handlePrev}
            className="absolute left-6 text-white/70 hover:text-white p-3 hover:bg-white/10 rounded-full transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="max-w-4xl max-h-[80vh] flex flex-col items-center">
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].title}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="text-center mt-4">
              <span className="text-accent text-xs font-bold uppercase tracking-wider block mb-1">
                {filteredImages[lightboxIndex].category}
              </span>
              <h4 className="text-white text-xl font-bold">
                {filteredImages[lightboxIndex].title}
              </h4>
            </div>
          </div>

          <button 
            onClick={handleNext}
            className="absolute right-6 text-white/70 hover:text-white p-3 hover:bg-white/10 rounded-full transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-white border-t border-secondary-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Have a Project in Mind?</h2>
        <p className="text-xl text-secondary-600 mb-8">Our expert team is ready to tackle your most complex on-site engineering challenges.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-primary text-lg px-8 py-4">Request a Quote <ArrowRight className="w-5 h-5 ml-2" /></Link>
          <a href="tel:0861180954" className="btn-outline text-lg px-8 py-4"><Phone className="w-5 h-5 mr-2" /> (08) 6118 0954</a>
        </div>
      </div>
    </section>
  );
}

export default function RecentWorkPage() {
  return (
    <>
      <title>Recent Work – BHEL Engineering | Projects Portfolio</title>
      <PageHero />
      <ProjectList />
      <ProjectGallery />
      <CTASection />
    </>
  );
}
