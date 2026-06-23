import { ArrowRight, Calendar, User, Clock, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The True Cost of Equipment Downtime in Mining',
    excerpt: 'When heavy machinery stops, the financial impact ripples through the entire operation. Discover how rapid mobile line boring response teams mitigate these losses.',
    date: 'October 14, 2025',
    author: 'BHEL Engineering',
    category: 'Industry Insights',
    readTime: '4 min read',
    color: 'bg-primary-700',
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
  },
];

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
          <span className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-6">Knowledge Base</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Industry <span className="text-accent">News & Insights</span>
          </h1>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl">
            Stay up to date with the latest technical guides, maintenance tips, and industry news from Western Australia's on-site machining experts.
          </p>
        </div>
      </div>
    </section>
  );
}

function FeaturedPost() {
  const post = blogPosts[0];
  return (
    <section className="pt-24 pb-12 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row group cursor-pointer hover:shadow-2xl transition-all duration-500">
          <div className={`lg:w-1/2 p-12 flex flex-col justify-center relative overflow-hidden ${post.color}`}>
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay"></div>
            <span className="relative z-10 inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-bold tracking-wide uppercase mb-6 self-start backdrop-blur-sm">
              Featured Insight
            </span>
            <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-white mb-6 leading-tight group-hover:-translate-y-1 transition-transform duration-300">
              {post.title}
            </h2>
          </div>
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-4 text-sm text-secondary-500 mb-6 font-medium">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
              <span className="hidden sm:flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</span>
            </div>
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            <div className="mt-auto flex items-center justify-between border-t border-secondary-100 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700">
                  <User className="w-5 h-5" />
                </div>
                <span className="font-semibold text-secondary-900">{post.author}</span>
              </div>
              <span className="inline-flex items-center font-bold text-primary-600 group-hover:text-accent transition-colors">
                Read Article <ChevronRight className="w-5 h-5 ml-1" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogGrid() {
  const posts = blogPosts.slice(1);
  return (
    <section className="py-12 bg-secondary-50 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-secondary-900 mb-10">Latest Articles</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => {
            return (
              <div 
                key={post.id} 
                className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col group cursor-pointer hover:shadow-xl transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-48 ${post.color} relative overflow-hidden flex items-end p-6`}>
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
                  <span className="relative z-10 inline-block px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold tracking-wide uppercase backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-secondary-500 mb-4 font-medium">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</span>
                  </div>
                  <h4 className="text-xl font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-secondary-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-6 border-t border-secondary-100">
                    <span className="inline-flex items-center font-bold text-sm text-primary-600 group-hover:text-accent transition-colors">
                      Read Article <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function BlogsPage() {
  return (
    <>
      <title>Blogs – BHEL Engineering | Industry Insights</title>
      <PageHero />
      <FeaturedPost />
      <BlogGrid />
    </>
  );
}
