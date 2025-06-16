"use client";
import { FiSearch } from "react-icons/fi";

import { useState } from "react";
import styles from "./searchbar.module.css";

const SearchBar = ({ onSearch, results }) => {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value.trim()) {
      onSearch(e.target.value);
    } else {
      onSearch("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setQuery(""); 
      setExpanded(false);
    }
  };

  return (
    <div className={styles.container}>
      <form
        className={`${styles.form} ${expanded ? styles.expanded : ""}`}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className={styles.input}
          placeholder="Search..."
          value={query}
          onChange={handleChange}
          onFocus={() => setExpanded(true)}
        />
        <button
          type="submit"
          className={styles.button}
          onClick={() => setExpanded(!expanded)}
        >
         <FiSearch/>
        </button>
      </form>

      {expanded && results?.length > 0 && (
        <div className={styles.searchResult}>
          <ul>
            {results.map((post) => (
              <li key={post.id}>
                <a href={`/posts/${post.slug}`}>{post.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
