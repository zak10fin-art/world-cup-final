import { Link } from 'wouter';
import ContentPageLayout from '@/components/ContentPageLayout';

export default function About() {
  return (
    <ContentPageLayout
      title="About World Cup Final Stay - Premium World Cup 2026 Travel Guide"
      description="Learn about World Cup Final Stay, your premium destination for FIFA World Cup 2026 Final travel planning, hotel guidance, and match-week logistics near MetLife Stadium."
      keywords="about, World Cup 2026, travel guide, MetLife Stadium"
      eyebrow="About the project"
      heading="Planning help for football fans heading to MetLife Stadium"
      intro="World Cup Final Stay is built for supporters who want a fast, premium, and easy way to organize tickets, hotels, parking, and essential travel decisions for the FIFA World Cup 2026 Final."
    >
      <h2>What this website helps you do</h2>
      <ul>
        <li>Compare hotel options near MetLife Stadium</li>
        <li>Discover match-week planning advice for New Jersey and New York</li>
        <li>Review parking and connectivity options before final weekend</li>
        <li>Move from ticket planning to accommodation planning with less friction</li>
      </ul>

      <h2>Editorial approach</h2>
      <p>
        The site focuses on practical travel decisions with a premium, mobile-first experience. Visitors should be able to understand the event, secure priority bookings, and continue through the rest of the trip-planning journey without getting lost in unnecessary clutter.
      </p>

      <h2>Why MetLife Stadium planning matters</h2>
      <p>
        The FIFA World Cup Final will create intense demand across tickets, hotels, local transport, and parking. A focused planning hub helps fans act earlier and avoid last-minute stress.
      </p>

      <h2>Need help?</h2>
      <p>
        If you have questions about the site or need general planning guidance, visit the <Link href="/contact"><a>contact page</a></Link>.
      </p>
    </ContentPageLayout>
  );
}
