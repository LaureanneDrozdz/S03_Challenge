
import style from './Footer.module.scss'
import logo from '../../assets/logo.png';
const Footer = () => {
  return (
    
      <footer id={style.footer}>
        <div className={style.footerNavigation}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Accueil</a>
            </li>
            <li>
              <a href="#">Produits</a>
            </li>
          
          </ul>
        </div>
        <div className={style.footerContact}>
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className={style.footerLogo}>
          <img src={logo} alt="logo-footer"/>
        </div>
      </footer>
    
  );
};

export default Footer;
