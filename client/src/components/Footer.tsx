import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/30 backdrop-blur-sm">
      <div className="container py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">World Cup Final Stay</h3>
            <p className="text-muted text-sm leading-relaxed">
              Your premium guide to luxury accommodation near MetLife Stadium for the FIFA World Cup 2026 Final.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="text-muted hover:text-accent transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="text-muted hover:text-accent transition-colors">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-muted hover:text-accent transition-colors">About</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-muted hover:text-accent transition-colors">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy">
                  <a className="text-muted hover:text-accent transition-colors">Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a className="text-muted hover:text-accent transition-colors">Terms of Service</a>
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure">
                  <a className="text-muted hover:text-accent transition-colors">Affiliate Disclosure</a>
                </Link>
              </li>
              <li>
                <Link href="/cookies">
                  <a className="text-muted hover:text-accent transition-colors">Cookie Policy</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
              >
                📷
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
              >
                𝕏
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
              >
                f
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Affiliate Disclosure */}
          <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
            <p className="text-xs text-muted leading-relaxed">
              <strong className="text-accent">Affiliate Disclosure:</strong> World Cup Final Stay contains affiliate links to Expedia and other travel booking services. When you click on these links and make a purchase, we may earn a commission at no additional cost to you. This helps us maintain and improve our content. We only recommend products and services we believe provide value to our readers.
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
            <p>&copy; {currentYear} World Cup Final Stay. All rights reserved.</p>
            <p>
              Designed for football fans • Powered by premium content • Updated daily
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
