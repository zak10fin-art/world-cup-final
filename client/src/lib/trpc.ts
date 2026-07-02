import { detailedPosts, categories, posts } from '@/data/blogData';
import { getBlogAltText, getBlogImageForSlug } from '@/lib/siteImages';

function enrichPost<T extends { slug: string; title: string; featuredImage?: string | null }>(post: T): T & { featuredImage: string; imageAlt: string } {
  return {
    ...post,
    featuredImage: post.featuredImage || getBlogImageForSlug(post.slug),
    imageAlt: getBlogAltText(post.slug, post.title),
  };
}

function enrichDetailedPost<T extends { blog_posts: { slug: string; title: string; featuredImage?: string | null } }>(item: T) {
  return {
    ...item,
    blog_posts: enrichPost(item.blog_posts),
  };
}

function useCategoriesQuery() {
  return { data: [...categories], isLoading: false, error: null };
}

function usePostsQuery(input?: { limit?: number; offset?: number }) {
  const limit = input?.limit ?? posts.length;
  const offset = input?.offset ?? 0;
  return {
    data: {
      posts: posts.slice(offset, offset + limit).map(enrichPost),
      total: posts.length,
    },
    isLoading: false,
    error: null,
  };
}

function usePostBySlugQuery(
  input: { slug: string },
  options?: { enabled?: boolean }
) {
  const enabled = options?.enabled ?? true;
  return {
    data: enabled
      ? (() => {
          const item = detailedPosts.find((entry) => entry.blog_posts.slug === input.slug);
          return item ? enrichDetailedPost(item) : null;
        })()
      : null,
    isLoading: false,
    error: null,
  };
}

function useSubscribeMutation() {
  return {
    isPending: false,
    mutateAsync: async ({ email }: { email: string }) => {
      if (!email || !email.includes('@')) {
        throw new Error('A valid email is required');
      }

      if (typeof window !== 'undefined') {
        const key = 'world-cup-final-stay-subscribers';
        const current = JSON.parse(window.localStorage.getItem(key) ?? '[]') as string[];
        const next = Array.from(new Set([...current, email.trim().toLowerCase()]));
        window.localStorage.setItem(key, JSON.stringify(next));
      }

      return { success: true };
    },
  };
}

export const trpc = {
  blog: {
    categories: { useQuery: useCategoriesQuery },
    list: { useQuery: usePostsQuery },
    bySlug: { useQuery: usePostBySlugQuery },
  },
  subscribers: {
    subscribe: { useMutation: useSubscribeMutation },
  },
};
