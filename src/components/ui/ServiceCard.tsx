import { Link } from 'react-router-dom';
import { ArrowRight, type LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  return (
    <Link
      to={href}
      className="group block bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-navy-100/50"
    >
      <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-navy-700 transition-colors duration-300">
        <Icon className="w-7 h-7 text-navy-600 group-hover:text-gold-400 transition-colors duration-300" />
      </div>
      <h3 className="text-lg font-bold text-navy-800 mb-3 group-hover:text-navy-900 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-navy-500 leading-relaxed mb-5">
        {description}
      </p>
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-navy-600 group-hover:text-gold-600 transition-colors duration-300">
        Learn More
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
