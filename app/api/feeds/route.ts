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
    title: 'Case Study: How We Modernized a PHP E-Commerce Site in 2 Weeks',
    excerpt:
      'A Dallas-based e-commerce company upgraded from legacy PHP to modern Next.js, seeing 12.5x faster load times and 60% lower hosting costs. Learn how they achieved $200K to $254K revenue growth.',
    category: 'Case Study',
    date: '2026-10-20',
    link: '/articles/php-modernization-case-study',
  },
  {
    id: '2',
    title: 'Why Local Businesses Are Getting Left Behind Online',
    excerpt:
      'Many Dallas businesses still rely on outdated websites that hurt their visibility. Discover the 5 critical gaps preventing customer discovery and how to fix them fast.',
    category: 'Industry Insight',
    date: '2026-10-18',
    link: '/articles/why-local-businesses-left-behind',
  },
  {
    id: '3',
    title: 'The Hidden Cost of Running Legacy PHP in 2026',
    excerpt:
      'Legacy PHP sites cost more to maintain, rank lower in search, and lose customers to competitors. We break down the math and show why modernization pays for itself.',
    category: 'Technology',
    date: '2026-10-15',
    link: '/articles/cost-of-legacy-php',
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
