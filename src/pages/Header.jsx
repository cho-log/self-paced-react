import React from "react";
import styles from "../css/Header.module.css";

const Header = () => {
    return (
      <header className={styles.gnb}>
        <h1 className={`text-title ${styles.gnb__title}`}>점심 뭐 먹지</h1>
        <button type="button" className={styles.gnb__button} aria-label="음식점 추가">
          <img className={styles.gnb__button__img} src="../../templates/add-button.png" alt="음식점 추가" />
        </button>
      </header>
    );
};

export default Header;