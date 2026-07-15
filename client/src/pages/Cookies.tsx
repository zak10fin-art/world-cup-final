import ContentPageLayout from '@/components/ContentPageLayout';

export default function Cookies() {
  return (
    <ContentPageLayout
      title="Cookie Policy | World Cup Final Stay"
      description="Learn how World Cup Final Stay uses cookies, analytics, and browser preferences to improve the website experience for football travelers."
      keywords="cookie policy, World Cup Final Stay, cookies, analytics"
      eyebrow="Cookies & tracking"
      heading="Cookie Policy"
      intro="This page explains how cookies and similar technologies may be used on World Cup Final Stay for functionality, analytics, and advertising support."
      lastUpdated={new Date().toLocaleDateString()}
    >
      <h2>What cookies do</h2>
      <p>
        Cookies are small files stored in your browser that help websites remember preferences, support essential features, and understand how pages are used.
      </p>

      <h2>Types of cookies used</h2>
      <ul>
        <li><strong>Essential cookies:</strong> support core functionality and navigation.</li>
        <li><strong>Analytics cookies:</strong> help us understand site performance and visitor behavior.</li>
        <li><strong>Advertising cookies:</strong> may support relevant ad delivery from approved partners.</li>
        <li><strong>Preference cookies:</strong> remember settings that improve usability.</li>
      </ul>

      <h2>Third-party cookies</h2>
      <p>
        External booking partners and advertising providers may set their own cookies when you interact with their services. Please review their policies for full details.
      </p>

      <h2>Managing cookies</h2>
      <p>
        Most browsers let you block or delete cookies. Keep in mind that disabling cookies can affect website functionality and some partner experiences.
      </p>

      <h2>Questions</h2>
      <p>
        If you have questions about this cookie policy, contact hello@worldcupfinalstay2026.online.
      </p>
    </ContentPageLayout>
  );
}
