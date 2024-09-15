import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import PostList from "./PostList";
import Image from "next/image";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.popularCategories}>
        <h2 className={styles.title}>Trending catagories</h2>
        <div className={styles.categoryList}>
          <Link href="/blog?cat=lifestyle" className={styles.categoryItem}>
            LIFESTYLE
          </Link>
          <Link href={"/blog?cat=business"} className={styles.categoryItem}>
            BUSINESS
          </Link>
          <Link href={"/blog?cat=technology"} className={styles.categoryItem}>
            TECHNOLOGY
          </Link>
          <Link href={"/blog?cat=health"} className={styles.categoryItem}>
            HEALTH
          </Link>
          <Link href={"/blog?cat=sports"} className={styles.categoryItem}>
            SPORTS
          </Link>
        </div>
      </div>

      <div className={styles.popularPosts}>
        <h2 className={styles.title}>Popular Posts</h2>
        <PostList />
      </div>

      <div className={styles.socialMedia}>
        <div className={styles.socialLinks}>
          <div className={styles.social}>
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
      </div>
    </div>
  );
};

export default Menu;
