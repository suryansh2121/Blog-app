// pages/404.js
import Link from 'next/link';
import styles from './NotFound.module.css'; // CSS module for styling

export default function Custom404() {
  return (
    <div className={styles.container}>
      <div className={styles.errorContent}>
        <h1 className={styles.errorCode}>Oops!</h1>
        <h2 className={styles.errorMessage}>Page Not Found</h2>
        <p className={styles.errorDescription}>
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/"  className={styles.homeLink}>
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
