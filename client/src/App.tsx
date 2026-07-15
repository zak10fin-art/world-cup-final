import { Suspense, lazy } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch } from 'wouter';
import ErrorBoundary from '@/components/ErrorBoundary';
import GoogleAdSense from '@/components/GoogleAdSense';
import { ThemeProvider } from '@/contexts/ThemeContext';

const Home = lazy(() => import('@/pages/Home'));
const Blog = lazy(() => import('@/pages/Blog'));
const BlogDetail = lazy(() => import('@/pages/BlogDetail'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const Privacy = lazy(() => import('@/pages/Privacy'));
const Terms = lazy(() => import('@/pages/Terms'));
const AffiliateDisclosure = lazy(() => import('@/pages/AffiliateDisclosure'));
const Cookies = lazy(() => import('@/pages/Cookies'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function RouteLoader() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white">
      <div className="container flex min-h-screen items-center justify-center">
        <div className="glass-card rounded-3xl px-6 py-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">World Cup Final Stay</p>
          <p className="mt-2 text-slate-200">Loading travel content…</p>
        </div>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<RouteLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogDetail} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/affiliate-disclosure" component={AffiliateDisclosure} />
        <Route path="/cookies" component={Cookies} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <GoogleAdSense bootstrapOnly />
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
