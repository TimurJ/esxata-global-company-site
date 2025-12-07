import Button from '../Button/Button'
import './HomePage.css'

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <h1 className="main-company-name">ESXATA</h1>
      <h2 className="secondary-company-name">GLOBAL PROPERTIES</h2>
      <p className="tagline">HERITAGE MEETS </p>
      <p className="tagline">LEGACY</p>
      <p className="mission">CONNECTING GLOBAL LUXURY BUYERS</p>
      <div className="button-collection">
        <Button label="London" />
        <Button label="Dubai" />
        <Button label="Central Asia" />
      </div>
    </div>
  )
}

export default HomePage
