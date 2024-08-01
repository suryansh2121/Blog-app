import React from "react";
import styles from "./postlist.module.css";

const PostList = () => {
  return (
    <div className={styles.postlist}>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <img src="./l.jpg" alt=""  className={styles.image} />
        </div>
        <div className={styles.postContent}>
          <div className={styles.postInfo}>
            <span className={styles.postCategory}>Business</span>
            <span className={styles.postDate}>Jan 01, 2045</span>
          </div>
          <h2 className={styles.postTitle}>
            Lorem Ipsum Dolor Sit Amet Elit.Vitae Porta Diam...
          </h2>
        </div>
      </div>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <img src="./l.jpg" alt=""  className={styles.image} />
        </div>
        <div className={styles.postContent}>
          <div className={styles.postInfo}>
            <span className={styles.postCategory}>Business</span>
            <span className={styles.postDate}>Jan 01, 2045</span>
          </div>
          <h2 className={styles.postTitle}>
            Lorem Ipsum Dolor Sit Amet Elit.Vitae Porta Diam...
          </h2>
        </div>
      </div>
     
     
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <img src="./l.jpg" alt=""  className={styles.image} />
        </div>
        <div className={styles.postContent}>
          <div className={styles.postInfo}>
            <span className={styles.postCategory}>Business</span>
            <span className={styles.postDate}>Jan 01, 2045</span>
          </div>
          <h2 className={styles.postTitle}>
            Lorem Ipsum Dolor Sit Amet Elit.Vitae Porta Diam...
          </h2>
        </div>
      </div>
      
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <img src="./l.jpg" alt=""  className={styles.image} />
        </div>
        <div className={styles.postContent}>
          <div className={styles.postInfo}>
            <span className={styles.postCategory}>Business</span>
            <span className={styles.postDate}>Jan 01, 2045</span>
          </div>
          <h2 className={styles.postTitle}>
            Lorem Ipsum Dolor Sit Amet Elit.Vitae Porta Diam...
          </h2>
        </div>
      </div>
     
    </div>
  );
};

export default PostList;
