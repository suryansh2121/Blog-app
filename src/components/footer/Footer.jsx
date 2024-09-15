// components/Footer.js
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.about}>
          <div className={styles.logo}>
            <div>
              <span>SURY</span>ANSH
            </div>
          </div>
          <p className={styles}>
            We are committed to delivering the best content.
          </p>
        </div>
        <div className={styles.links}>
          <h2>Quick Links</h2>
          <div className={styles.links}>
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        <div className={styles.trendingtags}>
          <h2>Trending tags</h2>
          <div className={styles.catagories}>
            <Link href="/blog?cat=lifestyle" className={styles.catagory}>
              LIFESTYLE
            </Link>
            <Link href="/blog?cat=business" className={styles.catagory}>
              BUSINESS
            </Link>
            <Link href="/blog?cat=health" className={styles.catagory}>
              HEALTH
            </Link>
            <Link href="/blog?cat=technology" className={styles.catagory}>
              TECHNOLOGY
            </Link>
            <Link href="/blog?cat=sports" className={styles.catagory}>
              SPORTS
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <div className={styles.contacts}>
          <p>Email: rajputsuryansh491@gmail.com</p>
          <p>Phone: +91 9555074132</p>
        </div>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <div className={styles.socialMedia}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="./facebook.png" alt="" height={"30px"} width={"30px"} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="./linkedin.png" alt="" height={"30px"} width={"30px"} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="./youtube.png" alt="" height={"30px"} width={"30px"} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="./instagram.png" alt="" height={"30px"} width={"30px"} />
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Image
              src="./github.png"
              alt=""
              height={"30px"}
              width={"30px"}
              className={styles.github}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
