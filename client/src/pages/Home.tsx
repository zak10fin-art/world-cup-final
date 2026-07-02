import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { trpc } from '@/lib/trpc';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import StructuredData, { organizationSchema, eventSchema } from '@/components/StructuredData';
import { homeImages } from '@/lib/siteImages';

export default function Home() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [email, setEmail] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const subscribeMutation = trpc.subscribers.subscribe.useMutation();

  // Countdown timer
  useEffect(() => {
    const updateCountdown = () => {
      const finalDate = new Date('2026-07-19T00:00:00').getTime();
      const now = new Date().getTime();
      const distance = finalDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const existingScript = document.querySelector('script.eg-widgets-script');

    if (existingScript) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://creator.expediagroup.com/products/widgets/assets/eg-widgets.js';
    script.async = true;
    script.className = 'eg-widgets-script';
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await subscribeMutation.mutateAsync({ email });
      setSubscribeMessage('Thanks for subscribing! Check your email for updates.');
      setEmail('');
      setTimeout(() => setSubscribeMessage(''), 5000);
    } catch (error) {
      setSubscribeMessage('Failed to subscribe. Please try again.');
    }
  };

  return (
    <>
      <SEOHead
        title="FIFA World Cup 2026 Final - Premium Hotel Booking & Travel Guide"
        description="Book luxury hotels near MetLife Stadium for the FIFA World Cup 2026 Final. Expert travel guides, tips, and exclusive Expedia affiliate links."
        keywords="World Cup 2026, MetLife Stadium, hotels, travel guide, FIFA Final"
        type="website"
      />
      <StructuredData data={organizationSchema} />
      <StructuredData data={eventSchema} />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
          {/* Background gradient */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <img
              src={homeImages.hero}
              alt="Football fans celebrating during a World Cup-style night match"
              className="absolute inset-0 h-full w-full object-cover opacity-25"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/60"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.22),transparent_22%),radial-gradient(circle_at_left_center,rgba(59,130,246,0.18),transparent_28%)]"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20"></div>
          </div>

          <div className="container grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 w-fit">
                <span className="text-accent font-bold text-sm">FIFA WORLD CUP 2026</span>
                <span className="text-muted text-sm">July 19, 2026</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Stay Near the FIFA World Cup 2026 Final
              </h1>

              <p className="text-lg text-muted mb-8 leading-relaxed max-w-xl">
                Experience football's biggest night and stay minutes away from MetLife Stadium. Discover premium hotel options, seamless match-day access, and an elevated travel experience for the biggest game in world football.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="#hotels">
                  <a>
                    <Button className="btn-gold w-full sm:w-auto">
                      Book Your Stay
                    </Button>
                  </a>
                </Link>
                <Link href="/blog">
                  <a>
                    <Button variant="outline" className="w-full sm:w-auto border-white/20 hover:bg-white/10">
                      Read Travel Guide
                    </Button>
                  </a>
                </Link>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm text-muted">
                  ✓ Luxury hotels
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm text-muted">
                  ✓ Expedia links
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm text-muted">
                  ✓ Mobile-first
                </span>
              </div>
            </div>

            {/* Right - Countdown Card */}
            <div className="glass-card p-8 rounded-2xl fade-up">
              <h3 className="text-accent font-bold text-sm uppercase tracking-widest mb-2">
                Countdown to Kickoff
              </h3>
              <h2 className="text-3xl font-bold mb-4 text-white">
                FIFA World Cup 2026 Final
              </h2>
              <p className="text-muted mb-8 leading-relaxed">
                Plan ahead for the biggest night in football with a stay designed for comfort, convenience, and unforgettable match-day energy.
              </p>

              {/* Countdown Grid */}
              <div className="grid grid-cols-4 gap-3 mb-8">
                {[
                  { label: 'Days', value: countdown.days },
                  { label: 'Hours', value: countdown.hours },
                  { label: 'Minutes', value: countdown.minutes },
                  { label: 'Seconds', value: countdown.seconds },
                ].map((item) => (
                  <div key={item.label} className="countdown-box">
                    <strong className="block text-2xl md:text-3xl text-white mb-1">
                      {String(item.value).padStart(2, '0')}
                    </strong>
                    <span className="text-xs text-muted uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <p className="text-sm text-muted">
                  <strong className="text-accent">Venue:</strong> MetLife Stadium, East Rutherford, New Jersey
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Urgency Alert */}
        <section className="py-8 bg-accent/10 border-y border-accent/20">
          <div className="container">
            <div className="flex items-center gap-4 p-6 rounded-lg bg-gradient-to-r from-accent/20 to-accent/5 border border-accent/30">
              <span className="text-2xl">⚠️</span>
              <div>
                <strong className="text-accent block mb-1">Urgency Alert</strong>
                <p className="text-muted text-sm">
                  Hotels near MetLife Stadium are expected to sell out quickly for the FIFA World Cup 2026 Final. Secure your stay early to guarantee availability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Hotels Section */}
        <section id="hotels" className="py-20">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4 text-white">Premium Stays for the Final Weekend</h2>
              <p className="text-muted max-w-2xl">
                Choose from curated accommodation options designed for football fans who want fast access to MetLife Stadium, elevated comfort, and smooth travel throughout the New York and New Jersey area.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Hotel Card 1 */}
              <div className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 fade-up">
                <div className="aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={homeImages.worldOfBlue}
                    alt="World of Blue hotel exterior near MetLife Stadium in East Rutherford"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">World of Blue</h3>
                      <p className="text-muted text-sm">
                        A premium stay with refined interiors and excellent access to the MetLife Stadium area.
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-accent text-black rounded-full font-bold text-sm whitespace-nowrap">
                      ⭐ 4.8/5
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 my-6">
                    {[
                      { icon: '🚗', text: 'Onsite & valet parking' },
                      { icon: '📶', text: 'Free Wi-Fi' },
                      { icon: '🍽️', text: 'Restaurant on-site' },
                      { icon: '💪', text: '24-hour fitness center' },
                    ].map((feature, idx) => (
                      <div key={idx} className="flex gap-2 p-3 rounded-lg bg-white/5 border border-white/10">
                        <span>{feature.icon}</span>
                        <span className="text-sm text-muted">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href="https://expedia.com/affiliates/jersey-city-hotels-world-of-blue.bjwWpXP"
                      target="_blank"
                      rel="nofollow sponsored noopener"
                      className="flex-1"
                    >
                      <Button className="btn-gold w-full">
                        Check Availability
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Hotel Card 2 */}
              <div className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 fade-up">
                <div className="aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={homeImages.hamptonInn}
                    alt="Hampton Inn Carlstadt hotel exterior near the Meadowlands and MetLife Stadium"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Hampton Inn Carlstadt</h3>
                      <p className="text-muted text-sm">
                        A practical, fan-friendly choice near the venue with comfortable essentials for match-day convenience.
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-green-500 text-black rounded-full font-bold text-sm whitespace-nowrap">
                      ✅ Prime Location
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 my-6">
                    {[
                      { icon: '📍', text: 'Near MetLife Stadium' },
                      { icon: '🍳', text: 'Free Hot Breakfast' },
                      { icon: '🚗', text: 'Free Parking' },
                      { icon: '💪', text: 'Fitness Center' },
                    ].map((feature, idx) => (
                      <div key={idx} className="flex gap-2 p-3 rounded-lg bg-white/5 border border-white/10">
                        <span>{feature.icon}</span>
                        <span className="text-sm text-muted">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href="https://expedia.com/affiliates/jersey-city-hotels-hampton-inn-carlstadt.XM6A88e"
                      target="_blank"
                      rel="nofollow sponsored noopener"
                      className="flex-1"
                    >
                      <Button className="btn-gold w-full">
                        Book Now
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expedia Search Widget + Parking */}
        <section className="py-20 border-t border-white/10">
          <div className="container">
            <div className="glass-card relative overflow-hidden rounded-2xl p-6 md:p-10 fade-up">
              <img
                src={homeImages.jerseyCitySkyline}
                alt="Jersey City skyline near the New York metro area for World Cup travel planning"
                className="absolute inset-0 h-full w-full object-cover opacity-10"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/75 to-slate-900/85"></div>
              <div className="relative text-center max-w-2xl mx-auto mb-8">
                <h2 className="text-4xl font-bold mb-4 text-white">Search More Travel Options</h2>
                <p className="text-muted leading-relaxed">
                  Explore additional Expedia stay and flight options for the FIFA World Cup 2026 Final weekend without changing any of the featured hotel recommendations above.
                </p>
              </div>

              <div className="relative">
                <div
                  className="eg-widget"
                  data-widget="search"
                  data-program="us-expedia"
                  data-lobs="stays,flights"
                  data-network="pz"
                  data-camref="1011l5KI3J"
                  data-pubref=""
                />
              </div>

              <div className="relative mt-8 flex justify-center">
                <a
                  href="https://prked.com?ref=KiyYrjV3"
                  target="_blank"
                  rel="nofollow sponsored noopener"
                >
                  <Button className="btn-gold px-8 py-6 text-base md:text-lg text-center whitespace-normal">
                    🚗 Need Parking? Reserve or List Your Spot
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Stay Near MetLife Stadium */}
        <section className="py-20 bg-white/5">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-video overflow-hidden rounded-2xl bg-slate-900 shadow-glass">
                <img
                  src={homeImages.stadium}
                  alt="MetLife Stadium exterior at night in East Rutherford, New Jersey"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div>
                <h2 className="text-4xl font-bold mb-4 text-white">Closer to the Action</h2>
                <p className="text-muted mb-8">
                  Choosing accommodation near the stadium helps turn a high-pressure travel day into a smooth premium experience, especially during one of the busiest weekends of the year in the region.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      num: '1',
                      title: 'Minutes from the stadium',
                      desc: 'Reduce transfers and stay close to the venue for a more relaxed final-day itinerary.',
                    },
                    {
                      num: '2',
                      title: 'Easy transportation access',
                      desc: 'Reach local roads, rideshare pickup points, and regional transit routes with less friction.',
                    },
                    {
                      num: '3',
                      title: 'Restaurants and shopping nearby',
                      desc: 'Enjoy dining and retail options around the Meadowlands and American Dream area.',
                    },
                    {
                      num: '4',
                      title: 'Better match-day experience',
                      desc: 'Spend more time enjoying the atmosphere and less time navigating long travel connections.',
                    },
                  ].map((item) => (
                    <div key={item.num} className="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-black flex items-center justify-center font-bold">
                        {item.num}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-muted">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20">
          <div className="container">
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.2fr)_420px]">
                <div className="max-w-2xl">
                  <h2 className="text-4xl font-bold mb-4 text-white">Get Final-Week Stay Tips</h2>
                <p className="text-muted mb-8">
                  Join our mailing list for hotel reminders, travel tips, and curated fan-focused recommendations around the FIFA World Cup 2026 Final.
                </p>

                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-muted"
                  />
                  <Button
                    type="submit"
                    className="btn-gold whitespace-nowrap"
                    disabled={subscribeMutation.isPending}
                  >
                    {subscribeMutation.isPending ? 'Subscribing...' : 'Subscribe'}
                  </Button>
                </form>

                {subscribeMessage && (
                  <p className={`text-sm mt-3 ${subscribeMessage.includes('Thanks') ? 'text-green-400' : 'text-red-400'}`}>
                    {subscribeMessage}
                  </p>
                )}
              </div>

              <div className="hidden lg:block">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">
                  <img
                    src={homeImages.hotelLobby}
                    alt="Elegant luxury hotel lobby for premium World Cup Final stay inspiration"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-accent/20 to-accent/10 border-y border-accent/20">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Secure Your Stay?</h2>
            <p className="text-muted mb-8 max-w-2xl mx-auto">
              Don't miss out on the biggest football event of 2026. Book your hotel near MetLife Stadium today and guarantee your spot for the FIFA World Cup 2026 Final.
            </p>
            <Link href="#hotels">
              <a>
                <Button className="btn-gold text-lg px-8 py-6">
                  Explore Hotels Now
                </Button>
              </a>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      </div>
    </>
  );
}
