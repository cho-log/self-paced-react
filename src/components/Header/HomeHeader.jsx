import styles from './HomeHeader.module.css';

function HomeHeader({ onRestaurantAddButtonClick }) {
  return (
    <header className={styles.gnb}>
      <h1 className={`${styles.gnb__title} text-title`}>점심 뭐 먹지</h1>
      <button
        type="button"
        onClick={onRestaurantAddButtonClick}
        className={styles.gnb__button}
        aria-label="음식점 추가"
      >
        <img src="templates\add-button.png" alt="음식점 추가" />
      </button>
    </header>
  );
}

export default HomeHeader;
