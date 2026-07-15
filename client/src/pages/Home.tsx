import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import AdsterraNativeBanner from '@/components/AdsterraNativeBanner';
import GoogleAdSense from '@/components/GoogleAdSense';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import StructuredData, { organizationSchema, eventSchema, faqPageSchema } from '@/components/StructuredData';
import { adsenseSlots, hasAdSenseSlot } from '@/lib/siteAds';
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
      const finalDate = new Date('2026-07-19T20:00:00-04:00').getTime();
      const now = Date.now();
      const distance = finalDate - now;

      if (distance <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const existingScript = document.querySelector('script.eg-widgets-script');
    if (existingScript) return;

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
        description="Book premium hotels near MetLife Stadium for the FIFA World Cup 2026 Final. Compare tickets, hotels, parking, and essential travel planning in one fast, mobile-first guide."
        keywords="World Cup 2026, MetLife Stadium, FIFA final tickets, hotels, parking, eSIM, travel guide"
        type="website"
      />
      <StructuredData data={organizationSchema} />
      <StructuredData data={eventSchema} />
      <StructuredData data={faqPageSchema(faqItems)} />

      <div className="page-shell">
        <Navigation />

        <main className="flex-1">
          <section className="relative overflow-hidden pb-16 pt-24 md:pb-20 md:pt-28">
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <img
                src={homeImages.hero}
                alt="Football supporters filling a packed stadium under bright lights"
                className="absolute inset-0 h-full w-full object-cover opacity-25"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width="1600"
                height="900"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/96 via-slate-950/88 to-slate-900/72" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.22),transparent_22%),radial-gradient(circle_at_left_center,rgba(59,130,246,0.16),transparent_28%)]" />
            </div>

            <div className="container grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_420px] lg:items-center">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
                  <span>🏆</span>
                  <span>FIFA World Cup Final 2026 • MetLife Stadium</span>
                </div>

                <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl xl:text-7xl">
                  Tickets first. Then every part of your final-weekend plan.
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200/92 md:text-xl">
                  Start with the highest-priority purchase, then compare hotels, parking, and connectivity for a smoother World Cup Final trip near MetLife Stadium.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a href="#tickets" className="w-full sm:w-auto">
                    <Button className="btn-gold w-full px-8 py-6 text-base md:text-lg">🎟️ Explore Final Tickets</Button>
                  </a>
                  <a href="#hotels" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full border-white/20 bg-white/5 px-8 py-6 text-base text-white hover:bg-white/10">
                      View Hotels Near MetLife Stadium
                    </Button>
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200/88">
                  <span className="chip">✓ Premium booking flow</span>
                  <span className="chip">✓ Faster mobile experience</span>
                  <span className="chip">✓ Ticket-first conversion strategy</span>
                </div>

                <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glass lg:max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Also useful</p>
                  <p className="mt-3 text-base leading-7 text-slate-200/88">
                    Need more context before you book? Visit the <Link href="/blog"><a className="text-accent underline-offset-4 hover:underline">travel blog</a></Link> for match-day tips, transport guidance, and area recommendations.
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-[32px] p-7 md:p-8">
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-accent">Countdown to kickoff</p>
                <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">FIFA World Cup 2026 Final</h2>
                <p className="mb-7 text-sm leading-7 text-slate-200/85">
                  Final match day is getting closer. Demand for tickets, nearby hotels, and match-week travel support is expected to increase as the event approaches.
                </p>

                <div className="mb-6 grid grid-cols-4 gap-3">
                  {[
                    { label: 'Days', value: countdown.days },
                    { label: 'Hours', value: countdown.hours },
                    { label: 'Minutes', value: countdown.minutes },
                    { label: 'Seconds', value: countdown.seconds },
                  ].map((item) => (
                    <div key={item.label} className="countdown-box">
                      <strong className="block text-2xl text-white md:text-3xl">{String(item.value).padStart(2, '0')}</strong>
                      <span className="mt-1 block text-[11px] uppercase tracking-wider text-slate-300/82">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200/88">
                  <strong className="text-accent">Venue:</strong> MetLife Stadium, East Rutherford, New Jersey
                </div>
              </div>
            </div>
          </section>

          {hasAdSenseSlot(adsenseSlots.homePrimary) && (
            <section className="pb-2">
              <div className="container">
                <div className="sponsored-shell">
                  <p className="sponsored-label">Advertisement</p>
                  <GoogleAdSense adSlot={adsenseSlots.homePrimary} className="min-h-[120px]" />
                </div>
              </div>
            </section>
          )}

          <section id="tickets" className="content-auto py-8 md:py-12">
            <div className="container">
              <div className="overflow-hidden rounded-[32px] border border-accent/20 bg-[linear-gradient(135deg,rgba(212,175,55,0.18),rgba(255,255,255,0.04))] shadow-glass">
                <div className="grid gap-0 lg:grid-cols-[minmax(0,1.08fr)_460px] lg:items-stretch">
                  <div className="p-6 md:p-10 lg:p-12">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-300">
                      <span>🔥</span>
                      <span>Last Chance • Limited Availability</span>
                    </div>

                    <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
                      🏆 Be Part of History – Experience the FIFA World Cup Final 2026 Live!
                    </h2>

                    <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200/92">
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
                        <Button className="btn-gold w-full px-8 py-6 text-base md:text-lg">🎟️ Get Your Final Tickets Now</Button>
                      </a>
                      <p className="text-sm leading-7 text-slate-300/88">
                        Secure tickets first, then continue to hotels, parking, and eSIM planning below.
                      </p>
                    </div>
                  </div>

                  <div className="relative min-h-[320px] overflow-hidden border-t border-white/10 bg-slate-900 lg:border-l lg:border-t-0">
                    <img
                      src={homeImages.ticketsFans}
                      alt="Packed football stadium with fans celebrating the excitement of the FIFA World Cup Final"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                      width="1600"
                      height="900"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="hotels" className="content-auto py-16 md:py-20">
            <div className="container">
              <div className="mb-10 max-w-3xl">
                <p className="eyebrow">Stay near the action</p>
                <h2 className="text-4xl font-bold text-white md:text-5xl">Hotels Near MetLife Stadium</h2>
                <p className="mt-4 text-lg leading-8 text-slate-300/88">
                  After securing tickets, choose a stay that helps you reach MetLife Stadium faster and enjoy a more comfortable final weekend in the New York–New Jersey area.
                </p>
              </div>

              <div className="grid gap-8 xl:grid-cols-2">
                <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-glass">
                  <div className="aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={homeImages.worldOfBlue}
                      alt="World of Blue hotel exterior near MetLife Stadium in East Rutherford"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                      width="1600"
                      height="1067"
                    />
                  </div>
                  <div className="p-6 md:p-7">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">World of Blue</h3>
                        <p className="mt-2 text-base leading-7 text-slate-300/86">A premium stay with refined interiors and excellent access to the MetLife Stadium area.</p>
                      </div>
                      <span className="whitespace-nowrap rounded-full bg-accent px-3 py-1 text-sm font-bold text-black">⭐ 4.8/5</span>
                    </div>

                    <div className="mb-6 grid grid-cols-2 gap-3">
                      {['Onsite & valet parking', 'Free Wi-Fi', 'Restaurant on-site', '24-hour fitness center'].map((feature) => (
                        <div key={feature} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200/86">
                          {feature}
                        </div>
                      ))}
                    </div>

                    <a
                      href="https://expedia.com/affiliates/jersey-city-hotels-world-of-blue.bjwWpXP"
                      target="_blank"
                      rel="nofollow sponsored noopener"
                    >
                      <Button className="btn-gold w-full py-6 text-base">Check Availability</Button>
                    </a>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-glass">
                  <div className="aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={homeImages.hamptonInn}
                      alt="Hampton Inn Carlstadt hotel exterior near the Meadowlands and MetLife Stadium"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                      width="900"
                      height="506"
                    />
                  </div>
                  <div className="p-6 md:p-7">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">Hampton Inn Carlstadt</h3>
                        <p className="mt-2 text-base leading-7 text-slate-300/86">A practical, fan-friendly choice near the venue with comfortable essentials for match-day convenience.</p>
                      </div>
                      <span className="whitespace-nowrap rounded-full bg-green-500 px-3 py-1 text-sm font-bold text-black">✅ Prime Location</span>
                    </div>

                    <div className="mb-6 grid grid-cols-2 gap-3">
                      {['Near MetLife Stadium', 'Free Hot Breakfast', 'Free Parking', 'Fitness Center'].map((feature) => (
                        <div key={feature} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200/86">
                          {feature}
                        </div>
                      ))}
                    </div>

                    <a
                      href="https://expedia.com/affiliates/jersey-city-hotels-hampton-inn-carlstadt.XM6A88e"
                      target="_blank"
                      rel="nofollow sponsored noopener"
                    >
                      <Button className="btn-gold w-full py-6 text-base">Book Now</Button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-4 md:p-6 shadow-glass">
                <div className="mb-4 max-w-2xl">
                  <h3 className="text-2xl font-bold text-white">Search More Stay Options</h3>
                  <p className="mt-2 text-base leading-7 text-slate-300/86">
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

          <section className="py-8">
            <div className="container">
              <AdsterraNativeBanner title="Sponsored travel recommendations on the homepage" minHeight={320} />
            </div>
          </section>

          {hasAdSenseSlot(adsenseSlots.homeSecondary) && (
            <section className="pb-2">
              <div className="container">
                <div className="sponsored-shell">
                  <p className="sponsored-label">Advertisement</p>
                  <GoogleAdSense adSlot={adsenseSlots.homeSecondary} className="min-h-[120px]" />
                </div>
              </div>
            </section>
          )}

          <section id="parking" className="content-auto border-t border-white/10 py-16 md:py-20">
            <div className="container">
              <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-glass">
                <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
                  <div className="p-6 md:p-10">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
                      <span>🚗</span>
                      <span>Parking</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white md:text-5xl">Lock In Parking Before Match-Day Rush</h2>
                    <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300/88">
                      Keep your final-day logistics smoother by reserving parking in advance. Early planning can reduce uncertainty and arrival pressure around the stadium.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:max-w-2xl">
                      {[
                        'Useful for drivers heading to the final',
                        'Helps organize arrival planning',
                        'Same affiliate destination preserved',
                        'Cleaner, conversion-focused section design',
                      ].map((item) => (
                        <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200/86">
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <a href="https://prked.com?ref=KiyYrjV3" target="_blank" rel="nofollow sponsored noopener">
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
                      width="1200"
                      height="630"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="esim" className="content-auto border-t border-white/10 py-16 md:py-20">
            <div className="container">
              <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-glass">
                <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-center">
                  <div className="p-6 md:p-10">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
                      <span>📱</span>
                      <span>Travel eSIM</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white md:text-5xl">Stay Connected During FIFA World Cup 2026</h2>
                    <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300/88">
                      Get instant mobile data in the USA with eSIMania eSIM so you can access maps, ride shares, booking emails, and ticket details without relying on a physical SIM card.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:max-w-2xl">
                      {[
                        'Instant activation',
                        'No physical SIM card required',
                        'Affordable data plans',
                        'Perfect for international travelers',
                      ].map((benefit) => (
                        <div key={benefit} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200/86">
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
                      width="594"
                      height="1200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="content-auto border-t border-white/10 py-16 md:py-20">
            <div className="container">
              <div className="mb-10 max-w-3xl">
                <p className="eyebrow">Quick planning answers</p>
                <h2 className="text-4xl font-bold text-white md:text-5xl">FAQ</h2>
                <p className="mt-4 text-lg leading-8 text-slate-300/88">
                  Quick answers for visitors planning tickets, hotels, parking, and connectivity for the FIFA World Cup Final 2026.
                </p>
              </div>

              <div className="space-y-4">
                {faqItems.map((item) => (
                  <details key={item.question} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glass">
                    <summary className="cursor-pointer list-none pr-6 text-lg font-semibold text-white marker:hidden md:text-xl">
                      {item.question}
                    </summary>
                    <p className="mt-4 text-base leading-7 text-slate-300/88">{item.answer}</p>
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
