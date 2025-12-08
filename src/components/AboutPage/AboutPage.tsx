import './AboutPage.css'
import founder from '../../assets/company-logo-original.png'
const AboutPage: React.FC = () => {
  return (
    <div className="about">
      <div className="company-name">
        <h1 className="main-company-name">ESXATA</h1>
        <h2 className="secondary-company-name">GLOBAL PROPERTIES</h2>
      </div>
      <div className="countries-list">
        <p>London • Central Asia • Dubai</p>
      </div>

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
      <div className="about-page-lines">
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

export default AboutPage
