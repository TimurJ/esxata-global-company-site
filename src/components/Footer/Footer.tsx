import './Footer.css'
import berkeley from '../../assets/berkeley-logo-transparent.png'
import binghatti from '../../assets/binghatti-logo.jpg'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="company-info-footer">
        <p>Copyright © 2025 Esxata Global Properties.</p>
        <p>Esxata Global Properties Ltd</p>
        <p>(Company Number: 16871985) registered in England and Wales.</p>
        <button className="footer-button">Privacy Policy</button>
      </div>

      <div className="company-contact-footer">
        <p>Contacts:</p>
        <p>Email: contact@esxataglobal.com</p>
        <p>WhatsApp: +44 (0) 777 553 1771</p>
      </div>

      <div className="partners-footer">
        <p>In partnership with:</p>
        <img src={berkeley} width="120px" alt="" />
        <img src={binghatti} width="120px" alt="" />
      </div>
    </footer>
  )
}

export default Footer
