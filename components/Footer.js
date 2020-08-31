import styles from "../styles/footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        s
        <div className={styles.socialWrapper}>
          <a href='mailto:thinkbooi@gmail.com' target='_blank'>
            <img src='/media-img/mail-icon.svg' alt='Mail icon' />
          </a>
          <a href='https://github.com/think91' target='_blank'>
            <img src='/media-img/github-icon.svg' alt='Github icon' />
          </a>
          <a href='https://www.linkedin.com/in/lwazibooi/' target='_blank'>
            <img src='/media-img/linkedin-icon.svg' alt='Linkedin' />
          </a>
        </div>
        <div className={styles.right}>
          <Link href='/about'>
            <a>About</a>
          </Link>
          <Link href='/projects'>
            <a>Projects</a>
          </Link>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;