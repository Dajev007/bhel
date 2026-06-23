import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Phone, Mail } from 'lucide-react';

export const blogPosts = [
  {
    id: 1,
    title: 'The True Cost of Equipment Downtime in Mining',
    excerpt: 'When heavy machinery stops, the financial impact ripples through the entire operation. Discover how rapid mobile line boring response teams mitigate these losses.',
    date: 'October 14, 2025',
    author: 'BHEL Engineering',
    category: 'Industry Insights',
    readTime: '4 min read',
    color: 'bg-primary-700',
    image: '/img/custom_hero_banner.png',
  },
  {
    id: 2,
    title: 'Why Acoustic Alignment is Critical for Bearing Installation',
    excerpt: 'Installing bearings and bushes isn\'t just about pressing them in. Learn why acoustic alignment techniques extend component lifespan by up to 40%.',
    date: 'September 28, 2025',
    author: 'BHEL Engineering',
    category: 'Technical Focus',
    readTime: '6 min read',
    color: 'bg-accent',
    image: '/img/services_hero_banner.png',
  },
  {
    id: 3,
    title: 'Mobile Line Boring vs. Workshop Machining: A Comparison',
    excerpt: 'Should you dismantle your equipment or call a mobile machining unit? We break down the costs, timeframes, and quality outcomes of both approaches.',
    date: 'August 12, 2025',
    author: 'BHEL Engineering',
    category: 'Services',
    readTime: '5 min read',
    color: 'bg-green-600',
    image: '/img/recent_work_hero_banner.png',
  },
  {
    id: 4,
    title: 'Preventative Maintenance Tips for Heavy Excavators',
    excerpt: 'A proactive approach to pin and bore wear can save hundreds of thousands of dollars. Key inspection points every maintenance manager should check.',
    date: 'July 05, 2025',
    author: 'BHEL Engineering',
    category: 'Maintenance Tips',
    readTime: '7 min read',
    color: 'bg-purple-600',
    image: '/img/blogs_hero_banner.png',
  },
  {
    id: 5,
    title: 'Navigating Remote FIFO Engineering Challenges',
    excerpt: 'Working on remote sites in the Pilbara and Goldfields brings unique logistical hurdles. How our mobile units prepare for the unexpected.',
    date: 'June 19, 2025',
    author: 'BHEL Engineering',
    category: 'Our Operations',
    readTime: '4 min read',
    color: 'bg-orange-600',
    image: '/img/contact_hero_banner.png',
  },
  {
    id: 6,
    title: 'The Evolution of Portable Hofmann Triangle Equipment',
    excerpt: 'An inside look at the precision tools we use to achieve OEM-level tolerances in the dirtiest, dustiest conditions imaginable.',
    date: 'May 02, 2025',
    author: 'BHEL Engineering',
    category: 'Equipment',
    readTime: '5 min read',
    color: 'bg-blue-800',
    image: '/img/services_hero_banner.png',
  }
];

function Post1Content() {
  return (
    <div className="space-y-6 text-secondary-700 leading-relaxed text-lg">
      <p>
        In the mining and heavy industrial sectors, productivity is measured by the hour. When a key piece of machinery—like a primary crusher, dragline, or a 300-tonne excavator—goes offline, the financial impact is immediate, compounding with every minute of inactivity.
      </p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">Understanding the direct costs</h3>
      <p>
        The direct cost of downtime is often calculated by the loss of production capacity. For instance, a medium-sized iron ore mine can lose anywhere from $20,000 to $100,000 per hour when a main conveyor or secondary crusher shuts down unexpectedly. This includes idle operators, delayed truck fleets, and unmet shipping quotas.
      </p>
      
      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">Logistical overhead of workshop transport</h3>
      <p>
        Historically, restoring worn-out or damaged bores on major machinery meant dismantling the assembly, loading the heavy components onto transport trucks, and shipping them to a specialized machining workshop. The logistical overhead alone—involving heavy lift permits, escort vehicles, and transit times—can add days or even weeks to the repair schedule.
      </p>

      <blockquote className="border-l-4 border-accent pl-6 italic my-8 text-secondary-800 font-semibold text-xl bg-secondary-50 py-4 pr-4 rounded-r-xl">
        "On-site machining isn't just about repairing a bore; it's a strategic operation to reclaim lost hours and protect profit margins."
      </blockquote>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">How mobile line boring mitigates losses</h3>
      <p>
        Mobile line boring bypasses workshop transit entirely. By deploying fully equipped service trucks directly to the site—whether it's in the Perth metropolitan area or the remote Pilbara region—technicians can set up portable boring bars and welding machines directly on the machine frame. This reduces transit time to zero and slashes overall repair cycles by up to 75%.
      </p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">Preventative maintenance as a shield</h3>
      <p>
        To avoid catastrophic failures, mine operators must implement regular pin and bore inspections. Catching minor wear early allows for scheduled, overnight line boring and bush installations during planned maintenance windows, ensuring that unexpected breakdowns don't disrupt primary operations.
      </p>
    </div>
  );
}

function Post2Content() {
  return (
    <div className="space-y-6 text-secondary-700 leading-relaxed text-lg">
      <p>
        Precision is the difference between a repair that lasts five years and one that fails in five months. In heavy industrial machinery, installing bushes and bearings is a critical task that demands precise axial and radial alignment.
      </p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">The problem with traditional alignment</h3>
      <p>
        Standard installation methods often rely on physical dial indicators or visual inspections. While these methods are suitable for small-scale applications, they fall short when dealing with massive housings and high-load bearings on mining equipment, where tolerances are measured in fractions of a millimeter.
      </p>
      
      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">What is acoustic alignment?</h3>
      <p>
        Acoustic alignment utilizes high-frequency sound waves to verify the exact positioning and fit of the bearing inside its housing. By monitoring the acoustic feedback during the pressing process, technicians can identify microscopic air gaps or uneven pressure distribution before the machine is reassembled.
      </p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">Benefits of precise bearing installation</h3>
      <ul className="space-y-3 my-6 pl-4">
        <li className="flex items-start gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" />
          <span><strong>Reduced Friction:</strong> Perfect alignment minimizes rotational resistance, reducing operating temperatures.</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" />
          <span><strong>Extended Lifespan:</strong> Eliminates uneven load distributions that lead to premature fatigue.</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" />
          <span><strong>Vibration Control:</strong> Prevents micro-vibrations from transferring to and damaging surrounding gears and seals.</span>
        </li>
      </ul>

      <p>
        Investing in advanced alignment techniques during installation saves companies thousands of dollars in replacement parts and maintenance labor down the track.
      </p>
    </div>
  );
}

function Post3Content() {
  return (
    <div className="space-y-6 text-secondary-700 leading-relaxed text-lg">
      <p>
        When a machinery component suffers bore wear or damage, maintenance managers face a key decision: transport the part to a workshop or complete the repair on-site. Here is a direct comparison of the two approaches.
      </p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">1. Transit & transport logistics</h3>
      <p>
        <strong>Workshop:</strong> Requires heavy lifting equipment, flatbed trucks, transport permits, and escort services. This process takes significant planning and creates substantial transit delay.
      </p>
      <p>
        <strong>Mobile (On-Site):</strong> The service team drives directly to the machine's location. Setup begins immediately on arrival, eliminating all transport logistics.
      </p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">2. Repair quality and precision</h3>
      <p>
        Modern portable line boring tools, like our Hofmann Triangle equipment, deliver the exact same tolerances (+/- 0.02mm) as stationary workshop boring machines. The myth that on-site repairs are less precise is completely busted by modern technology.
      </p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">3. Overall costs</h3>
      <p>
        While the hourly rate for a mobile machining team is slightly higher than in-shop labor, the total project cost is almost always lower because you avoid heavy transport bills, crane hire fees, and multiple days of lost production.
      </p>
    </div>
  );
}

function Post4Content() {
  return (
    <div className="space-y-6 text-secondary-700 leading-relaxed text-lg">
      <p>
        Excavators are the workhorses of mining and construction. However, the high-stress nature of digging operations means that pins, bushes, and bores are constantly subjected to immense force.
      </p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">Key inspection points</h3>
      <p>
        To prevent unexpected failures, inspect the bucket pins, stick joints, and boom cylinders every 250 operating hours. Look for signs of play, grease seal damage, or unusual noise during pivot operations.
      </p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">The importance of regular greasing</h3>
      <p>
        Failing to grease pins daily allows dirt and rock particles to enter the joint. This creates an abrasive paste that rapidly wears down the steel, leading to oval-shaped bores that must be line bored to restore alignment.
      </p>
    </div>
  );
}

function Post5Content() {
  return (
    <div className="space-y-6 text-secondary-700 leading-relaxed text-lg">
      <p>
        Providing on-site engineering to remote Western Australia locations requires more than just technical skill—it demands meticulous planning and absolute self-reliance.
      </p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">Preparing for the unexpected</h3>
      <p>
        Our mobile line boring units carry redundant tooling, replacement parts, and independent power generators. If a tool fails 500 kilometers away from the nearest town, our technicians must have a backup plan ready to keep the job moving.
      </p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">Safety in remote environments</h3>
      <p>
        Working in extreme temperatures and remote terrains means adhering to strict safety protocols. Every technician is fully trained in remote first aid and works under comprehensive Job Safety Analyses (JSA).
      </p>
    </div>
  );
}

function Post6Content() {
  return (
    <div className="space-y-6 text-secondary-700 leading-relaxed text-lg">
      <p>
        At BHEL Engineering, we choose to use Hofmann Triangle portable line boring equipment. Here's why this tooling is the gold standard for on-site repairs.
      </p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">Unmatched rigidity</h3>
      <p>
        Unlike standard boring bars that can flex under high load, the triangular mounting system of Hofmann equipment offers incredible structural rigidity. This allows us to maintain strict tolerances even during heavy, deep cuts.
      </p>

      <h3 className="text-2xl font-bold text-secondary-900 mt-10 mb-4 font-sans">Adaptability in the field</h3>
      <p>
        The compact, modular design means we can set up the boring bar in tight spaces where other equipment simply wouldn't fit, such as inside small loader joints or compact machine frames.
      </p>
    </div>
  );
}

export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-secondary-50 py-24">
        <h2 className="text-3xl font-bold text-secondary-900 mb-4">Article Not Found</h2>
        <p className="text-secondary-600 mb-8">The blog post you are looking for does not exist.</p>
        <Link to="/blogs" className="btn-primary">Back to Blogs</Link>
      </div>
    );
  }

  const renderPostContent = () => {
    switch (post.id) {
      case 1:
        return <Post1Content />;
      case 2:
        return <Post2Content />;
      case 3:
        return <Post3Content />;
      case 4:
        return <Post4Content />;
      case 5:
        return <Post5Content />;
      case 6:
        return <Post6Content />;
      default:
        return null;
    }
  };

  return (
    <>
      <title>{post.title} – BHEL Engineering | Insights</title>
      
      {/* Article Hero */}
      <section className="relative pt-40 pb-24 bg-primary-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/80 to-primary-950/40" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Link to="/blogs" className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors mb-6 font-semibold">
            <ArrowLeft className="w-5 h-5" /> Back to Insights
          </Link>
          <span className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
            {post.title}
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-primary-200">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-accent" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-accent" /> {post.readTime}</span>
            <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-accent" /> {post.author}</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                {renderPostContent()}
              </div>
              
              {/* Share block */}
              <div className="border-t border-secondary-100 mt-12 pt-6 flex items-center justify-between">
                <span className="text-secondary-500 text-sm font-medium">Published by BHEL Engineering</span>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                  }}
                  className="flex items-center gap-2 text-primary-600 hover:text-accent font-semibold text-sm transition-colors"
                >
                  <Share2 className="w-4 h-4" /> Share Article
                </button>
              </div>
            </div>

            {/* Sidebar info */}
            <div className="space-y-8">
              <div className="bg-secondary-50 border border-secondary-200 rounded-2xl p-6">
                <h4 className="font-bold text-secondary-900 mb-4">Need Expert Machining?</h4>
                <p className="text-secondary-600 text-sm leading-relaxed mb-6">
                  Our mobile units are available 24/7 for line boring, welding, and facing repairs across Western Australia.
                </p>
                <div className="space-y-4">
                  <a href="tel:0861180954" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-secondary-200 hover:border-primary-500 transition-colors group">
                    <Phone className="w-5 h-5 text-primary-600 group-hover:text-accent flex-shrink-0" />
                    <div>
                      <p className="text-secondary-400 text-xxs uppercase tracking-wider font-bold">Call us</p>
                      <p className="text-secondary-800 text-xs font-bold font-sans">(08) 6118 0954</p>
                    </div>
                  </a>
                  <a href="mailto:sen@bheleng.com.au" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-secondary-200 hover:border-primary-500 transition-colors group">
                    <Mail className="w-5 h-5 text-primary-600 group-hover:text-accent flex-shrink-0" />
                    <div>
                      <p className="text-secondary-400 text-xxs uppercase tracking-wider font-bold">Email us</p>
                      <p className="text-secondary-800 text-xs font-bold font-sans">sen@bheleng.com.au</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
