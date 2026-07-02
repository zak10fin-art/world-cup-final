import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      <Navigation />

      <main className="flex-1">
        <section className="py-20">
          <div className="container max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-8">Privacy Policy</h1>
            <p className="text-muted mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-invert max-w-none space-y-6 text-muted leading-relaxed">
              <h2 className="text-3xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you subscribe to our newsletter or contact us through our website. This may include your name, email address, and any other information you choose to provide.
              </p>

              <h2 className="text-3xl font-bold text-white mt-8 mb-4">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, send you newsletters and updates, respond to your inquiries, and comply with legal obligations.
              </p>

              <h2 className="text-3xl font-bold text-white mt-8 mb-4">3. Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
              </p>

              <h2 className="text-3xl font-bold text-white mt-8 mb-4">4. Third-Party Links</h2>
              <p>
                Our website contains links to third-party websites, including Expedia and other travel booking services. We are not responsible for the privacy practices of these external sites. Please review their privacy policies before providing any information.
              </p>

              <h2 className="text-3xl font-bold text-white mt-8 mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-3xl font-bold text-white mt-8 mb-4">6. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at hello@worldcupfinalstay.com.
              </p>

              <h2 className="text-3xl font-bold text-white mt-8 mb-4">7. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the updated policy on our website.
              </p>

              <h2 className="text-3xl font-bold text-white mt-8 mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy, please contact us at hello@worldcupfinalstay.com.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
