import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Cookies() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      <Navigation />

      <main className="flex-1">
        <section className="py-20">
          <div className="container max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-8">Cookie Policy</h1>
            <p className="text-muted mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-invert max-w-none space-y-6 text-muted leading-relaxed">
              <h2 className="text-3xl font-bold text-white mt-8 mb-4">What Are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit our website. They help us remember information about your visit and improve your browsing experience.
              </p>

              <h2 className="text-3xl font-bold text-white mt-8 mb-4">Types of Cookies We Use</h2>
              <p>
                <strong className="text-white">Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
              </p>
              <p>
                <strong className="text-white">Analytics Cookies:</strong> We use analytics cookies to understand how visitors interact with our website. This helps us improve our content and user experience. We use Google Analytics for this purpose.
              </p>
              <p>
                <strong className="text-white">Preference Cookies:</strong> These cookies remember your preferences and settings, such as language and theme preferences.
              </p>

              <h2 className="text-3xl font-bold text-white mt-8 mb-4">Third-Party Cookies</h2>
              <p>
                When you click on affiliate links to Expedia or other partner websites, those sites may set their own cookies on your device. We are not responsible for the cookies set by third-party websites. Please review their cookie policies for more information.
              </p>

              <h2 className="text-3xl font-bold text-white mt-8 mb-4">How to Control Cookies</h2>
              <p>
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="space-y-2 ml-4">
                <li>Accept all cookies</li>
                <li>Reject all cookies</li>
                <li>Accept only certain types of cookies</li>
                <li>Delete cookies from your device</li>
              </ul>
              <p>
                Please note that disabling cookies may affect the functionality of our website and your browsing experience.
              </p>

              <h2 className="text-3xl font-bold text-white mt-8 mb-4">Browser Controls</h2>
              <p>
                You can find information about how to manage cookies in your browser:
              </p>
              <ul className="space-y-2 ml-4">
                <li><strong>Chrome:</strong> chrome://settings/cookies</li>
                <li><strong>Firefox:</strong> Preferences → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy</li>
                <li><strong>Edge:</strong> Settings → Privacy, search, and services</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mt-8 mb-4">Google Analytics</h2>
              <p>
                We use Google Analytics to track visitor behavior and improve our website. Google Analytics uses cookies to collect data about your visit. You can opt out of Google Analytics tracking by visiting: https://tools.google.com/dlpage/gaoptout
              </p>

              <h2 className="text-3xl font-bold text-white mt-8 mb-4">Updates to This Policy</h2>
              <p>
                We may update this cookie policy from time to time. We will notify you of any changes by posting the updated policy on our website.
              </p>

              <h2 className="text-3xl font-bold text-white mt-8 mb-4">Contact Us</h2>
              <p>
                If you have any questions about our cookie policy, please contact us at hello@worldcupfinalstay.com.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
