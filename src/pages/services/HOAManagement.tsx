import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import { CTASection } from '../../components/ui/CTASection';
import {
  Home,
  Users,
  TreePine,
  CalendarDays,
  Ruler,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  Handshake,
  MessageCircle
} from 'lucide-react';

export default function HOAManagement() {
  const features = [
    { icon: Users, title: 'Community Engagement', description: 'Town halls, surveys, social events, and communication programs that bring neighbors together and build a strong sense of community.' },
    { icon: BookOpen, title: 'CC&R Enforcement', description: 'Fair, consistent enforcement of covenants, conditions, and restrictions that protects property values while respecting homeowner rights.' },
    { icon: TreePine, title: 'Landscaping Coordination', description: 'Seasonal landscaping programs, snow removal management, and common area beautification that keeps your community looking its best.' },
    { icon: CalendarDays, title: 'Community Events', description: 'Planning and coordination of neighborhood events, holiday celebrations, and community gatherings that foster resident connections.' },
    { icon: Ruler, title: 'Architectural Review', description: 'Streamlined architectural review process for modifications, additions, and exterior changes that maintains community aesthetics.' },
    { icon: MessageCircle, title: 'Homeowner Communications', description: 'Multi-channel communication through newsletters, email, online portal, and community website to keep every homeowner informed.' }
  ];

  return (
    <>
      <SEOHead
        title="HOA Management Services in Chicago | Stellar Property Group"
        description="Professional HOA management for Chicago-area homeowners associations. CC&amp;R enforcement, community engagement, landscaping coordination, architectural review, and full-service association management since 2007."
      />

      {/* Hero Section */}
      <section className="relative bg-navy-900 py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-gold-500 mb-4">
              <Home className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Property Management</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              HOA Management Services in Chicago
            </h1>
            <p className="text-xl text-navy-200 mb-8 leading-relaxed">
              Building stronger neighborhoods through professional homeowners association management. From established suburbs to new developments across Chicagoland, we create communities where people are proud to live.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center bg-gold-500 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
              >
                Request a Proposal
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-800 mb-6">
                Neighborly Management That Builds Real Community
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Homeowners associations thrive when residents feel connected, informed, and proud of where they live. At Stellar Property Group, our HOA management goes beyond the administrative basics. We partner with your board to create vibrant, well-maintained neighborhoods where property values grow and neighbors become friends.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since 2007, we have managed single-family home communities, planned unit developments, and mixed-use neighborhoods throughout Chicago and the surrounding suburbs. Our approach combines proactive common area maintenance, transparent financial management, and thoughtful community programming that transforms a collection of homes into a true community.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every HOA we manage receives a dedicated community manager who attends board meetings, coordinates vendors, handles homeowner communications, and ensures your CC&Rs are enforced fairly and consistently. We bring institutional knowledge and professional resources while never losing sight of the personal relationships that make neighborhoods special.
              </p>
            </div>
            <div className="bg-navy-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-navy-800 mb-6">The Stellar HOA Difference</h3>
              <ul className="space-y-4">
                {[
                  'Dedicated community manager for your HOA',
                  'Proven CC&R enforcement that is fair and consistent',
                  'Seasonal landscaping and common area programs',
                  'Community event planning and coordination',
                  'Streamlined architectural review process',
                  'Online homeowner portal with real-time updates',
                  'Annual community satisfaction surveys',
                  'CAI-certified management professionals'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-800 mb-4">
              Complete HOA Management Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From day-to-day operations to long-term strategic planning, we handle every aspect of homeowners association management with professionalism and care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-navy-700" />
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Handshake className="w-8 h-8 text-navy-700" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-800">
                More Than Management: Building Community
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The best homeowners associations are the ones where residents feel a genuine sense of belonging. Our community engagement programs go beyond maintaining common areas and collecting dues. We help your board create traditions, foster connections, and build the kind of neighborhood where people want to put down roots.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              From seasonal block parties and holiday lighting ceremonies to community garden programs and neighborhood watch coordination, we bring the organizational expertise and vendor relationships to make community events happen smoothly. Our online community portal gives homeowners a centralized place to stay informed, submit requests, and connect with their neighbors.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We also conduct annual community satisfaction surveys to identify priorities and measure how well the association is meeting homeowner expectations. This data-driven approach ensures your board makes decisions that reflect the community values and helps us continuously improve the services we provide.
            </p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-navy-800 mb-10 text-center">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Violation Management', href: '/services/violation-management', description: 'Fair, transparent enforcement of community rules with proper due process.' },
              { title: 'Maintenance Coordination', href: '/services/maintenance-coordination', description: 'Common area maintenance, landscaping oversight, and emergency response.' },
              { title: 'Board Support & Governance', href: '/services/board-support', description: 'Meeting coordination, strategic planning, and governance best practices.' }
            ].map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow group"
              >
                <h3 className="text-xl font-bold text-navy-800 mb-3 group-hover:text-gold-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="inline-flex items-center text-navy-700 font-semibold group-hover:text-gold-600 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
