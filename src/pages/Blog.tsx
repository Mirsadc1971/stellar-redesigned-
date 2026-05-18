import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { CTASection } from '../components/ui/CTASection';
import { blogPosts } from '../data/blog-posts';

function formatDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function Blog() {
  return (
    <>
      <SEOHead
        title="Property Management Blog | Stellar Property Group"
        description="Expert insights, tips, and resources for Chicago condo board members and property owners. Stay informed on property management best practices, Illinois regulations, and community governance."
      />

      {/* Hero Section */}
      <section className="bg-navy-800 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-display">
            Insights for Board Members & Property Owners
          </h1>
          <p className="text-lg sm:text-xl text-navy-200 max-w-3xl mx-auto">
            Expert guidance on property management, board governance, financial
            planning, and building maintenance from the Stellar Property Group
            team.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden flex flex-col"
              >
                {post.featuredImage && (
                  <div className="aspect-video bg-navy-100 overflow-hidden">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="hover:text-navy-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.date)}
                    </span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-navy-600 font-semibold text-sm hover:text-navy-700 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Have Questions About Property Management?"
        description="Our team is here to help Chicago board members and property owners navigate the complexities of community management. Reach out for a free consultation."
      />
    </>
  );
}
