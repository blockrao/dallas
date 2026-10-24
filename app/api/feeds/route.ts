import { NextResponse } from 'next/server';

interface Feed {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  link: string;
}

// Sample feeds data - in production, this would come from a database or CMS
const sampleFeeds: Feed[] = [
  {
    id: '1',
    title: 'Patch vs. Upgrade vs. Migrate: Which is Right for You?',
    excerpt:
      'Three paths forward from legacy PHP—but not all are created equal. We break down the pros, cons, costs, and timelines of each approach so you can make the right decision.',
    category: 'Decision Guide',
    date: '2026-10-24',
    link: '/articles/patch-upgrade-migrate',
  },
  {
    id: '2',
    title: 'Security Checklist: Is Your PHP Site Safe?',
    excerpt:
      'Most legacy PHP sites have dangerous security gaps. Use this checklist to audit your own site and understand your risk exposure before EOL hits.',
    category: 'Security',
    date: '2026-10-22',
    link: '/articles/php-security-checklist',
  },
  {
    id: '3',
    title: 'Case Study: E-Commerce Site, 12.5x Faster Load Times',
    excerpt:
      'A Dallas-based e-commerce company upgraded from legacy PHP to modern Next.js, seeing 12.5x faster load times and 60% lower hosting costs. Learn how they achieved $200K to $254K revenue growth.',
    category: 'Case Study',
    date: '2026-10-20',
    link: '/articles/php-modernization-case-study',
  },
  {
    id: '4',
    title: 'Hidden Costs of Old PHP: What You\'re Actually Paying',
    excerpt:
      'Beyond hosting fees, legacy PHP sites cost money in slow conversion rates, high infrastructure costs, and lost customers. We show you the real math.',
    category: 'Business Analysis',
    date: '2026-10-19',
    link: '/articles/hidden-costs-legacy-php',
  },
  {
    id: '5',
    title: 'PHP to Next.js Migration Guide: Step-by-Step',
    excerpt:
      'A practical walkthrough of how we migrate legacy PHP sites to Next.js. Learn the phases, timeline, and what to expect at each stage.',
    category: 'Technical Guide',
    date: '2026-10-17',
    link: '/articles/php-nextjs-migration-guide',
  },
  {
    id: '6',
    title: 'PHP 8.2 EOL: What the Numbers Show',
    excerpt:
      'Analyzing the impact of PHP 8.2 end-of-life across the DFW business landscape. Data on affected sites, risks, and the timeline to action.',
    category: 'Industry Trends',
    date: '2026-10-15',
    link: '/articles/php-8-2-eol-analysis',
  },
];

export async function GET() {
  try {
    // In a real application, you might fetch from a database or CMS here
    // For now, return sample feeds
    return NextResponse.json(
      {
        success: true,
        feeds: sampleFeeds,
        total: sampleFeeds.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Feeds API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch feeds',
        feeds: [],
      },
      { status: 500 }
    );
  }
}

export async function POST() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
