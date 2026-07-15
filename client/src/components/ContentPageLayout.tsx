import { ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

interface ContentPageLayoutProps {
  title: string;
  description: string;
  keywords?: string;
  eyebrow?: string;
  heading: string;
  intro: string;
  lastUpdated?: string;
  children: ReactNode;
}

export default function ContentPageLayout({
  title,
  description,
  keywords,
  eyebrow = 'World Cup Final Stay',
  heading,
  intro,
  lastUpdated,
  children,
}: ContentPageLayoutProps) {
  return (
    <>
      <SEOHead title={title} description={description} keywords={keywords} />
      <div className="page-shell">
        <Navigation />
        <main className="flex-1">
          <section className="page-section">
            <div className="container max-w-4xl">
              <div className="page-header">
                <p className="eyebrow">{eyebrow}</p>
                <h1 className="page-title">{heading}</h1>
                <p className="page-intro">{intro}</p>
                {lastUpdated && <p className="page-meta">Last updated: {lastUpdated}</p>}
              </div>

              <div className="page-panel prose prose-invert max-w-none">
                {children}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
