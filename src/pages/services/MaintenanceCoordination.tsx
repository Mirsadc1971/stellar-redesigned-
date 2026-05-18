import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import { CTASection } from '../../components/ui/CTASection';
import {
  Wrench,
  ClipboardCheck,
  Users,
  AlertTriangle,
  HardHat,
  Search,
  CheckCircle2,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function MaintenanceCoordination() {
  const features = [
    { icon: ClipboardCheck, title: 'Preventive Maintenance Programs', description: 'Scheduled inspections, seasonal maintenance calendars, and component lifecycle tracking that extends the life of your property assets.' },
    { icon: Users, title: 'Vendor Management', description: 'A curated network of trusted contractors with competitive pricing, quality guarantees, and the reliability your community deserves.' },
    { icon: AlertTriangle, title: '24/7 Emergency Response', description: 'Round-the-clock emergency line staffed by experienced professionals who coordinate immediate response to protect your property and residents.' },
    { icon: HardHat, title: 'Capital Project Oversight', description: 'End-to-end management of major projects including scope development, competitive bidding, construction oversight, and warranty tracking.' },
    { icon: Search, title: 'Property Inspections', description: 'Regular walk-through inspections that identify maintenance needs, safety concerns, and code compliance issues before they become costly problems.' },
    { icon: ShieldCheck, title: 'Contractor Vetting', description: 'Thorough verification of licenses, insurance, references, and work history for every contractor who works on your property.' }
  ];

  return (
    <>
      <SEOHead
        title="Property Maintenance Coordination | Stellar Property Group"
        description="Professional property maintenance coordination for Chicago community associations. Preventive maintenance programs, 24/7 emergency response, vendor management, and capital project oversight since 2007."
      />

      {/* Hero Section */}
      <section className="relative bg-navy-900 py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-gold-500 mb-4">
              <Wrench className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Maintenance Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Property Maintenance Coordination
            </h1>
            <p className="text-xl text-navy-200 mb-8 leading-relaxed">
              Protecting your community investment through proactive maintenance planning, trusted vendor partnerships, and rapid emergency response. We keep your property in peak condition so residents enjoy a safe, well-maintained environment year-round.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center bg-gold-500 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
              >
                Request a Maintenance Assessment
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
                Proactive Maintenance That Protects Property Values
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Deferred maintenance is the silent killer of community association property values. A small roof leak becomes water damage becomes structural repair becomes a six-figure special assessment. At Stellar Property Group, we break that cycle with preventive maintenance programs that catch problems early, systematic property inspections that identify issues before they escalate, and trusted vendor relationships that deliver quality work at competitive prices.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our maintenance coordination team manages every aspect of your property upkeep, from routine landscaping and janitorial services to complex capital improvement projects. We maintain a vetted network of licensed, insured contractors who understand the unique requirements of community association work and deliver consistent quality across every project.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When emergencies happen, our 24/7 emergency response line ensures your community is never left waiting. Whether it is a burst pipe at 2 AM, storm damage on a holiday weekend, or a power outage affecting common areas, our team coordinates the immediate response and follows through until the situation is fully resolved.
              </p>
            </div>
            <div className="bg-navy-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-navy-800 mb-6">Our Maintenance Standards</h3>
              <ul className="space-y-4">
                {[
                  '24/7 emergency response line for all communities',
                  'Preventive maintenance schedules for every property',
                  'Vetted, licensed, and insured contractor network',
                  'Competitive bidding on all major projects',
                  'Regular property inspections and condition reports',
                  'Capital project management from planning to completion',
                  'Seasonal maintenance programs for Chicago weather',
                  'Online maintenance request portal for residents'
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
              Comprehensive Maintenance Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From daily upkeep to major capital projects, our maintenance coordination keeps your property in excellent condition and your residents satisfied.
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
              <Wrench className="w-8 h-8 text-navy-700" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-800">
                Capital Project Management Done Right
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Major capital projects represent the largest expenditures your association will face, and how they are managed directly impacts both your finances and your property values. Whether it is a full roof replacement, elevator modernization, facade restoration, or parking structure repair, Stellar Property Group brings the project management expertise to ensure every capital project is completed on time, within budget, and to the highest quality standards.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our capital project process begins with thorough scope development and engineering assessments. We then solicit competitive bids from qualified contractors, present detailed comparisons to your board, and manage the entire construction process with regular progress reports, quality inspections, and budget tracking. We also coordinate resident communications to minimize disruption during construction.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              After project completion, we manage warranty documentation, schedule follow-up inspections, and update your reserve study to reflect completed improvements. This comprehensive approach ensures your capital dollars are invested wisely and your property improvements deliver lasting value for the community.
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
              { title: 'Condominium Management', href: '/services/condominium-management', description: 'Full-service condo management with integrated maintenance coordination.' },
              { title: 'Financial Management', href: '/services/financial-management', description: 'Reserve planning and budgeting that funds your maintenance needs.' },
              { title: 'Townhome Management', href: '/services/townhome-management', description: 'Specialized maintenance coordination for townhome shared structures.' }
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
