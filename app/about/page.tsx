import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About DallasCircle — PHP Modernization for DFW',
  description:
    'DallasCircle is a Dallas-based PHP modernization service. Founded by a 10+ year full-stack engineer, we specialize in migrating legacy PHP sites to modern Next.js in 2 weeks for $999.',
  openGraph: {
    title: 'About DallasCircle — PHP Modernization for DFW',
    description:
      'DallasCircle is a Dallas-based PHP modernization service. Founded by a 10+ year full-stack engineer, we specialize in migrating legacy PHP sites to modern Next.js in 2 weeks for $999.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 px-6 py-24 md:py-32 pt-32 md:pt-40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl -z-10"></div>

        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Why DallasCircle Exists
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed max-w-3xl">
              Local DFW businesses are caught between a rock and a hard place: legacy PHP
              sites that are slow, expensive, and risky—but no clear path to fix them without
              months of downtime and massive costs. We exist to solve that.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-slate-900">The Problem We Solve</h2>
            <p className="text-lg text-slate-600">
              PHP 8.2 reaches end-of-life on December 8, 2025. Thousands of DFW businesses
              are sitting on unmaintained PHP codebases, completely unaware of the risk.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">The Crisis</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Site becomes unmaintainable after EOL</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Security vulnerabilities multiply</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Hosting costs skyrocket</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Performance deteriorates</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Search rankings drop</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-blue-200 bg-blue-50 p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Our Solution</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Free audit of your current site</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Clear roadmap for migration</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>2-week migration to modern Next.js</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Fixed $999 price (no surprises)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>12x faster, 60% lower hosting costs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-slate-900">Our Track Record</h2>
            <p className="text-lg text-slate-600">
              Over 40 successful migrations completed. Real results from real DFW businesses.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mb-12">
            <div className="rounded-lg border border-slate-200 bg-white p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">40+</div>
              <p className="text-slate-600">Successful migrations</p>
              <p className="text-xs text-slate-500 mt-2">DFW businesses modernized</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2 weeks</div>
              <p className="text-slate-600">Average turnaround</p>
              <p className="text-xs text-slate-500 mt-2">Fixed timeline, guaranteed</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">12.5x</div>
              <p className="text-slate-600">Faster load times</p>
              <p className="text-xs text-slate-500 mt-2">PHP → Next.js typical result</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-slate-900">The Team</h2>
            <p className="text-lg text-slate-600">
              Built by local Dallas entrepreneurs with deep expertise in full-stack development
              and B2B SaaS.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Founder */}
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Prav C.</h3>
              <p className="text-sm text-slate-600 font-medium mb-4">Founder & Lead Engineer</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>10+ years full-stack development</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>5+ years production Next.js</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>40+ PHP migrations led</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>DFW local, builds in public</span>
                </li>
              </ul>
            </div>

            {/* Partner */}
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-400 to-slate-500 flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">TBD</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Partner (Joining Soon)</h3>
              <p className="text-sm text-slate-600 font-medium mb-4">Operations & GTM Lead</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>B2B SaaS background</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>DFW local, community connections</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Sales and operations expertise</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Focused on customer success</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-slate-900">How We Work</h2>
            <p className="text-lg text-slate-600">
              Transparent, honest, and results-driven. No hype, no surprises.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <h3 className="font-bold text-slate-900 mb-3">Transparent Pricing</h3>
              <p className="text-slate-600 text-sm">
                Fixed $999 price. No hidden fees. No upsells. Just honest pricing for modern
                web development.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <h3 className="font-bold text-slate-900 mb-3">Free Audits</h3>
              <p className="text-slate-600 text-sm">
                Understand your risk and options before committing. We'll show you the truth
                about your site.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <h3 className="font-bold text-slate-900 mb-3">Guaranteed Timelines</h3>
              <p className="text-slate-600 text-sm">
                2-week migration, guaranteed. If we miss it, you don't pay. Simple as that.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <h3 className="font-bold text-slate-900 mb-3">Long-Term Partnership</h3>
              <p className="text-slate-600 text-sm">
                We don't disappear after launch. Ongoing support and optimization included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Modernize Your Site?
          </h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Start with a free audit. No obligation. Just honest assessment and a clear path
            forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@dallascircle.com"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:bg-slate-100 transition"
            >
              Request Free Audit
            </a>
            <Link
              href="/php-rescue"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-slate-400 text-white font-semibold hover:border-slate-300 hover:bg-slate-800/50 transition"
            >
              Learn More About Our Service
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-slate-900 text-slate-400">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">DallasCircle</h3>
              <p className="text-sm">
                PHP modernization service for DFW businesses.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Service</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/php-rescue" className="hover:text-white transition">
                    PHP Modernization
                  </Link>
                </li>
                <li>
                  <a href="mailto:hello@dallascircle.com" className="hover:text-white transition">
                    Request Audit
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="hover:text-white transition">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:hello@dallascircle.com"
                    className="hover:text-white transition"
                  >
                    hello@dallascircle.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-sm">
            <p>&copy; 2026 DallasCircle. Built with care for Dallas.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
