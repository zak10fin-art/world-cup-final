import ContentPageLayout from '@/components/ContentPageLayout';

export default function AffiliateDisclosure() {
  return (
    <ContentPageLayout
      title="Affiliate Disclosure | World Cup Final Stay"
      description="Read how World Cup Final Stay uses affiliate links for tickets, hotels, and travel recommendations while maintaining editorial transparency."
      keywords="affiliate disclosure, World Cup Final Stay, Expedia affiliate, travel affiliate links"
      eyebrow="Transparency"
      heading="Affiliate Disclosure"
      intro="World Cup Final Stay may earn a commission when visitors book through selected partner links. This does not increase the cost for the visitor."
      lastUpdated={new Date().toLocaleDateString()}
    >
      <div className="rounded-3xl border border-accent/20 bg-accent/10 p-5">
        <p className="m-0 text-white">
          <strong className="text-accent">Important:</strong> Affiliate commissions help support site maintenance, editorial improvements, and ongoing travel content updates for the FIFA World Cup 2026 Final.
        </p>
      </div>

      <h2>How affiliate links work</h2>
      <p>
        Some links on the website direct visitors to partners for tickets, hotels, parking, or other travel-related services. If you complete a booking or purchase, we may receive a commission.
      </p>

      <h2>What this means for you</h2>
      <p>
        Affiliate links do not automatically increase your price. They simply allow the partner to attribute a referral back to this website.
      </p>

      <h2>Editorial standards</h2>
      <p>
        Recommendations are selected because they are relevant to match-week planning near MetLife Stadium. Editorial content aims to stay clear, useful, and conversion-focused without misleading visitors.
      </p>

      <h2>Current partner types</h2>
      <ul>
        <li>Ticket partners</li>
        <li>Hotel and travel partners</li>
        <li>Parking partners</li>
        <li>Connectivity or travel utility partners</li>
      </ul>

      <h2>Questions</h2>
      <p>
        For disclosure-related questions, contact hello@worldcupfinalstay2026.online.
      </p>
    </ContentPageLayout>
  );
}
