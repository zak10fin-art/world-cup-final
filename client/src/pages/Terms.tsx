import ContentPageLayout from '@/components/ContentPageLayout';

export default function Terms() {
  return (
    <ContentPageLayout
      title="Terms of Service | World Cup Final Stay"
      description="Read the terms of service for World Cup Final Stay, including website usage, disclaimers, and affiliate travel content limitations."
      keywords="terms of service, World Cup Final Stay, legal terms, affiliate travel site"
      eyebrow="Website terms"
      heading="Terms of Service"
      intro="These terms explain the basic conditions for using World Cup Final Stay and the limitations that apply to travel-planning content, recommendations, and third-party links."
      lastUpdated={new Date().toLocaleDateString()}
    >
      <h2>1. Acceptance of terms</h2>
      <p>
        By accessing this website, you agree to these terms. If you do not agree, please do not use the service.
      </p>

      <h2>2. Informational use only</h2>
      <p>
        World Cup Final Stay is designed to provide travel-planning information, booking pathways, and editorial guidance. Final booking decisions and external transactions take place on third-party platforms.
      </p>

      <h2>3. No guarantee of availability or pricing</h2>
      <p>
        Ticket inventory, hotel rates, parking availability, and travel offers may change at any time. We cannot guarantee that prices, availability, or partner pages remain unchanged after publication.
      </p>

      <h2>4. External links</h2>
      <p>
        This website links to third-party services. We are not responsible for the content, terms, or booking outcomes on those external sites.
      </p>

      <h2>5. Limitation of liability</h2>
      <p>
        The website is provided on an “as is” basis. World Cup Final Stay is not liable for losses or damages arising from reliance on website content or from bookings made through external partners.
      </p>

      <h2>6. Changes to these terms</h2>
      <p>
        These terms may be updated from time to time. Continued use of the website after updates means you accept the revised version.
      </p>
    </ContentPageLayout>
  );
}
