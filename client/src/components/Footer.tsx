import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/35 backdrop-blur-sm">
      <div className="container py-14">
        <div className="mb-10 grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold text-accent">World Cup Final Stay</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300/88">
              A premium travel hub for World Cup Final visitors planning tickets, hotels, parking, and match-week logistics near MetLife Stadium.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Explore</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/"><a className="footer-link">Home</a></Link></li>
              <li><Link href="/blog"><a className="footer-link">Travel Blog</a></Link></li>
              <li><Link href="/about"><a className="footer-link">About</a></Link></li>
              <li><Link href="/contact"><a className="footer-link">Contact</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Planning links</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="/#tickets" className="footer-link">FIFA Final Tickets</a></li>
              <li><a href="/#hotels" className="footer-link">Hotels Near MetLife Stadium</a></li>
              <li><a href="/#parking" className="footer-link">Parking Options</a></li>
              <li><a href="/#faq" className="footer-link">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Legal</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/privacy"><a className="footer-link">Privacy Policy</a></Link></li>
              <li><Link href="/terms"><a className="footer-link">Terms of Service</a></Link></li>
              <li><Link href="/affiliate-disclosure"><a className="footer-link">Affiliate Disclosure</a></Link></li>
              <li><Link href="/cookies"><a className="footer-link">Cookie Policy</a></Link></li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glass">
          <p className="text-sm leading-7 text-slate-300/85">
            <strong className="text-accent">Affiliate Disclosure:</strong> World Cup Final Stay includes affiliate links for tickets, hotels, parking, and travel services. If you book through these links, we may earn a commission at no extra cost to you. Recommendations are selected to support fans planning for the FIFA World Cup Final.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>&copy; {currentYear} World Cup Final Stay. All rights reserved.</p>
          <p>Optimized for football fans planning travel to the FIFA World Cup 2026 Final.</p>
        </div>
      </div>
    </footer>
  );
}
