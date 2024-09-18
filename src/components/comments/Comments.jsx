"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState, useCallback } from "react";
import { apiUrl } from "@/utils/config";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();
  const { data, mutate, isLoading } = useSWR(
    `${apiUrl}/api/comments?postSlug=${postSlug}`,
    fetcher
  );
  const [desc, setDesc] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = useCallback(async () => {
    if (!desc) {
      setError("Comment cannot be empty");
      return;
    }

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ desc, postSlug }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.message || "Failed to post comment");
        return;
      }

      setDesc(""); // Clear the input field on success
      setError(null); // Clear any existing error
      mutate(); // Re-fetch comments
    } catch (err) {
      setError("An error occurred while submitting the comment");
    }
  }, [desc, postSlug, mutate]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment..."
            className={styles.input}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
          {error && <p className={styles.error}>{error}</p>}
        </div>
      ) : (
        <Link href="/login" className={styles.loginbutton}>Login to write a comment</Link>
      )}

      <div className={styles.comments}>
        {isLoading
          ? "Loading..."
          : data?.map((item) => (
              <div className={styles.comment} key={item._id}>
                <div className={styles.user}>
                  {item?.user?.image && (
                    <Image
                      src={item.user.image}
                      alt={item.user.name}
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{item.user.name}</span>
                    <span className={styles.date}>
                      {new Date(item.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
