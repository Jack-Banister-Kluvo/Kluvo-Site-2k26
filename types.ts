
export interface NavLink {
  label: string;
  href: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  industry: string;
  rating: number;
}

export interface PricingCardProps {
  price: string;
  leads: string;
  channels: string;
  appointments: string;
  features: string[];
}

export interface TimelineStep {
  title: string;
  days: string;
  description: string;
  details: string[];
}
