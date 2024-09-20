import React from "react";
import Image from "next/image";
import styles from "./about.module.css"// Import the CSS file

const About = () => {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.image}>
            <Image src="your-profile-pic.jpg" alt="Suryansh's Profile" />
          </div>
          <div className={styles.info}>
            <h1 className={styles.title}>About Suryansh</h1>
            <p className={styles.text}>
              Hello! I am <span className={styles.logo}>Suryansh</span>, a passionate <span className={styles.about}>Full Stack Developer</span> with a background in Computer Science.
            </p>
            <p className={styles.content}>
              I graduated with B.Tech in Computer Science, with a deep interest in building high-quality web applications that are both scalable and efficient.
            </p>
            <div className={styles.education}>
              <h2 className={styles.educatio}>Education</h2>
              <p className={styles.graduation}>B.Tech in Computer Science</p>
              </div>
              <div className={styles.skills}>
                <h2>Expertise</h2>
                <ul className={styles.list} >
                  <li className={styles.item}>REACT</li>
                  <li className={styles.item}>MONGODB</li>
                  <li className={styles.item}>EXPRESSJS</li>
                  <li className={styles.item}>NEXTJS</li>
                  <li className={styles.item}>NODEJS</li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
