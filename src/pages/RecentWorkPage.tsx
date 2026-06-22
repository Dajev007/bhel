import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Settings, Target, Flame, Wrench, AlertTriangle, ArrowRight, Phone, CheckCircle } from 'lucide-react';

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
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
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
          {projects.map((project, index) => {
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
      <CTASection />
    </>
  );
}
