import Image from 'next/image';
import React from 'react'
import styles from './SearchBar.module.css'
import ic_search from '../../public/assets/ic-search-blue.svg';
import ic_arrow_down from '../../public/assets/ic-arrow-down-blue.svg';
import verticalLine from '../../public/assets/ic-vertical-line.svg';


type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    onSearch(query);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search..."
        className={styles.input}
        onChange={handleSearch}
      />
      <button className={styles.button}>
      <Image
            src= {ic_search}
            alt="search"
        />
      </button>
      <div className={styles.searchBar_vline}></div>
      <div className={styles.searchBar_menu}>
        <a> All Questionnaires</a>

        <Image
              src= {ic_arrow_down}
              alt="options"
          />
      </div>
    </div>
  );
};
export default SearchBar