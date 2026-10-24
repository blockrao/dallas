'use client';

import { testimonials } from '@/lib/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="px-6 py-20 bg-slate-900">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-white">
            Trusted by DFW Businesses
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl">
            See how local companies have transformed their web presence and business results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur p-8 hover:border-blue-400/50 transition"
            >
              {/* Quote */}
              <p className="text-slate-200 leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                {/* Avatar with Initials */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">
                    {testimonial.author.initials}
                  </span>
                </div>

                {/* Author Details */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white text-sm">
                    {testimonial.author.name}
                  </p>
                  <p className="text-xs text-slate-400">
                    {testimonial.author.title}
                  </p>
                  <p className="text-xs text-slate-400">
                    {testimonial.author.company} • {testimonial.author.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
