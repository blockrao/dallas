'use client';

interface MatrixRow {
  scenario: string;
  patch: boolean;
  upgrade: boolean;
  migration: boolean;
  timeline: string;
  cost: string;
}

const matrixData: MatrixRow[] = [
  {
    scenario: 'Small site, low traffic',
    patch: true,
    upgrade: false,
    migration: false,
    timeline: '1-2 weeks',
    cost: '$500-$1.5K',
  },
  {
    scenario: 'Medium site, growing',
    patch: true,
    upgrade: true,
    migration: false,
    timeline: '2-4 weeks',
    cost: '$1.5K-$5K',
  },
  {
    scenario: 'E-commerce, high security',
    patch: false,
    upgrade: true,
    migration: true,
    timeline: '3-6 weeks',
    cost: '$5K-$15K',
  },
  {
    scenario: 'Large legacy codebase',
    patch: false,
    upgrade: false,
    migration: true,
    timeline: '2-4 months',
    cost: '$25K+',
  },
];

function Checkmark() {
  return (
    <svg
      className="w-5 h-5 text-green-400 mx-auto"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Cross() {
  return (
    <svg
      className="w-5 h-5 text-slate-400 mx-auto"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export default function DecisionMatrix() {
  return (
    <section className="px-6 py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-slate-900">
            Which Path Is Right for You?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Compare your options: patch, upgrade, or full migration. We'll help you choose
            based on your situation, timeline, and budget.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto rounded-lg border border-slate-200 bg-white">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                  Your Situation
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">
                  Patch
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">
                  Upgrade
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">
                  Full Migration
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                  Timeline
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                  Cost
                </th>
              </tr>
            </thead>
            <tbody>
              {matrixData.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-slate-200 hover:bg-blue-50/50 transition"
                >
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">
                    {row.scenario}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {row.patch ? <Checkmark /> : <Cross />}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {row.upgrade ? <Checkmark /> : <Cross />}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {row.migration ? <Checkmark /> : <Cross />}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{row.timeline}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{row.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {matrixData.map((row, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-slate-200 bg-white p-6 space-y-4"
            >
              <h3 className="font-semibold text-slate-900">{row.scenario}</h3>

              <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-200">
                <div className="text-center">
                  <p className="text-xs text-slate-600 mb-2">Patch</p>
                  {row.patch ? <Checkmark /> : <Cross />}
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-600 mb-2">Upgrade</p>
                  {row.upgrade ? <Checkmark /> : <Cross />}
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-600 mb-2">Full Migration</p>
                  {row.migration ? <Checkmark /> : <Cross />}
                </div>
              </div>

              <div className="space-y-2">
                <div>
                  <p className="text-xs text-slate-600 font-medium">Timeline</p>
                  <p className="text-sm text-slate-900">{row.timeline}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 font-medium">Cost</p>
                  <p className="text-sm text-slate-900">{row.cost}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            Not sure which path is best? Request a free audit to get personalized recommendations.
          </p>
          <a
            href="mailto:hello@dallascircle.com"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Request Free Audit
          </a>
        </div>
      </div>
    </section>
  );
}
