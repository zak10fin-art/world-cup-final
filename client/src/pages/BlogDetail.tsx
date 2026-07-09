import { useRoute } from 'wouter';
import { trpc } from '@/lib/trpc';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Loader2 } from 'lucide-react';
import { Link } from 'wouter';
import AdsterraNativeBanner from '@/components/AdsterraNativeBanner';

export default function BlogDetail() {
  const [match, params] = useRoute<{ slug: string }>('/blog/:slug');
  const slug = match ? params.slug : '';

  const { data: post, isLoading } = trpc.blog.bySlug.useQuery(
    { slug },
    { enabled: !!slug }
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <Loader2 className="animate-spin w-12 h-12 text-accent" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Post Not Found</h1>
            <Link href="/blog">
              <a className="text-accent hover:underline">Back to Blog</a>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const postData = post.blog_posts;
  const categoryData = post.blog_categories;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-12 border-b border-white/10">
          <div className="container max-w-3xl">
            <Link href="/blog">
              <a className="text-accent hover:underline text-sm mb-6 inline-block">← Back to Blog</a>
            </Link>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold uppercase">
                {categoryData?.name}
              </span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">{postData?.title}</h1>
            <div className="flex items-center gap-4 text-muted text-sm">
              <span>{new Date(postData?.publishedAt || '').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>•</span>
              <span>{postData?.views || 0} views</span>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {postData?.featuredImage && (
          <section className="py-8">
            <div className="container max-w-3xl">
              <img
                src={postData.featuredImage}
                alt={postData.imageAlt || postData.title}
                className="w-full rounded-xl object-cover aspect-video"
                loading="eager"
                decoding="async"
              />
            </div>
          </section>
        )}

        {/* Content */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <div className="prose prose-invert max-w-none">
              <div
                className="text-muted leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: postData?.content || '' }}
              />
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container max-w-3xl">
            <AdsterraNativeBanner
              title="Sponsored travel recommendations inside blog article"
              minHeight={320}
            />
          </div>
        </section>

        {/* Meta Info */}
        <section className="py-12 border-t border-white/10 bg-white/5">
          <div className="container max-w-3xl">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="font-semibold text-white mb-2">Post Information</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted">Category</span>
                  <p className="text-white font-medium">{categoryData?.name}</p>
                </div>
                <div>
                  <span className="text-muted">Published</span>
                  <p className="text-white font-medium">
                    {new Date(postData?.publishedAt || '').toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-gradient-to-r from-accent/20 to-accent/10 border-y border-accent/20">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Book Your Stay?</h2>
            <p className="text-muted mb-6 max-w-2xl mx-auto">
              Don't miss the FIFA World Cup 2026 Final. Secure your hotel near MetLife Stadium today.
            </p>
            <Link href="/">
              <a className="inline-block px-8 py-3 bg-gradient-to-br from-accent to-yellow-400 text-black font-bold rounded-full hover:shadow-lg transition-all">
                Explore Hotels
              </a>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
