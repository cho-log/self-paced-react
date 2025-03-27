import styles from "./Gnb.module.css";

function Gnb() {
  return (
    <header className={styles.gnb}>
      <h1 className={styles.gnb_title}>점심 뭐 먹지</h1>
      <button type="button" className={styles.gnb__button} aria-label="음식점 추가">
        <img src="./add-button.png" alt="음식점 추가" />
      </button>
    </header>
  );
}

export default Gnb;
