import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Tag, User, ChevronRight } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { CTASection } from '../components/ui/CTASection';
import { getBlogPostBySlug, blogPosts } from '../data/blog-posts';

function formatDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Stellar Property Group',
      url: 'https://stellarpropertygroup.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://stellarpropertygroup.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.metaDescription}
        canonical={`https://stellarpropertygroup.com/blog/${post.slug}`}
        ogType="article"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="bg-gray-50 border-b border-gray-200"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-1 text-sm text-gray-500 flex-wrap">
            <li>
              <Link to="/" className="hover:text-navy-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-navy-600 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li className="text-gray-900 font-medium truncate max-w-xs sm:max-w-md">
              {post.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* Post Header */}
      <header className="bg-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-navy-50 text-navy-700 px-3 py-1 rounded-full text-sm font-medium">
              <Tag className="w-3.5 h-3.5" />
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-display leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="inline-flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
          </div>
        </div>
      </header>

      {/* Post Content */}
      <article className="bg-white pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="
              [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:font-display
              [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-gray-800 [&>h3]:mt-8 [&>h3]:mb-3
              [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:mb-5 [&>p]:text-lg
              [&>ul]:my-5 [&>ul]:space-y-3 [&>ul]:list-disc [&>ul]:pl-6
              [&>ul>li]:text-gray-700 [&>ul>li]:text-lg [&>ul>li]:leading-relaxed
              [&_a]:text-navy-600 [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-navy-300 hover:[&_a]:text-navy-700 hover:[&_a]:decoration-navy-500 [&_a]:transition-colors
              [&_strong]:text-gray-900 [&_strong]:font-semibold
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 font-display">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <article
                  key={related.slug}
                  className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300 p-6"
                >
                  <span className="text-sm text-navy-600 font-medium">
                    {related.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3">
                    <Link
                      to={`/blog/${related.slug}`}
                      className="hover:text-navy-600 transition-colors"
                    >
                      {related.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm">{related.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection />
    </>
  );
}
