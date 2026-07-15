import ContentPageLayout from '@/components/ContentPageLayout';

export default function Privacy() {
  return (
    <ContentPageLayout
      title="Privacy Policy | World Cup Final Stay"
      description="Review the privacy policy for World Cup Final Stay, including how visitor information, cookies, and travel-related inquiries are handled."
      keywords="privacy policy, World Cup Final Stay, cookies, data protection"
      eyebrow="Privacy & data"
      heading="Privacy Policy"
      intro="This policy explains what information may be collected when you use World Cup Final Stay and how that information is used to support the website experience."
      lastUpdated={new Date().toLocaleDateString()}
    >
      <h2>1. Information we collect</h2>
      <p>
        We may collect information you provide directly, such as your name, email address, and any message you submit through forms or travel-related inquiries.
      </p>

      <h2>2. How information is used</h2>
      <p>
        Information may be used to respond to inquiries, improve content, maintain the website, and understand which travel resources visitors find useful.
      </p>

      <h2>3. Cookies and similar technologies</h2>
      <p>
        Cookies may be used to support core site functionality, analytics, and advertising. You can manage cookie preferences through your browser settings.
      </p>

      <h2>4. Third-party links and partners</h2>
      <p>
        The site links to external services, including hotel, ticket, parking, and connectivity partners. Their websites operate under their own privacy policies and cookie practices.
      </p>

      <h2>5. Data security</h2>
      <p>
        Reasonable technical and organizational safeguards are used to reduce the risk of unauthorized access, misuse, or disclosure of information.
      </p>

      <h2>6. Your rights</h2>
      <p>
        If you want to request access, correction, or deletion of personal information you submitted, contact hello@worldcupfinalstay2026.online.
      </p>

      <h2>7. Policy updates</h2>
      <p>
        This policy may be updated as the website evolves. Updates will be reflected on this page.
      </p>
    </ContentPageLayout>
  );
}
