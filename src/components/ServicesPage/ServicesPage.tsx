import './ServicesPage.css'

const ServicesPage: React.FC = () => {
  return (
    <div className="services">
      <div className="services-descriptions">
        <h2 className="services-title">OUR SERVICES</h2>
        <section className="services-card">
          <h1 className="service-header">• Property Sourcing</h1>
          <p className="service-description">
            Thoughtfully selected opportunities across London and international markets. Every
            search is curated around each client’s priorities, lifestyle and long-term vision.
          </p>
        </section>
        <section className="services-card">
          <h1 className="service-header">• Buyer and Seller Introductions</h1>
          <p className="service-description">
            Discreet introductions that connect the right people with the right opportunities.
            Handled with care, clarity and confidentiality.
          </p>
        </section>
        <section className="services-card">
          <h1 className="service-header">• International Connections</h1>
          <p className="service-description">
            Guidance for clients exploring property in Dubai and London, supported through a
            developing collaboration with trusted partners in the region. A boutique entry point
            into a global market.
          </p>
        </section>
        <section className="services-card">
          <h1 className="service-header">• Private Client Support</h1>
          <p className="service-description">
            A quiet and personal experience from beginning to end. Clear communication, attentive
            guidance and ongoing assistance throughout the property journey.
          </p>
        </section>
      </div>
      <div className="lines">
        <svg viewBox="0 0 500 500" width="100%" height="200px" preserveAspectRatio="none">
          <path
            d="M0,100 Q250,500 500,400"
            fill="none"
            stroke="#f9d568"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M0,400 Q250,400 500,0"
            fill="none"
            stroke="#f9d568"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  )
}

export default ServicesPage
