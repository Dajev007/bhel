import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Award, Users, Truck, Shield, CheckCircle, ArrowRight, Phone,
  Star, Wrench, Target, Clock, Heart,
} from 'lucide-react';

function PageHero() {
  return (
    <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/img/About-us-side-banner.jpg"
          alt="About BHEL Engineering"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/80 to-primary-900/40" />
      </div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-6">About BHEL Engineering</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Built on Experience,{' '}
            <span className="text-accent">Driven by Precision</span>
          </h1>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl">
            BHEL Engineering has been delivering precision on-site machining solutions to Western Australia's mining, construction, and industrial sectors for over 20 years.
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-lg">
            {[
              { value: '20+', label: 'Years Experience' },
              { value: '500+', label: 'Projects Completed' },
              { value: '24/7', label: 'Emergency Support' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-white">{s.value}</div>
                <div className="text-primary-200 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OurStory() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIsVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[400px]">
            <img
              src="/img/2-1.jpg"
              alt="BHEL Engineering Team at Work"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
          </div>
          <div className="space-y-12">
            <div>
              <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Two Decades of <span className="text-primary-600">Engineering Excellence</span>
              </h2>
              <div className="space-y-5 text-secondary-600 leading-relaxed">
                <p>
                  BHEL Engineering was founded with a simple but powerful vision: to bring high-quality, precision on-site machining directly to the clients who need it most — in the mines, on construction sites, and in industrial facilities across Western Australia.
                </p>
                <p>
                  Over more than two decades, we've built a reputation for technical excellence, reliability, and a genuine commitment to minimising our clients' downtime. Our team understands that every hour of machine downtime costs money, and we work with urgency and precision to get your equipment back in operation.
                </p>
                <p>
                  From our earliest line boring work in Perth's metro region, we've expanded our capabilities and service area to cover the entire state — from the Goldfields and Pilbara to the remote Kimberley region. Wherever you are in WA, BHEL Engineering can come to you.
                </p>
                <p>
                  Today, BHEL Engineering is trusted by some of Western Australia's leading mining and construction companies as their go-to on-site machining partner. Our team brings the same care, precision, and professionalism to every job — from a single bush replacement to a major crusher rebuild.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Wrench className="w-8 h-8 text-white" />, title: 'Founded on Expertise', desc: 'Over 20 years of hands-on experience in WA\'s toughest industrial environments', color: 'bg-primary-700' },
                { icon: <Target className="w-8 h-8 text-white" />, title: 'OEM Precision', desc: 'Every repair meets or exceeds original manufacturer specifications', color: 'bg-accent' },
                { icon: <Truck className="w-8 h-8 text-white" />, title: 'Fully Mobile', desc: 'We bring the workshop to your site — anywhere in Western Australia', color: 'bg-primary-600' },
                { icon: <Heart className="w-8 h-8 text-white" />, title: 'Client-Focused', desc: 'Your operational uptime is our priority — 24/7 emergency response available', color: 'bg-secondary-700' },
              ].map((item) => (
                <div key={item.title} className="bg-secondary-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-secondary-900 mb-2">{item.title}</h3>
                  <p className="text-secondary-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreValues() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIsVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const values = [
    { icon: <Award className="w-8 h-8" />, title: 'Excellence', description: 'We hold ourselves to the highest standards on every job. From the quality of our welds to the precision of our bores, excellence is non-negotiable.' },
    { icon: <Shield className="w-8 h-8" />, title: 'Integrity', description: 'We are honest, transparent, and accountable. You\'ll always know what we\'re doing, why, and what the outcome will be before we start.' },
    { icon: <Users className="w-8 h-8" />, title: 'Partnership', description: 'We don\'t just turn up, do a job, and leave. We build long-term relationships with our clients, becoming a trusted part of their maintenance team.' },
    { icon: <Clock className="w-8 h-8" />, title: 'Reliability', description: 'When you call BHEL, we show up — on time, fully equipped, and ready to deliver. Especially in emergency situations when it matters most.' },
  ];

  return (
    <section ref={ref} className="py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">Our Values</span>
          <h2 className="section-heading mb-4">What Drives Us</h2>
          <p className="section-subheading">Our core values guide every decision we make and every job we take on.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, index) => (
            <div
              key={v.title}
              className={`bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary-100 group-hover:bg-primary-700 rounded-xl flex items-center justify-center mb-5 transition-colors duration-500">
                <div className="text-primary-600 group-hover:text-white transition-colors duration-500">{v.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">{v.title}</h3>
              <p className="text-secondary-600 leading-relaxed text-sm">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIsVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const reasons = [
    { title: '20+ Years of Machining Excellence', desc: 'With nearly two decades in the mining and heavy industrial sectors, we understand the demands of WA\'s toughest environments.' },
    { title: 'One-Stop Engineering Partner', desc: 'From bore welding, facing, and bush installation to light fabrication and custom component design — BHEL covers it all.' },
    { title: 'Fully Mobile, On-Site Solutions', desc: 'Our fully equipped mobile service vans bring high-end Hofmann Triangle equipment directly to your site — saving time, cost, and effort.' },
    { title: 'Precision That Meets OEM Standards', desc: 'We maintain exacting tolerances with every repair — ensuring your equipment operates as reliably as the day it was manufactured.' },
    { title: 'Rapid Emergency Response', desc: '24/7 availability for breakdown situations. We mobilise fast and come equipped to resolve most issues on the first visit.' },
    { title: 'Serving All of Western Australia', desc: 'From Perth metro to the Pilbara, Goldfields, and beyond — we travel to where you need us, no matter how remote.' },
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">Why Choose BHEL</span>
          <h2 className="section-heading mb-4">The BHEL Difference</h2>
          <p className="section-subheading">Here's what sets BHEL Engineering apart from the competition.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, index) => (
            <div
              key={r.title}
              className={`p-6 border-l-4 border-accent bg-secondary-50 rounded-r-2xl hover:bg-primary-50 transition-colors ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-secondary-900 mb-2">{r.title}</h3>
                  <p className="text-secondary-600 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </div>
          ))}
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
    { name: 'John Mitchell', role: 'Site Manager – Pilbara Mining', text: "BHEL's on-site line boring saved us weeks of downtime. Their team was professional, fast, and the results were spot-on to OEM specs." },
    { name: 'Sarah Chen', role: 'Operations Director – Construction Co.', text: "We've used BHEL for multiple breakdown repairs across our Perth sites. Their 24/7 response time is unmatched and work quality is consistently excellent." },
    { name: 'Mark Thompson', role: 'Maintenance Engineer – Goldfields', text: "The bore welding and facing work BHEL completed on our crusher was outstanding. They came out to a remote site and delivered precision results." },
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
          <span className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-4">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Trusted by WA Industry</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
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

function CTASection() {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Ready to Work With BHEL?</h2>
        <p className="text-xl text-secondary-600 mb-8">Get in touch with our team for a fast, free quote on your engineering needs.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-primary text-lg px-8 py-4">Contact Us Today <ArrowRight className="w-5 h-5 ml-2" /></Link>
          <a href="tel:0861180954" className="btn-outline text-lg px-8 py-4"><Phone className="w-5 h-5 mr-2" /> (08) 6118 0954</a>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <title>About – BHEL Engineering | 20+ Years On-Site Machining WA</title>
      <PageHero />
      <OurStory />
      <CoreValues />
      <WhyUs />
      <Testimonials />
      <CTASection />
    </>
  );
}
