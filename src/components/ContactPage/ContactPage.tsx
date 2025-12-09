import './ContactPage.css'

const ContactPage: React.FC = () => {
  return (
    <div className="contact">
      <h1 className="contact-title">CONTACT US</h1>
      <div className="contact-section">
        <div className="enquiries">
          <p>Enquiries</p>
          <p>
            We welcome quiet, thoughtful conversations. If you would like to discuss a property
            search, explore opportunities or simply make an introduction, we would be pleased to
            hear from you.
          </p>
          <p>
            Please share a brief message about your requirements, and we will respond with care and
            discretion.
          </p>
          <p>Esxata Global Properties, connecting people and places with quiet luxury.</p>
        </div>
        <div className="contact-details">
          <div>
            <p>Email:</p>
            <p>Contact@esxataglobal.com</p>
          </div>
          <div>
            <p>WhatsApp:</p>
            <p>+447775531771</p>
          </div>
          <div>
            <p>Location:</p>
            <p>London, United Kingdom, SW6</p>
          </div>
        </div>
      </div>
      <div className="lines">
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
  )
}

export default ContactPage
