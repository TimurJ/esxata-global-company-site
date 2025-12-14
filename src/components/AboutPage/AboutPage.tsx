import './AboutPage.css'
import founder from '../../assets/founder-image.webp'

const AboutPage: React.FC = () => {
  return (
    <div className="about">
      <div className="about-section-1">
        <div className="company-name">
          <h1 className="main-company-name">ESXATA</h1>
          <h2 className="secondary-company-name">GLOBAL PROPERTIES</h2>
        </div>

        <h2 className="founder-header">Message From The Founder</h2>
        <div className="founder-section">
          <img className="founder-image" src={founder} alt="Image of the company founder" />
          <div className="founder-quote-name">
            <p className="founder-quote">
              "I created Esxata Global Properties to build a bridge between people, places and
              opportunities. A quiet, personal way of working where heritage meets modern ambition,
              and every connection is made with intention.""
            </p>
            <p className="founder-name">- Mashkhura Ruziboeva, Founder</p>
          </div>
        </div>
        <div className="countries-list">
          <p>London • Central Asia • Dubai</p>
        </div>
        <div className="about-page-lines">
          <svg viewBox="0 0 500 500" width="100%" height="250px" preserveAspectRatio="none">
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
      <div className="about-section-2">
        <h2 className="section-header">The Mission</h2>
        <div className="about-section-text">
          <p>
            Esxata Global Properties was created with a clear purpose: to offer a quieter, more
            refined approach to property sourcing. In an industry often driven by speed and volume,
            Esxata chooses intention, prioritising understanding, connection and discretion above
            all else.
          </p>
          <p>
            Founded by Mashkhura Ruziboeva, Esxata is built on a belief that clients deserve more
            than listings. They deserve guidance rooted in genuine care, cultural awareness and a
            respect for the stories behind every move. Mashkhura’s background in luxury client
            service shapes the calm, detailed and personal experience at the heart of the brand.
          </p>
          <p>
            At Esxata, the journey begins with sourcing. Whether a client is seeking a London home,
            exploring opportunities abroad or looking for discreet introductions, every search is
            shaped around their lifestyle, goals and priorities. The role is simple: to make the
            process feel effortless and to bring the right people and places together with clarity
            and confidence.
          </p>
          <p>
            As the company grows, Esxata continues to expand its international reach, including a
            developing collaboration in Dubai. This creates a trusted pathway for clients who wish
            to explore one of the world’s most dynamic property markets.
          </p>
          <div className="guiding-principles">
            <p>Esxata Global Properties is guided by three principles:</p>
            <p>• Simplicity - making the property journey clear and uncomplicated</p>
            <p>• Connection - bringing the right people, places and opportunities together</p>
            <p>• Care - ensuring every client feels supported, informed and valued</p>
          </div>
          <p>
            More than a sourcing agency, Esxata is a boutique experience shaped around people, their
            stories, their aspirations and their vision for the future.
          </p>
          <p>This is property, curated.</p>
          <p>This is Esxata Global Properties.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
