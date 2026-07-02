import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import SEOHead from '@/components/SEOHead';

export default function About() {
  return (
    <>
      <SEOHead
        title="About World Cup Final Stay - Premium World Cup 2026 Travel Guide"
        description="Learn about World Cup Final Stay, your premier destination for FIFA World Cup 2026 Final hotel booking and travel guidance near MetLife Stadium."
        keywords="about, World Cup 2026, travel guide, MetLife Stadium"
      />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
        <Navigation />

        <main className="flex-1">
          <section className="py-20">
            <div className="container max-w-3xl">
              <h1 className="text-5xl font-bold text-white mb-8">About World Cup Final Stay</h1>

              <div className="prose prose-invert max-w-none space-y-6 text-muted leading-relaxed">
                <p>
                  World Cup Final Stay is your premier destination for luxury travel guidance and hotel booking assistance for the FIFA World Cup 2026 Final at MetLife Stadium in East Rutherford, New Jersey.
                </p>

                <h2 className="text-3xl font-bold text-white mt-8 mb-4">Our Mission</h2>
                <p>
                  We are dedicated to helping football fans worldwide discover premium accommodation options near MetLife Stadium and providing comprehensive travel guides to make the FIFA World Cup 2026 Final an unforgettable experience.
                </p>

                <h2 className="text-3xl font-bold text-white mt-8 mb-4">What We Offer</h2>
                <ul className="space-y-3">
                  <li>✓ Curated hotel recommendations near MetLife Stadium</li>
                  <li>✓ Direct booking links through trusted partners like Expedia</li>
                  <li>✓ Comprehensive travel guides and tips</li>
                  <li>✓ Match-day planning and logistics information</li>
                  <li>✓ New York and New Jersey travel insights</li>
                  <li>✓ Expert advice on accommodation and transportation</li>
                </ul>

                <h2 className="text-3xl font-bold text-white mt-8 mb-4">Why Choose Us</h2>
                <p>
                  With our extensive knowledge of the New York and New Jersey area, combined with direct partnerships with leading travel booking platforms, we provide fans with the most convenient and reliable way to secure their stay for football's biggest night.
                </p>

                <h2 className="text-3xl font-bold text-white mt-8 mb-4">Contact Us</h2>
                <p>
                  Have questions or need assistance? <Link href="/contact"><a className="text-accent hover:underline">Contact us</a></Link> and we'll be happy to help you plan your World Cup 2026 Final experience.
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
