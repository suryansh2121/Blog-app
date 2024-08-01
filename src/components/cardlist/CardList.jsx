import React from "react";
import Pagination from "../pagination/Pagination";
import styles from "./cardlist.module.css";

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.hedding}>Recent Posts</h1>
      <div className={styles.cardslist}>
        <div className={styles.cards}>
          <div className={styles.imageContainer}>
            <img src="./l.jpg" alt="" className={styles.image} />
            <div className={styles.postContent}>
              <div className={styles.postInfo}>
                <span className={styles.postCategory}>Business</span>
                <span className={styles.postDate}>Jan 01, 2045</span>
              </div>
              <h2 className={styles.postTitle}>
                Lorem Ipsum Dolor Sit Amet Elit. Proin Vitae Porta Diam...
              </h2>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.imageContainer}>
            <img src="./l.jpg" alt="" className={styles.image} />
            <div className={styles.postContent}>
              <div className={styles.postInfo}>
                <span className={styles.postCategory}>Business</span>
                <span className={styles.postDate}>Jan 01, 2045</span>
              </div>
              <h2 className={styles.postTitle}>
                Lorem Ipsum Dolor Sit Amet Elit. Proin Vitae Porta Diam...
              </h2>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.imageContainer}>
            <img src="./l.jpg" alt="" className={styles.image} />
            <div className={styles.postContent}>
              <div className={styles.postInfo}>
                <span className={styles.postCategory}>Business</span>
                <span className={styles.postDate}>Jan 01, 2045</span>
              </div>
              <h2 className={styles.postTitle}>
                Lorem Ipsum Dolor Sit Amet Elit. Proin Vitae Porta Diam...
              </h2>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.imageContainer}>
            <img src="./l.jpg" alt="" className={styles.image} />
            <div className={styles.postContent}>
              <div className={styles.postInfo}>
                <span className={styles.postCategory}>Business</span>
                <span className={styles.postDate}>Jan 01, 2045</span>
              </div>
              <h2 className={styles.postTitle}>
                Lorem Ipsum Dolor Sit Amet Elit. Proin Vitae Porta Diam...
              </h2>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.imageContainer}>
            <img src="./l.jpg" alt="" className={styles.image} />
            <div className={styles.postContent}>
              <div className={styles.postInfo}>
                <span className={styles.postCategory}>Business</span>
                <span className={styles.postDate}>Jan 01, 2045</span>
              </div>
              <h2 className={styles.postTitle}>
                Lorem Ipsum Dolor Sit Amet Elit. Proin Vitae Porta Diam...
              </h2>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.imageContainer}>
            <img src="./l.jpg" alt="" className={styles.image} />
            <div className={styles.postContent}>
              <div className={styles.postInfo}>
                <span className={styles.postCategory}>Business</span>
                <span className={styles.postDate}>Jan 01, 2045</span>
              </div>
              <h2 className={styles.postTitle}>
                Lorem Ipsum Dolor Sit Amet Elit. Proin Vitae Porta Diam...
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
