"use client"
import React, { useState } from 'react';
import styles from './burger.module.css';
import Link from 'next/link';
import { AuthLinks } from '../authlinks/AuthLinks';

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <AuthLinks />
        </div>
      )}
    </>
  );
};

export default Burger;
