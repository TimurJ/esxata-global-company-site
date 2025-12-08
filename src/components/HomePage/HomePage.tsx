import './HomePage.css'

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <div className="company-name">
        <h1 className="main-company-name">ESXATA</h1>
        <h2 className="secondary-company-name">GLOBAL PROPERTIES</h2>
      </div>
      <div className="home-tagline-mission">
        <p className="tagline">HERITAGE MEETS LEGACY </p>
        <p className="mission">Connecting people and places with quiet luxury</p>
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

export default HomePage
