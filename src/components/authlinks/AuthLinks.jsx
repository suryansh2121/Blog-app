"use client";

import Link from 'next/link';
import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import styles from "./authlink.module.css";

export const AuthLinks = () => {
  const { data: session, status } = useSession();

  return (
    <div className={styles.authLinks}>
      {status === "authenticated" ? (
        <div className={styles.authenticated}>
          <span className={styles.welcome}>Welcome, {session.user.name}</span>
          <Link href="/write" className={styles.link}>Write</Link>
          <span className={styles.links} onClick={() => signOut()}>Logout</span>
        </div>
      ) : (
        <div className={styles.notAuthenticated}>
          <Link href="/login" className={styles.loginButton}>Login</Link>
        </div>
      )}
    </div>
  );
};
