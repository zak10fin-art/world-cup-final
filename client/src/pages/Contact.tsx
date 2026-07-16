import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SEOHead from '@/components/SEOHead';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <SEOHead
        title="Contact World Cup Final Stay"
        description="Contact World Cup Final Stay for hotel guidance, match-week travel questions, and FIFA World Cup 2026 Final stay planning help."
        keywords="contact World Cup Final Stay, World Cup 2026 help, MetLife Stadium travel support"
      />
      <div className="page-shell">
        <Navigation />

        <main className="flex-1">
          <section className="page-section">
            <div className="container max-w-5xl">
              <div className="page-header">
                <p className="eyebrow">Contact</p>
                <h1 className="page-title">Get in touch about match-week planning</h1>
                <p className="page-intro">
                  Reach out for general questions about hotels, parking, articles, or site content related to the FIFA World Cup 2026 Final.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="space-y-5">
                  <div className="page-panel">
                    <h2 className="text-2xl font-bold text-white">Contact details</h2>
                    <div className="mt-6 space-y-4 text-base text-slate-200">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Email</p>
                        <p className="mt-2 text-lg font-medium text-white">hello@worldcupfinalstay2026.online</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Best for</p>
                        <p className="mt-2 text-slate-200">General site questions, travel-planning feedback, or content updates.</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Typical response</p>
                        <p className="mt-2 text-slate-200">Usually within 24–48 hours for general inquiries.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="page-panel">
                  <h2 className="text-2xl font-bold text-white">Send a message</h2>
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <Input
                      type="text"
                      aria-label="Full name"
                      placeholder="Full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="min-h-12 rounded-2xl border-white/20 bg-white/10 px-4 text-base text-white placeholder:text-slate-300/70"
                    />
                    <Input
                      type="email"
                      aria-label="Email address"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="min-h-12 rounded-2xl border-white/20 bg-white/10 px-4 text-base text-white placeholder:text-slate-300/70"
                    />
                    <textarea
                      aria-label="Message"
                      placeholder="Tell us what you need help with"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="min-h-40 w-full rounded-2xl border border-white/20 bg-white/10 p-4 text-base text-white placeholder:text-slate-300/70 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <Button type="submit" className="btn-gold w-full py-6 text-base">
                      Send Inquiry
                    </Button>
                    {submitted && (
                      <p aria-live="polite" className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                        Message sent successfully.
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
