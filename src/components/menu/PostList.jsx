import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./postlist.module.css";
import { apiUrl } from "@/utils/config";

// Fetch data for posts (limited to 3 posts per page)
const getData = async (page, cat) => {
  const res = await fetch(
    `${apiUrl}/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
};

const PostList = async ({ withImage }) => {
  const { posts } = await getData(1); // Fetch posts for page 1 (or pass the correct page dynamically)
  
  if (!posts || posts.length === 0) return <p>No posts available</p>; // Handle no posts
  
  // Get only the first 3 posts
  const popularPosts = posts.slice(0, 3);

  return (
    <div className={styles.postlist}>
      {/* Map over the 3 posts to render them */}
      {popularPosts.map((post) => (
        <Link href={`/post/${post.slug}`} key={post._id} className={styles.post}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image
                src={post.image || "/default-image.jpeg"}
                alt={post.title || "Post image"}
                fill
                className={styles.image}
              />
            </div>
          )}
          <div className={styles.postContent}>
            <div className={styles.postInfo}>
              <span className={styles.postCategory}>
                {post.category || "Education"}
              </span>
              <span className={styles.postDate}>
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            <h2 className={styles.postTitle}>
              {post.title || "No title available"}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostList;
