import React from 'react';
import styles from './menu.module.css';
import Link from 'next/link';
import PostList from './PostList';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.popularCategories}>
        <h2 className={styles.title}>Trending catagories</h2>
        <div className={styles.categoryList}>
        <Link href="/blog?cat=lifestyle" className={styles.categoryItem}>LIFESTYLE</Link> 
          <Link href={"/blog?cat=business"} className={styles.categoryItem}>BUSINESS</Link>
          <Link href={"/blog?cat=technology"} className={styles.categoryItem}>TECHNOLOGY</Link>
          <Link href={"/blog?cat=health"} className={styles.categoryItem}>HEALTH</Link>
          <Link href={"/blog?cat=sports"} className={styles.categoryItem}>SPORTS</Link>
        </div>
      </div>

      <div className={styles.popularPosts}>
        <h2 className={styles.title}>Popular Posts</h2>
        <PostList/>
      </div>

      <div className={styles.socialMedia}>
        
        <div className={styles.socialLinks}>
        <div className={styles.social}>
        <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./facebook.png" alt="" height={"30px"} width={"30px"} />
          </Link>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./linkedin.png" alt="" height={"30px"} width={"30px"} />
          </Link>
          <Link
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./youtube.png" alt="" height={"30px"} width={"30px"} />
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./instagram.png" alt="" height={"30px"} width={"30px"} />
          </Link>
          <Link
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img
              src="./github.png"
              alt=""
              height={"30px"}
              width={"30px"}
              className={styles.github}
            />
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
