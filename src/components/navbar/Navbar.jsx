"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { AuthLinks } from "../authlinks/AuthLinks";
import Burger from "../burger/Burger";
import SearchBar from "./searchbar/Searchbar";

const Navbar = () => {
  const [posts, setPosts] = useState([]);  // Store search results

  // Define the handleSearch function to fetch search results
  const handleSearch = async(query) => {
    if (query.trim()) {
      try {
        const res = await fetch(`/api/search?query=${query}`);
        if (!res.ok) throw new Error('Failed to fetch search results');
        const data = await res.json();
        setPosts(data);  // Update state with search results
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      setPosts([]);  // Clear results if query is empty
    }
  };
 
  return (
    <div className={styles.container}>
      <div className={styles.nav1}>
        <div className={styles.social}>
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="./facebook.png" alt="" height={"30px"} width={"30px"} />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="./linkedin.png" alt="" height={"30px"} width={"30px"} />
          </Link>
          <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="./youtube.png" alt="" height={"30px"} width={"30px"} />
          </Link>
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="./instagram.png" alt="" height={"30px"} width={"30px"} />
          </Link>
          <Link href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <img src="./github.png" alt="" height={"30px"} width={"30px"} className={styles.github} />
          </Link>
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
          <Link href="./about">About</Link>
          <Link href="./contact">Contact</Link>
        </div>
        {/* Pass handleSearch function and search results to SearchBar */}
        <SearchBar onSearch={handleSearch} results={posts} />
      </div>
    </div>
  );
};

export default Navbar;
