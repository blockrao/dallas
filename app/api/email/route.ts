import { NextRequest, NextResponse } from 'next/server';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || 'SG_TEST_KEY';
const SENDGRID_FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'hello@dallascircle.com';

interface EmailRequest {
  to: string;
  subject: string;
  domain?: string;
  businessName?: string;
  type?: 'audit_confirmation' | 'contact' | 'signup';
}

async function sendWithSendGrid(
  to: string,
  subject: string,
  htmlContent: string
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: to }],
            subject: subject,
          },
        ],
        from: {
          email: SENDGRID_FROM_EMAIL,
          name: 'DallasCircle',
        },
        content: [
          {
            type: 'text/html',
            value: htmlContent,
          },
        ],
        replyTo: {
          email: SENDGRID_FROM_EMAIL,
        },
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('SendGrid error:', error);
      return {
        success: false,
        error: `SendGrid API error: ${response.status}`,
      };
    }

    const messageId = response.headers.get('x-message-id') || 'unknown';
    return { success: true, messageId };
  } catch (error) {
    console.error('Email send error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

function generateAuditEmailHTML(
  businessName: string,
  domain: string,
  recipientEmail: string
): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; color: #1f2937; line-height: 1.6; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(to right, #0f172a, #1e293b, #0c4a6e); color: white; padding: 30px; border-radius: 8px; text-align: center; }
          .content { padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
          .metrics { background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .metric-row { display: flex; justify-content: space-between; margin: 10px 0; }
          .metric-label { color: #64748b; font-weight: 500; }
          .metric-value { color: #1e40af; font-weight: bold; font-size: 1.2em; }
          .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 0.9em; border-top: 1px solid #e5e7eb; margin-top: 20px; }
          .button { display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>DallasCircle Audit Acknowledgment</h1>
            <p>Your Free Website Audit Request Received</p>
          </div>

          <div class="content">
            <h2>Hi there,</h2>

            <p>Thanks for requesting a free website audit for <strong>${businessName}</strong>.</p>

            <p>We've received your request and our team is already analyzing your online presence:</p>

            <div class="metrics">
              <div class="metric-row">
                <span class="metric-label">📊 Domain Audited:</span>
                <span class="metric-value">${domain}</span>
              </div>
              <div class="metric-row">
                <span class="metric-label">⏱️ Processing:</span>
                <span class="metric-value">In Progress</span>
              </div>
              <div class="metric-row">
                <span class="metric-label">📧 Notification:</span>
                <span class="metric-value">${recipientEmail}</span>
              </div>
            </div>

            <h3>What Happens Next:</h3>
            <ol>
              <li><strong>We Audit Your Site:</strong> We analyze your website's visibility, performance, and online presence.</li>
              <li><strong>Risk Summary:</strong> You'll receive a detailed report highlighting domain risks, SEO gaps, and modernization opportunities.</li>
              <li><strong>Action Plan:</strong> We'll provide clear next steps to improve your online visibility and customer acquisition.</li>
              <li><strong>Modernization Options:</strong> Learn how we can upgrade legacy PHP sites to modern Next.js in 2 weeks for $999.</li>
            </ol>

            <p>You'll receive your audit report via email within 24-48 hours. This gives you a complete view of your online visibility and concrete steps to get discovered by more customers.</p>

            <p><strong>Domain Risk Summary Coming Soon</strong> — We'll send detailed metrics including:</p>
            <ul>
              <li>Search engine visibility gaps</li>
              <li>Modernization ROI analysis</li>
              <li>Customer acquisition opportunities</li>
              <li>Cost-benefit of upgrading legacy systems</li>
            </ul>

            <a href="https://dallascircle.com" class="button">View Your Profile</a>

            <p style="margin-top: 30px; color: #6b7280; font-size: 0.95em;">
              Questions? Reply to this email or contact us at <strong>hello@dallascircle.com</strong>
            </p>
          </div>

          <div class="footer">
            <p>&copy; 2026 DallasCircle. Built with ❤️ for Dallas.</p>
            <p>P.O. Box 12345, Dallas, TX 75001</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body: EmailRequest = await request.json();

    // Validate required fields
    if (!body.to || !body.subject) {
      return NextResponse.json(
        { error: 'Missing required fields: to, subject' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.to)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Generate HTML content based on email type
    let htmlContent: string;

    if (body.type === 'audit_confirmation' && body.domain && body.businessName) {
      htmlContent = generateAuditEmailHTML(body.businessName, body.domain, body.to);
    } else {
      // Generic HTML template
      htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1f2937; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(to right, #0f172a, #1e293b, #0c4a6e); color: white; padding: 30px; border-radius: 8px; text-align: center; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>${body.subject}</h1>
              </div>
              <div style="padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
                <p>Thank you for your interest in DallasCircle.</p>
                <p>We'll get back to you soon.</p>
              </div>
            </div>
          </body>
        </html>
      `;
    }

    // Send email via SendGrid
    const result = await sendWithSendGrid(body.to, body.subject, htmlContent);

    if (!result.success) {
      console.error('Email send failed:', result.error);
      return NextResponse.json(
        {
          error: 'Failed to send email',
          details: process.env.NODE_ENV === 'development' ? result.error : undefined,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        messageId: result.messageId,
        message: 'Email sent successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email API error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? String(error) : undefined,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to send emails.' },
    { status: 405 }
  );
}
