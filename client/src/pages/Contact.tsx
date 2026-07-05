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
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      <Navigation />

      <main className="flex-1">
        <section className="py-20">
          <div className="container max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-8">Contact Us</h1>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="glass-card p-6 rounded-lg">
                    <h3 className="font-semibold text-white mb-2">Email</h3>
                    <p className="text-muted">hello@worldcupfinalstay2026.online</p>
                  </div>
                  <div className="glass-card p-6 rounded-lg">
                    <h3 className="font-semibold text-white mb-2">Focus Area</h3>
                    <p className="text-muted">New York & New Jersey match-week travel guidance</p>
                  </div>
                  <div className="glass-card p-6 rounded-lg">
                    <h3 className="font-semibold text-white mb-2">Response Time</h3>
                    <p className="text-muted">Within 24–48 hours for general inquiries</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-muted"
                  />
                  <Input
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-muted"
                  />
                  <textarea
                    placeholder="Tell us what you need help with"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full p-3 bg-white/10 border border-white/20 text-white placeholder:text-muted rounded-lg min-h-32 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <Button type="submit" className="btn-gold w-full">
                    Send Inquiry
                  </Button>
                  {submitted && (
                    <p className="text-green-400 text-sm">Message sent successfully!</p>
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
