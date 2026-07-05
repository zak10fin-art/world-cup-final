import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AffiliateDisclosure() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      <Navigation />

      <main className="flex-1">
        <section className="py-20">
          <div className="container max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-8">Affiliate Disclosure</h1>
            <p className="text-muted mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-invert max-w-none space-y-6 text-muted leading-relaxed">
              <div className="glass-card p-6 rounded-lg border border-accent/30 bg-accent/10 mb-8">
                <p className="text-white font-semibold mb-2">Important Disclosure:</p>
                <p>
                  World Cup Final Stay contains affiliate links to Expedia and other travel booking services. When you click on these links and make a purchase, we may earn a commission at no additional cost to you.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mt-8 mb-4">What Are Affiliate Links?</h2>
              <p>
                Affiliate links are special URLs that track referrals from our website to partner websites like Expedia. When you click on an affiliate link and complete a purchase, we receive a commission. This helps us maintain and improve our content while providing you with valuable travel information and hotel recommendations.
              </p>

              <h2 className="text-3xl font-bold text-white mt-8 mb-4">How We Use Commissions</h2>
              <p>
                The commissions we earn from affiliate partnerships are used to:
              </p>
              <ul className="space-y-2 ml-4">
                <li>Maintain and improve our website</li>
                <li>Create high-quality travel guides and content</li>
                <li>Research and verify hotel information</li>
                <li>Provide updated travel tips and match-day guidance</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mt-8 mb-4">No Additional Cost to You</h2>
              <p>
                When you use our affiliate links to book hotels through Expedia, you pay the same price as if you had booked directly. The commission we receive does not increase your costs. In fact, you may benefit from special rates or promotions available through these partnerships.
              </p>

              <h2 className="text-3xl font-bold text-white mt-8 mb-4">Our Recommendations</h2>
              <p>
                We only recommend hotels and services that we believe provide genuine value to our readers. Our recommendations are based on:
              </p>
              <ul className="space-y-2 ml-4">
                <li>Proximity to MetLife Stadium</li>
                <li>Quality of amenities and services</li>
                <li>Guest reviews and ratings</li>
                <li>Value for money</li>
                <li>Suitability for World Cup 2026 Final visitors</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mt-8 mb-4">Affiliate Partners</h2>
              <p>
                World Cup Final Stay currently partners with:
              </p>
              <ul className="space-y-2 ml-4">
                <li><strong>Expedia:</strong> For hotel bookings and travel packages</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mt-8 mb-4">Transparency</h2>
              <p>
                We are committed to transparency and honesty. All affiliate links are clearly marked or disclosed. We will never mislead you about the nature of our relationships with partner companies.
              </p>

              <h2 className="text-3xl font-bold text-white mt-8 mb-4">Questions?</h2>
              <p>
                If you have any questions about our affiliate relationships or this disclosure, please contact us at hello@worldcupfinalstay2026.online.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
