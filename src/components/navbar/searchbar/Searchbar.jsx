"use client";
import Link from 'next/link';
import { useState } from 'react';
import styles from "./searchbar.module.css";

const SearchBar = ({ onSearch, results }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value.trim()) {
      onSearch(e.target.value);
    } else {
      onSearch(''); // Clear results if query is empty
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input 
          className={styles.input}
          type="text" 
          placeholder="Search for posts..." 
          value={query} 
          onChange={handleChange} 
        />
        <button className={styles.button} type="submit">Search</button>
      </form>

      {query && results.length === 0 && (
        <div className={styles.noResults}>
          Post not found
        </div>
      )}

      {results.length > 0 && (
        <div className={styles.searchResult}>
          <ul>
            {results.map(post => (
              <li key={post.id}>
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
