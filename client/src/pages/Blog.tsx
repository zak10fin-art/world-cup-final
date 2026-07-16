import { useState } from 'react';
import { Link } from 'wouter';
import { Loader2 } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import StructuredData, { breadcrumbSchema, collectionPageSchema } from '@/components/StructuredData';
import AdsterraNativeBanner from '@/components/AdsterraNativeBanner';
import GoogleAdSense from '@/components/GoogleAdSense';
import { adsenseSlots, hasAdSenseSlot } from '@/lib/siteAds';
import { SITE_URL } from '@/lib/siteConfig';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const POSTS_PER_PAGE = 6;

  const { data: categories } = trpc.blog.categories.useQuery();
  const { data: allPosts } = trpc.blog.list.useQuery();

  const filteredPosts = selectedCategory
    ? allPosts?.posts.filter((post: any) => post.blog_categories?.slug === selectedCategory) || []
    : allPosts?.posts || [];
  const paginatedPosts = filteredPosts.slice(page * POSTS_PER_PAGE, (page + 1) * POSTS_PER_PAGE);
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));

  return (
    <>
      <SEOHead
        title="World Cup Travel Blog - Guides for MetLife Stadium and World Cup 2026"
        description="Read hotel guides, stadium tips, transport advice, and New York and New Jersey recommendations for the FIFA World Cup 2026 Final."
        keywords="World Cup 2026 blog, MetLife Stadium travel guide, New Jersey hotels, NYC attractions"
        url={`${SITE_URL}/blog`}
      />
      <StructuredData
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Blog', url: `${SITE_URL}/blog` },
        ])}
      />
      <StructuredData
        data={collectionPageSchema({
          name: 'World Cup Travel Blog',
          description: 'Travel guides, hotel planning advice, and match-day tips for the FIFA World Cup 2026 Final near MetLife Stadium.',
          url: `${SITE_URL}/blog`,
          itemUrls: paginatedPosts.map((post: any) => `${SITE_URL}/blog/${post.slug}`),
        })}
      />

      <div className="page-shell">
        <Navigation />

        <main className="flex-1">
          <section className="page-section border-b border-white/10 pb-10">
            <div className="container">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
                <div>
                  <p className="eyebrow">Travel guides & planning</p>
                  <h1 className="page-title max-w-4xl">World Cup 2026 travel articles built for fast decision-making</h1>
                  <p className="page-intro max-w-3xl">
                    Browse match-day guides, hotel planning advice, transportation tips, and New York–New Jersey travel ideas to support your FIFA World Cup Final trip.
                  </p>
                </div>

                <div className="glass-card rounded-3xl p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Most important first</p>
                  <p className="mt-3 text-base leading-7 text-slate-200">
                    Secure <a href="/#tickets" className="text-accent underline-offset-4 hover:underline">tickets</a>, compare <a href="/#hotels" className="text-accent underline-offset-4 hover:underline">hotels</a>, then use the blog to refine transport, parking, and local planning.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-white/10 bg-white/5 py-8">
            <div className="container">
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={() => {
                    setSelectedCategory(null);
                    setPage(0);
                  }}
                  variant={selectedCategory === null ? 'default' : 'outline'}
                  className={selectedCategory === null ? 'btn-gold' : 'border-white/20 bg-transparent text-slate-100'}
                >
                  All Posts
                </Button>
                {categories?.map((cat: any) => (
                  <Button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.slug);
                      setPage(0);
                    }}
                    variant={selectedCategory === cat.slug ? 'default' : 'outline'}
                    className={selectedCategory === cat.slug ? 'btn-gold' : 'border-white/20 bg-transparent text-slate-100'}
                  >
                    {cat.name}
                  </Button>
                ))}
              </div>
            </div>
          </section>

          <section className="py-8">
            <div className="container">
              <AdsterraNativeBanner title="Sponsored travel recommendations on blog listing" minHeight={320} />
            </div>
          </section>

          {hasAdSenseSlot(adsenseSlots.blogListing) && (
            <section className="pb-2">
              <div className="container">
                <div className="sponsored-shell">
                  <p className="sponsored-label">Advertisement</p>
                  <GoogleAdSense adSlot={adsenseSlots.blogListing} className="min-h-[120px]" />
                </div>
              </div>
            </section>
          )}

          <section className="content-auto py-16 md:py-20">
            <div className="container">
              {!allPosts ? (
                <div className="glass-card rounded-3xl py-14 text-center">
                  <Loader2 className="mx-auto mb-4 h-8 w-8 animate-spin text-accent" />
                  <p className="text-slate-300">Loading posts…</p>
                </div>
              ) : filteredPosts.length === 0 ? (
                <div className="glass-card rounded-3xl py-14 text-center">
                  <p className="text-slate-100">No articles found for this category yet.</p>
                </div>
              ) : (
                <>
                  <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {paginatedPosts.map((post: any) => (
                      <Link key={post.id} href={`/blog/${post.slug}`}>
                        <a className="article-card group flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-glass transition duration-300 hover:-translate-y-1 hover:border-accent/30">
                          <div className="aspect-[16/10] overflow-hidden bg-slate-900">
                            {post.featuredImage ? (
                              <img
                                src={post.featuredImage}
                                alt={post.imageAlt || post.title}
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                                loading="lazy"
                                decoding="async"
                                width="1600"
                                height="900"
                              />
                            ) : (
                              <div className="flex h-full items-center justify-center text-5xl">📰</div>
                            )}
                          </div>

                          <div className="flex flex-1 flex-col p-6">
                            <div className="mb-4 flex items-center justify-between gap-3 text-xs text-slate-300/80">
                              <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-semibold uppercase tracking-[0.16em] text-accent">
                                {post.blog_categories?.name || 'Blog'}
                              </span>
                              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                            </div>

                            <h2 className="text-2xl font-bold text-white transition-colors group-hover:text-accent">
                              {post.title}
                            </h2>
                            <p className="mt-3 flex-1 text-base leading-7 text-slate-300/88 line-clamp-3">
                              {post.excerpt}
                            </p>
                            <span className="mt-6 inline-flex items-center text-sm font-semibold text-accent">
                              Read article →
                            </span>
                          </div>
                        </a>
                      </Link>
                    ))}
                  </div>

                  {filteredPosts.length > POSTS_PER_PAGE && (
                    <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                      <Button
                        onClick={() => setPage(Math.max(0, page - 1))}
                        disabled={page === 0}
                        variant="outline"
                        className="border-white/20 bg-transparent text-slate-100"
                      >
                        Previous
                      </Button>
                      <span className="text-sm text-slate-300">
                        Page {page + 1} of {totalPages}
                      </span>
                      <Button
                        onClick={() => setPage(page + 1)}
                        disabled={page + 1 >= totalPages}
                        variant="outline"
                        className="border-white/20 bg-transparent text-slate-100"
                      >
                        Next
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
