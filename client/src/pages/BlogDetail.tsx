import { useRoute, Link } from 'wouter';
import { Loader2 } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AdsterraNativeBanner from '@/components/AdsterraNativeBanner';
import GoogleAdSense from '@/components/GoogleAdSense';
import SEOHead from '@/components/SEOHead';
import StructuredData, { articleSchema, breadcrumbSchema } from '@/components/StructuredData';
import { adsenseSlots, hasAdSenseSlot } from '@/lib/siteAds';
import { SITE_URL } from '@/lib/siteConfig';

export default function BlogDetail() {
  const [match, params] = useRoute<{ slug: string }>('/blog/:slug');
  const slug = match ? params.slug : '';

  const { data: post, isLoading } = trpc.blog.bySlug.useQuery({ slug }, { enabled: !!slug });

  if (isLoading) {
    return (
      <div className="page-shell">
        <Navigation />
        <main className="flex flex-1 items-center justify-center">
          <div className="glass-card rounded-3xl p-8 text-center">
            <Loader2 className="mx-auto mb-4 h-8 w-8 animate-spin text-accent" />
            <p className="text-slate-200">Loading article…</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="page-shell">
        <Navigation />
        <main className="flex flex-1 items-center justify-center">
          <div className="glass-card rounded-3xl p-8 text-center">
            <h1 className="text-3xl font-bold text-white">Post Not Found</h1>
            <Link href="/blog"><a className="mt-4 inline-block text-accent hover:underline">Back to Blog</a></Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const postData = post.blog_posts;
  const categoryData = post.blog_categories;
  const postUrl = `${SITE_URL}/blog/${postData.slug}`;

  return (
    <>
      <SEOHead
        title={postData.title}
        description={postData.metaDescription || postData.excerpt}
        keywords={postData.metaKeywords}
        image={postData.featuredImage}
        url={postUrl}
        type="article"
        publishedDate={postData.publishedAt}
        modifiedDate={postData.updatedAt}
        author="World Cup Final Stay"
      />
      <StructuredData
        data={articleSchema({
          title: postData.title,
          description: postData.metaDescription || postData.excerpt,
          image: postData.featuredImage,
          datePublished: postData.publishedAt,
          dateModified: postData.updatedAt,
          author: 'World Cup Final Stay',
          url: postUrl,
        })}
      />
      <StructuredData
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Blog', url: `${SITE_URL}/blog` },
          { name: postData.title, url: postUrl },
        ])}
      />

      <div className="page-shell">
        <Navigation />

        <main className="flex-1">
          <section className="page-section border-b border-white/10 pb-10">
            <div className="container max-w-4xl">
              <Link href="/blog">
                <a className="mb-6 inline-flex items-center text-sm font-semibold text-accent hover:underline">← Back to Blog</a>
              </Link>
              <div className="page-header !mb-0">
                <p className="eyebrow">{categoryData?.name || 'World Cup Travel Blog'}</p>
                <h1 className="page-title">{postData.title}</h1>
                <p className="page-intro">{postData.metaDescription || postData.excerpt}</p>
                <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-300/80">
                  <span>{new Date(postData.publishedAt || '').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span>•</span>
                  <span>{postData.views || 0} views</span>
                </div>
              </div>
            </div>
          </section>

          {postData.featuredImage && (
            <section className="pt-10">
              <div className="container max-w-4xl">
                <img
                  src={postData.featuredImage}
                  alt={postData.imageAlt || postData.title}
                  className="h-auto w-full rounded-[28px] object-cover shadow-glass"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  width="1600"
                  height="900"
                />
              </div>
            </section>
          )}

          <section className="content-auto py-12 md:py-14">
            <div className="container max-w-4xl">
              <article className="page-panel prose prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: postData.content || '' }} />
              </article>
            </div>
          </section>

          <section className="py-6">
            <div className="container max-w-4xl">
              <AdsterraNativeBanner title="Sponsored travel recommendations inside blog article" minHeight={320} />
            </div>
          </section>

          {hasAdSenseSlot(adsenseSlots.blogArticle) && (
            <section className="pb-4">
              <div className="container max-w-4xl">
                <div className="sponsored-shell">
                  <p className="sponsored-label">Advertisement</p>
                  <GoogleAdSense adSlot={adsenseSlots.blogArticle} className="min-h-[120px]" />
                </div>
              </div>
            </section>
          )}

          <section className="pb-14 pt-8">
            <div className="container max-w-4xl">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
                <div className="page-panel">
                  <h2 className="text-2xl font-bold text-white">Continue planning your final weekend</h2>
                  <p className="mt-3 text-base leading-7 text-slate-300/88">
                    After reading this guide, go back to the homepage to compare ticket options, hotels near MetLife Stadium, parking, and connectivity tools in one place.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a href="https://tidd.ly/4paJtJI" target="_blank" rel="nofollow sponsored noopener noreferrer" aria-label="Buy FIFA World Cup Final 2026 tickets" className="w-full sm:w-auto">
                      <span className="btn-gold inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-bold sm:w-auto">
                        Explore Tickets
                      </span>
                    </a>
                    <a href="/#hotels" className="w-full sm:w-auto rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10">
                      Compare Hotels
                    </a>
                  </div>
                </div>

                <div className="glass-card rounded-3xl p-6">
                  <h3 className="text-xl font-bold text-white">Article information</h3>
                  <dl className="mt-5 space-y-4 text-sm text-slate-300/86">
                    <div>
                      <dt className="font-semibold uppercase tracking-[0.14em] text-accent">Category</dt>
                      <dd className="mt-1 text-base text-white">{categoryData?.name}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold uppercase tracking-[0.14em] text-accent">Published</dt>
                      <dd className="mt-1 text-base text-white">{new Date(postData.publishedAt || '').toLocaleDateString()}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
