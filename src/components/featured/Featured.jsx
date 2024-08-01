import React from "react";
import styles from "./featured.module.css";
import PostCarousel from "./PostCarousel";

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.movablePost}>
        <div className={styles.imageContainer}>
          <img src="./k.jpg" alt="" className={styles.image} />
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

      <div className={styles.postcards}>
        <div className={styles.cards}>
          {" "}
          <div className={styles.imageContainer}>
            <img src="./i.jpg" alt="" className={styles.image} />
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
          {" "}
          <div className={styles.imageContainer}>
            <img src="./j.jpg" alt="" className={styles.image} />
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
            <img src="./g.jpg" alt="" className={styles.image} />
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
    </div>
  );
};

export default Featured;
