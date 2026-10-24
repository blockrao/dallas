'use client';

import { useEffect, useState } from 'react';

interface Feed {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  link: string;
}

export default function FeedsWidget() {
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/feeds');
        if (!response.ok) {
          throw new Error('Failed to load feeds');
        }
        const data = await response.json();
        setFeeds(data.feeds || []);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load feeds');
        setFeeds([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFeeds();
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="p-6 rounded-lg border border-slate-300 bg-slate-100 h-32" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 rounded-lg border border-red-300 bg-red-50 text-red-800">
        <p className="font-semibold mb-2">Unable to load feeds</p>
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  if (feeds.length === 0) {
    return (
      <div className="p-6 rounded-lg border border-slate-300 bg-slate-50 text-center text-slate-600">
        <p>No feeds available at this time</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {feeds.map((feed) => (
        <a
          key={feed.id}
          href={feed.link}
          className="block p-6 rounded-lg border border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50 transition"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                  {feed.category}
                </span>
                <span className="text-xs text-slate-500">{feed.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2 hover:text-blue-600 transition">
                {feed.title}
              </h3>
              <p className="text-slate-600 text-sm line-clamp-2">{feed.excerpt}</p>
            </div>
            <div className="text-blue-600 flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
