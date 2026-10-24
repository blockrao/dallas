'use client';

import { useState } from 'react';

interface FormState {
  businessName: string;
  domain: string;
  email: string;
  loading: boolean;
  submitted: boolean;
  error: string | null;
}

export default function AuditRequestForm() {
  const [form, setForm] = useState<FormState>({
    businessName: '',
    domain: '',
    email: '',
    loading: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
      error: null,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setForm((prev) => ({ ...prev, loading: true, error: null }));

    try {
      // Validate form fields
      if (!form.businessName.trim() || !form.domain.trim() || !form.email.trim()) {
        throw new Error('Please fill in all fields');
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Send email via API
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: form.email,
          subject: `Free Website Audit Request: ${form.businessName}`,
          domain: form.domain,
          businessName: form.businessName,
          type: 'audit_confirmation',
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send email');
      }

      setForm((prev) => ({
        ...prev,
        submitted: true,
        businessName: '',
        domain: '',
        email: '',
      }));

      // Reset success message after 5 seconds
      setTimeout(() => {
        setForm((prev) => ({ ...prev, submitted: false }));
      }, 5000);
    } catch (error) {
      setForm((prev) => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Something went wrong',
      }));
    } finally {
      setForm((prev) => ({ ...prev, loading: false }));
    }
  };

  return (
    <div className="w-full max-w-md">
      {form.submitted ? (
        <div className="p-6 rounded-lg border border-green-300 bg-green-50 text-center">
          <div className="text-3xl mb-2">✅</div>
          <h3 className="font-semibold text-green-900 mb-2">Audit Request Received!</h3>
          <p className="text-sm text-green-700">
            Check your email for confirmation and next steps. We'll analyze your site within 24-48 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="businessName" className="block text-sm font-medium text-slate-700 mb-2">
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={form.businessName}
              onChange={handleChange}
              placeholder="Your Business"
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white text-slate-900"
              disabled={form.loading}
            />
          </div>

          <div>
            <label htmlFor="domain" className="block text-sm font-medium text-slate-700 mb-2">
              Website Domain
            </label>
            <input
              type="text"
              id="domain"
              name="domain"
              value={form.domain}
              onChange={handleChange}
              placeholder="example.com"
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white text-slate-900"
              disabled={form.loading}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@business.com"
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white text-slate-900"
              disabled={form.loading}
            />
          </div>

          {form.error && (
            <div className="p-3 rounded-lg border border-red-300 bg-red-50 text-sm text-red-700">
              {form.error}
            </div>
          )}

          <button
            type="submit"
            disabled={form.loading}
            className="w-full px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {form.loading ? 'Sending...' : 'Get Free Audit'}
          </button>

          <p className="text-xs text-slate-500 text-center">
            ✓ Free audit, no credit card required. We'll send your report within 24 hours.
          </p>
        </form>
      )}
    </div>
  );
}
