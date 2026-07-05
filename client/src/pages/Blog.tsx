import { useState } from 'react';
import { Link } from 'wouter';
import { trpc } from '@/lib/trpc';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const POSTS_PER_PAGE = 6;

  const { data: categories } = trpc.blog.categories.useQuery();
  const { data: allPosts } = trpc.blog.list.useQuery({
    limit: POSTS_PER_PAGE,
    offset: page * POSTS_PER_PAGE,
  });

  const filteredPosts = selectedCategory
    ? allPosts?.posts.filter((post: any) => post.blog_categories?.slug === selectedCategory) || []
    : allPosts?.posts || [];

  return (
    <>
      <SEOHead
        title="World Cup Travel Blog - Guides for MetLife Stadium and World Cup 2026"
        description="Read hotel guides, stadium tips, transport advice, and New York and New Jersey recommendations for the FIFA World Cup 2026 Final."
        keywords="World Cup 2026 blog, MetLife Stadium travel guide, New Jersey hotels, NYC attractions"
      />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="py-20 border-b border-white/10">
          <div className="container">
            <h1 className="text-5xl font-bold mb-4 text-white">World Cup Travel Blog</h1>
            <p className="text-muted max-w-2xl">
              Expert insights, travel tips, and guides for the FIFA World Cup 2026 Final and your stay near MetLife Stadium.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-white/10 bg-white/5">
          <div className="container">
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => {
                  setSelectedCategory(null);
                  setPage(0);
                }}
                variant={selectedCategory === null ? 'default' : 'outline'}
                className={selectedCategory === null ? 'btn-gold' : 'border-white/20'}
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
                  className={selectedCategory === cat.slug ? 'btn-gold' : 'border-white/20'}
                >
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <Loader2 className="animate-spin mx-auto mb-4" />
                <p className="text-muted">Loading posts...</p>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {filteredPosts.map((post: any) => (
                    <Link key={post.id} href={`/blog/${post.slug}`}>
                      <a className="glass-card rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col h-full">
                        <div className="aspect-video bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center group-hover:from-accent/40 group-hover:to-accent/20 transition-colors">
                          {post.featuredImage ? (
                            <img
                              src={post.featuredImage}
                              alt={post.imageAlt || post.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                          ) : (
                            <span className="text-5xl">📰</span>
                          )}
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <div className="mb-3">
                            <span className="inline-block px-2 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold uppercase">
                              {post.blog_categories?.name || 'Blog'}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-muted text-sm mb-4 flex-1 line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="flex justify-between items-center text-xs text-muted">
                            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                            <span className="text-accent">Read More →</span>
                          </div>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>

                {/* Pagination */}
                {(allPosts?.total || 0) > POSTS_PER_PAGE && (
                  <div className="flex justify-center gap-4">
                    <Button
                      onClick={() => setPage(Math.max(0, page - 1))}
                      disabled={page === 0}
                      variant="outline"
                      className="border-white/20"
                    >
                      Previous
                    </Button>
                    <span className="flex items-center text-muted">
                      Page {page + 1} of {Math.ceil((allPosts?.total || 0) / POSTS_PER_PAGE)}
                    </span>
                    <Button
                      onClick={() => setPage(page + 1)}
                      disabled={(page + 1) * POSTS_PER_PAGE >= (allPosts?.total || 0)}
                      variant="outline"
                      className="border-white/20"
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
