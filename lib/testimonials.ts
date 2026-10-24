export interface Testimonial {
  id: string;
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    location: string;
    initials: string;
  };
  companyLogo?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'We thought modernizing would take 6 months and cost $50K. DallasCircle did it in 2 weeks for $999. Our site is 12x faster and costs less to host.',
    author: {
      name: 'Rachel Harris',
      title: 'Founder',
      company: 'Harris Home Goods',
      location: 'Dallas, TX',
      initials: 'RH',
    },
  },
  {
    id: '2',
    quote:
      'We had no idea PHP 8.2 was ending. DallasCircle did a free audit, showed us our risk, and gave us a clear migration path. No pressure, just solid advice.',
    author: {
      name: 'Marcus Chen',
      title: 'Operations Manager',
      company: 'Chen HVAC',
      location: 'Arlington, TX',
      initials: 'MC',
    },
  },
  {
    id: '3',
    quote:
      'Security was a nightmare on our old PHP stack. The new site is cleaner, faster, and actually secure. Best $999 we\'ve spent.',
    author: {
      name: 'Sophia Johnson',
      title: 'Owner',
      company: 'Johnson Digital Marketing',
      location: 'Plano, TX',
      initials: 'SJ',
    },
  },
];
