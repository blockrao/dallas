import Link from 'next/link';

export const metadata = {
  title: 'PHP Modernization Service — DallasCircle',
  description:
    'Modernize your legacy PHP website to Next.js in 2 weeks for $999. Includes free security audit. Perfect for small businesses and agencies.',
};

export default function PHPRescuePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-900 via-slate-800 to-slate-900 px-6 py-24 md:py-32">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/20 rounded-full mix-blend-multiply filter blur-3xl -z-10"></div>

        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-400/30 bg-red-400/10">
              <span className="w-2 h-2 rounded-full bg-red-400"></span>
              <span className="text-sm font-medium text-red-300">Legacy Code? We'll Fix It</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                PHP Rescue Plan
              </h1>
              <p className="text-xl text-slate-200 leading-relaxed max-w-2xl">
                Your PHP site is slow, insecure, and expensive to maintain. We'll modernize it to Next.js in 2 weeks for $999.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="mailto:hello@dallascircle.com?subject=PHP%20Rescue%20Inquiry"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition shadow-lg"
              >
                Request Free Audit
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-500 text-white font-semibold hover:border-slate-400 hover:bg-slate-800/50 transition"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-slate-900">
              The PHP Problem
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              PHP sites built years ago are costing you time and money.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: '🔓',
                title: 'Security Risks',
                desc: 'Old PHP versions have known vulnerabilities. You\'re exposed to hacks, data breaches, and liability.',
              },
              {
                icon: '🐌',
                title: 'Slow Performance',
                desc: 'Legacy code is bloated. Slow sites rank worse on Google and lose customers to faster competitors.',
              },
              {
                icon: '💸',
                title: 'Maintenance Cost',
                desc: 'Every change takes months. Developers are expensive. You\'re throwing money at a sinking ship.',
              },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-xl border border-red-200 bg-red-50">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-slate-900">
              The Solution
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Modern Next.js. Same functionality. 2 weeks. $999.
            </p>
          </div>

          <div className="grid gap-12">
            {[
              {
                week: 'Week 1',
                title: 'Audit & Planning',
                items: [
                  'Deep security audit of existing site',
                  'Performance benchmarking',
                  'Content & functionality inventory',
                  'Migration strategy & timeline',
                  'Free report with recommendations',
                ],
              },
              {
                week: 'Week 2',
                title: 'Build & Deploy',
                items: [
                  'Full Next.js rebuild from scratch',
                  'All content & functionality migrated',
                  'Modern, responsive design',
                  'SEO optimized & fast',
                  'Deployed to Vercel (free tier)',
                ],
              },
              {
                week: 'After',
                title: 'Handoff & Support',
                items: [
                  'Complete code handed over',
                  'Documentation included',
                  '30-day support included',
                  'Future updates easy & cheap',
                  'You own everything',
                ],
              },
            ].map((phase, i) => (
              <div key={i} className="p-8 rounded-xl border border-slate-200 bg-white">
                <div className="text-sm font-semibold text-red-600 mb-2">{phase.week}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{phase.title}</h3>
                <ul className="space-y-3">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-4xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-slate-900">
              Fixed Pricing
            </h2>
            <p className="text-lg text-slate-600">
              No surprises. No hourly rates. One price. Done.
            </p>
          </div>

          <div className="p-12 rounded-xl border-2 border-red-600 bg-red-50">
            <div className="space-y-4">
              <div className="text-6xl font-bold text-red-600">$999</div>
              <div className="text-xl text-slate-600">2-week modernization</div>
              <div className="pt-4 border-t border-red-200 space-y-2 text-left">
                <p className="flex items-center gap-2 text-slate-700">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Free security audit included
                </p>
                <p className="flex items-center gap-2 text-slate-700">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  All content migrated
                </p>
                <p className="flex items-center gap-2 text-slate-700">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  30-day support
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:hello@dallascircle.com?subject=PHP%20Rescue%20Inquiry"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition text-lg"
            >
              Start Your Free Audit
            </a>
            <p className="text-slate-600">No credit card required. Audit takes 3-5 business days.</p>
          </div>
        </div>
      </section>

      {/* Why DallasCircle */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-slate-900">
              Why DallasCircle?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              We don't just rebuild — we're your partner in growth.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: 'Speed Without Cutting Corners',
                desc: 'We move fast, but we never sacrifice quality. Your site will be secure, performant, and maintainable.',
              },
              {
                title: 'Transparent & Predictable',
                desc: 'Fixed price. Fixed timeline. No surprises. You know exactly what you\'re getting.',
              },
              {
                title: 'Built for Growth',
                desc: 'Next.js scales. As your business grows, your site grows with you. No more rewrites.',
              },
              {
                title: 'You Own Everything',
                desc: 'Full code ownership. Hosted on Vercel (free tier). No vendor lock-in. You control your future.',
              },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-xl border border-slate-200 bg-white">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-gradient-to-r from-red-900 to-slate-900">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white">
              Stop Limping Along
            </h2>
            <p className="text-xl text-slate-200">
              Your legacy PHP site is costing you money every day it stays online.
            </p>
          </div>
          <a
            href="mailto:hello@dallascircle.com?subject=PHP%20Rescue%20Inquiry"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-red-600 font-semibold hover:bg-slate-100 transition text-lg"
          >
            Get Your Free Audit Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-slate-900 text-slate-400">
        <div className="mx-auto max-w-6xl text-center space-y-4">
          <Link href="/" className="text-white hover:text-blue-400 transition">
            ← Back to DallasCircle
          </Link>
          <p>&copy; 2026 DallasCircle. Built for Dallas.</p>
        </div>
      </footer>
    </main>
  );
}
