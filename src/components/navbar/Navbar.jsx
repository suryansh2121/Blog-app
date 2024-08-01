"user client";
import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { AuthLinks } from "../authlinks/AuthLinks";
import Burger from "../burger/Burger";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav1}>
        <div className={styles.social}>
          <img src="./facebook.png" alt="" height={"30px"} width={"30px"}/>
          <img src="./instagram.png" alt="" height={"30px"} width={"30px"} />
          <img src="./linkedin.png" alt="" height={"30px"} width={"30px"}/>
          <img src="./youtube.png" alt=""height={"30px"} width={"30px"} />
          <img src="./github.png" alt=""height={"30px"} width={"30px"} className={styles.github} />
        </div>
        <div className={styles.auth}>
          <AuthLinks />
        </div>
      </div>
      <div className={styles.logo}>
        <div>
        <span>SURY</span>ANSH </div>
        <div className={styles.burger}>
         <Burger/>
        </div>
      </div>
      <div className={styles.nav3}>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.searchbox}>
          <input className={styles.textarea} type="text" placeholder="search" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
