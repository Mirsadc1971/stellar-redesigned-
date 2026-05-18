import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import { CTASection } from '../../components/ui/CTASection';
import {
  Building,
  PaintBucket,
  Users,
  Heart,
  Hammer,
  Shield,
  CheckCircle2,
  ArrowRight,
  Star,
  Fence
} from 'lucide-react';

export default function TownhomeManagement() {
  const features = [
    { icon: PaintBucket, title: 'Exterior Maintenance Coordination', description: 'Siding, roofing, gutters, and exterior paint programs managed on a scheduled cycle to protect your investment and maintain curb appeal.' },
    { icon: Fence, title: 'Shared Space Management', description: 'Common courtyards, walkways, parking areas, and shared amenities maintained to the highest standards for all residents.' },
    { icon: Users, title: 'Personalized Service', description: 'Smaller communities deserve big attention. Your dedicated manager knows every unit, every owner, and every detail of your association.' },
    { icon: Hammer, title: 'Capital Project Oversight', description: 'From roof replacements to parking lot resurfacing, we manage capital projects with competitive bidding, quality control, and budget discipline.' },
    { icon: Shield, title: 'Insurance & Risk Management', description: 'Proper insurance coverage analysis, claims management, and loss prevention strategies tailored to townhome community needs.' },
    { icon: Heart, title: 'Community Relations', description: 'Neighbor-to-neighbor communication support, community guidelines, and a responsive management team that resolves issues quickly.' }
  ];

  return (
    <>
      <SEOHead
        title="Townhome Association Management in Chicago | Stellar Property Group"
        description="Specialized townhome association management in Chicago and suburbs. Exterior maintenance coordination, shared space management, and personalized service for smaller communities. Serving Chicagoland since 2007."
      />

      {/* Hero Section */}
      <section className="relative bg-navy-900 py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-gold-500 mb-4">
              <Building className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Property Management</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Townhome Association Management in Chicago
            </h1>
            <p className="text-xl text-navy-200 mb-8 leading-relaxed">
              Specialized management for townhome communities that deserve more than a one-size-fits-all approach. We understand the unique dynamics of townhome living and deliver the personalized attention your association needs.
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
                Townhome Management That Feels Personal, Not Corporate
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Townhome communities occupy a unique space in the world of community associations. Smaller than high-rise condominiums but more interconnected than single-family HOAs, townhome associations face distinct challenges: shared walls and rooflines, exterior maintenance responsibilities that span multiple units, and intimate community dynamics where every owner voice matters.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Stellar Property Group, we have managed townhome communities across Chicago and the North Shore since 2007. We know that townhome associations need a management partner who provides the same caliber of professional service as a large management firm but with the personal touch and accessibility of a boutique operation. That is exactly what we deliver.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Your dedicated property manager will know every unit number, understand every maintenance schedule, and be personally invested in your community success. We handle the complex coordination of exterior maintenance projects that affect multiple units simultaneously, manage shared infrastructure like parking areas and common landscaping, and ensure your community finances are on solid footing for the long term.
              </p>
            </div>
            <div className="bg-navy-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-navy-800 mb-6">Tailored for Townhome Living</h3>
              <ul className="space-y-4">
                {[
                  'Dedicated manager who knows your community personally',
                  'Coordinated exterior maintenance across shared structures',
                  'Reserve studies tailored to townhome components',
                  'Shared space and amenity management',
                  'Responsive service for smaller communities',
                  'Competitive vendor pricing through our network',
                  'Insurance coverage review and optimization',
                  'Transparent budgets and financial reporting'
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
              Services Designed for Townhome Communities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From coordinating multi-unit roof replacements to managing intimate community budgets, our services address the specific needs of townhome associations.
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
              <Star className="w-8 h-8 text-navy-700" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-800">
                Understanding Townhome-Specific Needs
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Townhome associations face maintenance challenges that require careful coordination. When a roofing project spans six connected units, or when exterior painting must happen in phases across an entire block, you need a management team that can plan the logistics, communicate with affected owners, manage contractor schedules, and ensure quality work that protects every unit equally.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our team brings deep experience in coordinating these multi-unit projects. We develop long-range maintenance schedules that spread costs predictably, negotiate volume discounts with contractors, and provide detailed project updates to all owners. We also conduct regular property inspections to catch maintenance issues early, before a small problem at one unit becomes an expensive emergency for the entire association.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Financial planning for townhome communities requires specific expertise as well. Reserve studies must account for shared roofs, common driveways, and exterior building components that have different lifecycles depending on their exposure and condition. Our financial management team creates reserve plans that reflect the true needs of your townhome community, ensuring you are prepared for major expenses without overburdening owners with excessive assessments.
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
              { title: 'Financial Management', href: '/services/financial-management', description: 'Reserve studies, budgets, and financial planning tailored to townhome communities.' },
              { title: 'Maintenance Coordination', href: '/services/maintenance-coordination', description: 'Preventive programs and capital project management for shared structures.' },
              { title: 'Violation Management', href: '/services/violation-management', description: 'Fair enforcement of community standards that keeps your neighborhood beautiful.' }
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
