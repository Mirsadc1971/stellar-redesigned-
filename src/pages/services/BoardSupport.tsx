import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import { CTASection } from '../../components/ui/CTASection';
import {
  Users,
  CalendarDays,
  FileText,
  Scale,
  Target,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  FolderOpen
} from 'lucide-react';

export default function BoardSupport() {
  const features = [
    { icon: CalendarDays, title: 'Meeting Coordination', description: 'Complete meeting management including scheduling, notice distribution, agenda preparation, presentation materials, and venue coordination.' },
    { icon: FileText, title: 'Agenda & Minutes', description: 'Professional agenda development that keeps meetings focused and productive, plus accurate minutes that document decisions and action items.' },
    { icon: Scale, title: 'Governance Guidance', description: 'Expert advice on parliamentary procedure, voting requirements, fiduciary duties, and compliance with Illinois association law.' },
    { icon: Target, title: 'Strategic Planning', description: 'Facilitated planning sessions that help your board set priorities, develop long-range goals, and create actionable implementation plans.' },
    { icon: GraduationCap, title: 'Board Member Orientation', description: 'Comprehensive onboarding for new board members covering fiduciary duties, governing documents, financials, and association operations.' },
    { icon: FolderOpen, title: 'Document Management', description: 'Organized digital archives of governing documents, meeting records, contracts, correspondence, and all association business records.' }
  ];

  return (
    <>
      <SEOHead
        title="Board Support & Governance Services | Stellar Property Group"
        description="Professional board support and governance services for Chicago community associations. Meeting coordination, strategic planning, new board member orientation, and document management. CAI-certified since 2007."
      />

      {/* Hero Section */}
      <section className="relative bg-navy-900 py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-gold-500 mb-4">
              <Users className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Governance Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Board Support & Governance Services
            </h1>
            <p className="text-xl text-navy-200 mb-8 leading-relaxed">
              Empowering association boards with the tools, knowledge, and professional support they need to govern effectively. We handle the administrative burden so your board can focus on strategic decisions that shape your community future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center bg-gold-500 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
              >
                Schedule a Board Consultation
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
                Professional Support for Effective Board Governance
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Serving on a community association board is a significant responsibility. Board members are volunteer leaders who must navigate complex legal requirements, manage substantial budgets, and make decisions that affect their neighbors daily lives and property values. Without professional support, board service can quickly become overwhelming, leading to burnout, poor decisions, and community conflict.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Stellar Property Group provides comprehensive board support services that make effective governance achievable for every board member, regardless of their experience level. From preparing detailed meeting agendas and maintaining accurate minutes to providing governance guidance and facilitating strategic planning sessions, we give your board the infrastructure it needs to lead with confidence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our CAI-certified management professionals bring deep knowledge of community association best practices, Illinois legal requirements, and proven governance frameworks. We serve as a trusted resource for your board, providing objective advice, facilitating difficult conversations, and ensuring every decision is properly documented and implemented.
              </p>
            </div>
            <div className="bg-navy-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-navy-800 mb-6">Board Support Highlights</h3>
              <ul className="space-y-4">
                {[
                  'Complete meeting preparation and agenda development',
                  'Professional minutes and record-keeping',
                  'New board member orientation program',
                  'Governance best practices guidance',
                  'Strategic planning facilitation',
                  'Document management and archiving',
                  'Board communication tools and portal',
                  'Annual board training sessions'
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
              Complete Board Support Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything your board needs to govern effectively, from meeting logistics to strategic planning and ongoing education.
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
              <GraduationCap className="w-8 h-8 text-navy-700" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-800">
                Investing in Board Education
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The most effective association boards are the ones that invest in their own development. Board members who understand their fiduciary duties, know how to read financial statements, and are familiar with Illinois association law make better decisions, avoid costly mistakes, and create healthier communities. That is why board education is a cornerstone of our governance support services.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our new board member orientation program covers everything an incoming director needs to know: the association governing documents, current financial position, pending projects, vendor contracts, and ongoing legal matters. We also provide training on fiduciary responsibilities, open meeting requirements, and the basics of Robert Rules of Order so new members can contribute meaningfully from their very first meeting.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              For experienced boards, we offer annual continuing education sessions on topics like reserve fund management, insurance coverage optimization, vendor contract negotiation, and conflict resolution. We also facilitate strategic planning retreats that help boards step back from day-to-day operations and focus on the long-term vision for their community. These investments in board development pay dividends in better governance, fewer conflicts, and stronger communities.
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
              { title: 'Condominium Management', href: '/services/condominium-management', description: 'Full-service condo management with comprehensive board support.' },
              { title: 'Financial Management', href: '/services/financial-management', description: 'Financial reporting and budget tools that empower informed board decisions.' },
              { title: 'Violation Management', href: '/services/violation-management', description: 'Policy enforcement guidance and due process support for your board.' }
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
