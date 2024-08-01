"use client"
import Link from 'next/link'
import React from 'react'
import styles from "./authlink.module.css"


export const AuthLinks = () => {
  
  const status = "notauthenticated"
  return ( <>
    {status==="notauthenticated" ? (
     <Link href="/login">Login</Link>
    ) : ( <>
      <Link href="/write">Write</Link>
      <span className={styles.links}>Logout</span>
      </>
    )}
    
    </>
  )
}
