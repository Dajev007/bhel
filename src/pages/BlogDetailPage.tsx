import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Calendar, User, Clock, ArrowLeft, Share2, Phone, Mail, ArrowRight } from 'lucide-react';

export const blogPosts = [
  {
    id: 1,
    slug: 'true-cost-equipment-downtime-mining',
    title: 'The True Cost of Equipment Downtime in Mining',
    seoTitle: 'The True Cost of Equipment Downtime in Mining | BHEL Engineering',
    metaDescription: 'Discover how equipment downtime costs mining operations $20,000-$100,000+ per hour. Learn how mobile line boring eliminates transit delays and cuts repair time by 75%.',
    excerpt: 'When heavy machinery stops, the financial impact ripples through the entire operation. Discover how rapid mobile line boring response teams mitigate these losses.',
    date: 'October 14, 2025',
    dateISO: '2025-10-14',
    author: 'BHEL Engineering',
    category: 'Industry Insights',
    readTime: '7 min read',
    color: 'bg-primary-700',
    image: '/img/custom_hero_banner.png',
    keywords: ['equipment downtime mining cost', 'mining downtime losses Australia', 'mobile line boring response time', 'on-site machining reduces downtime', 'bore repair emergency WA'],
  },
  {
    id: 2,
    slug: 'acoustic-alignment-bearing-installation-guide',
    title: 'Why Acoustic Alignment is Critical for Bearing Installation',
    seoTitle: 'Acoustic Alignment for Bearing Installation — Technical Guide | BHEL Engineering',
    metaDescription: 'Learn why acoustic alignment techniques extend bearing lifespan by up to 40%. Technical guide covering precision bush and bearing installation for mining equipment.',
    excerpt: 'Installing bearings and bushes isn\'t just about pressing them in. Learn why acoustic alignment techniques extend component lifespan by up to 40%.',
    date: 'September 28, 2025',
    dateISO: '2025-09-28',
    author: 'BHEL Engineering',
    category: 'Technical Focus',
    readTime: '8 min read',
    color: 'bg-accent',
    image: '/img/services_hero_banner.png',
    keywords: ['acoustic alignment bearing installation', 'precision bush installation mining', 'bearing alignment techniques', 'bush installation Western Australia', 'bearing lifespan extension'],
  },
  {
    id: 3,
    slug: 'mobile-line-boring-vs-workshop-machining',
    title: 'Mobile Line Boring vs. Workshop Machining: A Complete Cost Comparison',
    seoTitle: 'Mobile Line Boring vs Workshop Machining — Cost & Time Comparison | BHEL Engineering',
    metaDescription: 'Compare mobile line boring vs workshop machining on cost, turnaround time, and precision. On-site repairs save up to 60% vs transport-to-workshop approaches.',
    excerpt: 'Should you dismantle your equipment or call a mobile machining unit? We break down the costs, timeframes, and quality outcomes of both approaches.',
    date: 'August 12, 2025',
    dateISO: '2025-08-12',
    author: 'BHEL Engineering',
    category: 'Services',
    readTime: '8 min read',
    color: 'bg-green-600',
    image: '/img/recent_work_hero_banner.png',
    keywords: ['mobile line boring vs workshop', 'on-site machining cost comparison', 'portable line boring advantages', 'line boring cost Perth', 'workshop vs mobile bore repair'],
  },
  {
    id: 4,
    slug: 'preventative-maintenance-tips-heavy-excavators',
    title: 'Preventative Maintenance Tips for Heavy Excavators: A Complete Pin & Bore Inspection Guide',
    seoTitle: 'Excavator Preventative Maintenance — Pin & Bore Inspection Guide | BHEL Engineering',
    metaDescription: 'Comprehensive guide to excavator pin and bore maintenance. Learn key inspection points every 250 hours that prevent costly breakdowns on mining and construction sites.',
    excerpt: 'A proactive approach to pin and bore wear can save hundreds of thousands of dollars. Key inspection points every maintenance manager should check.',
    date: 'July 05, 2025',
    dateISO: '2025-07-05',
    author: 'BHEL Engineering',
    category: 'Maintenance Tips',
    readTime: '9 min read',
    color: 'bg-purple-600',
    image: '/img/blogs_hero_banner.png',
    keywords: ['excavator preventative maintenance', 'pin bore inspection guide', 'heavy equipment maintenance tips', 'excavator bore wear prevention', 'mining equipment inspection schedule'],
  },
  {
    id: 5,
    slug: 'remote-fifo-engineering-challenges-western-australia',
    title: 'Navigating Remote FIFO Engineering Challenges in Western Australia',
    seoTitle: 'Remote FIFO Engineering Challenges — On-Site Machining in WA | BHEL Engineering',
    metaDescription: 'How mobile line boring teams prepare for remote FIFO deployments across the Pilbara and Goldfields. Logistics, safety protocols, and redundant tooling strategies.',
    excerpt: 'Working on remote sites in the Pilbara and Goldfields brings unique logistical hurdles. How our mobile units prepare for the unexpected.',
    date: 'June 19, 2025',
    dateISO: '2025-06-19',
    author: 'BHEL Engineering',
    category: 'Our Operations',
    readTime: '7 min read',
    color: 'bg-orange-600',
    image: '/img/contact_hero_banner.png',
    keywords: ['FIFO engineering challenges WA', 'remote line boring Pilbara', 'mobile machining Goldfields', 'on-site machining remote mining', 'FIFO maintenance services'],
  },
  {
    id: 6,
    slug: 'portable-hofmann-triangle-line-boring-equipment',
    title: 'The Evolution of Portable Hofmann Triangle Line Boring Equipment',
    seoTitle: 'Portable Hofmann Triangle Line Boring Equipment Guide | BHEL Engineering',
    metaDescription: 'Inside look at Hofmann Triangle portable line boring equipment — the gold standard for on-site bore repairs achieving OEM tolerances of \u00B10.02mm in field conditions.',
    excerpt: 'An inside look at the precision tools we use to achieve OEM-level tolerances in the dirtiest, dustiest conditions imaginable.',
    date: 'May 02, 2025',
    dateISO: '2025-05-02',
    author: 'BHEL Engineering',
    category: 'Equipment',
    readTime: '7 min read',
    color: 'bg-blue-800',
    image: '/img/services_hero_banner.png',
    keywords: ['Hofmann Triangle line boring', 'portable line boring equipment', 'on-site boring bar tools', 'line boring equipment Australia', 'precision bore repair tools'],
  }
];

// SEO helper: inject meta tags dynamically for SPA
function useSEO(post: typeof blogPosts[0]) {
  useEffect(() => {
    document.title = post.seoTitle;
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    setMeta('name', 'description', post.metaDescription);
    setMeta('name', 'keywords', post.keywords.join(', '));
    setMeta('property', 'og:title', post.seoTitle);
    setMeta('property', 'og:description', post.metaDescription);
    setMeta('property', 'og:url', `https://bheleng.com.au/blogs/${post.slug}`);
    setMeta('property', 'og:type', 'article');
    setMeta('property', 'og:image', `https://bheleng.com.au${post.image}`);
    setMeta('property', 'twitter:title', post.seoTitle);
    setMeta('property', 'twitter:description', post.metaDescription);
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://bheleng.com.au/blogs/${post.slug}`);
    return () => {
      document.title = 'BHEL Engineering | Mobile Line Boring & On-Site Machining Services Perth & WA';
      canonical?.setAttribute('href', 'https://bheleng.com.au/');
    };
  }, [post]);
}

// SEO helper: inject Article + FAQ JSON-LD
function useArticleSchema(post: typeof blogPosts[0], faqs: { question: string; answer: string }[]) {
  useEffect(() => {
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.metaDescription,
      image: `https://bheleng.com.au${post.image}`,
      datePublished: post.dateISO,
      dateModified: post.dateISO,
      author: { '@type': 'Organization', name: 'BHEL Engineering', url: 'https://bheleng.com.au' },
      publisher: { '@type': 'Organization', name: 'BHEL Engineering', logo: { '@type': 'ImageObject', url: 'https://bheleng.com.au/img/BHEL-Logo-icon-1.png' } },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `https://bheleng.com.au/blogs/${post.slug}` },
      keywords: post.keywords.join(', '),
    };
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'blog-article-schema';
    script.textContent = JSON.stringify([articleSchema, faqSchema]);
    document.head.appendChild(script);
    return () => { const existing = document.getElementById('blog-article-schema'); if (existing) existing.remove(); };
  }, [post, faqs]);
}

function FAQSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <div className="mt-16 pt-12 border-t-2 border-secondary-100">
      <h3 className="text-2xl font-bold text-secondary-900 mb-8 font-sans">Frequently Asked Questions</h3>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <details key={i} className="group bg-secondary-50 rounded-xl p-6 cursor-pointer">
            <summary className="font-bold text-secondary-900 text-lg list-none flex items-center justify-between cursor-pointer">
              {faq.question}
            </summary>
            <p className="mt-4 text-secondary-700 leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

function BlogCTA() {
  return (
    <div className="mt-12 bg-gradient-to-r from-primary-800 to-primary-900 rounded-2xl p-8 text-white">
      <h4 className="text-xl font-bold mb-3">Need On-Site Machining?</h4>
      <p className="text-primary-200 mb-6">Our mobile line boring units are available 24/7 across Perth, Pilbara, Goldfields, and Newman. Get a rapid response from BHEL Engineering.</p>
      <div className="flex flex-wrap gap-4">
        <Link to="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold px-6 py-3 rounded-lg transition-colors no-underline">
          Get a Quote <ArrowRight className="w-4 h-4" />
        </Link>
        <a href="tel:0861180954" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-lg transition-colors no-underline">
          <Phone className="w-4 h-4" /> (08) 6118 0954
        </a>
      </div>
    </div>
  );
}

// ===== POST 1 =====
const post1FAQs = [
  { question: 'How much does mining equipment downtime cost per hour?', answer: 'Depending on the operation, mining equipment downtime can cost between $20,000 to $100,000+ per hour. Primary crushers and conveyor systems typically represent the highest cost, as they halt the entire production chain from extraction to shipping.' },
  { question: 'How quickly can a mobile line boring team respond to an emergency?', answer: 'BHEL Engineering typically mobilises within 24 hours for emergency breakdown repairs. For Perth metropolitan sites, response can be same-day. Remote Pilbara and Goldfields sites are usually reached within 24-48 hours depending on location.' },
  { question: 'Does on-site line boring achieve the same precision as workshop machining?', answer: 'Yes. Modern portable line boring equipment like the Hofmann Triangle achieves tolerances of \u00B10.02mm \u2014 the same as stationary workshop boring machines.' },
  { question: 'What equipment can be line bored on-site?', answer: 'Virtually any heavy equipment with worn or damaged bores, including excavator booms and sticks, crusher mainframes, dragline components, haul truck suspensions, dozer track frames, conveyor drive housings, and loader buckets.' },
];
function Post1Content() {
  return (
    <div className="space-y-6 text-secondary-700 leading-relaxed text-lg">
      <p>In the mining and heavy industrial sectors, productivity is measured by the hour. When a key piece of machinery \u2014 like a primary crusher, dragline, or a 300-tonne excavator \u2014 goes offline, the financial impact is immediate, compounding with every minute of inactivity. Understanding these costs is the first step toward implementing smarter maintenance strategies.</p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">Understanding the Direct Costs of Equipment Downtime</h3>
      <p>The direct cost of downtime is often calculated by the loss of production capacity. For instance, a medium-sized iron ore mine in Western Australia can lose anywhere from <strong>$20,000 to $100,000 per hour</strong> when a main conveyor or secondary crusher shuts down unexpectedly. This includes idle operators, delayed truck fleets, and unmet shipping quotas.</p>
      <p>But the direct production loss is only part of the equation. Add in the cost of mobilising a maintenance crew, sourcing emergency parts, and the potential for contractual penalties on delayed shipments, and the true figure climbs dramatically. For mines operating under tight offtake agreements, a single day of unplanned downtime can result in six-figure losses.</p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">The Hidden Costs Most Operators Miss</h3>
      <p>Beyond lost production, unplanned downtime triggers a cascade of hidden costs that rarely appear in maintenance budgets:</p>
      <ul className="space-y-3 my-6 pl-4">
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Idle labour costs:</strong> Operators, truck drivers, and support staff remain on the payroll during downtime, often at premium FIFO rates.</span></li>
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Cascading equipment stress:</strong> When one machine fails, adjacent equipment often runs harder to compensate, accelerating wear on those assets.</span></li>
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Safety risks:</strong> Rushed emergency repairs performed under time pressure increase the likelihood of workplace incidents.</span></li>
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Reputation damage:</strong> Consistent delays can affect client relationships and future contract negotiations.</span></li>
      </ul>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">Logistical Overhead of Workshop Transport</h3>
      <p>Historically, restoring worn-out or damaged bores on major machinery meant dismantling the assembly, loading the heavy components onto transport trucks, and shipping them to a specialised machining workshop. The logistical overhead alone \u2014 involving heavy lift permits, escort vehicles, and transit times \u2014 can add days or even weeks to the repair schedule. For remote sites in the <strong>Pilbara, Goldfields, or Newman</strong>, the nearest suitable workshop may be over 1,000 kilometres away.</p>

      <blockquote className="border-l-4 border-accent pl-6 italic my-8 text-secondary-800 font-semibold text-xl bg-secondary-50 py-4 pr-4 rounded-r-xl">"On-site machining isn't just about repairing a bore; it's a strategic operation to reclaim lost hours and protect profit margins."</blockquote>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">How Mobile Line Boring Mitigates Losses</h3>
      <p><Link to="/services" className="text-accent hover:text-primary-600 font-semibold transition-colors">Mobile line boring</Link> bypasses workshop transit entirely. By deploying fully equipped service trucks directly to the site \u2014 whether it's in the Perth metropolitan area or the remote Pilbara region \u2014 technicians can set up portable boring bars and welding machines directly on the machine frame. This reduces transit time to zero and slashes overall repair cycles by up to <strong>75%</strong>.</p>
      <p>At BHEL Engineering, our mobile units carry everything needed for a complete bore restoration: automatic ID welders, portable boring bars, precision measuring instruments, and independent power supplies. We've completed emergency bore restorations in as little as 48 hours on jobs that would have taken 2-3 weeks via the traditional workshop route.</p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">Preventative Maintenance as a Shield</h3>
      <p>The most cost-effective strategy is preventing catastrophic failures before they happen. Mine operators should implement regular pin and bore inspections every 250 operating hours. Catching minor wear early allows for <Link to="/blogs/preventative-maintenance-tips-heavy-excavators" className="text-accent hover:text-primary-600 font-semibold transition-colors">scheduled line boring and bush installations</Link> during planned maintenance windows, ensuring that unexpected breakdowns don't disrupt primary operations.</p>
      <p>By partnering with a reliable mobile machining provider like <strong>BHEL Engineering</strong>, sites can integrate bore inspections into their regular maintenance programs and have a pre-arranged rapid response protocol ready for when emergency repairs are needed. This proactive approach has saved our clients across Perth, Pilbara, and Goldfields hundreds of thousands of dollars annually.</p>

      <BlogCTA />
      <FAQSection faqs={post1FAQs} />
    </div>
  );
}

// ===== POST 2 =====
const post2FAQs = [
  { question: 'What is acoustic alignment for bearing installation?', answer: 'Acoustic alignment uses high-frequency sound wave monitoring during the bearing pressing process to verify exact positioning and fit. It detects microscopic air gaps and uneven pressure distribution that visual inspection or dial indicators cannot identify.' },
  { question: 'How much longer do bearings last with acoustic alignment?', answer: 'Field data shows that bearings installed using acoustic alignment techniques last up to 40% longer than those installed with traditional methods, by eliminating uneven load distribution and micro-vibrations.' },
  { question: 'Can acoustic alignment be performed on-site?', answer: 'Yes. BHEL Engineering performs acoustic alignment as part of our mobile bush and bearing installation service across Western Australia.' },
  { question: 'What types of bearings can be installed with acoustic alignment?', answer: 'All types of press-fit bearings and bushes found in heavy equipment, including excavator pivot bearings, haul truck suspension bushes, conveyor roller bearings, and crusher trunnion bearings.' },
];
function Post2Content() {
  return (
    <div className="space-y-6 text-secondary-700 leading-relaxed text-lg">
      <p>Precision is the difference between a repair that lasts five years and one that fails in five months. In heavy industrial machinery, installing bushes and bearings is a critical task that demands precise axial and radial alignment. Yet many maintenance teams still rely on methods that simply aren't accurate enough for the tolerances demanded by modern mining equipment.</p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">The Problem with Traditional Alignment Methods</h3>
      <p>Standard installation methods often rely on physical dial indicators or visual inspections. While suitable for small-scale applications, they fall short for massive housings and high-load bearings on mining equipment, where tolerances are measured in fractions of a millimetre. A bearing even 0.05mm off-centre can experience dramatically uneven load distribution, leading to:</p>
      <ul className="space-y-3 my-6 pl-4">
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span>Localised hot spots that degrade lubricant and accelerate wear</span></li>
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span>Micro-vibrations that transfer to adjacent gears, seals, and structural members</span></li>
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span>Premature fatigue failure at a fraction of the design life</span></li>
      </ul>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">What is Acoustic Alignment?</h3>
      <p>Acoustic alignment utilises high-frequency sound waves to verify the exact positioning and fit of the bearing inside its housing. By monitoring the acoustic feedback during the pressing process, technicians can identify microscopic air gaps or uneven pressure distribution <strong>before the machine is reassembled</strong>.</p>
      <p>The technique works by analysing the sound frequency emitted as the bearing is pressed into position. A perfectly seated bearing produces a consistent, uniform acoustic signature. Any deviation \u2014 such as a slight tilt, edge loading, or incomplete seating \u2014 produces distinct frequency variations that alert the technician to correct the installation immediately.</p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">Key Benefits of Acoustic Alignment</h3>
      <ul className="space-y-3 my-6 pl-4">
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Reduced Friction:</strong> Perfect alignment minimises rotational resistance, reducing operating temperatures and energy consumption.</span></li>
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Extended Lifespan (up to 40%):</strong> Eliminates uneven load distributions that lead to premature fatigue and bearing spalling.</span></li>
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Vibration Control:</strong> Prevents micro-vibrations from transferring to and damaging surrounding gears, seals, and structural components.</span></li>
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Real-time verification:</strong> Unlike visual methods, acoustic alignment provides instant, objective feedback during installation \u2014 not after.</span></li>
      </ul>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">When is Acoustic Alignment Most Critical?</h3>
      <p>While every bearing installation benefits from precision techniques, acoustic alignment is especially critical for high-load pivot bearings on excavator booms, sticks, and buckets; haul truck suspension bushes where misalignment causes uneven tyre wear; and crusher trunnion bearings that handle extreme impact forces.</p>
      <p>At <strong>BHEL Engineering</strong>, acoustic alignment is standard practice for all <Link to="/services" className="text-accent hover:text-primary-600 font-semibold transition-colors">bush and bearing installations</Link> we perform across Perth and Western Australia. It's not an optional extra \u2014 it's how we guarantee precision on every job.</p>

      <BlogCTA />
      <FAQSection faqs={post2FAQs} />
    </div>
  );
}

// ===== POST 3 =====
const post3FAQs = [
  { question: 'Is mobile line boring as precise as workshop machining?', answer: 'Yes. Modern portable line boring equipment achieves tolerances of \u00B10.02mm \u2014 identical to stationary workshop CNC boring machines.' },
  { question: 'How much does mobile line boring cost compared to workshop repairs?', answer: 'The total project cost is typically 40-60% lower than workshop repairs because you eliminate heavy transport costs ($5,000-$25,000), crane hire fees, and multiple days of lost production worth $20,000-$100,000+ per day.' },
  { question: 'How long does an on-site line boring repair take?', answer: 'Most single-bore restorations can be completed in 12-48 hours on-site, compared to 2-4 weeks for workshop repair when including disassembly, transport, machining, return transport, and reassembly.' },
  { question: 'What bore sizes can be machined on-site?', answer: 'BHEL Engineering can machine bores from 40mm up to 800mm+ diameter on-site using our modular Hofmann Triangle equipment.' },
];
function Post3Content() {
  return (
    <div className="space-y-6 text-secondary-700 leading-relaxed text-lg">
      <p>When a machinery component suffers bore wear or damage, maintenance managers face a critical decision: transport the part to a workshop or complete the repair on-site? Both approaches have their place, but understanding the true cost and time implications of each is essential for making the right call.</p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">1. Transit & Transport Logistics</h3>
      <p><strong>Workshop approach:</strong> Requires heavy lifting equipment to remove the component, flatbed trucks for transport, oversized load permits, escort vehicles for wide loads, and transit times that can stretch from days to weeks. For a remote Pilbara mine site, simply transporting a crusher component to a Perth workshop can cost <strong>$15,000-$25,000</strong> in logistics alone.</p>
      <p><strong>Mobile (On-Site) approach:</strong> The <Link to="/services" className="text-accent hover:text-primary-600 font-semibold transition-colors">mobile machining team</Link> drives directly to the machine's location. Setup begins immediately on arrival, eliminating all transport logistics.</p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">2. Repair Quality and Precision</h3>
      <p>Modern portable line boring tools, like the <Link to="/blogs/portable-hofmann-triangle-line-boring-equipment" className="text-accent hover:text-primary-600 font-semibold transition-colors">Hofmann Triangle equipment</Link> used by BHEL Engineering, deliver the <strong>exact same tolerances (\u00B10.02mm)</strong> as stationary workshop boring machines. In fact, on-site boring can sometimes be <em>more</em> accurate because the bore is cut in its actual operating position.</p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">3. Turnaround Time Comparison</h3>
      <div className="bg-secondary-50 rounded-xl p-6 my-6 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b-2 border-secondary-200"><th className="py-3 pr-4 font-bold text-secondary-900">Phase</th><th className="py-3 pr-4 font-bold text-secondary-900">Workshop</th><th className="py-3 font-bold text-secondary-900">Mobile On-Site</th></tr></thead>
          <tbody className="text-secondary-700">
            <tr className="border-b border-secondary-100"><td className="py-3 pr-4">Disassembly & removal</td><td className="py-3 pr-4">1-3 days</td><td className="py-3">Not required</td></tr>
            <tr className="border-b border-secondary-100"><td className="py-3 pr-4">Transport to workshop</td><td className="py-3 pr-4">2-7 days</td><td className="py-3">Not required</td></tr>
            <tr className="border-b border-secondary-100"><td className="py-3 pr-4">Queue & machining</td><td className="py-3 pr-4">3-10 days</td><td className="py-3">12-48 hours</td></tr>
            <tr className="border-b border-secondary-100"><td className="py-3 pr-4">Return transport</td><td className="py-3 pr-4">2-7 days</td><td className="py-3">Not required</td></tr>
            <tr className="border-b border-secondary-100"><td className="py-3 pr-4">Reassembly</td><td className="py-3 pr-4">1-3 days</td><td className="py-3">Included</td></tr>
            <tr className="font-bold text-secondary-900"><td className="py-3 pr-4">Total</td><td className="py-3 pr-4">9-30 days</td><td className="py-3 text-accent">1-5 days</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">4. Overall Cost Analysis</h3>
      <p>While the hourly rate for a mobile machining team is slightly higher than in-shop labour, the total project cost is almost always lower:</p>
      <ul className="space-y-3 my-6 pl-4">
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>No heavy transport costs</strong> ($5,000-$25,000 saved)</span></li>
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>No crane hire fees</strong> for removal and reinstallation ($3,000-$15,000 saved)</span></li>
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Dramatically reduced downtime</strong> (5-25 days saved \u00D7 $20,000-$100,000/day)</span></li>
      </ul>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">5. When Workshop Machining Still Makes Sense</h3>
      <p>Workshop machining remains the better choice when the component is small enough to transport economically, when multi-axis CNC work is required, or when the repair involves metallurgical processes like heat treatment. For the vast majority of bore restorations on heavy mining and construction equipment, however, <strong>on-site mobile machining is the clear winner</strong>.</p>

      <BlogCTA />
      <FAQSection faqs={post3FAQs} />
    </div>
  );
}

// ===== POST 4 =====
const post4FAQs = [
  { question: 'How often should excavator pins and bores be inspected?', answer: 'Pin and bore assemblies should be inspected every 250 operating hours. High-wear areas like bucket pins may need more frequent checks in abrasive environments like iron ore mining.' },
  { question: 'What are the signs of bore wear on an excavator?', answer: 'Key signs include: visible play at pivot joints, unusual knocking during swing or dig operations, grease seal failure, uneven wear on pins, and oval-shaped bores when measured with calipers.' },
  { question: 'Can worn excavator bores be repaired on-site?', answer: 'Yes. BHEL Engineering specialises in on-site bore welding and line boring for excavators \u2014 pad welding worn bores then precision boring back to OEM specs, all with the machine in position.' },
  { question: 'How much does it cost to replace an excavator pin and bore?', answer: 'For a 100-200 tonne excavator, on-site bore restoration typically ranges from $5,000-$15,000 per bore, compared to $30,000-$80,000+ for workshop repair including transport, crane hire, and downtime costs.' },
];
function Post4Content() {
  return (
    <div className="space-y-6 text-secondary-700 leading-relaxed text-lg">
      <p>Excavators are the workhorses of mining and construction. However, the high-stress nature of digging operations means that pins, bushes, and bores are constantly subjected to immense force. Without a structured preventative maintenance program, minor wear can escalate into catastrophic failures that <Link to="/blogs/true-cost-equipment-downtime-mining" className="text-accent hover:text-primary-600 font-semibold transition-colors">cost hundreds of thousands of dollars in downtime</Link>.</p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">Key Inspection Points Every 250 Hours</h3>
      <p>The following components should be inspected every <strong>250 operating hours</strong>. On high-utilisation machines in abrasive environments, consider reducing this to 200 hours.</p>
      <ul className="space-y-3 my-6 pl-4">
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Bucket pins and bushes:</strong> Check for play by applying light hydraulic pressure and watching for movement.</span></li>
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Stick (arm) joints:</strong> Look for grease seal damage, discolouration from heat, and unusual noise.</span></li>
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Boom cylinder mounts:</strong> Check for cracks around pin bores and oval-shaped bores.</span></li>
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Swing bearing:</strong> Monitor for increased play and unusual vibration during swing operations.</span></li>
      </ul>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">The Critical Importance of Daily Greasing</h3>
      <p>Failing to grease pins daily allows dirt and rock particles to enter the joint, creating an abrasive paste that rapidly wears down the steel. In the red dust of the Pilbara, this process can happen alarmingly fast. A proper greasing routine takes 15-20 minutes per shift \u2014 the cost of a single bore restoration far exceeds the cumulative labour cost of daily greasing for the life of the machine.</p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">Recognising Wear Before It Becomes Failure</h3>
      <p>Train your operators and maintenance staff to recognise these early warning signs:</p>
      <ul className="space-y-3 my-6 pl-4">
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Audible clunking</strong> when changing dig direction \u2014 indicates pin-to-bore clearance has exceeded acceptable limits</span></li>
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Grease seal failure</strong> \u2014 if grease is leaking from pin joints, the bore/pin interface is no longer sealed</span></li>
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Metal shavings in grease</strong> \u2014 expelled grease containing metallic particles means active wear is occurring</span></li>
      </ul>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">Scheduled Line Boring During Shutdowns</h3>
      <p>The most cost-effective approach is to schedule <Link to="/services" className="text-accent hover:text-primary-600 font-semibold transition-colors">line boring and bush installations</Link> during planned maintenance shutdowns. Our <Link to="/blogs/acoustic-alignment-bearing-installation-guide" className="text-accent hover:text-primary-600 font-semibold transition-colors">acoustic alignment techniques</Link> ensure replacement bushes are seated perfectly, extending the next maintenance cycle by up to <strong>40%</strong>.</p>

      <BlogCTA />
      <FAQSection faqs={post4FAQs} />
    </div>
  );
}

// ===== POST 5 =====
const post5FAQs = [
  { question: 'What areas does BHEL Engineering service for FIFO line boring?', answer: 'BHEL Engineering services all major WA mining regions including the Pilbara (Newman, Tom Price, Karratha, Port Hedland), Goldfields (Kalgoorlie, Coolgardie, Leonora), Perth metro, and regional WA.' },
  { question: 'How quickly can BHEL mobilise to a remote site?', answer: 'For emergency breakdowns, we typically mobilise within 24 hours. Perth metro responses can be same-day, while Pilbara and Goldfields sites are usually reached within 24-48 hours.' },
  { question: 'What safety qualifications do BHEL technicians hold?', answer: 'All technicians hold Mine Site Induction (MSI) certifications, Working at Heights tickets, Confined Space Entry qualifications, First Aid, and relevant trade qualifications. We operate under comprehensive JSAs for every task.' },
  { question: 'Do BHEL mobile units carry backup equipment?', answer: 'Yes. Every unit carries redundant tooling including backup boring bars, spare welding equipment, and independent power generators. If a tool fails 500km from the nearest town, our technicians have backup plans.' },
];
function Post5Content() {
  return (
    <div className="space-y-6 text-secondary-700 leading-relaxed text-lg">
      <p>Providing on-site engineering services to remote Western Australia locations requires more than just technical skill \u2014 it demands meticulous planning, absolute self-reliance, and a deep understanding of the unique challenges that come with FIFO operations. At BHEL Engineering, we've spent over 20 years refining our approach to remote <Link to="/services" className="text-accent hover:text-primary-600 font-semibold transition-colors">mobile line boring</Link> deployments.</p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">The Reality of Remote Site Work</h3>
      <p>Mining operations in the <strong>Pilbara</strong> (Newman, Tom Price, Port Hedland) and <strong>Goldfields</strong> (Kalgoorlie, Leonora) present challenges that suburban-based engineers don't face. Temperatures regularly exceed 45\u00B0C in summer, the nearest equipment supplier may be 500+ kilometres away, and dust conditions can destroy sensitive equipment.</p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">How We Prepare for the Unexpected</h3>
      <p>Our mobile line boring units carry redundant tooling, replacement parts, and independent power generators. Every truck is a fully self-contained workshop on wheels:</p>
      <ul className="space-y-3 my-6 pl-4">
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Backup boring bars and cutting tools</strong> \u2014 if a cutter chips on a hard weld overlay, we have spares on board</span></li>
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Duplicate welding machines</strong> \u2014 both MIG and automatic ID welders travel on every unit</span></li>
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Independent power supply</strong> \u2014 diesel generators ensure we don't rely on site power</span></li>
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Comprehensive consumable stock</strong> \u2014 welding wire, gas, cutting fluids, and measuring instruments</span></li>
      </ul>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">Safety in Remote Environments</h3>
      <p>Working in extreme temperatures and remote terrains means adhering to strict safety protocols. Every BHEL technician is fully trained in remote first aid and works under comprehensive Job Safety Analyses (JSA). Key safety measures include heat stress management, regular hydration schedules, daily pre-start inspections, satellite communication devices, and emergency evacuation plans.</p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">The Logistics of Rapid Mobilisation</h3>
      <p>When a <Link to="/blogs/true-cost-equipment-downtime-mining" className="text-accent hover:text-primary-600 font-semibold transition-colors">major piece of equipment goes down</Link>, every hour of delay costs tens of thousands. Our mobilisation protocol is designed for speed: trucks maintained in constant readiness, 24/7 phone line answered by qualified engineers, and pre-established site access protocols with major mining clients.</p>

      <BlogCTA />
      <FAQSection faqs={post5FAQs} />
    </div>
  );
}

// ===== POST 6 =====
const post6FAQs = [
  { question: 'What is Hofmann Triangle line boring equipment?', answer: 'The Hofmann Triangle is a portable line boring system using a unique three-point triangular mounting for exceptional structural rigidity, achieving \u00B10.02mm tolerances even during heavy cuts on large-diameter bores.' },
  { question: 'What bore sizes can the Hofmann Triangle handle?', answer: 'The modular design handles bore diameters from 40mm up to 800mm+, configurable with different bar lengths to suit virtually any bore on mining and construction equipment.' },
  { question: 'Can the Hofmann Triangle be used in tight spaces?', answer: 'Yes. The compact, modular design is engineered for limited-access field conditions \u2014 inside loader joints, compact machine frames, and other confined spaces where standard boring machines wouldn\'t fit.' },
  { question: 'How does BHEL Engineering maintain its portable equipment?', answer: 'All equipment undergoes rigorous maintenance and calibration schedules. Cutting tools are replaced based on hours, measuring instruments are calibrated to traceable standards, and boring bar assemblies are checked before every deployment.' },
];
function Post6Content() {
  return (
    <div className="space-y-6 text-secondary-700 leading-relaxed text-lg">
      <p>At BHEL Engineering, we choose to use <strong>Hofmann Triangle portable line boring equipment</strong> \u2014 and it's a choice we make deliberately. In an industry where tooling quality determines repair quality, using the right equipment isn't a luxury; it's a necessity. Here's why this system is the gold standard for <Link to="/services" className="text-accent hover:text-primary-600 font-semibold transition-colors">on-site line boring</Link>.</p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">The Problem with Standard Boring Bars</h3>
      <p>Traditional portable boring bars mount at two points \u2014 essentially creating a beam supported at each end. Under cutting load, this beam deflects in the middle. The heavier the cut and the larger the bore, the more deflection occurs. For the large-diameter, deep-cut work typical of mining equipment, standard bars cannot maintain the required tolerances.</p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">The Hofmann Triangle Advantage</h3>
      <p>The Hofmann Triangle uses a <strong>three-point triangular mounting arrangement</strong> that creates a rigid structural frame, eliminating virtually all deflection even under aggressive cutting loads:</p>
      <ul className="space-y-3 my-6 pl-4">
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Consistent \u00B10.02mm tolerances</strong> \u2014 matching workshop CNC boring machines</span></li>
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Deeper, heavier cuts</strong> \u2014 fewer passes required, reducing total job time</span></li>
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Superior surface finish</strong> \u2014 reduced chatter produces smoother bore surfaces</span></li>
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Bore diameters from 40mm to 800mm+</strong> \u2014 modular design handles virtually any size</span></li>
      </ul>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">Adaptability in the Field</h3>
      <p>The compact, modular design means we can set up in tight spaces where other equipment wouldn't fit. The system breaks down into manageable components that a two-person team can carry, assemble, and align in 30-60 minutes \u2014 crucial for <Link to="/blogs/remote-fifo-engineering-challenges-western-australia" className="text-accent hover:text-primary-600 font-semibold transition-colors">remote FIFO deployments</Link>.</p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">The Complete On-Site Bore Restoration Process</h3>
      <ul className="space-y-3 my-6 pl-4">
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Assessment:</strong> Measure existing bore condition and plan the restoration</span></li>
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Bore welding:</strong> Pad weld the bore with compatible material using automatic ID welders</span></li>
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Line boring:</strong> Mount the Hofmann Triangle and bore back to exact OEM specification</span></li>
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Facing:</strong> Machine bore face for perpendicularity and proper bush seating</span></li>
        <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong>Bush installation:</strong> Press-fit using <Link to="/blogs/acoustic-alignment-bearing-installation-guide" className="text-accent hover:text-primary-600 font-semibold transition-colors">acoustic alignment</Link> for perfect seating</span></li>
      </ul>
      <p>The entire process can be completed in <strong>24-48 hours</strong> on-site. <Link to="/contact" className="text-accent hover:text-primary-600 font-semibold transition-colors">Contact BHEL Engineering</Link> to discuss your next bore restoration project.</p>

      <BlogCTA />
      <FAQSection faqs={post6FAQs} />
    </div>
  );
}

const postContentMap: Record<number, { Component: () => JSX.Element; faqs: { question: string; answer: string }[] }> = {
  1: { Component: Post1Content, faqs: post1FAQs },
  2: { Component: Post2Content, faqs: post2FAQs },
  3: { Component: Post3Content, faqs: post3FAQs },
  4: { Component: Post4Content, faqs: post4FAQs },
  5: { Component: Post5Content, faqs: post5FAQs },
  6: { Component: Post6Content, faqs: post6FAQs },
};

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const fallbackPost = blogPosts[0];
  const activePost = post || fallbackPost;
  const activeEntry = postContentMap[activePost.id] || postContentMap[1];

  useSEO(activePost);
  useArticleSchema(activePost, activeEntry.faqs);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-secondary-50 py-24">
        <h2 className="text-3xl font-bold text-secondary-900 mb-4">Article Not Found</h2>
        <p className="text-secondary-600 mb-8">The blog post you are looking for does not exist.</p>
        <Link to="/blogs" className="btn-primary">Back to Blogs</Link>
      </div>
    );
  }

  const { Component: PostContent } = postContentMap[post.id] || {};

  return (
    <>
      <title>{post.seoTitle}</title>

      <section className="relative pt-40 pb-24 bg-primary-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/80 to-primary-950/40" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Link to="/blogs" className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors mb-6 font-semibold">
            <ArrowLeft className="w-5 h-5" /> Back to Insights
          </Link>
          <span className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">{post.category}</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">{post.title}</h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-primary-200">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-accent" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-accent" /> {post.readTime}</span>
            <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-accent" /> {post.author}</span>
          </div>
        </div>
      </section>

      {/* Breadcrumb for SEO */}
      <nav className="bg-white border-b border-secondary-100" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-secondary-500">
            <li><Link to="/" className="hover:text-primary-600 transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/blogs" className="hover:text-primary-600 transition-colors">Blog</Link></li>
            <li>/</li>
            <li className="text-secondary-900 font-medium truncate max-w-xs">{post.title}</li>
          </ol>
        </div>
      </nav>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                {PostContent && <PostContent />}
              </div>
              <div className="border-t border-secondary-100 mt-12 pt-6 flex items-center justify-between">
                <span className="text-secondary-500 text-sm font-medium">Published by BHEL Engineering</span>
                <button
                  onClick={() => { navigator.clipboard.writeText(window.location.href); alert('Link copied to clipboard!'); }}
                  className="flex items-center gap-2 text-primary-600 hover:text-accent font-semibold text-sm transition-colors"
                >
                  <Share2 className="w-4 h-4" /> Share Article
                </button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-secondary-50 border border-secondary-200 rounded-2xl p-6">
                <h4 className="font-bold text-secondary-900 mb-4">Need Expert Machining?</h4>
                <p className="text-secondary-600 text-sm leading-relaxed mb-6">Our mobile units are available 24/7 for line boring, welding, and facing repairs across Western Australia.</p>
                <div className="space-y-4">
                  <a href="tel:0861180954" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-secondary-200 hover:border-primary-500 transition-colors group">
                    <Phone className="w-5 h-5 text-primary-600 group-hover:text-accent flex-shrink-0" />
                    <div>
                      <p className="text-secondary-400 text-xxs uppercase tracking-wider font-bold">Call us</p>
                      <p className="text-secondary-800 text-xs font-bold font-sans">(08) 6118 0954</p>
                    </div>
                  </a>
                  <a href="mailto:bhelengperth@gmail.com" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-secondary-200 hover:border-primary-500 transition-colors group">
                    <Mail className="w-5 h-5 text-primary-600 group-hover:text-accent flex-shrink-0" />
                    <div>
                      <p className="text-secondary-400 text-xxs uppercase tracking-wider font-bold">Email us</p>
                      <p className="text-secondary-800 text-xs font-bold font-sans">bhelengperth@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="bg-secondary-50 border border-secondary-200 rounded-2xl p-6">
                <h4 className="font-bold text-secondary-900 mb-4">Related Articles</h4>
                <div className="space-y-4">
                  {blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3).map((related) => (
                    <Link key={related.id} to={`/blogs/${related.slug}`} className="block p-3 bg-white rounded-xl border border-secondary-200 hover:border-primary-500 transition-colors group no-underline">
                      <p className="text-secondary-900 text-sm font-semibold group-hover:text-primary-600 transition-colors line-clamp-2">{related.title}</p>
                      <p className="text-secondary-500 text-xs mt-1">{related.readTime}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
