import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import StructuredData, { organizationSchema, eventSchema } from '@/components/StructuredData';
import { homeImages } from '@/lib/siteImages';

const faqItems = [
  {
    question: 'How do I buy FIFA World Cup Final 2026 tickets?',
    answer:
      'Use the main ticket button on this page to check the current ticket marketplace offer and availability. Demand for the final is expected to be extremely high, so availability can change quickly.',
  },
  {
    question: 'Should I secure tickets or hotels first?',
    answer:
      'Tickets should come first because they are the main event product and availability is limited. Once you secure your seat, you can immediately compare nearby hotels and parking options on the same page.',
  },
  {
    question: 'Which hotels are best for staying near MetLife Stadium?',
    answer:
      'The featured hotel options on this page focus on convenience, comfort, and easier access for final weekend travel around East Rutherford and the Meadowlands area.',
  },
  {
    question: 'Is parking important for match day?',
    answer:
      'Yes. Match day around the FIFA World Cup Final will be extremely busy, so pre-booking parking can reduce stress and help you plan your arrival more efficiently.',
  },
  {
    question: 'Why would I need an eSIM for this trip?',
    answer:
      'An eSIM can help international visitors get data access in the USA quickly for maps, ride shares, ticket access, communication, and hotel coordination without relying on a physical SIM card.',
  },
];

export default function Home() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
          <section className="relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20">
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <img
                src={homeImages.hero}
                alt="Fans celebrating during a major football final at night"
                className="absolute inset-0 h-full w-full object-cover opacity-20"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/88 to-slate-900/72" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.2),transparent_22%),radial-gradient(circle_at_left_center,rgba(59,130,246,0.14),transparent_28%)]" />
            </div>

            <div className="container grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_420px]">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
                  <span>🏆</span>
                  <span>FIFA World Cup Final 2026</span>
                </div>

                <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl">
                  Tickets First. Then Everything Else.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                  The FIFA World Cup Final is the biggest football match in the world. Secure your ticket first, then plan your hotel, parking, and mobile connectivity for a smoother final-weekend experience near MetLife Stadium.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link href="#tickets">
                    <a>
                      <Button className="btn-gold w-full sm:w-auto px-8 py-6 text-base md:text-lg">
                        🎟️ Explore Final Tickets
                      </Button>
                    </a>
                  </Link>
                  <Link href="#hotels">
                    <a>
                      <Button variant="outline" className="w-full sm:w-auto border-white/20 bg-white/5 hover:bg-white/10">
                        View Hotels Near MetLife Stadium
                      </Button>
                    </a>
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">✓ Premium booking flow</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">✓ Mobile-first layout</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">✓ Ticket-first conversion focus</span>
                </div>
              </div>

              <div className="glass-card rounded-3xl p-7 md:p-8">
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-accent">Countdown to kickoff</p>
                <h2 className="mb-4 text-3xl font-bold text-white">FIFA World Cup 2026 Final</h2>
                <p className="mb-7 text-sm leading-relaxed text-muted">
                  Final match day is coming fast. Ticket demand, hotel demand, and local travel pressure are all expected to rise as the event gets closer.
                </p>

                <div className="mb-6 grid grid-cols-4 gap-3">
                  {[
                    { label: 'Days', value: countdown.days },
                    { label: 'Hours', value: countdown.hours },
                    { label: 'Minutes', value: countdown.minutes },
                    { label: 'Seconds', value: countdown.seconds },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-2 py-4 text-center">
                      <strong className="block text-2xl text-white md:text-3xl">{String(item.value).padStart(2, '0')}</strong>
                      <span className="mt-1 block text-[11px] uppercase tracking-wider text-muted">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-muted">
                  <strong className="text-accent">Venue:</strong> MetLife Stadium, East Rutherford, New Jersey
                </div>
              </div>
            </div>
          </section>

          <section id="tickets" className="py-8 md:py-12">
            <div className="container">
              <div className="overflow-hidden rounded-[28px] border border-accent/20 bg-[linear-gradient(135deg,rgba(212,175,55,0.16),rgba(255,255,255,0.04))] shadow-glass">
                <div className="grid gap-0 lg:grid-cols-[minmax(0,1.1fr)_440px]">
                  <div className="p-6 md:p-10 lg:p-12">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-300">
                      <span>🔥</span>
                      <span>Last Chance • Limited Availability</span>
                    </div>

                    <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
                      🏆 Be Part of History – Experience the FIFA World Cup Final 2026 Live!
                    </h2>

                    <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-200/90">
                      Don&apos;t miss the biggest football match in the world. Secure your seat before tickets sell out. This is your last chance to witness the FIFA World Cup Final live at MetLife Stadium.
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:max-w-2xl">
                      {[
                        'High urgency event with limited seats',
                        'Main conversion focus for final weekend visitors',
                        'Premium live-match experience at MetLife Stadium',
                        'Best action for visitors before choosing hotels',
                      ].map((item) => (
                        <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3 text-sm text-slate-200/90">
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                      <a
                        href="https://tidd.ly/4paJtJI"
                        target="_blank"
                        rel="nofollow sponsored noopener"
                        className="w-full sm:w-auto"
                      >
                        <Button className="btn-gold w-full px-8 py-6 text-base md:text-lg">
                          🎟️ Get Your Final Tickets Now
                        </Button>
                      </a>
                      <p className="text-sm text-muted">Secure tickets first, then continue to hotels, parking, and eSIM planning below.</p>
                    </div>
                  </div>

                  <div className="relative min-h-[320px] overflow-hidden border-t border-white/10 bg-slate-900 lg:border-l lg:border-t-0">
                    <img
                      src={homeImages.ticketsFans}
                      alt="Packed football stadium with fans celebrating the excitement of the FIFA World Cup Final"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="hotels" className="py-16 md:py-20">
            <div className="container">
              <div className="mb-10 max-w-3xl">
                <h2 className="text-4xl font-bold text-white">Hotels Near MetLife Stadium</h2>
                <p className="mt-4 text-muted">
                  After securing your tickets, choose a stay that helps you reach MetLife Stadium faster and enjoy a more comfortable final weekend in the New York and New Jersey area.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-glass">
                  <div className="aspect-video overflow-hidden bg-slate-900">
                    <img
                      src={homeImages.worldOfBlue}
                      alt="World of Blue hotel exterior near MetLife Stadium in East Rutherford"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-6 md:p-7">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">World of Blue</h3>
                        <p className="mt-2 text-sm text-muted">A premium stay with refined interiors and excellent access to the MetLife Stadium area.</p>
                      </div>
                      <span className="whitespace-nowrap rounded-full bg-accent px-3 py-1 text-sm font-bold text-black">⭐ 4.8/5</span>
                    </div>

                    <div className="mb-6 grid grid-cols-2 gap-3">
                      {[
                        'Onsite & valet parking',
                        'Free Wi-Fi',
                        'Restaurant on-site',
                        '24-hour fitness center',
                      ].map((feature) => (
                        <div key={feature} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted">
                          {feature}
                        </div>
                      ))}
                    </div>

                    <a
                      href="https://expedia.com/affiliates/jersey-city-hotels-world-of-blue.bjwWpXP"
                      target="_blank"
                      rel="nofollow sponsored noopener"
                    >
                      <Button className="btn-gold w-full">Check Availability</Button>
                    </a>
                  </div>
                </div>

                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-glass">
                  <div className="aspect-video overflow-hidden bg-slate-900">
                    <img
                      src={homeImages.hamptonInn}
                      alt="Hampton Inn Carlstadt hotel exterior near the Meadowlands and MetLife Stadium"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-6 md:p-7">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">Hampton Inn Carlstadt</h3>
                        <p className="mt-2 text-sm text-muted">A practical, fan-friendly choice near the venue with comfortable essentials for match-day convenience.</p>
                      </div>
                      <span className="whitespace-nowrap rounded-full bg-green-500 px-3 py-1 text-sm font-bold text-black">✅ Prime Location</span>
                    </div>

                    <div className="mb-6 grid grid-cols-2 gap-3">
                      {[
                        'Near MetLife Stadium',
                        'Free Hot Breakfast',
                        'Free Parking',
                        'Fitness Center',
                      ].map((feature) => (
                        <div key={feature} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted">
                          {feature}
                        </div>
                      ))}
                    </div>

                    <a
                      href="https://expedia.com/affiliates/jersey-city-hotels-hampton-inn-carlstadt.XM6A88e"
                      target="_blank"
                      rel="nofollow sponsored noopener"
                    >
                      <Button className="btn-gold w-full">Book Now</Button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 md:p-6 shadow-glass">
                <div className="mb-4 max-w-2xl">
                  <h3 className="text-2xl font-bold text-white">Search More Stay Options</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Compare additional Expedia hotel and flight options for your final weekend without changing the featured hotel recommendations above.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-3">
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
              </div>
            </div>
          </section>

          <section id="parking" className="py-16 border-t border-white/10 md:py-20">
            <div className="container">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-glass">
                <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
                  <div className="p-6 md:p-10">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
                      <span>🚗</span>
                      <span>Parking</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white">Lock In Parking Before Match-Day Rush</h2>
                    <p className="mt-4 max-w-2xl text-muted">
                      Keep your final-day logistics smoother by reserving parking in advance. For a major event like the FIFA World Cup Final, early planning can help reduce uncertainty and arrival pressure.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:max-w-2xl">
                      {[
                        'Useful for drivers heading to the final',
                        'Helps organize arrival planning',
                        'Same affiliate destination preserved',
                        'Designed as a cleaner conversion-focused section',
                      ].map((item) => (
                        <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted">
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <a
                        href="https://prked.com?ref=KiyYrjV3"
                        target="_blank"
                        rel="nofollow sponsored noopener"
                      >
                        <Button className="btn-gold px-8 py-6 text-base md:text-lg">🚗 Need Parking? Reserve or List Your Spot</Button>
                      </a>
                    </div>
                  </div>

                  <div className="relative min-h-[320px] overflow-hidden border-t border-white/10 bg-slate-900 lg:border-l lg:border-t-0">
                    <img
                      src={homeImages.parkingPromo}
                      alt="Prked promotional image for parking and storage reservations"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="esim" className="py-16 border-t border-white/10 md:py-20">
            <div className="container">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-glass">
                <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-center">
                  <div className="p-6 md:p-10">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
                      <span>📱</span>
                      <span>Travel eSIM</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white">Stay Connected During FIFA World Cup 2026</h2>
                    <p className="mt-4 max-w-2xl text-muted">Get instant mobile data in the USA with eSIMania eSIM.</p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:max-w-2xl">
                      {[
                        'Instant activation',
                        'No physical SIM card required',
                        'Affordable data plans',
                        'Perfect for international travelers',
                      ].map((benefit) => (
                        <div key={benefit} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted">
                          <span className="text-accent">✓</span>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <a
                        href="https://www.awin1.com/cread.php?awinmid=115715&awinaffid=2712174&ued=https%3A%2F%2Fesimania.com%2F%3Futm_source%3Dchatgpt.com&platform=ma"
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                      >
                        <Button className="btn-gold px-8 py-6 text-base md:text-lg">Get Your eSIM Now</Button>
                      </a>
                    </div>
                  </div>

                  <div className="relative min-h-[320px] overflow-hidden border-t border-white/10 bg-slate-900 lg:border-l lg:border-t-0">
                    <img
                      src={homeImages.esimPromo}
                      alt="eSIMania mobile eSIM interface showing international destination coverage"
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="py-16 border-t border-white/10 md:py-20">
            <div className="container">
              <div className="mb-10 max-w-3xl">
                <h2 className="text-4xl font-bold text-white">FAQ</h2>
                <p className="mt-4 text-muted">
                  Quick answers for visitors planning tickets, hotels, parking, and connectivity for the FIFA World Cup Final 2026.
                </p>
              </div>

              <div className="space-y-4">
                {faqItems.map((item) => (
                  <details key={item.question} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-glass">
                    <summary className="cursor-pointer list-none pr-6 text-lg font-semibold text-white marker:hidden">
                      {item.question}
                    </summary>
                    <p className="mt-4 leading-relaxed text-muted">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
