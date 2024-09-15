"use client"; // Add this line at the very top

import React from 'react';
import styles from "./login.module.css";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


const LoginPage = () => {
  const { status} = useSession();
  
  const router = useRouter();
    
  if(status === "loading"){
    return(<div className={styles.loading}>Loading...</div>)
  }
  
  if(status === "authenticated"){
    router.push("/")
  }
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>Sign in With</h1>
        <button className={styles.socialButton} id={styles.google} onClick={() => signIn("google")}>Google</button>
        <button className={styles.socialButton} id={styles.github} onClick={() => signIn("github")}>Github</button>
        <button className={styles.socialButton} id={styles.facebook} onClick={() => signIn("facebook")}>Facebook</button>
              </div>
    </div>
  );
};

export default LoginPage;
