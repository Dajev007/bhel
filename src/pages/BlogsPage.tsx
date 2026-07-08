import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock, ChevronRight } from 'lucide-react';
import { blogPosts } from './BlogDetailPage';

function PageHero() {
  return (
    <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/img/blogs_hero_banner.png"
          alt="BHEL Engineering Blogs"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/80 to-primary-900/40" />
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
        <Link to={`/blogs/${post.id}`} className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row group cursor-pointer hover:shadow-2xl transition-all duration-500 no-underline">
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
        </Link>
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
              <Link
                to={`/blogs/${post.id}`}
                key={post.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col group cursor-pointer hover:shadow-xl transition-all duration-500 animate-fade-in-up no-underline"
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
              </Link>
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
