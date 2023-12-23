import React from "react";
import styles from "./search.module.scss";
const Search = () => {
  return (
    <search>
      <form>
        <p className={styles.title}>Search</p>
        <input
          className={styles.txtSearch}
          name="search"
          placeholder="Search..."
        />
      </form>
    </search>
  );
};

export default Search;
