import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky-nav">
      <div className="container">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/">
            <a className="flex items-center gap-3 text-lg font-bold tracking-wide text-white transition-colors hover:text-accent sm:text-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-accent to-yellow-300 text-lg font-black text-slate-950 shadow-lg shadow-accent/20">
                ⚽
              </div>
              <div>
                <span className="hidden sm:block">World Cup Final Stay</span>
                <span className="block text-xs font-medium uppercase tracking-[0.2em] text-slate-300/80">MetLife 2026 travel</span>
              </div>
            </a>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className="text-sm font-semibold text-slate-200 transition-colors hover:text-accent"
                  aria-current={location === link.href ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <a href="https://tidd.ly/4paJtJI" target="_blank" rel="nofollow sponsored noopener noreferrer" aria-label="Buy FIFA World Cup Final 2026 tickets">
              <Button className="btn-gold px-5">Get Tickets</Button>
            </a>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <div id="mobile-navigation-menu" className="border-t border-white/10 pb-5 pt-4 md:hidden">
            <div className="glass-card rounded-3xl p-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a
                      className="rounded-2xl px-4 py-3 text-base font-medium text-slate-100 transition hover:bg-white/10 hover:text-accent"
                      onClick={() => setIsOpen(false)}
                      aria-current={location === link.href ? 'page' : undefined}
                    >
                      {link.label}
                    </a>
                  </Link>
                ))}
                <a href="https://tidd.ly/4paJtJI" target="_blank" rel="nofollow sponsored noopener noreferrer" aria-label="Buy FIFA World Cup Final 2026 tickets" onClick={() => setIsOpen(false)} className="pt-2">
                  <Button className="btn-gold w-full">Get Tickets</Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
