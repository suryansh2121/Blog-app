import React from "react";
import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.info}>
            <h1 className={styles.title}>About Suryansh</h1>
            <p className={styles.text}>
              Hello! I&apos;m <span className={styles.logo}>Suryansh</span>, a
              dedicated{" "}
              <span className={styles.about}>Full Stack Software Engineer</span>{" "}
              with a passion for Problem-Solving, crafting responsive and
              high-performance web Solutions using the Appropriate Tech stack.
            </p>
            <p className={styles.content}>
              I’ve worked as a Frontend Developer Intern at The Entrepreneurship
              Network, where I contributed to optimizing performance and
              enhancing user experience. I am particularly proud of improving
              loading speeds by 25% and implementing key UI features like
              carousels, animations, and responsive layouts.
            </p>
            
            <div className={styles.skills}>
              <h2>Technical Skills</h2>
              <ul className={styles.list}>
                <li className={styles.item}>JavaScript, Python, C</li>
                <li className={styles.item}>React, Redux, Next.js</li>
                <li className={styles.item}>Node.js, Express.js</li>
                <li className={styles.item}>MongoDB, PostgreSQL, Supabase</li>
                <li className={styles.item}>Tailwind CSS, CSS Modules</li>
                <li className={styles.item}>Firebase, NextAuth.js, JWT</li>
                <li className={styles.item}>Git, GitHub, Vercel, Heroku</li>
              </ul>
            </div>
            <div className={styles.skills}>
              <h2>Soft Skills</h2>
              <ul className={styles.list}>
                <li className={styles.item}>Problem Solving & Debugging</li>
                <li className={styles.item}>
                  Attention to Detail & Creativity
                </li>
                <li className={styles.item}>Effective Communication</li>
                <li className={styles.item}>Team Collaboration</li>
                <li className={styles.item}>
                  Critical Thinking & Adaptability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
