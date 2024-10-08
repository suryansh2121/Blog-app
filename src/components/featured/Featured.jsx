import React from "react";
import styles from "./featured.module.css";
import Card from "../card/Card";
import Image from "next/image";
import { apiUrl } from "@/utils/config";

const getData = async (page, cat) => {
  const res = await fetch(
    `${apiUrl}/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Featured = async () => {
  const { posts } = await getData(1); // Fetching posts, default page is 1

  if (!posts || posts.length === 0) return null; // Handle no posts

  // Featured post: the first post
  const featuredPost = posts[6];

  // Only showing the next 4 posts in the grid
  const remainingPosts = posts.slice(0, 4);

  return (
    <div className={styles.container}>
      {/* Featured Post Section */}
      <div className={styles.movablePost}>
        <div className={styles.imageContainer}>
        <Image
  src={featuredPost?.img || "/k.jpg"}
  alt={featuredPost?.title}
  width={700}  // Set appropriate width
  height={400}// Set appropriate height
  className={styles.image}
/>

          <div className={styles.postContent}>
            <div className={styles.postInfo}>
              <span className={styles.postCategory}>
                {featuredPost?.category || "Education"}
              </span>
              <span className={styles.postDate}>
                {new Date(featuredPost?.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            <h2 className={styles.postTitle}>
              {featuredPost?.title || "No title available"}
            </h2>
            <p className={styles.postDesc}>
              {featuredPost?.desc?.substring(0, 100)}...
            </p>
          </div>
        </div>
      </div>

      {/* Remaining Posts as Cards (Grid Layout) */}
      <div className={styles.postcards}>
        {remainingPosts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
