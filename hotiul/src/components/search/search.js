import React from "react";
import styles from "./search.module.scss";
const Search = ({ value, onChange }) => {
  return (
    <search>
      <form>
        <p className={styles.title}>Search</p>
        <input
          value={value}
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
