"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { AuthLinks } from "../authlinks/AuthLinks";
import Burger from "../burger/Burger";
import SearchBar from "./searchbar/Searchbar";

const Navbar = () => {
  const [posts, setPosts] = useState([]); 

 
  const handleSearch = async (query) => {
    if (query.trim()) {
      try {
        const res = await fetch(`/api/search?query=${query}`);
        if (!res.ok) throw new Error("Failed to fetch search results");
        const data = await res.json();
        setPosts(data); 
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      setPosts([]); 
    }
  };

  return (
    <div className={styles.container}>
      
      <div className={styles.nav1}>
        <div className={styles.social}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/facebook.png" width={20} height={20} alt="Facebook" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/linkedin.png" alt="" height={20} width={20} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/youtube.png" alt="" height={20} width={20} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/instagram.png" alt="" height={20} width={20} />
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Image
              src="/github.png"
              alt=""
              height={20}
              width={20}
              className={styles.github}
            />
          </a>
        </div>
        <div className={styles.auth}>
          <AuthLinks />
        </div>
      </div>

      <div className={styles.logo}>
        <div>
          <span>SURY</span>ANSH
        </div>
        <div className={styles.burger}>
          <Burger />
        </div>
      </div>

      <div className={styles.nav3}>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <SearchBar onSearch={handleSearch} results={posts} />
      </div>
    </div>
  );
};

export default Navbar;
