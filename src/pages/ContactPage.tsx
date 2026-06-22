import { useEffect, useRef, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, CheckCircle, Send, ArrowRight } from 'lucide-react';

function PageHero() {
  return (
    <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-6">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Request a <span className="text-accent">Free Quote</span>
          </h1>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl">
            Need mobile line boring, fabrication, or breakdown repairs? Contact our team for fast, professional service across Perth and all of Western Australia.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="tel:0861180954" className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-primary-200 text-xs">Call us now</p>
                <p className="font-bold">(08) 6118 0954</p>
              </div>
            </a>
            <a href="mailto:sen@bheleng.com.au" className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-primary-200 text-xs">Email us</p>
                <p className="font-bold">sen@bheleng.com.au</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', service: '', location: '', message: '', urgency: 'standard' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIsVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', phone: '', service: '', location: '', message: '', urgency: 'standard' });
    setTimeout(() => setIsSubmitted(false), 8000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const workingHours = [
    { day: 'Monday', hours: '6AM – 5PM' },
    { day: 'Tuesday', hours: '6AM – 5PM' },
    { day: 'Wednesday', hours: '6AM – 5PM' },
    { day: 'Thursday', hours: '6AM – 5PM' },
    { day: 'Friday', hours: '6AM – 5PM' },
    { day: 'Saturday', hours: 'Closed' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <section ref={ref} className="py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-5 gap-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-secondary-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a href="tel:0861180954" className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 group-hover:bg-primary-700 rounded-lg flex items-center justify-center text-primary-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Phone</p>
                    <p className="text-secondary-900 font-semibold group-hover:text-primary-600 transition-colors">(08) 6118 0954</p>
                  </div>
                </a>
                <a href="mailto:sen@bheleng.com.au" className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 group-hover:bg-primary-700 rounded-lg flex items-center justify-center text-primary-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Email</p>
                    <p className="text-secondary-900 font-semibold group-hover:text-primary-600 transition-colors">sen@bheleng.com.au</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Location</p>
                    <p className="text-secondary-900 font-semibold">Perth, Western Australia</p>
                    <p className="text-secondary-500 text-sm">WA-6000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-primary-700 rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-white">Working Hours</h3>
              </div>
              <div className="space-y-3">
                {workingHours.map((item) => (
                  <div key={item.day} className="flex justify-between text-primary-100">
                    <span>{item.day}</span>
                    <span className={item.hours === 'Closed' ? 'text-primary-300' : 'font-semibold'}>{item.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-primary-600">
                <p className="text-primary-200 text-sm flex items-center gap-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                  </span>
                  Emergency breakdowns available 24/7
                </p>
              </div>
            </div>

            {/* Quick facts */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-lg font-bold text-secondary-900 mb-4">Why Contact Us?</h3>
              <ul className="space-y-3">
                {[
                  'Free no-obligation quotes',
                  'Fast response times',
                  'Fully mobile — we come to you',
                  '24/7 emergency response',
                  'All of Western Australia serviced',
                  '20+ years of expertise',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-secondary-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">Send Us a Message</h3>
              <p className="text-secondary-500 mb-8">Fill in the form below and we'll get back to you within 24 hours.</p>

              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-secondary-900 mb-3">Message Sent!</h4>
                  <p className="text-secondary-600 mb-2">Thank you for contacting BHEL Engineering.</p>
                  <p className="text-secondary-500">We'll get back to you within 24 hours (or call immediately for emergencies).</p>
                  <a href="tel:0861180954" className="inline-flex items-center gap-2 mt-6 text-primary-600 font-semibold hover:text-accent transition-colors">
                    <Phone className="w-4 h-4" /> Call us directly: (08) 6118 0954
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="contact-form" className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">Full Name *</label>
                      <input id="name" name="name" type="text" required value={formState.name} onChange={handleChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="John Smith" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">Email Address *</label>
                      <input id="email" name="email" type="email" required value={formState.email} onChange={handleChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="john@company.com" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">Phone Number</label>
                      <input id="phone" name="phone" type="tel" value={formState.phone} onChange={handleChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="08 1234 5678" />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-2">Service Required</label>
                      <select id="service" name="service" value={formState.service} onChange={handleChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white">
                        <option value="">Select a service</option>
                        <option value="mobile-line-boring">Mobile Line Boring</option>
                        <option value="fabrication-welding">Light Fabrication & Welding</option>
                        <option value="bore-facing">Bore Facing</option>
                        <option value="mechanical-design">Mechanical Design</option>
                        <option value="bush-bearing">Bush & Bearing Installation</option>
                        <option value="breakdown-repairs">Breakdown Repairs</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-secondary-700 mb-2">Site Location</label>
                      <input id="location" name="location" type="text" value={formState.location} onChange={handleChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="e.g. Kalgoorlie, Newman..." />
                    </div>
                    <div>
                      <label htmlFor="urgency" className="block text-sm font-medium text-secondary-700 mb-2">Request Type</label>
                      <select id="urgency" name="urgency" value={formState.urgency} onChange={handleChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white">
                        <option value="standard">Standard Quote Request</option>
                        <option value="urgent">Urgent / Emergency Breakdown</option>
                        <option value="scheduled">Scheduled Maintenance</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">Message *</label>
                    <textarea id="message" name="message" required rows={6} value={formState.message} onChange={handleChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                      placeholder="Describe your project, equipment, and what needs to be done..." />
                  </div>
                  {formState.urgency === 'urgent' && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
                      <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <p className="text-red-700 text-sm">
                        <strong>Emergency?</strong> For immediate assistance, please call us directly at{' '}
                        <a href="tel:0861180954" className="font-bold hover:underline">(08) 6118 0954</a>
                      </p>
                    </div>
                  )}
                  <button type="submit" disabled={isSubmitting}
                    className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>Send Message <Send className="w-5 h-5 ml-2" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Based in Perth, Serving All of WA</h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">Our home base is in Perth, Western Australia — but our mobile units travel across the entire state to wherever your equipment needs us.</p>
        </div>
        <div className="bg-secondary-100 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="BHEL Engineering Location - Perth, Western Australia"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428875.1764856394!2d115.72697244226565!3d-31.95350774902777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32966cdb47733d%3A0x304f0b535df55d0!2sPerth%20WA%206000%2C%20Australia!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          <a href="tel:0861180954" className="flex items-center gap-4 p-6 bg-secondary-50 rounded-2xl hover:bg-primary-50 transition-colors group">
            <div className="w-12 h-12 bg-primary-100 group-hover:bg-primary-700 rounded-xl flex items-center justify-center text-primary-600 group-hover:text-white transition-colors">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-secondary-500 text-sm">Call us</p>
              <p className="font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">(08) 6118 0954</p>
            </div>
          </a>
          <a href="mailto:sen@bheleng.com.au" className="flex items-center gap-4 p-6 bg-secondary-50 rounded-2xl hover:bg-primary-50 transition-colors group">
            <div className="w-12 h-12 bg-primary-100 group-hover:bg-primary-700 rounded-xl flex items-center justify-center text-primary-600 group-hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-secondary-500 text-sm">Email us</p>
              <p className="font-bold text-secondary-900 group-hover:text-primary-600 transition-colors text-sm">sen@bheleng.com.au</p>
            </div>
          </a>
          <div className="flex items-center gap-4 p-6 bg-secondary-50 rounded-2xl">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-secondary-500 text-sm">Location</p>
              <p className="font-bold text-secondary-900">Perth, WA 6000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EmergencyBanner() {
  return (
    <section className="py-16 bg-red-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Emergency Breakdown? Call Us Now.</h2>
        <p className="text-red-100 mb-6">Available 24/7 for critical equipment failures across all of Western Australia.</p>
        <a
          href="tel:0861180954"
          id="emergency-call-btn"
          className="inline-flex items-center justify-center px-10 py-5 bg-white text-red-600 font-bold text-xl rounded-xl hover:bg-red-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
        >
          <Phone className="w-6 h-6 mr-3 animate-pulse" />
          (08) 6118 0954
        </a>
        <p className="text-red-200 text-sm mt-4">24/7 Emergency Response</p>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <title>Contact – BHEL Engineering | Get a Free Quote Perth WA</title>
      <PageHero />
      <ContactSection />
      <MapSection />
      <EmergencyBanner />
    </>
  );
}
