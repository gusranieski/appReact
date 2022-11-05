import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <a href="https://www.linkedin.com/in/gustavo-ranieski/" target="blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/gusranieski/appReact" target="blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="copyright">
        © 2022 Copyright-
        <a href="https://www.linkedin.com/in/gustavo-ranieski/" target="blank">
          Gustavo Rañieski
        </a>
      </div>
    </div>
  );
};

export default Footer;
