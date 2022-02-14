import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a
            href="https://www.facebook.com/alamo.vinicius.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/alamovsouza/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/alamovinicius/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/AlamoVinicius/budget"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Budget</span> &copy; 2022
      </p>
    </footer>
  );
}

export default Footer;
