import React from 'react'
import styles from "./catagorylist.module.css"
import Link from 'next/link'
const CatagoryList = () => {
  return (
    <div className={styles.container}>
     
 <div className={styles.catagories}>
  <Link href="/blog?cat=lifestyle" className={styles.catagory}>LIFESTYLE</Link> 
  <Link href="/blog?cat=business" className={styles.catagory}>BUSINESS</Link> 
  <Link href="/blog?cat=health" className={styles.catagory}>HEALTH</Link> 
  <Link href="/blog?cat=technology" className={styles.catagory}>TECHNOLOGY</Link> 
  <Link href="/blog?cat=sports" className={styles.catagory}>SPORTS</Link> 
  </div>
    </div>
  )
}

export default CatagoryList