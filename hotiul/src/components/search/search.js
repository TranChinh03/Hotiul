import React from "react";
import styles from "./search.module.scss";
const Search = ({ onChange }) => {
  return (
    <search>
      <form>
        <p className={styles.title}>Search</p>
        <input
          className={styles.txtSearch}
          name="search"
          placeholder="Search..."
          onChange={onChange}
        />
      </form>
    </search>
  );
};

export default Search;
